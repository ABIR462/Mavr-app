import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import Link from "next/link";
import { logout } from "@/actions/auth";

export const revalidate = 0;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("mavr_token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = await verifyToken(token);
  if (!payload || payload.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col md:flex-row font-body-barlow">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#080808] border-b md:border-b-0 md:border-r border-[#141414] flex flex-col justify-between shrink-0">
        <div>
          {/* Header */}
          <div className="h-16 border-b border-[#141414] px-6 flex items-center justify-between">
            <Link href="/" className="font-display text-xl tracking-wider text-white hover:text-[#CC0000] transition-colors">
              MAVR SYSTEM
            </Link>
            <span className="text-[9px] font-mono bg-[#CC0000]/15 text-[#CC0000] border border-[#CC0000]/30 px-2 py-0.5 rounded font-bold">
              ADMIN
            </span>
          </div>

          {/* Links */}
          <nav className="p-4 space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded hover:bg-[#111] hover:text-[#CC0000] transition-all"
            >
              <span>⚙</span> Dashboard Home
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded hover:bg-[#111] hover:text-[#CC0000] transition-all"
            >
              <span>📝</span> Manage Blogs
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded hover:bg-[#111] hover:text-[#CC0000] transition-all"
            >
              <span>🌐</span> Public Site
            </Link>
          </nav>
        </div>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-[#141414]">
          <form action={logout}>
            <button
              type="submit"
              className="w-full btn-red text-center py-2.5 text-xs font-bold font-mono tracking-wider cursor-pointer"
            >
              SYSTEM SHUTDOWN (LOGOUT)
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#030303] overflow-y-auto">
        <div className="h-16 border-b border-[#141414] px-8 flex items-center justify-between bg-[#080808]">
          <div className="font-mono text-xs text-[#555]">
            SESSION ACTIVE · ENCRYPTED SSL GATEWAY
          </div>
          <div className="font-mono text-xs text-white">
            ADMIN@MAVR.IN
          </div>
        </div>
        <div className="p-8 max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
