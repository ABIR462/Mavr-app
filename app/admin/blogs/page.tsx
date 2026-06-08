import { getPosts } from "@/actions/blog";
import Link from "next/link";
import { Plus } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminBlogsPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display mb-1">Blogs</h1>
          <p className="text-gray-400">Manage your blog content</p>
        </div>
        <Link href="/admin/blogs/new" className="btn-red gap-2">
          <Plus size={18} /> New Blog
        </Link>
      </div>

      <div className="bg-[#111] border border-[#2a2a2a] rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1a1a1a] text-gray-400 text-sm">
            <tr>
              <th className="py-3 px-4 font-medium">Title</th>
              <th className="py-3 px-4 font-medium">Status</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2a2a]">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-500">
                  No blogs found. Create your first one!
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-3 px-4 font-medium">{post.title}</td>
                  <td className="py-3 px-4">
                    {post.published ? (
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs">Published</span>
                    ) : (
                      <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded text-xs">Draft</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Link href={`/admin/blogs/${post.id}`} className="text-[#cc0000] hover:text-[#ff4444] text-sm">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
