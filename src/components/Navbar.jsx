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

  useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const solid = scrolled || open;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        height: 62, display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "0 1.2rem" : "0 2.8rem",
        background: solid ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: solid ? "blur(20px)" : "none",
        borderBottom: solid ? `1px solid ${C.border}` : "none",
        transition: "background 0.35s, border-color 0.35s",
      }}>
        <span style={{
          fontFamily: C.mono, color: C.accent,
          fontSize: isMobile ? 13 : 15, letterSpacing: "0.06em",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{
            display: "inline-block", width: 8, height: 8, borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
            flexShrink: 0,
          }} />
          &lt;siddharth.jain /&gt;
        </span>

        {isMobile ? (
          <button onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              background: "none", border: "none", color: C.accent, cursor: "pointer",
              padding: 8, display: "flex", alignItems: "center", borderRadius: 8,
              minWidth: 44, minHeight: 44, justifyContent: "center",
            }}>
            {open ? <CloseIcon /> : <HamIcon />}
          </button>
        ) : (
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {SECTIONS.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className="nav-link-hover"
                style={{
                  background: active === s.id ? "rgba(232,184,109,0.1)" : "none",
                  border: active === s.id ? `1px solid ${C.border}` : "1px solid transparent",
                  borderRadius: 8, cursor: "pointer",
                  fontFamily: C.mono, fontSize: 12.5, letterSpacing: "0.07em",
                  color: active === s.id ? C.accent : C.textMid,
                  padding: "7px 14px", transition: "all 0.2s",
                }}>
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", top: 62, left: 0, right: 0, zIndex: 299,
        background: "rgba(10,15,30,0.97)", backdropFilter: "blur(20px)",
        maxHeight: open ? "380px" : "0px", overflow: "hidden",
        transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1)",
        borderBottom: open ? `1px solid ${C.border}` : "none",
      }}>
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(s.id)} style={{
            display: "flex", alignItems: "center", gap: 14, width: "100%",
            background: "none", border: "none",
            borderBottom: `1px solid rgba(232,184,109,0.06)`,
            color: active === s.id ? C.accent : C.textMid,
            fontSize: 14, fontFamily: C.mono, letterSpacing: "0.08em",
            cursor: "pointer", padding: "17px 1.4rem",
            textAlign: "left", minHeight: 56, transition: "color 0.2s",
          }}>
            <span style={{ fontSize: 10, color: C.accent, opacity: 0.4, minWidth: 18 }}>0{i + 1}</span>
            {s.label}
          </button>
        ))}
      </div>
    </>
  );
}