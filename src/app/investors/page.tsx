"use client";

import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { PageHeader, WaitlistFooter, Section } from "@/components/mavr/shared-layout";
import { Reveal, track } from "@/components/mavr/parts";
import { FORMSPREE_FORM_ID } from "@/lib/formspree";

export default function InvestorsPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (state.succeeded) {
      track("investor_deck_request");
    }
  }, [state.succeeded]);

  return (
    <>
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader 
        title="INVESTOR RELATIONS" 
        subtitle="MAVR is building the unified infrastructure layer for the Indian athletic ecosystem. Request access to our investor dashboard and deck below."
      />

      <main className="relative bg-[#030303]">
        <Section alt>
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <Reveal>
              <div className="space-y-6">
                <div className="overline">FUNDING THE OS</div>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-none">
                  Backing India's Athletes.
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  India represents the fastest-growing fitness market globally, with over 5 crore active gym-goers and an emerging class of professional athletes. Yet, the software and apparel infrastructure serving them is completely non-existent. MAVR captures this market by integrating hardware and software into a single unified platform.
                </p>
                <div className="border-t border-[#1A1A1A] pt-6 mt-6">
                  <div className="font-mono text-xs text-[#555] uppercase tracking-wider mb-2">PARTNERS & BACKERS</div>
                  <div className="flex gap-6 text-gray-500 font-serif-i text-xl">
                    <span>Alpha Partners</span>
                    <span>·</span>
                    <span>Founding Club</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mavr-card p-8 md:p-10 border-t-2 border-t-[#CC0000]">
                <h3 className="font-display text-2xl text-white mb-2">Request Investor Deck</h3>
                <p className="text-[#888] text-xs font-mono mb-6">SECURE ACCESS · SYSTEM GATEWAY</p>

                {state.succeeded ? (
                  <div className="py-8 text-center bg-[#111]/40 border border-white/5 rounded-lg p-6 animate-in fade-in">
                    <div className="text-[#CC0000] text-3xl mb-3">✓</div>
                    <h4 className="font-bold text-white text-base">Request Submitted Successfully</h4>
                    <p className="text-gray-400 text-sm mt-2">
                      Our relations representative will verify your organization and email the deck within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="form_type" value="investor_deck" />
                    <input type="hidden" name="subject" value="New investor deck request" />

                    <div>
                      <input
                        id="inv-name"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="mavr-input"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-xs text-[#FF6666] mt-1"
                      />
                    </div>

                    <div>
                      <input
                        id="inv-org"
                        name="organisation"
                        required
                        placeholder="Organisation / Fund"
                        className="mavr-input"
                      />
                      <ValidationError
                        prefix="Organisation"
                        field="organisation"
                        errors={state.errors}
                        className="text-xs text-[#FF6666] mt-1"
                      />
                    </div>

                    <div>
                      <input
                        id="inv-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="Work Email"
                        className="mavr-input"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-xs text-[#FF6666] mt-1"
                      />
                    </div>

                    <div>
                      <input
                        id="inv-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="Contact WhatsApp (optional)"
                        className="mavr-input"
                      />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                        className="text-xs text-[#FF6666] mt-1"
                      />
                    </div>

                    <button type="submit" disabled={state.submitting} className="btn-red w-full mt-2">
                      {state.submitting ? "VERIFYING..." : "SUBMIT DECK REQUEST"}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Section>
      </main>

      <WaitlistFooter />
    </>
  );
}
