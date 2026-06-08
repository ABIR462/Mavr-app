"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // Find user
  let user = await prisma.user.findUnique({ where: { email } });

  // Developer hack: If no users exist in the DB, create an admin account on first login
  if (!user && email === "admin@mavr.in") {
    const existingUsersCount = await prisma.user.count();
    if (existingUsersCount === 0) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name: "MAVR Admin",
          role: "ADMIN",
        },
      });
    }
  }

  if (!user) {
    return { error: "Invalid credentials" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { error: "Invalid credentials" };
  }

  if (user.role !== "ADMIN") {
    return { error: "Access denied. Admins only." };
  }

  // Generate JWT
  const token = await signToken({ userId: user.id, role: user.role });

  // Set cookie
  const cookieStore = await cookies();
  cookieStore.set("mavr_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("mavr_token");
  redirect("/login");
}
