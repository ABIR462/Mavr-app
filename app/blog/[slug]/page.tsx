import { getPostBySlug } from "@/actions/blog";
import { notFound } from "next/navigation";
import BlogSlugClientUI from "@/components/blog-slug-client-ui";

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20 min-h-screen flex flex-col">
      <BlogSlugClientUI post={post} />
    </main>
  );
}
