import { MetadataRoute } from 'next'
import { getPosts } from "@/actions/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const publishedPosts = posts.filter(p => p.published);

  const blogUrls = publishedPosts.map((post) => ({
    url: \`https://www.mavr.in/blog/\${post.slug}\`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.mavr.in',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.mavr.in/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}
