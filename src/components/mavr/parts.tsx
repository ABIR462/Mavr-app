import { useEffect, useRef, useState, type ReactNode } from "react";
import { useForm, ValidationError } from "@formspree/react";
import logo from "@/assets/mavr-logo.png";
import { FORMSPREE_FORM_ID } from "@/lib/formspree";

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/* ---------------- Navbar ---------------- */
export function Navbar({ onJoin }: { onJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);
  const links = [
    { l: "About", h: "#about" },
    { l: "Ecosystem", h: "#ecosystem" },
    { l: "Build Log", h: "#buildlog" },
    { l: "Investors", h: "#investors" },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A] border-b border-[#1A1A1A]" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="MAVR" className="h-8 w-auto" />
            <span className="font-display text-2xl tracking-wider">MAVR</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.l}
                href={l.h}
                className="text-sm text-white/90 hover:text-[#CC0000] transition-colors"
              >
                {l.l}
              </a>
            ))}
            <button onClick={onJoin} className="btn-red text-xs px-4 py-2">
              JOIN WAITLIST
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-[#CC0000]" />
            <span className="w-6 h-0.5 bg-[#CC0000]" />
            <span className="w-6 h-0.5 bg-[#CC0000]" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white"
            aria-label="Close menu"
          >
            ×
          </button>
          {links.map((l) => (
            <a
              key={l.l}
              href={l.h}
              onClick={() => setOpen(false)}
              className="text-2xl font-display tracking-wider"
            >
              {l.l}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onJoin();
            }}
            className="btn-red"
          >
            JOIN WAITLIST
          </button>
        </div>
      )}
    </>
  );
}

/* ---------------- Countdown ---------------- */
function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const d = Math.max(0, target - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

function FlipNum({ value }: { value: number }) {
  return (
    <span
      key={value}
      className="flip-num font-display text-5xl md:text-7xl text-white tabular-nums"
    >
      {String(value).padStart(2, "0")}
    </span>
  );
}

export function Countdown() {
  const target = useRef(Date.now() + 90 * 86400000).current;
  const { days, hours, minutes, seconds } = useCountdown(target);
  const Block = ({ n, label }: { n: number; label: string }) => (
    <div className="mavr-card px-4 py-3 md:px-6 md:py-4 min-w-[80px] md:min-w-[110px] text-center flip">
      <FlipNum value={n} />
      <div className="text-[10px] md:text-[11px] text-[#CC0000] tracking-[0.25em] mt-1 font-medium">
        {label}
      </div>
    </div>
  );
  const Colon = () => (
    <div className="hidden md:flex text-[#CC0000] text-4xl font-display self-center px-1">:</div>
  );
  return (
    <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-3 md:gap-2">
      <Block n={days} label="DAYS" />
      <Colon />
      <Block n={hours} label="HOURS" />
      <Colon />
      <Block n={minutes} label="MINUTES" />
      <Colon />
      <Block n={seconds} label="SECONDS" />
    </div>
  );
}

/* ---------------- Waitlist form ---------------- */
export function WaitlistForm({ ctaLabel = "CLAIM YOUR SPOT" }: { ctaLabel?: string }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  useEffect(() => {
    if (state.succeeded) track("waitlist_signup");
  }, [state.succeeded]);

  if (state.succeeded)
    return (
      <div className="text-[#CC0000] font-medium animate-in fade-in">
        ✓ You're in. Welcome to MAVR, Founding Athlete.
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <input type="hidden" name="form_type" value="waitlist" />
      <input type="hidden" name="subject" value="New MAVR waitlist signup" />

      <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-2 items-start">
        <div className="min-w-0">
          <input
            id="waitlist-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email address"
            className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 rounded outline-none focus:border-[#CC0000] transition-colors"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-xs text-[#FF6666]"
          />
        </div>
        <div className="min-w-0">
          <input
            id="waitlist-phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="Phone / WhatsApp"
            className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 rounded outline-none focus:border-[#CC0000] transition-colors"
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            className="mt-2 text-xs text-[#FF6666]"
          />
        </div>
        <button type="submit" disabled={state.submitting} className="btn-red whitespace-nowrap">
          {state.submitting ? "SENDING..." : ctaLabel}
        </button>
      </div>
    </form>
  );
}

/* ---------------- Counter ---------------- */
export function Counter({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

/* ---------------- Marquee ---------------- */
export function Ticker({ slow = false }: { slow?: boolean }) {
  const text =
    "MAVR — ATHLETE OPERATING SYSTEM — INDIA'S FIRST — TRAIN. TRACK. DOMINATE. — EST. 2025 — ";
  return (
    <div className="bg-[#111] border-y border-[#1A1A1A] h-10 overflow-hidden flex items-center">
      <div className={`marquee-track ${slow ? "marquee-slow" : ""}`}>
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="font-mono text-[13px] text-[#CC0000] whitespace-nowrap pr-8">
            {text.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Share row ---------------- */
export function ShareRow() {
  const msg =
    "I just joined the MAVR waitlist — India's first athlete operating system. Join here: https://mavr.in";
  return (
    <div className="flex items-center gap-3 text-xs text-[#888]">
      <span>Share your spot. Move up the waitlist.</span>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(msg)}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => track("share_whatsapp")}
        className="w-8 h-8 grid place-items-center border border-[#1A1A1A] hover:border-[#CC0000] rounded transition"
        aria-label="WhatsApp"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
          <path d="M12 0a12 12 0 0 0-10.4 18l-1.6 6 6.2-1.6A12 12 0 1 0 12 0Zm6.9 16.9c-.3.8-1.7 1.6-2.4 1.6-.6 0-1.4.1-2.3-.1-.5-.2-1.2-.4-2.1-.8-3.7-1.6-6.1-5.3-6.3-5.6-.2-.3-1.5-2-1.5-3.7s.9-2.6 1.2-3c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.8.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .6-.1.3-.2.4-.4.6-.2.2-.4.5-.5.7-.2.2-.4.4-.2.8.2.4.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.6.2.7.4.1.2.1 1-.2 1.9Z" />
        </svg>
      </a>
      <button
        onClick={() => {
          navigator.clipboard?.writeText("https://mavr.in");
          track("share_copy_link");
        }}
        className="w-8 h-8 grid place-items-center border border-[#1A1A1A] hover:border-[#CC0000] rounded transition"
        aria-label="Copy link"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
          <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
        </svg>
      </button>
    </div>
  );
}

/* ---------------- Analytics shim ---------------- */
export function track(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function")
    (window as any).gtag("event", name, params || {});
}

/* ---------------- Investor modal ---------------- */
export function InvestorModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  useEffect(() => {
    if (!state.succeeded) return;
    track("investor_deck_request");
    const t = setTimeout(onClose, 1400);
    return () => clearTimeout(t);
  }, [onClose, state.succeeded]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[80] bg-black/90 grid place-items-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0A0A0A] border border-[#1A1A1A] rounded relative"
        style={{ borderTop: "4px solid #CC0000" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-white/70"
          aria-label="Close"
        >
          ×
        </button>
        <div className="p-8">
          <h3 className="font-display text-3xl mb-2">Request the MAVR Investor Deck</h3>
          <p className="text-[#888] text-sm mb-6">We respond within 24 hours.</p>
          {state.succeeded ? (
            <p className="text-[#CC0000] font-medium py-6">Thank you. Deck on its way.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="hidden" name="form_type" value="investor_deck" />
              <input type="hidden" name="subject" value="New investor deck request" />

              <input
                id="inv-name"
                name="name"
                required
                placeholder="Full Name"
                className="w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-xs text-[#FF6666]"
              />

              <input
                id="inv-org"
                name="organisation"
                required
                placeholder="Organisation / Fund"
                className="w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
              />
              <ValidationError
                prefix="Organisation"
                field="organisation"
                errors={state.errors}
                className="text-xs text-[#FF6666]"
              />

              <input
                id="inv-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-xs text-[#FF6666]"
              />

              <input
                id="inv-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Phone (optional)"
                className="w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
                className="text-xs text-[#FF6666]"
              />

              <button type="submit" disabled={state.submitting} className="btn-red w-full mt-2">
                {state.submitting ? "SENDING..." : "SEND REQUEST"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
