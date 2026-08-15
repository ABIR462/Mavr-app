"use client";

import { CinematicNavbar, CinematicHero } from "@/components/mavr/hero-cinematic";
import { IdentitySection } from "@/components/mavr/identity";
import { 
  ProblemSection, 
  FoodSearchSection, 
  CalculatorSection, 
  LeaderboardSection, 
  TrainerSection, 
  BetaSection, 
  FAQSection 
} from "@/components/mavr/sections";
import { WaitlistFooter } from "@/components/mavr/shared-layout";

export default function HomePage() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <main className="relative min-h-screen bg-[#030303]">
        {/* Cinematic Hero */}
        <CinematicHero />
        
        {/* The Problem Grid */}
        <ProblemSection />
        
        {/* Interactive Food Search */}
        <FoodSearchSection />
        
        {/* Achievements Engine Calculator */}
        <CalculatorSection />
        
        {/* MAVR ID Card Identity Section */}
        <IdentitySection />
        
        {/* Referral Leaderboard */}
        <LeaderboardSection />
        
        {/* Trainer Onboarding Section */}
        <TrainerSection />
        
        {/* Closed Beta Application */}
        <BetaSection />
        
        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>
      
      {/* Footer & Final Waitlist Call to Action */}
      <WaitlistFooter />
    </>
  );
}
