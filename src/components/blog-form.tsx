"use client";

import { useState } from "react";
import { createPost } from "@/actions/blog";
import { useRouter } from "next/navigation";
import Editor from "./editor";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createPost({ title, excerpt, content });
      router.push("/admin/blogs");
    } catch (err) {
      alert("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-4xl">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mavr-input text-lg font-bold"
          required
          placeholder="Enter blog title..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="mavr-input h-24 resize-none"
          placeholder="Short description for the blog card..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400">Content</label>
        <Editor content={content} onChange={setContent} />
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="btn-ghost"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-red"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </div>
    </form>
  );
}
