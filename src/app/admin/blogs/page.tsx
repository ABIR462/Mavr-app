import BlogForm from "@/components/blog-form";

export const revalidate = 0;

export default function AdminBlogsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <div className="overline mb-1">CONTENT ENGINE</div>
        <h1 className="font-display text-4xl text-white">WRITE ARTICLE</h1>
        <p className="text-gray-400 text-sm mt-2 font-light">
          Publish rich-text articles directly to the public MAVR blog. Supports heading levels, inline styles, lists, and images.
        </p>
      </div>

      {/* Blog Creation Form */}
      <div className="mavr-card p-8">
        <BlogForm />
      </div>
    </div>
  );
}
