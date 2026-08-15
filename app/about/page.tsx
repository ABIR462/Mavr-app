"use client";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { WaitlistFooter, Section, Overline, H2, PageHeader } from "@/components/mavr/shared-layout";
import { ProblemSection } from "@/components/mavr/sections";
import { Reveal } from "@/components/mavr/parts";
import { useEffect } from "react";
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
        track("scroll_50_about");
      }
      if (pct >= 0.99 && !w.__mavrScroll![100]) {
        w.__mavrScroll![100] = true;
        track("scroll_100_about");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

export default function About() {
  const scrollToWaitlist = () =>
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20">
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader title="About" subtitle="The origin, the platform, and the vision of India's first athlete operating system." />

      {/* THE PROBLEM */}
      <ProblemSection />

      {/* THE PLATFORM */}
      <section
        id="platform"
        className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-[#050505]"
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_182501_0216c2be-1b2f-40d3-8716-0d4f42e73b44.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.85)_75%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <Reveal>
            <Overline>THE PLATFORM</Overline>
          </Reveal>
          <Reveal delay={100}>
            <H2>Everything an Indian Athlete Actually Needs.</H2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              [
                "DASHBOARD",
                "Live date, time, trainer tag, current streak, today's workout card, macro summary. Your entire athletic life visible in one glance.",
              ],
              [
                "WORKOUT TRACKING",
                "Log every set, every rep, every weight. Personal records detected automatically. Achievement unlocked the moment you break your own record.",
              ],
              [
                "INDIAN DIET TRACKING",
                "Dal makhani. Paneer bhurji. Poha. Buttermilk. A food database built for India — not a Western database with Indian items reluctantly added as an afterthought.",
              ],
              [
                "ACHIEVEMENTS & BADGES",
                "30+ achievements across Bronze, Silver, Gold, Platinum, and Diamond tiers. Every milestone triggers a fullscreen celebration. Because discipline deserves to feel like a win.",
              ],
              [
                "SUPERPOWERS",
                "Elite subscribers unlock Superpowers — XP Booster, Stealth Mode, Nutrition Oracle, Recovery Advisor, Iron Memory. Real competitive advantages, not cosmetic bonuses.",
              ],
              [
                "SMART WATCH SYNC",
                "Connect Apple Watch, WearOS, or Fitbit. Heart rate, calories, active minutes, and workout detection flow directly into your MAVR session in real time.",
              ],
              [
                "MAVR ID SOCIAL LAYER",
                "Every athlete gets a unique identity: MAVR_IronWolf2847. Send partner requests, chat, co-plan sessions, share workout activity. Instagram mechanics built for the gym.",
              ],
              [
                "REAL-TIME TRAINER EDIT",
                "A trainer edits your workout plan. You see it update live — no refresh, no reload, no delay. WebSocket sync in under 500ms. The future of coach-athlete communication.",
              ],
              [
                "PRIVACY AND SAFETY",
                "Granular privacy controls. Block and unblock any user. AES-256 encrypted chat. You decide who sees your workouts, your stats, your check-ins. Your data, your rules.",
              ],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={(i % 3) * 100}>
                <div className="mavr-card p-6 h-full hover:border-[#CC0000]/50 hover:-translate-y-1 transition-all duration-300 group bg-[#0A0A0A]/70 backdrop-blur-md">
                  <div className="font-mono text-xs text-[#CC0000] mb-3">0{i + 1}</div>
                  <h3 className="font-display text-2xl mb-3 group-hover:text-[#CC0000] transition-colors">
                    {t}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS MAVR */}
      <Section alt>
        <Reveal>
          <Overline>WHO IS MAVR</Overline>
        </Reveal>
        <Reveal delay={100}>
          <H2>Built by Athletes. For Athletes.</H2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
          <Reveal>
            <div className="relative w-full max-w-sm aspect-[3/4] mx-auto">
              {[
                "top-0 left-0 border-l-4 border-t-4",
                "top-0 right-0 border-r-4 border-t-4",
                "bottom-0 left-0 border-l-4 border-b-4",
                "bottom-0 right-0 border-r-4 border-b-4",
              ].map((p) => (
                <div key={p} className={`absolute ${p} w-8 h-8 border-[#CC0000]`} />
              ))}
              <div className="absolute inset-3 bg-[#111] grid place-items-center">
                <img src={logo} alt="MAVR" className="h-20 w-auto opacity-60" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <blockquote className="italic text-lg md:text-xl text-white leading-relaxed">
              "India has 1.4 billion people. A generation of athletes training in gyms, on fields,
              in academies — all underserved by technology built for someone else. Not our food. Not
              our sports. Not our trainers. Not our gyms.
              <br />
              <br />
              MAVR is being built to fix that. One system. Every athlete. Built in India."
            </blockquote>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {[
            ["24 Sections", "Complete developer build guide"],
            ["30+ Tables", "Full database schema documented"],
            ["₹2,394", "Pro value included with every apparel purchase"],
          ].map(([n, d], i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="mavr-card mavr-card-top px-4 py-4 flex items-center justify-between min-h-[80px]">
                <div className="font-display text-2xl">{n}</div>
                <div className="text-[#888] text-xs text-right max-w-[60%]">{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WaitlistFooter />
      <ScrollDepth />
    </main>
  );
}
