"use client";

import Link from "next/link";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { PageHeader, WaitlistFooter, Section } from "@/components/mavr/shared-layout";
import { Reveal } from "@/components/mavr/parts";

type Post = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  createdAt: Date;
  publishedAt: Date | null;
};

export default function BlogSlugClientUI({ post }: { post: Post }) {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader 
        title={post.title} 
        subtitle={new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }).toUpperCase()} 
      />
      
      <Section className="min-h-[50vh]">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-[#cc0000] hover:text-[#ff4444] font-mono tracking-widest text-sm mb-12 inline-block transition-colors">
              ← BACK TO BLOG
            </Link>
            
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-gray-300 border-l-2 border-[#cc0000] pl-6 italic mb-12 font-light leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div 
              className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-light prose-headings:font-display prose-headings:text-white prose-a:text-[#cc0000] prose-a:no-underline hover:prose-a:underline max-w-none prose-img:rounded-lg prose-img:border prose-img:border-[#2a2a2a]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Reveal>
      </Section>

      <WaitlistFooter />
    </>
  );
}
