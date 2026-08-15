"use client";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { WaitlistFooter, Section, Overline, H2, PageHeader } from "@/components/mavr/shared-layout";
import { Reveal, InvestorModal } from "@/components/mavr/parts";
import { useState, useEffect } from "react";
import logo from "@/assets/mavr-logo.png";
import { track } from "@/components/mavr/parts";


function ScrollDepth() {
  useEffect(() => {
    const w = window as Window & { __mavrScroll?: { 50: boolean; 100: boolean } };
    if (w.__mavrScroll) return;
    w.__mavrScroll = { 50: false, 100: false };

    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop + window.innerHeight) / h.scrollHeight;
      if (pct >= 0.5 && !w.__mavrScroll![50]) {
        w.__mavrScroll![50] = true;
        track("scroll_50_investors");
      }
      if (pct >= 0.99 && !w.__mavrScroll![100]) {
        w.__mavrScroll![100] = true;
        track("scroll_100_investors");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

export default function Investors() {
  const [investorOpen, setInvestorOpen] = useState(false);
  const scrollToWaitlist = () =>
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20">
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader title="Investors" subtitle="India's fitness market is massively underbuilt. See the opportunity." />

      {/* SECTION 8 — MARKET */}
      <Section id="investors" className="overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 0% 50%, rgba(204,0,0,0.08), transparent 60%)",
          }}
        />
        <div className="relative">
          <Reveal>
            <Overline>THE OPPORTUNITY</Overline>
          </Reveal>
          <Reveal delay={100}>
            <H2>India's Fitness Market is Massively Underbuilt.</H2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              ["₹34,000 Cr+", "Indian fitness industry market size by 2026"],
              ["5 Cr+", "Active gym-goers in India with no structured digital tracking"],
              ["₹199 / month", "MAVR Pro starting price — less than one protein bar"],
            ].map(([n, l], i) => (
              <Reveal key={n} delay={i * 120}>
                <div>
                  <div className="font-display text-5xl md:text-7xl text-white leading-none">
                    {n}
                  </div>
                  <div className="text-[#888] text-sm mt-3 max-w-xs">{l}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]" />
            {[
              {
                h: "WHAT EXISTS TODAY",
                items: [
                  "Generic Western apps where dal makhani isn't in the database",
                  "Trainers managing 40 students via WhatsApp voice notes",
                  "Gym members restarting from zero every time their trainer leaves",
                  "No achievement system, no community, no identity",
                ],
              },
              {
                h: "WHAT MAVR BUILDS",
                items: [
                  "Indian food database from day one — not an afterthought",
                  "Real-time trainer-student plan sync via WebSocket",
                  "Achievement system that makes discipline feel like a reward",
                  "MAVR ID — a permanent athlete identity that grows with you",
                ],
              },
            ].map((col, i) => (
              <Reveal key={col.h} delay={i * 150}>
                <div className="md:px-6">
                  <h3
                    className="font-display text-2xl mb-5"
                    style={{ color: i === 0 ? "#888" : "#CC0000" }}
                  >
                    {col.h}
                  </h3>
                  <ul className="space-y-3 text-[#cccccc] text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-[#CC0000]">→</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-3 mt-12">
              <button onClick={() => setInvestorOpen(true)} className="btn-red">
                REQUEST INVESTOR DECK
              </button>
              <a href="/ecosystem" className="btn-ghost">
                VIEW FULL ECOSYSTEM DOCS →
              </a>
            </div>
          </Reveal>
        </div>
      </Section>



      <InvestorModal open={investorOpen} onClose={() => setInvestorOpen(false)} />
      <WaitlistFooter />
      <ScrollDepth />
    </main>
  );
}
