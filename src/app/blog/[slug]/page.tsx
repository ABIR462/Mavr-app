import { getPostBySlug } from "@/actions/blog";
import BlogSlugClientUI from "@/components/blog-slug-client-ui";
import { notFound } from "next/navigation";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedPost = {
    id: post.id,
    slug: post.slug,
    title: post.title,
    content: post.content,
    excerpt: post.excerpt,
    createdAt: post.createdAt,
    publishedAt: post.publishedAt
  };

  return <BlogSlugClientUI post={formattedPost} />;
}
