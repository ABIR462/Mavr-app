"use client";

import Link from "next/link";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { PageHeader, WaitlistFooter, Section } from "@/components/mavr/shared-layout";
import LiveBlogFeed from "@/components/live-blog-feed";
import { Reveal } from "@/components/mavr/parts";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  createdAt: Date;
  publishedAt: Date | null;
};

export default function BlogClientUI({ posts }: { posts: Post[] }) {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader title="MAVR BLOG" subtitle="Insights, guides, and stories from the MAVR community. Training, nutrition, and everything in between." />
      
      <Section className="min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="mavr-card p-8 h-full flex flex-col hover:border-[#cc0000]/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-[#0A0A0A]/70 backdrop-blur-md">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#cc0000] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity"></div>
                  <div className="text-sm text-[#cc0000] font-mono mb-4 tracking-widest">
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase()}
                  </div>
                  <h2 className="text-3xl font-display mb-4 group-hover:text-[#cc0000] transition-colors leading-[1.1]">{post.title}</h2>
                  <p className="text-gray-400 line-clamp-3 mb-8 flex-1 text-lg font-light">{post.excerpt || "Read full article to learn more."}</p>
                  <div className="flex items-center gap-2 text-sm text-white font-mono tracking-widest mt-auto">
                    READ ARTICLE <span className="text-[#cc0000] group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500 font-mono tracking-widest">
              NO ARTICLES PUBLISHED YET.
            </div>
          )}
        </div>
        <LiveBlogFeed />
      </Section>

      <WaitlistFooter />
    </>
  );
}
