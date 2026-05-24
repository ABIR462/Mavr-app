import React from "react";
import { Reveal } from "./parts";
import { motion } from "framer-motion";

export function IdentitySection() {
  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CC0000]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#CC0000]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="font-mono text-[11px] text-[#CC0000] tracking-widest mb-4">
            YOUR IDENTITY
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            Every Athlete Gets a MAVR ID.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[#888] max-w-2xl text-lg mb-16 leading-relaxed">
            Auto-generated on signup. Find training partners, send partner requests, co-plan
            sessions, and chat — all inside the app. Your MAVR ID is your athlete identity. It
            cannot be bought. Only earned.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Premium ID Card */}
          <Reveal delay={300}>
            <div className="relative mx-auto w-full max-w-md perspective-[1000px]">
              <motion.div
                initial={{ rotateY: -10, rotateX: 5 }}
                animate={{ rotateY: [5, -5, 5], rotateX: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-gradient-to-br from-[#111] to-[#0A0A0A] rounded-2xl p-1 overflow-hidden"
                style={{
                  boxShadow:
                    "0 20px 50px -10px rgba(204,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CC0000]/50 to-transparent opacity-50 blur-xl mix-blend-screen" />

                <div className="relative bg-[#080808] rounded-xl p-8 h-full border border-white/5 backdrop-blur-xl">
                  {/* Top section */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#CC0000] to-[#800000] p-1 shadow-[0_0_20px_rgba(204,0,0,0.4)]">
                      <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center font-display text-3xl text-white border border-[#CC0000]/30">
                        TR
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[#CC0000] text-sm tracking-wider mb-1">
                        MAVR_IronWolf2847
                      </div>
                      <div className="font-display text-3xl text-white tracking-wide">
                        TUSHAR R.
                      </div>
                    </div>
                  </div>

                  {/* Level Pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-full mb-8">
                    <div className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
                    <span className="font-mono text-[11px] text-[#CC0000] tracking-widest font-bold">
                      LEVEL 5 — ELITE ATHLETE
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Streak", value: "47 days" },
                      { label: "Workouts", value: "214" },
                      { label: "XP", value: "8,420" },
                      { label: "Achievements", value: "19" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-[#111] border border-white/5 rounded-lg p-3"
                      >
                        <div className="font-mono text-[10px] text-[#888] uppercase tracking-wider mb-1">
                          {stat.label}
                        </div>
                        <div className="font-display text-xl text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex gap-4 pt-6 border-t border-white/5">
                    {[
                      { color: "#CD7F32", label: "B" },
                      { color: "#C0C0C0", label: "S" },
                      { color: "#FFD700", label: "G" },
                    ].map((badge) => (
                      <div
                        key={badge.label}
                        className="w-12 h-12 rounded-full grid place-items-center text-sm font-bold text-black"
                        style={{
                          background: `linear-gradient(135deg, ${badge.color}, ${badge.color}88)`,
                          boxShadow: `0 0 20px ${badge.color}40`,
                          border: `1px solid ${badge.color}`,
                        }}
                      >
                        {badge.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* RIGHT: Terminal / Features List */}
          <Reveal delay={400}>
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-1 shadow-2xl">
              <div className="bg-[#050505] rounded-xl p-8">
                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-[#1A1A1A]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-4 font-mono text-[10px] text-[#555]">identity_layer.sys</span>
                </div>

                <div className="space-y-4">
                  {[
                    "auto-generated on registration",
                    "format: MAVR_[Adjective][Noun][4digits]",
                    "search any athlete by MAVR ID",
                    "send partner requests — instagram style",
                    "co-plan sessions in-app",
                    "activity feed from accepted partners",
                    "chat — encrypted, real-time",
                  ].map((text, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      key={i}
                      className="flex items-start gap-3 group"
                    >
                      <span className="font-mono text-[#CC0000] mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                        {">"}
                      </span>
                      <span className="font-mono text-[13px] md:text-sm text-[#A0A0A0] leading-relaxed group-hover:text-white transition-colors">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-[#CC0000] mt-4 ml-5"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
