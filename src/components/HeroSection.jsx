import { useState, useEffect, useRef } from "react";
import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { ICON_MAP, Cv } from "./Icons";
import aboutData from "../data/about.json";

const PHRASES = [
  "Backend Developer",
  "AI/ML Engineer",
  "Data Structures & Algorithms Enthusiast",
  "Open Source Contributor",
  "GenAI System Developer",
];

export default function HeroSection() {
  const sm = useIsMobile();
  const [typed, setTyped] = useState("");
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const phrase = PHRASES[phraseIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(phrase.slice(0, charIdx.current));
        if (charIdx.current === phrase.length) {
          deleting.current = true;
          return setTimeout(tick, 1600);
        }
      } else {
        charIdx.current--;
        setTyped(phrase.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % PHRASES.length;
        }
      }
      setTimeout(tick, deleting.current ? 45 : 75);
    };

    const t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: sm ? "90px 1.2rem 64px" : "0 2rem",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(168,85,247,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(34,211,238,0.16), transparent 28%), #0B1020",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .hero-animate {
          animation: fadeUp 1s ease forwards;
        }

        .floating-btn {
          transition: all 0.3s ease;
        }

        .floating-btn:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 30px rgba(168,85,247,0.35);
        }

        .scroll-line {
          animation: floating 2s ease-in-out infinite;
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.4))",
        }}
      />

      <div
        className="hero-animate"
        style={{ position: "relative", textAlign: "center", maxWidth: 760, width: "100%" }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.22em",
            color: C.secondary,
            fontFamily: C.mono,
            marginBottom: 16,
            textTransform: "uppercase",
          }}
        >
        </div>

        <h1
          style={{
            fontFamily: C.sans,
            fontWeight: 900,
            margin: "0 0 0.5rem",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            fontSize: sm ? "2rem" : "clamp(3rem, 6vw, 4.5rem)",
            background: "linear-gradient(90deg, #A855F7, #22D3EE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {aboutData.name}
        </h1>

        <div
          style={{
            fontFamily: C.mono,
            color: C.text,
            marginBottom: 22,
            minHeight: "1.8rem",
            fontSize: sm ? "1rem" : "1.3rem",
          }}
        >
          {typed}
          <span style={{ borderRight: `2px solid ${C.secondary}` }}>&nbsp;</span>
        </div>

        <p
          style={{
            color: "rgba(248,250,252,0.72)",
            lineHeight: 1.9,
            fontFamily: C.sans,
            maxWidth: 620,
            margin: "0 auto 2rem",
            fontSize: sm ? 14 : 17,
          }}
        >
          {aboutData.bio}
        </p>

        <div
          style={{
            display: "flex",
            gap: sm ? 10 : 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {aboutData.links.map((link) => {
            const Icon = ICON_MAP[link.icon] || Cv;
            const primary = link.label === "Resume";

            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="floating-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: sm ? "12px 16px" : "13px 24px",
                  borderRadius: 14,
                  textDecoration: "none",
                  background: primary
                    ? "linear-gradient(135deg, #A855F7, #7C3AED)"
                    : "rgba(255,255,255,0.06)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  fontSize: sm ? 12 : 13,
                  fontWeight: 700,
                  fontFamily: C.mono,
                  letterSpacing: "0.05em",
                }}
              >
                <Icon s={sm ? 15 : 18} /> {link.label}
              </a>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 70,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            opacity: 0.6,
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              color: C.secondary,
              fontFamily: C.mono,
            }}
          >
            SCROLL DOWN
          </span>

          <div
            className="scroll-line"
            style={{
              width: 2,
              height: 50,
              background: "linear-gradient(to bottom, #A855F7, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
