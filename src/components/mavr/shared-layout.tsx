import { Link } from "@tanstack/react-router";
import { WaitlistForm, ShareRow, Reveal } from "@/components/mavr/parts";
import logo from "@/assets/mavr-logo.png";

export function Section({
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

export function Overline({ children }: { children: React.ReactNode }) {
  return <div className="overline mb-4">{children}</div>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-6xl text-white leading-[0.95] mb-4">{children}</h2>
  );
}

export function WaitlistFooter() {
  return (
    <>
      {/* FINAL WAITLIST */}
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

      {/* FOOTER */}
      <div className="relative w-full overflow-hidden">
        {/* Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/80 via-black/60 to-black/90 pointer-events-none" />

        <footer className="relative z-10 w-full px-6 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Top row */}
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
                      <Link to="/" className="hover:text-white transition-colors">
                        MAVR App
                      </Link>
                    </li>
                    <li>
                      <Link to="/ecosystem" className="hover:text-white transition-colors">
                        Ecosystem
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="hover:text-white transition-colors">
                        Compression Gear
                      </Link>
                    </li>
                    <li>
                      <Link to="/registration" className="hover:text-white transition-colors">
                        Coach Connect
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[11px] text-[#CC0000] tracking-widest mb-4">
                    COMPANY
                  </div>
                  <ul className="space-y-2 text-[#888]">
                    <li>
                      <Link to="/build-log" className="hover:text-white transition-colors">
                        Build Log
                      </Link>
                    </li>
                    <li>
                      <Link to="/investors" className="hover:text-white transition-colors">
                        Investors
                      </Link>
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
                © {new Date().getFullYear()} MAVR — ALL RIGHTS RESERVED
              </div>
              <div className="font-mono text-[11px] text-[#555]">
                BUILT IN INDIA &nbsp;·&nbsp; mavr.in
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
