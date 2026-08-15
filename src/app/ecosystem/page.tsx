"use client";

import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { EcosystemSection } from "@/components/mavr/ecosystem";
import { WaitlistFooter } from "@/components/mavr/shared-layout";

export default function EcosystemPage() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <main className="relative min-h-screen bg-[#030303] pt-20">
        <EcosystemSection />
      </main>
      <WaitlistFooter />
    </>
  );
}
