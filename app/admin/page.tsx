"use client";

import { logout } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated by looking for the token
    const checkAuth = async () => {
      try {
        // This is a simple check - in production use proper auth middleware
        const token = document.cookie.includes("mavr_token");
        if (!token) {
          router.push("/login");
        }
      } catch (err) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

  async function handleLogout() {
    await logout();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <nav className="bg-[#050505] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">MAVR Admin</h1>
          <button
            onClick={handleLogout}
            className="btn-red text-sm px-4 py-2"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-[#111] border border-[#1A1A1A] rounded">
            <h3 className="text-[#CC0000] font-semibold text-sm uppercase mb-2">
              Total Posts
            </h3>
            <p className="text-4xl font-bold text-white">0</p>
          </div>

          <div className="p-6 bg-[#111] border border-[#1A1A1A] rounded">
            <h3 className="text-[#CC0000] font-semibold text-sm uppercase mb-2">
              Published
            </h3>
            <p className="text-4xl font-bold text-white">0</p>
          </div>

          <div className="p-6 bg-[#111] border border-[#1A1A1A] rounded">
            <h3 className="text-[#CC0000] font-semibold text-sm uppercase mb-2">
              Drafts
            </h3>
            <p className="text-4xl font-bold text-white">0</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/admin/blogs"
              className="p-6 bg-[#111] border border-[#1A1A1A] rounded hover:border-[#CC0000] transition-colors block"
            >
              <h3 className="text-white font-semibold mb-2">Manage Blog Posts</h3>
              <p className="text-[#888] text-sm">Create, edit, and publish blog posts</p>
            </a>
            <a
              href="/admin/settings"
              className="p-6 bg-[#111] border border-[#1A1A1A] rounded hover:border-[#CC0000] transition-colors block"
            >
              <h3 className="text-white font-semibold mb-2">Settings</h3>
              <p className="text-[#888] text-sm">Configure app settings and preferences</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
