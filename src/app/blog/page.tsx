import { getPosts } from "@/actions/blog";
import BlogClientUI from "@/components/blog-client-ui";

export const revalidate = 0; // Ensure fresh in-memory data loads on navigation

export default async function BlogPage() {
  const posts = await getPosts();
  
  // Format posts correctly for serialization if needed, though they are already plain structures
  const formattedPosts = posts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    createdAt: post.createdAt,
    publishedAt: post.publishedAt
  }));

  return <BlogClientUI posts={formattedPosts} />;
}
