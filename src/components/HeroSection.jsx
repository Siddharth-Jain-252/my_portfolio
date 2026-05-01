import { useState, useEffect, useRef } from "react";
import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { ICON_MAP, Cv } from "./Icons";
import aboutData from "../data/about.json";

const PHRASES = [
  "Backend Developer",
  "Artificial Intelligence Enthusiast",
  "Machine Learning Developer",
  "Open Source Contributor",
  "Problem Solver",
];

export default function HeroSection() {
  const sm = useIsMobile();
  const [typed, setTyped] = useState("");
  const phraseIdx = useRef(0);
  const charIdx   = useRef(0);
  const deleting  = useRef(false);

  // Typewriter effect
  useEffect(() => {
    const tick = () => {
      const phrase = PHRASES[phraseIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(phrase.slice(0, charIdx.current));
        if (charIdx.current === phrase.length) {
          deleting.current = true;
          return setTimeout(tick, 1900);
        }
      } else {
        charIdx.current--;
        setTyped(phrase.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % PHRASES.length;
        }
      }
      setTimeout(tick, deleting.current ? 48 : 82);
    };
    const t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: sm ? "90px 1.2rem 64px" : "0 2rem",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(118,171,174,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(118,171,174,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", pointerEvents: "none",
        width: sm ? 280 : 450, height: sm ? 280 : 450, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(118,171,174,0.07) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -55%)",
      }} />

      <div style={{ position: "relative", textAlign: "center", maxWidth: 680, width: "100%" }}>
        {/* Avatar */}
        <div style={{
          width: sm ? 76 : 96, height: sm ? 76 : 96, borderRadius: "50%",
          margin: "0 auto 1.4rem",
          background: "linear-gradient(135deg, #76ABAE 0%, #31363f 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: sm ? 24 : 32, fontWeight: 700, color: C.text, fontFamily: C.mono,
          boxShadow: "0 0 0 4px rgba(118,171,174,0.2), 0 0 0 8px rgba(118,171,174,0.07)",
        }}>
          {aboutData.avatar}
        </div>

        <div style={{ fontSize: 11, letterSpacing: "0.18em", color: C.accent, fontFamily: C.mono, marginBottom: 12, textTransform: "uppercase" }}>
          &mdash;&nbsp;Hello, World!&nbsp;&mdash;
        </div>

        <h1 style={{
          fontFamily: C.sans, fontWeight: 800, color: C.text,
          margin: "0 0 0.4rem", lineHeight: 1.1, letterSpacing: "-0.025em",
          fontSize: sm ? "2rem" : "clamp(2.4rem, 6vw, 4rem)",
        }}>
          {aboutData.name}
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: C.mono, color: C.accent, marginBottom: 20, minHeight: "1.8rem",
          fontSize: sm ? "0.88rem" : "clamp(0.95rem, 2.2vw, 1.35rem)",
        }}>
          {typed}
          <span style={{ borderRight: `2px solid ${C.accent}`, marginLeft: 1 }}>&nbsp;</span>
        </div>

        <p style={{
          color: "rgba(238,238,238,0.63)", lineHeight: 1.82, fontFamily: C.sans,
          maxWidth: 520, margin: "0 auto 1.8rem",
          fontSize: sm ? 13.5 : 15.5,
        }}>
          {aboutData.bio}
        </p>

        {/* Link buttons */}
        <div style={{ display: "flex", gap: sm ? 8 : 10, justifyContent: "center", flexWrap: "wrap" }}>
          {aboutData.links.map((link) => {
            const Icon = ICON_MAP[link.icon] || Cv;
            const primary = link.label === "Resume";
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: sm ? "10px 14px" : "10px 20px",
                  borderRadius: 8, textDecoration: "none",
                  background: primary ? C.accent : "rgba(118,171,174,0.1)",
                  color: primary ? "#222831" : C.accent,
                  border: primary ? "none" : "1px solid rgba(118,171,174,0.25)",
                  fontSize: sm ? 12 : 13, fontWeight: 600, fontFamily: C.mono,
                  letterSpacing: "0.04em", minHeight: 44, whiteSpace: "nowrap",
                }}
              >
                <Icon s={sm ? 15 : 18} /> {link.label}
              </a>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 52, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.14em", color: C.accent, fontFamily: C.mono }}>SCROLL</span>
          <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, ${C.accent}, transparent)` }} />
        </div>
      </div>
    </section>
  );
}
