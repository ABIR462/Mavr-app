import { getPosts } from "@/actions/blog";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const posts = await getPosts();
  
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-display mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to the MAVR Admin Panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 flex flex-col gap-2">
          <h3 className="text-gray-400 font-medium">Total Blogs</h3>
          <p className="text-4xl font-display text-[#cc0000]">{posts.length}</p>
        </div>
        <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 flex flex-col gap-2">
          <h3 className="text-gray-400 font-medium">Total Users</h3>
          <p className="text-4xl font-display text-[#cc0000]">0</p>
        </div>
      </div>
    </div>
  );
}
