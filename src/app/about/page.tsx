"use client";

import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { PageHeader, WaitlistFooter, Section } from "@/components/mavr/shared-layout";
import { Reveal } from "@/components/mavr/parts";

export default function AboutPage() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  const specs = [
    {
      title: "POLYNIC CLIMATE MESH",
      desc: "Engineered specifically for Indian humidity and gym temperatures. Accelerated moisture-wicking technology that cools the body down while training.",
    },
    {
      title: "GRADUATED ARCHITECTURE",
      desc: "Optimized pressure mapping across major muscle groups—shoulders, chest, quads, and hamstrings—reducing muscle oscillation and soreness.",
    },
    {
      title: "6-MONTH PRO CODE",
      desc: "Every MAVR compression garment comes with a unique code woven inside. Scan the tag to instantly unlock 6 months of MAVR Pro, worth ₹2,394.",
    },
  ];

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader
        title="COMPRESSION GEAR"
        subtitle="Professional grade performance apparel. Custom engineered for the Indian climate and athletic proportions."
      />

      <main className="relative bg-[#030303]">
        <Section alt>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="overline">PHYSICAL METRICS</div>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-none">
                  Apparel is Infrastructure.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  We don't view apparel as fashion. For the serious athlete, compression gear is a recovery and circulatory tool. MAVR compression gear fits tighter where blood pools, assisting the veins in returning blood to the heart and clearing lactic acid rapidly.
                </p>
                <div className="pt-4">
                  <a
                    href="#waitlist-final"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToWaitlist();
                    }}
                    className="btn-red inline-block"
                  >
                    PRE-ORDER FIRST BATCH
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative border border-[#1A1A1A] rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#111] to-[#050505]">
                <div className="aspect-[4/3] relative rounded-xl bg-black/60 flex items-center justify-center overflow-hidden">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#CC0000]/10 to-transparent pointer-events-none" />
                  
                  {/* Aesthetic placeholder displaying gear info */}
                  <div className="text-center z-10 p-8">
                    <div className="w-16 h-16 mx-auto rounded-full border-2 border-dashed border-[#CC0000]/40 flex items-center justify-center font-display text-[#CC0000] text-xl mb-4 animate-pulse">
                      MAVR
                    </div>
                    <div className="font-mono text-xs text-[#888] tracking-widest uppercase mb-1">SERIES 1.0</div>
                    <div className="font-display text-2xl text-white tracking-wide uppercase mb-2">ARMOUR COMPRESSION</div>
                    <div className="font-mono text-xs text-[#CC0000]">LAUNCHING LATE 2025</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Technical specs grid */}
        <Section>
          <Reveal>
            <div className="overline mb-2">THE DETAILS</div>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-12">Engineered Specs</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {specs.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="mavr-card p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-mono text-[#CC0000] mb-4 tracking-widest font-bold">
                      {s.title}
                    </div>
                    <p className="text-gray-400 font-light text-base leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-[#1a1a1a] mt-8 group-hover:bg-[#CC0000] transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>

      <WaitlistFooter />
    </>
  );
}
