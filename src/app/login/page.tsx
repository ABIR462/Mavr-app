"use client";

import { useState } from "react";
import { login } from "@/actions/auth";
import { CinematicNavbar } from "@/components/mavr/hero-cinematic";
import { PageHeader, WaitlistFooter, Section } from "@/components/mavr/shared-layout";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await login(formData);
      if (res && res.error) {
        setError(res.error);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CinematicNavbar onJoin={() => {}} />
      <PageHeader 
        title="ADMIN GATEWAY" 
        subtitle="Secure administrator login portal. Access waitlist signups, trainer registrations, and manage site blogs."
      />

      <main className="relative bg-[#030303] min-h-[40vh] py-16 flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <div className="mavr-card p-8 border-t-2 border-t-[#CC0000]">
            <h3 className="font-display text-2xl text-white mb-2">Administrator Login</h3>
            <p className="text-[#888] text-xs font-mono mb-6">SECURE ACCESS AUTHORIZED PERSONNEL ONLY</p>

            {error && (
              <div className="bg-[#CC0000]/10 border border-[#CC0000]/30 text-[#FF6666] text-xs px-4 py-3 rounded mb-4 animate-in fade-in">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Admin Email
                </label>
                <input
                  id="admin-email"
                  type="email"
                  name="email"
                  required
                  placeholder="admin@mavr.in"
                  className="mavr-input"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Secure Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="mavr-input"
                  autoComplete="current-password"
                />
              </div>

              <div className="text-[11px] font-mono text-[#555] pb-2">
                Tip: Try email <span className="text-gray-300">admin@mavr.in</span> and password <span className="text-gray-300">admin123</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-red w-full mt-2"
              >
                {loading ? "AUTHENTICATING..." : "ACCESS DASHBOARD"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <WaitlistFooter />
    </>
  );
}
