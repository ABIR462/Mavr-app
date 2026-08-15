import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = 'https://www.mavr.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogUrls: MetadataRoute.Sitemap = [];

  if (process.env.DATABASE_URL) {
    try {
      const { getPosts } = await import("@/actions/blog");
      const posts = await getPosts();
      const publishedPosts = posts.filter(p => p.published);

      blogUrls.push(
        ...publishedPosts.map((post) => ({
          url: `${siteUrl}/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }))
      );
    } catch (error) {
      console.error('Failed to load blog posts for sitemap:', error);
    }
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}
