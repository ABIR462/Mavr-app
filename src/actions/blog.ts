"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Temporary helper to get/create an admin user until Auth is fully integrated
async function getAdminUser() {
  let user = await db.users.findFirst({
    where: { role: "ADMIN" }
  });
  if (!user) {
    user = await db.users.create({
      data: {
        email: "admin@mavr.in",
        password: "hashed_password", // Placeholder
        name: "MAVR Admin",
        role: "ADMIN"
      }
    });
  }
  return user;
}

export async function createPost(data: { title: string; content: string; excerpt?: string }) {
  const admin = await getAdminUser();
  
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const post = await db.posts.create({
    data: {
      title: data.title,
      slug: slug + "-" + Date.now().toString().slice(-4), // Ensure uniqueness
      content: data.content,
      excerpt: data.excerpt,
      authorId: admin.id,
      published: true, // For now auto-publish
      publishedAt: new Date(),
    },
  });

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/sitemap.xml");
  return post;
}

export async function getPosts() {
  return await db.posts.findMany({
    orderBy: { createdAt: "desc" }
  });
}

export async function getPostBySlug(slug: string) {
  return await db.posts.findUnique({
    where: { slug }
  });
}
