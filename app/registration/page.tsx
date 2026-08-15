"use client";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { WaitlistFooter, PageHeader } from "@/components/mavr/shared-layout";
import { TrainerSection, BetaSection } from "@/components/mavr/sections";
import { useEffect } from "react";
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
        track("scroll_50_registration");
      }
      if (pct >= 0.99 && !w.__mavrScroll![100]) {
        w.__mavrScroll![100] = true;
        track("scroll_100_registration");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

export default function Registration() {
  const scrollToWaitlist = () =>
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20">
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader title="Registration" subtitle="Coach Connect & Closed Beta Application." />
      {/* TRAINER SIGNUP */}
      <TrainerSection />

      {/* CLOSED BETA */}
      <BetaSection />

      <WaitlistFooter />
      <ScrollDepth />
    </main>
  );
}
