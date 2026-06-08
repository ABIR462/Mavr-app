import BlogForm from "@/components/blog-form";

export default function NewBlogPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-display mb-1">Create New Blog</h1>
        <p className="text-gray-400">Write and publish a new post</p>
      </div>

      <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6">
        <BlogForm />
      </div>
    </div>
  );
}
