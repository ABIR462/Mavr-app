"use client";

import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { TrainerSection } from "@/components/mavr/sections";
import { PageHeader, WaitlistFooter } from "@/components/mavr/shared-layout";

export default function RegistrationPage() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader 
        title="COACH CONNECT" 
        subtitle="Manage your roster, edit plans in real-time, and log metrics. Register interest as a trainer to claim your 3-month free period."
      />
      <main className="relative bg-[#030303]">
        <TrainerSection />
      </main>
      <WaitlistFooter />
    </>
  );
}
