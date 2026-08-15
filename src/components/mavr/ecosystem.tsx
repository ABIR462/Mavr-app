import React from "react";
import { Reveal } from "./parts";

export function EcosystemSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 flex justify-center font-['Inter',sans-serif]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .c1-container {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }
        .c1-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #F5C344, #F28482, #B567C2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
        }
        .c1-title {
          font-size: 2.75rem;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .c1-subtitle {
          font-size: 1.125rem;
          color: #888888;
          line-height: 1.5;
          margin-bottom: 50px;
        }
        .c1-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .c1-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .c1-grid { grid-template-columns: 1fr; }
          .c1-title { font-size: 2.25rem; }
        }
        .c1-card {
          border-radius: 20px;
          height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
          text-align: left;
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
        .c1-card h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          padding: 24px;
          z-index: 2;
          margin: 0;
        }
        .c1-card-1 {
          background: radial-gradient(circle at 50% 0%, rgba(255,179,71,0.15) 0%, rgba(249,237,150,0.05) 30%, #111111 60%, #111111 100%);
        }
        .c1-card-2 {
          background: radial-gradient(circle at 50% 0%, rgba(229,161,245,0.15) 0%, rgba(248,172,160,0.05) 30%, #111111 60%, #111111 100%);
        }
        .c1-card-3 {
          background: radial-gradient(circle at 50% 0%, rgba(249,237,150,0.15) 0%, rgba(229,161,245,0.05) 30%, #111111 60%, #111111 100%);
        }
        .c1-blur-text {
          background: linear-gradient(90deg, #FFB347, #E5A1F5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }
        .c1-mesh {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 16px 16px;
          -webkit-mask-image: radial-gradient(circle at center top, black 0%, transparent 80%);
          mask-image: radial-gradient(circle at center top, black 0%, transparent 80%);
        }
      `,
        }}
      />
      <div className="c1-container">
        <Reveal>
          <div className="c1-badge">THE ECOSYSTEM</div>
          <h2 className="c1-title">One System. Three Pillars.</h2>
          <p className="c1-subtitle">
            MAVR is not a fitness app. It is the infrastructure layer for the Indian athlete —<br />
            connecting training, nutrition, coaching, and community into a single operating system.
          </p>
        </Reveal>

        <div className="c1-grid mt-12">
          {/* Card 1: MAVR APP */}
          <Reveal delay={100}>
            <div className="c1-card c1-card-1 hover:border-[#FFB347]/30 transition-colors">
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "24px",
                  right: "24px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  padding: "16px",
                  fontSize: "0.8rem",
                  color: "#cbd5e1",
                  lineHeight: "1.6",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }}
              >
                Free to download. <span className="c1-blur-text">Track every workout</span>, every
                meal, every gym check-in. <span className="c1-blur-text">Earn achievements</span>.
                Connect with training partners using your MAVR ID.{" "}
                <span className="c1-blur-text">Level up from Rookie to Legend</span>.
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "180px",
                  left: "40px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backdropFilter: "blur(5px)",
                }}
              >
                FREE — ANDROID & iOS
                <span style={{ color: "#a855f7", fontSize: "1rem" }}>✦</span>
              </div>
              <svg
                style={{
                  position: "absolute",
                  top: "205px",
                  left: "110px",
                  width: "24px",
                  height: "24px",
                  fill: "#ffffff",
                  stroke: "#000000",
                  strokeWidth: "1px",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))",
                  zIndex: 10,
                }}
                viewBox="0 0 24 24"
              >
                <path d="M4 2L20 11L11 13L9 22L4 2Z" />
              </svg>
            </div>
          </Reveal>

          {/* Card 2: MAVR COMPRESSION */}
          <Reveal delay={200}>
            <div className="c1-card c1-card-2 hover:border-[#E5A1F5]/30 transition-colors">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: "70px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 24px",
                }}
              >
                <img
                  src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/network.svg"
                  alt="Network"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                    marginTop: "10px",
                    opacity: 0.8,
                    mixBlendMode: "screen",
                  }}
                />
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "12px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    color: "#cbd5e1",
                    lineHeight: "1.5",
                    marginTop: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Premium performance compression engineered for Indian body proportions and
                  climate. Every garment ships with a product code that unlocks 6 months of MAVR
                  Pro.
                </div>
              </div>
     
            </div>
          </Reveal>

          {/* Card 3: COACH CONNECT */}
          <Reveal delay={300}>
            <div className="c1-card c1-card-3 hover:border-[#F9ED96]/30 transition-colors">
              <div className="c1-mesh"></div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: 0,
                  right: 0,
                  padding: "16px",
                  fontSize: "0.75rem",
                  color: "#cbd5e1",
                  lineHeight: "1.6",
                  textAlign: "center",
                  zIndex: 1,
                  fontWeight: 500,
                }}
              >
                Trainers get a dedicated dashboard to assign workout plans, track diet charts, and
                monitor student streaks. Edit a student's plan and it updates in their app in under
                500 milliseconds. Real-time. Always in sync.
              </div>
              <img
                src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/library%20icon.svg"
                alt="Folder"
                className="c1-folder"
                style={{
                  position: "absolute",
                  top: "90px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "140px",
                  filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.5))",
                  zIndex: 1,
                  opacity: 0.9,
                }}
              />
              <div
                className="c1-search"
                style={{
                  position: "absolute",
                  top: "230px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "6px 18px",
                  borderRadius: "20px",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  zIndex: 2,
                  backdropFilter: "blur(5px)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a1a1aa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                FOR CERTIFIED TRAINERS
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
