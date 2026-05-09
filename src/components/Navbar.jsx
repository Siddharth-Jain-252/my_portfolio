import { useState, useEffect } from "react";
import { C, SECTIONS } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { HamIcon, CloseIcon } from "./Icons";

export default function Navbar({ active }) {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer when switching to desktop
  useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const solid = scrolled || open;

  return (
    <>
      {/* ── Main bar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        height: 60, display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "0 1.1rem" : "0 2.5rem",
        background: solid ? "rgba(34,40,49,0.96)" : "transparent",
        backdropFilter: solid ? "blur(18px)" : "none",
        borderBottom: solid ? "1px solid rgba(118,171,174,0.12)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <span style={{ fontFamily: C.mono, color: C.accent, fontSize: isMobile ? 13 : 15, letterSpacing: "0.05em" }}>
          &lt;siddharth.jain /&gt;
        </span>

        {isMobile ? (
          /* Hamburger button */
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              background: "none", border: "none", color: C.accent, cursor: "pointer",
              padding: 8, display: "flex", alignItems: "center", borderRadius: 6,
              minWidth: 44, minHeight: 44, justifyContent: "center",
            }}
          >
            {open ? <CloseIcon /> : <HamIcon />}
          </button>
        ) : (
          /* Desktop nav links */
          <div style={{ display: "flex", gap: 26 }}>
            {SECTIONS.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: C.mono, fontSize: 13, letterSpacing: "0.06em",
                color: active === s.id ? C.accent : "rgba(238,238,238,0.5)",
                borderBottom: `1px solid ${active === s.id ? C.accent : "transparent"}`,
                padding: "4px 0", transition: "color 0.2s",
              }}>
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Mobile slide-down drawer ── */}
      <div style={{
        position: "fixed", top: 60, left: 0, right: 0, zIndex: 299,
        background: "rgba(34,40,49,0.97)", backdropFilter: "blur(18px)",
        maxHeight: open ? "360px" : "0px", overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        borderBottom: open ? "1px solid rgba(118,171,174,0.1)" : "none",
      }}>
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(s.id)} style={{
            display: "flex", alignItems: "center", gap: 12, width: "100%",
            background: "none", border: "none",
            borderBottom: "1px solid rgba(118,171,174,0.07)",
            color: active === s.id ? C.accent : "rgba(238,238,238,0.78)",
            fontSize: 14, fontFamily: C.mono, letterSpacing: "0.07em",
            cursor: "pointer", padding: "18px 1.3rem",
            textAlign: "left", minHeight: 56,
          }}>
            <span style={{ color: C.accent, opacity: 0.45, fontSize: 11 }}>0{i + 1}.</span>
            {s.label}
          </button>
        ))}
      </div>
    </>
  );
}
