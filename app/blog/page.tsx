import { getPosts } from "@/actions/blog";
import { PageHeader } from "@/components/mavr/shared-layout";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <PageHeader 
        title="Blog" 
        subtitle="Latest updates, insights, and stories from MAVR"
      />
      
      <section className="bg-[#0A0A0A] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#888]">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full flex flex-col p-6 bg-[#111] border border-[#1A1A1A] rounded hover:border-[#CC0000] transition-colors">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-[#CC0000] transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-[#888] text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-auto pt-4 border-t border-[#1A1A1A] text-xs text-[#555]">
                      {post.publishedAt && new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
