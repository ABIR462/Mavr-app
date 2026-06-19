"use client";

import { CinematicHero, CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { Sections } from "@/components/mavr/sections";
import { WaitlistFooter } from "@/components/mavr/shared-layout";
import { useRef } from "react";

export default function HomePage() {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const handleJoinClick = () => {
    const elem = document.getElementById("waitlist-final");
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full">
      <CinematicNavbar onJoin={handleJoinClick} />
      <CinematicHero />
      <Sections />
      <WaitlistFooter />
    </main>
  );
}
