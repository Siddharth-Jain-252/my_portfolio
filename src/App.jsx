import { useState, useEffect } from "react";
import { C, SECTIONS } from "./constants/theme";
import { useIsMobile } from "./hooks/useIsMobile";

import Navbar          from "./components/Navbar";
import NavDots         from "./components/NavDots";
import HeroSection     from "./components/HeroSection";
import AboutSection    from "./components/AboutSection";
import SkillsSection   from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection  from "./components/ContactSection";
import Footer          from "./components/Footer";

export default function App() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33%       { transform: translateY(-14px) rotate(1deg); }
        66%       { transform: translateY(-7px) rotate(-1deg); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(232,184,109,0.0), 0 0 40px rgba(232,184,109,0.1); }
        50%       { box-shadow: 0 0 0 8px rgba(232,184,109,0.0), 0 0 60px rgba(232,184,109,0.22); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
      @keyframes slide-in-up {
        from { opacity: 0; transform: translateY(40px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes orbit {
        from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
      }
      @keyframes orbit2 {
        from { transform: rotate(180deg) translateX(100px) rotate(-180deg); }
        to   { transform: rotate(540deg) translateX(100px) rotate(-540deg); }
      }

      .nav-link-hover:hover { color: #E8B86D !important; }
      .skill-card:hover { border-color: rgba(232,184,109,0.45) !important; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(232,184,109,0.12) !important; }
      .social-icon:hover { color: #E8B86D !important; border-color: #E8B86D !important; background: rgba(232,184,109,0.1) !important; transform: translateY(-3px); }
      .about-link:hover { color: #E8B86D !important; }
    `;
    document.head.appendChild(style);

    let meta = document.querySelector("meta[name='viewport']");
    if (!meta) { meta = document.createElement("meta"); meta.name = "viewport"; document.head.appendChild(meta); }
    meta.content = "width=device-width, initial-scale=1, maximum-scale=5";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, overflowX: "hidden", position: "relative" }}>
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.6,
      }} />
      <Navbar active={active} />
      {!isMobile && <NavDots active={active} />}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}