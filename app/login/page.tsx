"use client";

import { useState } from "react";
import { login } from "@/actions/auth";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { WaitlistFooter } from "@/components/mavr/shared-layout";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const res = await login(formData);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
    // if successful, login action redirects automatically
  };

  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="top" className="bg-[#0A0A0A] text-white overflow-x-hidden pt-20 min-h-screen flex flex-col">
      <CinematicNavbar onJoin={scrollToWaitlist} />
      
      <div className="flex items-center justify-center min-h-[70vh] px-4 flex-1">
        <div className="mavr-card max-w-md w-full p-8 relative overflow-hidden bg-[#0A0A0A]/70 backdrop-blur-md">
          {/* Subtle red glow in corner */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#cc0000] rounded-full opacity-20 blur-3xl pointer-events-none"></div>

          <h1 className="text-3xl font-display mb-2 text-center text-white">AUTHORIZATION</h1>
          <p className="text-[#888] text-center mb-8 font-mono text-sm tracking-widest">
            SECURE PORTAL ACCESS
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded text-sm mb-6 text-center font-mono tracking-wider">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#888] font-mono tracking-widest">EMAIL</label>
              <input
                type="email"
                name="email"
                className="mavr-input font-mono"
                placeholder="admin@mavr.in"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#888] font-mono tracking-widest">PASSWORD</label>
              <input
                type="password"
                name="password"
                className="mavr-input font-mono tracking-widest"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-red w-full mt-2 justify-center py-4"
            >
              {loading ? "AUTHENTICATING..." : "ENTER PORTAL"}
            </button>
          </form>
        </div>
      </div>
      
      <WaitlistFooter />
    </main>
  );
}
