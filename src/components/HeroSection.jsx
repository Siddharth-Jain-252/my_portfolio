import { useState, useEffect, useRef } from "react";
import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { ICON_MAP, Cv } from "./Icons";
import aboutData from "../data/about.json";

const PHRASES = [
  "Backend Developer",
  "AI/ML Engineer",
  "Open Source Builder",
  "Problem Solver",
];

export default function HeroSection() {
  const sm = useIsMobile();
  const [typed, setTyped] = useState("");
  const [mounted, setMounted] = useState(false);
  const phraseIdx = useRef(0);
  const charIdx   = useRef(0);
  const deleting  = useRef(false);

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  useEffect(() => {
    const tick = () => {
      const phrase = PHRASES[phraseIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(phrase.slice(0, charIdx.current));
        if (charIdx.current === phrase.length) {
          deleting.current = true;
          return setTimeout(tick, 2000);
        }
      } else {
        charIdx.current--;
        setTyped(phrase.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % PHRASES.length;
        }
      }
      setTimeout(tick, deleting.current ? 44 : 80);
    };
    const t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: sm ? "100px 1.4rem 80px" : "0 2rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(232,184,109,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,184,109,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        transform: "rotate(-5deg) scale(1.2)",
      }} />

      {/* Ambient glows */}
      <div style={{
        position: "absolute", pointerEvents: "none",
        width: sm ? 340 : 600, height: sm ? 340 : 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,184,109,0.06) 0%, transparent 65%)",
        top: "40%", left: "30%", transform: "translate(-50%, -50%)",
      }} />
      <div style={{
        position: "absolute", pointerEvents: "none",
        width: sm ? 240 : 400, height: sm ? 240 : 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,123,107,0.05) 0%, transparent 65%)",
        top: "60%", right: "20%",
      }} />

      {/* Orbiting dots — desktop only */}
      {!sm && (
        <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", width: 8, height: 8, borderRadius: "50%",
            background: C.accent, opacity: 0.5,
            animation: "orbit 9s linear infinite",
          }} />
          <div style={{
            position: "absolute", width: 5, height: 5, borderRadius: "50%",
            background: C.accent2, opacity: 0.4,
            animation: "orbit2 6s linear infinite",
          }} />
        </div>
      )}

      <div style={{
        position: "relative", textAlign: "center", maxWidth: 700, width: "100%",
        animation: mounted ? "slide-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
        opacity: mounted ? undefined : 0,
      }}>
        {/* Avatar */}
        <div style={{
          width: sm ? 84 : 108, height: sm ? 84 : 108, borderRadius: "50%",
          margin: "0 auto 1.6rem",
          background: `linear-gradient(135deg, ${C.accent} 0%, #c87941 50%, ${C.accent2} 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: sm ? 26 : 34, fontWeight: 700, color: C.bg, fontFamily: C.mono,
          animation: "float 5s ease-in-out infinite, pulse-glow 3s ease-in-out infinite",
          flexShrink: 0,
        }}>
          {aboutData.avatar}
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-block", padding: "5px 16px", borderRadius: 40,
          border: `1px solid ${C.border}`, background: "rgba(232,184,109,0.07)",
          fontSize: 11, letterSpacing: "0.2em", color: C.accent,
          fontFamily: C.mono, marginBottom: 18, textTransform: "uppercase",
          animation: "fade-in 0.6s ease 0.3s both",
        }}>
          ✦ &nbsp;Hello, World!&nbsp; ✦
        </div>

        <h1 style={{
          fontFamily: C.sans, fontWeight: 800, color: C.text,
          margin: "0 0 0.5rem", lineHeight: 1.08, letterSpacing: "-0.03em",
          fontSize: sm ? "2.2rem" : "clamp(2.6rem, 7vw, 4.4rem)",
          animation: "fade-in 0.8s ease 0.4s both",
        }}>
          {aboutData.name}
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: C.mono, marginBottom: 22, minHeight: "2rem",
          fontSize: sm ? "0.9rem" : "clamp(0.95rem, 2.2vw, 1.25rem)",
          animation: "fade-in 0.8s ease 0.5s both",
          background: `linear-gradient(90deg, ${C.accent}, ${C.accent2})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {typed}
          <span style={{
            display: "inline-block", width: 2, height: "1em",
            background: C.accent, marginLeft: 2, verticalAlign: "text-bottom",
            animation: "blink 1s step-end infinite",
          }} />
        </div>

        <p style={{
          color: C.textMid, lineHeight: 1.9, fontFamily: C.sans,
          maxWidth: 520, margin: "0 auto 2rem",
          fontSize: sm ? 13.5 : 15.5, fontWeight: 300,
          animation: "fade-in 0.8s ease 0.6s both",
        }}>
          {aboutData.bio}
        </p>

        {/* Buttons */}
        <div style={{
          display: "flex", gap: sm ? 8 : 10, justifyContent: "center", flexWrap: "wrap",
          animation: "fade-in 0.8s ease 0.7s both",
        }}>
          {aboutData.links.map((link) => {
            const Icon = ICON_MAP[link.icon] || Cv;
            const primary = link.label === "Resume";
            return (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: sm ? "10px 14px" : "11px 22px",
                  borderRadius: 10, textDecoration: "none",
                  background: primary
                    ? `linear-gradient(135deg, ${C.accent}, ${C.accent2})`
                    : "rgba(232,184,109,0.08)",
                  color: primary ? C.bg : C.accent,
                  border: primary ? "none" : `1px solid ${C.border}`,
                  fontSize: sm ? 12 : 13, fontWeight: primary ? 700 : 500,
                  fontFamily: C.mono, letterSpacing: "0.04em",
                  minHeight: 44, whiteSpace: "nowrap",
                  transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = primary
                    ? "0 12px 32px rgba(232,184,109,0.35)"
                    : "0 8px 24px rgba(232,184,109,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon s={sm ? 15 : 17} /> {link.label}
              </a>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: 60, display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8,
          animation: "fade-in 1s ease 1.1s both",
        }}>
          <span style={{ fontSize: 9, letterSpacing: "0.22em", color: C.textDim, fontFamily: C.mono }}>SCROLL</span>
          <div style={{
            width: 1, height: 48,
            background: `linear-gradient(to bottom, ${C.accent}, transparent)`,
            animation: "float 2.2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}