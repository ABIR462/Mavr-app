import Link from "next/link";
import { LayoutDashboard, FileText, Settings, Users } from "lucide-react";
import { logout } from "@/actions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#1a1a1a] bg-[#111] p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-[#cc0000] rounded-full flex items-center justify-center font-bold">M</div>
          <span className="font-display tracking-wider text-xl">MAVR ADMIN</span>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#222] transition-colors text-gray-300 hover:text-white">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#222] transition-colors text-gray-300 hover:text-white">
            <FileText size={18} /> Blogs
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#222] transition-colors text-gray-300 hover:text-white">
            <Users size={18} /> Users
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#222] transition-colors text-gray-300 hover:text-white">
            <Settings size={18} /> Settings
          </Link>
        </nav>
        
        <form action={logout}>
          <button type="submit" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#222] hover:text-[#cc0000] transition-colors text-gray-400 w-full text-left mt-auto">
            Log Out
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#0a0a0a] p-8">
        {children}
      </main>
    </div>
  );
}
