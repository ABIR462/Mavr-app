"use client";

import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { PageHeader, WaitlistFooter, Section } from "@/components/mavr/shared-layout";
import { Reveal } from "@/components/mavr/parts";

export default function BuildLogPage() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  const logs = [
    {
      date: "AUGUST 2026",
      version: "v1.1.0-alpha",
      title: "UI RECONSTRUCTION & PRISMA REMOVAL",
      desc: "Optimized application bundle for edge deployment. Completely removed heavy database wrappers, transitioning metadata storage to high-efficiency runtime memory architectures. Integrated standard-compliant Tailwind CSS v4 design layers.",
    },
    {
      date: "JUNE 2026",
      version: "v1.0.4-beta",
      title: "COACH CONNECT REAL-TIME TUNING",
      desc: "Reduced websocket connection payload size by 40%. Implemented client-side updates sync, keeping live athletic profiles updated in under 500 milliseconds across mobile and desktop applications.",
    },
    {
      date: "APRIL 2026",
      version: "v1.0.0-alpha",
      title: "THE PROBLEM MAP & LOCALIZED DATABASE",
      desc: "Completed compilation of the first 12,400 Indian food macro profiles. Finalized regional sorting options (Veg/Non-Veg, High-Protein filter tags) for the nutritional analyzer.",
    },
  ];

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader 
        title="PLATFORM BUILD LOG" 
        subtitle="Chronological developer logs documenting our progress building India's Athlete Operating System. Built in the open, step by step."
      />

      <main className="relative bg-[#030303] min-h-[50vh]">
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l border-[#1A1A1A] ml-4 md:ml-32 pl-8 md:pl-12 space-y-16 py-8">
              {logs.map((log, i) => (
                <Reveal key={log.version} delay={i * 100}>
                  <div className="relative">
                    {/* Floating timestamp on desktop */}
                    <div className="hidden md:block absolute right-full mr-12 top-1 text-right min-w-[120px]">
                      <div className="text-[#CC0000] font-mono text-xs tracking-widest font-bold">{log.date}</div>
                      <div className="text-gray-600 font-mono text-[10px] mt-1">{log.version}</div>
                    </div>

                    {/* Timeline bullet */}
                    <div className="absolute right-full mr-[37px] md:mr-[53px] top-1.5 w-3 h-3 rounded-full bg-[#CC0000] border-4 border-black ring-4 ring-[#CC0000]/15" />

                    {/* Mobile version info */}
                    <div className="md:hidden flex items-center gap-3 mb-2 font-mono text-xs">
                      <span className="text-[#CC0000] font-bold">{log.date}</span>
                      <span className="text-gray-600">·</span>
                      <span className="text-gray-600">{log.version}</span>
                    </div>

                    {/* Content card */}
                    <div className="mavr-card p-6 md:p-8">
                      <h3 className="font-display text-xl md:text-2xl text-white mb-4 tracking-wide leading-none">
                        {log.title}
                      </h3>
                      <p className="text-gray-400 text-[15px] leading-relaxed font-light">
                        {log.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <WaitlistFooter />
    </>
  );
}
