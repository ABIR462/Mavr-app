"use client";

import { login } from "@/actions/auth";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">MAVR Admin</h1>
          <p className="text-[#888]">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-[#CC0000]/10 border border-[#CC0000] rounded text-[#FF6666] text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue="admin@mavr.in"
              required
              className="w-full px-4 py-2 bg-[#111] border border-[#2A2A2A] rounded text-white placeholder:text-[#555] focus:border-[#CC0000] focus:outline-none transition-colors"
              placeholder="admin@mavr.in"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 bg-[#111] border border-[#2A2A2A] rounded text-white placeholder:text-[#555] focus:border-[#CC0000] focus:outline-none transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-red py-2.5 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 p-4 bg-[#111] border border-[#1A1A1A] rounded text-xs text-[#888]">
          <p className="font-semibold text-white mb-2">Demo Credentials:</p>
          <p>Email: <code className="text-[#CC0000]">admin@mavr.in</code></p>
          <p>Password: Any password (creates admin on first login)</p>
        </div>
      </div>
    </main>
  );
}
