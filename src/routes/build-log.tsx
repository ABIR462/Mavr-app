import { createFileRoute } from "@tanstack/react-router";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { WaitlistFooter, Section, Overline, H2, PageHeader } from "@/components/mavr/shared-layout";
import { Reveal } from "@/components/mavr/parts";
import connectMock from "@/assets/Connect.png";
import { IdentitySection } from "@/components/mavr/identity";
import {
  FoodSearchSection,
  CalculatorSection,
  LeaderboardSection,
} from "@/components/mavr/sections";
import { useEffect } from "react";
import { track } from "@/components/mavr/parts";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/build-log")({
  component: BuildLog,
});

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
        track("scroll_50_buildlog");
      }
      if (pct >= 0.99 && !w.__mavrScroll![100]) {
        w.__mavrScroll![100] = true;
        track("scroll_100_buildlog");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

function BuildLog() {
  const scrollToWaitlist = () =>
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20">
      <CinematicNavbar onJoin={scrollToWaitlist} />
      <PageHeader title="Build Log" subtitle="We build in the open. You watch it happen. The raw changelog of MAVR." />

      {/* SECTION 4 — YOUR IDENTITY */}
      <IdentitySection />

      {/* FOOD DATABASE — interactive */}
      <FoodSearchSection />

      {/* CALCULATOR — interactive */}
      <CalculatorSection />

      {/* SECTION 5 — ACHIEVEMENTS */}
      <Section alt>
        <Reveal>
          <Overline>THE ACHIEVEMENT ENGINE</Overline>
        </Reveal>
        <Reveal delay={100}>
          <H2>Discipline Should Feel Like Unlocking a Superpower.</H2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[#888] max-w-2xl text-base md:text-lg mb-12">
            Every milestone you hit inside MAVR triggers a fullscreen celebration — Lottie
            animation, badge reveal, XP counter, haptic feedback. Bronze to Diamond. Rookie to
            Legend. The app makes your consistency feel cinematic.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: "BRONZE", color: "#CD7F32", xp: "50–200 XP per achievement" },
            { name: "SILVER", color: "#C0C0C0", xp: "200–600 XP" },
            { name: "GOLD", color: "#FFD700", xp: "500–2,000 XP" },
            { name: "PLATINUM", color: "#E5E4E2", xp: "1,500–5,000 XP" },
            { name: "DIAMOND", color: "#B9F2FF", xp: "5,000+ XP — Mythic", pulse: true },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div
                className="mavr-card p-5 md:p-6 relative overflow-hidden"
                style={{
                  borderTop: `3px solid ${t.color}`,
                  backgroundImage: `radial-gradient(800px circle at 30% 0%, ${t.color}22, transparent 45%)`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-12 h-12 rounded-full grid place-items-center font-display text-2xl ${
                      t.pulse ? "tier-pulse" : ""
                    }`}
                    style={
                      {
                        background: "#0A0A0A",
                        border: `2px solid ${t.color}`,
                        color: t.color,
                        "--tier": `${t.color}aa`,
                      } as CSSProperties
                    }
                  >
                    ★
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-white/50">
                    0{i + 1}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="font-display text-2xl" style={{ color: t.color }}>
                    {t.name}
                  </div>
                  <div className="mt-1 text-sm text-[#A0A0A0] leading-relaxed">{t.xp}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-14 max-w-5xl">
            <div className="font-mono text-[11px] md:text-xs text-[#888] mb-4 tracking-wider">
              YOUR JOURNEY
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Rookie", "Trainee", "Athlete", "Competitor", "Elite", "Champion", "Legend"].map(
                (l) => (
                  <span
                    key={l}
                    className="px-3 py-1.5 rounded-full border border-[#1A1A1A] bg-[#0A0A0A] text-xs text-white/80"
                  >
                    {l}
                  </span>
                ),
              )}
            </div>
            <div className="mt-5 h-2 bg-[#111] border border-[#1A1A1A] rounded overflow-hidden">
              <div
                className="h-full w-[30%]"
                style={{ background: "linear-gradient(135deg,#CC0000,#FF4444)" }}
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SECTION 6 — APPAREL */}
      <Section>
        <Reveal>
          <Overline>THE APPAREL BRIDGE</Overline>
        </Reveal>
        <Reveal delay={100}>
          <H2>The Gear Unlocks the System.</H2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
          <Reveal>
            <div>
              <p className="text-[#888] text-lg leading-relaxed mb-8">
                Every MAVR compression garment ships with a unique product code inside the tag.
                Redeem it in the app and receive 6 months of MAVR Pro — worth ₹2,394 — instantly
                activated. The gear is not just performance wear. It is your entry into the MAVR Pro
                ecosystem.
              </p>
              <div className="flex flex-col md:flex-row gap-3 items-stretch">
                {[
                  ["01", "BUY THE GEAR", "Order MAVR Compression."],
                  ["02", "REDEEM THE CODE", "Enter tag code in app."],
                  ["03", "6 MONTHS PRO", "Activated instantly."],
                ].map(([n, t, d], i, a) => (
                  <div key={n} className="flex items-center gap-3 flex-1">
                    <div className="mavr-card mavr-card-top p-4 flex-1">
                      <div className="font-mono text-[#CC0000] text-xs">{n}</div>
                      <div className="font-display text-lg mt-1">{t}</div>
                      <div className="text-[#888] text-xs">{d}</div>
                    </div>
                    {i < a.length - 1 && (
                      <div className="hidden md:block text-[#CC0000] text-xl">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mx-auto w-full max-w-[520px]">
              <div
                className="mavr-card overflow-hidden"
                style={{ boxShadow: "0 0 50px rgba(204,0,0,0.12)" }}
              >
                <img
                  src={connectMock}
                  alt="MAVR apparel bridge — connect and redeem product code"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-[#888]">
                <div className="font-mono tracking-wider">ENTER PRODUCT CODE</div>
                <div className="font-mono text-white">
                  <span className="text-[#CC0000]">MAVR-FOUND-8472</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SECTION 7 — BUILD LOG */}
      <Section id="buildlog" alt>
        <Reveal>
          <Overline>BUILDING IN PUBLIC</Overline>
        </Reveal>
        <Reveal delay={100}>
          <H2>We Build in the Open. You Watch it Happen.</H2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[#888] max-w-2xl text-base md:text-lg mb-14">
            No corporate veil. No polished PR. We show every decision, every design, every
            rejection, every iteration. This is the raw changelog of MAVR.
          </p>
        </Reveal>
        <div className="relative pl-8">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-[#CC0000]" />
          {[
            [
              "MAY 2025 — WEEK 01",
              "COMPLETE",
              "App Architecture Finalised",
              "24-section developer build guide complete. Stack confirmed: React Native + Fastify + PostgreSQL + Redis + Razorpay Route. 30+ database tables documented.",
            ],
            [
              "MAY 2025 — WEEK 02",
              "COMPLETE",
              "Subscription Model Updated",
              "Apparel QR code now triggers 6-month Pro subscription credit. App moved to freemium — open access for all. Physical apparel is now the premium upgrade path.",
            ],
            [
              "MAY 2025 — WEEK 03",
              "COMPLETE",
              "Achievement and Badging Engine Designed",
              "30 achievements across 7 categories. Bronze to Diamond tier. XP system with 7 levels from Rookie to Legend. Lottie celebration animations specced.",
            ],
            [
              "MAY 2025 — WEEK 04",
              "COMPLETE",
              "Real-Time Trainer Edit Architecture",
              "WebSocket (Socket.io) architecture designed for trainer-to-student plan sync. Target: plan changes reflect in student app in under 500ms.",
            ],
            [
              "JUNE 2025 — WEEK 01",
              "COMPLETE",
              "MAVR ID Social Layer Added",
              "Every user gets MAVR_[Adjective][Noun][4digits] identity. Partner requests, partner chat, co-workout planning, activity feed — all specced and in database schema.",
            ],
            [
              "JUNE 2025 — WEEK 02",
              "IN PROGRESS",
              "Compression Sample Testing",
              "Fabric samples in review. Standard: must survive 200 wash cycles without compression loss. 2 of 4 fabric options rejected. Testing continues.",
            ],
            [
              "JUNE 2025 — WEEK 03",
              "IN PROGRESS",
              "Smart Watch Integration Specced",
              "Apple HealthKit (iOS) and Google Health Connect (Android) integration documented. Real-time heart rate during workouts. Fitbit OAuth flow planned.",
            ],
            [
              "JUNE 2025 — WEEK 04",
              "UPCOMING",
              "Investor Deck Finalisation",
              "Unit economics, 3-year projection, and subscription model review in progress. Deck available on request from the investor section below.",
            ],
            [
              "JULY 2025",
              "UPCOMING",
              "Closed Beta — First 100 Athletes",
              "First 100 waitlist members invited to closed beta. Full app access. Direct founder feedback line. Your bug report shapes the final product.",
            ],
          ].map(([ts, status, title, body], i) => {
            const pill =
              status === "COMPLETE"
                ? "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/40"
                : status === "IN PROGRESS"
                  ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/40"
                  : "bg-[#888]/10 text-[#888] border-[#888]/30";
            return (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="relative mb-6">
                  <div className="absolute -left-[28px] top-5 w-3 h-3 rounded-full bg-[#CC0000] ring-4 ring-[#050505]" />
                  <div className="mavr-card p-5" style={{ borderLeft: "4px solid #CC0000" }}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-[11px] text-[#888]">{ts}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${pill}`}>
                        {status}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex mt-6"
          >
            FOLLOW THE FULL BUILD ON INSTAGRAM →
          </a>
        </Reveal>
      </Section>

      {/* LEADERBOARD */}
      <LeaderboardSection />

      <WaitlistFooter />
      <ScrollDepth />
    </main>
  );
}
