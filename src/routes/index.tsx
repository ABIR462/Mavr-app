import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import logo from "@/assets/mavr-logo.png";
import connectMock from "@/assets/Connect.png";
import {
  WaitlistForm,
  Ticker,
  ShareRow,
  Reveal,
  InvestorModal,
  track,
} from "@/components/mavr/parts";
import { CinematicNavbar, CinematicHero } from "@/components/mavr/hero-cinematic";
import { EcosystemSection } from "@/components/mavr/ecosystem";
import { IdentitySection } from "@/components/mavr/identity";
import {
  ProblemSection,
  FoodSearchSection,
  CalculatorSection,
  LeaderboardSection,
  TrainerSection,
  BetaSection,
  FAQSection,
} from "@/components/mavr/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAVR — India's First Athlete Operating System" },
      {
        name: "description",
        content:
          "MAVR is India's first complete athlete operating system. Track workouts, nutrition, connect with coaches, and earn achievements. Join the waitlist now.",
      },
      {
        name: "keywords",
        content:
          "Indian fitness app, athlete tracking app India, gym tracking app, trainer student app India, fitness app India",
      },
      { property: "og:title", content: "MAVR — Train. Track. Dominate." },
      {
        property: "og:description",
        content: "India's first athlete operating system is loading. Join 1,000 founding athletes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mavr.in" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MAVR — Train. Track. Dominate." },
      {
        name: "twitter:description",
        content: "India's first athlete operating system is loading.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://mavr.in" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  component: Index,
});

function Section({
  id,
  children,
  alt = false,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full ${alt ? "bg-[#050505]" : "bg-[#0A0A0A]"} py-24 md:py-32 px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Overline({ children }: { children: React.ReactNode }) {
  return <div className="overline mb-4">{children}</div>;
}
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-6xl text-white leading-[0.95] mb-4">{children}</h2>
  );
}

function Index() {
  const [investorOpen, setInvestorOpen] = useState(false);
  const scrollToWaitlist = () =>
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <CinematicNavbar onJoin={scrollToWaitlist} />

      {/* HERO — Cinematic */}
      <CinematicHero />

      <Ticker />

      {/* SECTION 2 — WHAT IS MAVR */}
      {/* PROBLEM */}
      <ProblemSection />

      {/* SECTION 2 — THE ECOSYSTEM */}
      <EcosystemSection />

      {/* SECTION 3 — FEATURES */}
      <section
        id="ecosystem"
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
              <a href="#ecosystem" className="btn-ghost">
                VIEW FULL ECOSYSTEM DOCS →
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SECTION 9 — FOUNDER */}
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
              {/* corner accents */}
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

      {/* TRAINER SIGNUP */}
      <TrainerSection />

      {/* CLOSED BETA */}
      <BetaSection />

      {/* FAQ */}
      <FAQSection />

      {/* SECTION 10 — FINAL WAITLIST */}
      <section
        id="waitlist-final"
        className="relative py-28 md:py-40 px-6"
        style={{
          background: "radial-gradient(ellipse at center, rgba(180,0,0,0.18), #0A0A0A 70%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-[60px] md:text-[96px] leading-[0.95]">
              THE WAITLIST
              <br />
              IS OPEN.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="text-[#cccccc] text-base md:text-lg mt-6 space-y-1">
              <p className="text-[#888]">
                Be among the first 1,000 founding athletes on MAVR. Founding members get:
              </p>
              <p>→ Early app access before public launch</p>
              <p>→ Exclusive Founding Athlete badge — never available again</p>
              <p>→ First access to MAVR Compression at founding price</p>
              <p>→ Direct line to the founder during beta</p>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <WaitlistForm ctaLabel="JOIN THE FOUNDING 1,000" />
              <div className="w-full max-w-xl mt-2">
                <div className="text-xs text-[#888] mb-2 text-left">
                  847 of 1,000 founding spots claimed
                </div>
                <div className="h-2 bg-[#111] border border-[#1A1A1A] rounded overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: "84.7%",
                      background: "linear-gradient(135deg,#CC0000,#FF4444)",
                    }}
                  />
                </div>
              </div>
              <ShareRow />
              <div className="text-[11px] text-[#888] mt-2">
                No spam. No noise. Only updates that matter. Unsubscribe any time.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER — MAVR branded, video background, no fixed positioning */}
      <div className="relative w-full overflow-hidden">
        {/* Video — absolute, scoped to this div only */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        />
        {/* Dark overlay so content stays readable */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/80 via-black/60 to-black/90 pointer-events-none" />

        {/* Footer content */}
        <footer className="relative z-10 w-full px-6 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Top row — logo + tagline */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-12 mb-12">
              <div>
                <img src={logo} alt="MAVR" className="h-10 w-auto mb-4" />
                <p className="text-[#888] text-sm max-w-sm leading-relaxed">
                  India's first athlete operating system. Built for Indian athletes, Indian food,
                  Indian trainers, and Indian gyms.
                </p>
              </div>

              {/* Nav columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                <div>
                  <div className="font-mono text-[11px] text-[#CC0000] tracking-widest mb-4">
                    PRODUCT
                  </div>
                  <ul className="space-y-2 text-[#888]">
                    <li>
                      <a href="#about" className="hover:text-white transition-colors">
                        MAVR App
                      </a>
                    </li>
                    <li>
                      <a href="#ecosystem" className="hover:text-white transition-colors">
                        Ecosystem
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="hover:text-white transition-colors">
                        Compression Gear
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="hover:text-white transition-colors">
                        Coach Connect
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[11px] text-[#CC0000] tracking-widest mb-4">
                    COMPANY
                  </div>
                  <ul className="space-y-2 text-[#888]">
                    <li>
                      <a href="#buildlog" className="hover:text-white transition-colors">
                        Build Log
                      </a>
                    </li>
                    <li>
                      <a href="#investors" className="hover:text-white transition-colors">
                        Investors
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[11px] text-[#CC0000] tracking-widest mb-4">
                    LEGAL
                  </div>
                  <ul className="space-y-2 text-[#888]">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="font-mono text-[11px] text-[#555] tracking-widest">
                © {new Date().getFullYear()} MAVR TECHNOLOGIES PVT. LTD. — ALL RIGHTS RESERVED
              </div>
              <div className="font-mono text-[11px] text-[#555]">
                BUILT IN INDIA &nbsp;·&nbsp; mavr.in
              </div>
            </div>
          </div>
        </footer>
      </div>
      <InvestorModal open={investorOpen} onClose={() => setInvestorOpen(false)} />
      <ScrollDepth />
    </main>
  );
}

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
        track("scroll_50");
      }
      if (pct >= 0.99 && !w.__mavrScroll![100]) {
        w.__mavrScroll![100] = true;
        track("scroll_100");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
