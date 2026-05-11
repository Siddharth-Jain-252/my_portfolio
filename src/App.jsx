import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotLive from "./pages/NotLive";
import { C, SECTIONS } from "./constants/theme";
import { useIsMobile } from "./hooks/useIsMobile";

// Layout
import Navbar          from "./components/Navbar";
import NavDots         from "./components/NavDots";

// Sections
import HeroSection     from "./components/HeroSection";
import AboutSection    from "./components/AboutSection";
import SkillsSection   from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection  from "./components/ContactSection";
import Footer          from "./components/Footer";

export default function App() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("hero");

  // Load Google Fonts + set viewport meta
  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap";
    document.head.appendChild(link);

    let meta = document.querySelector("meta[name='viewport']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "viewport";
      document.head.appendChild(meta);
    }
    meta.content = "width=device-width, initial-scale=1, maximum-scale=5";

    // Prevent horizontal scroll bleed
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  // Track which section is in viewport
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

  const Portfolio = (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, overflowX: "hidden" }}>
      <Navbar active={active} />

      {/* Side scroll dots — desktop only */}
      {!isMobile && <NavDots active={active} />}

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Portfolio} />
        <Route path="/not-live" element={<NotLive />} />
      </Routes>
    </BrowserRouter>
  );
}
