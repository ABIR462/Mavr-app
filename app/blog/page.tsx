import { getPosts } from "@/actions/blog";
import BlogClientUI from "@/components/blog-client-ui";

export default async function BlogIndexPage() {
  const posts = await getPosts();
  const publishedPosts = posts.filter(p => p.published);

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20 min-h-screen flex flex-col">
      <BlogClientUI posts={publishedPosts} />
    </main>
  );
}
