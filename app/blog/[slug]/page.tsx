import { getPostBySlug } from "@/actions/blog";
import { PageHeader } from "@/components/mavr/shared-layout";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHeader title={post.title} />
      
      <article className="bg-[#0A0A0A] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-[#1A1A1A]">
            <div>
              <p className="text-[#888] text-sm">
                By {post.author?.name || "MAVR"}
              </p>
              {post.publishedAt && (
                <p className="text-[#888] text-sm mt-1">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-4 text-[#ccc] leading-relaxed"
            />
          </div>

          <div className="mt-12 pt-8 border-t border-[#1A1A1A]">
            <Link
              href="/blog"
              className="text-[#CC0000] hover:text-[#FF6666] transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
