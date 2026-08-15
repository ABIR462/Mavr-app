"use client";
import { useEffect } from "react";
import { Ticker, track } from "@/components/mavr/parts";
import { CinematicNavbar, CinematicHero } from "@/components/mavr/hero-cinematic";
import { WaitlistFooter } from "@/components/mavr/shared-layout";

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
        track("scroll_50_home");
      }
      if (pct >= 0.99 && !w.__mavrScroll![100]) {
        w.__mavrScroll![100] = true;
        track("scroll_100_home");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

export default function Index() {
  const scrollToWaitlist = () =>
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <CinematicNavbar onJoin={scrollToWaitlist} />

      {/* HERO — Cinematic */}
      <CinematicHero />

      <Ticker />

      <WaitlistFooter />
      <ScrollDepth />
    </main>
  );
}
