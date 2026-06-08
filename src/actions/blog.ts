"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Temporary helper to get/create an admin user until Auth is fully integrated
async function getAdminUser() {
  let user = await prisma.user.findFirst({
    where: { role: "ADMIN" }
  });
  if (!user) {
    user = await prisma.user.create({
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

  const post = await prisma.post.create({
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
  return await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true }
  });
}

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: { slug },
    include: { author: true }
  });
}
