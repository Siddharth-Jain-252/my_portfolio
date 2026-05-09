import { C } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { Gh, Ext } from "./Icons";

const GRADIENTS = [
  ["#E8B86D", "#F07B6B"],
  ["#7EC8C8", "#6EE7B7"],
  ["#A78BFA", "#F07B6B"],
  ["#F07B6B", "#FCA5A5"],
  ["#E8B86D", "#A78BFA"],
  ["#6EE7B7", "#7EC8C8"],
];

export default function ProjectCard({ project, idx, sm }) {
  const [ref, inView] = useInView(0.07);
  const initials = project.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const [g1, g2] = GRADIENTS[idx % GRADIENTS.length];

  return (
    <div ref={ref} style={{
      borderRadius: 16, overflow: "hidden",
      background: "linear-gradient(135deg, rgba(26,34,54,0.95) 0%, rgba(17,24,39,0.85) 100%)",
      border: `1px solid rgba(232,184,109,0.1)`,
      display: "flex", flexDirection: "column",
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(38px)",
      transition: `opacity 0.6s ease ${Math.min(idx, 2) * 0.09}s, transform 0.6s ease ${Math.min(idx, 2) * 0.09}s, border-color 0.25s, box-shadow 0.25s`,
    }}
      onMouseEnter={(e) => {
        if (!sm) {
          e.currentTarget.style.borderColor = `rgba(232,184,109,0.4)`;
          e.currentTarget.style.transform   = `translateY(-6px)`;
          e.currentTarget.style.boxShadow   = `0 24px 56px rgba(0,0,0,0.35), 0 0 30px rgba(232,184,109,0.08)`;
        }
      }}
      onMouseLeave={(e) => {
        if (!sm) {
          e.currentTarget.style.borderColor = `rgba(232,184,109,0.1)`;
          e.currentTarget.style.transform   = "none";
          e.currentTarget.style.boxShadow   = "none";
        }
      }}
    >
      {/* Cover */}
      <div style={{
        height: sm ? 115 : 135, flexShrink: 0,
        background: `linear-gradient(135deg, rgba(10,15,30,0.9) 0%, rgba(26,34,54,0.8) 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(ellipse at 25% 40%, ${g1}22 0%, transparent 55%),
                            radial-gradient(ellipse at 75% 60%, ${g2}18 0%, transparent 55%)`,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `repeating-linear-gradient(45deg, ${g1}08 0px, ${g1}08 1px, transparent 1px, transparent 18px)`,
        }} />
        <span style={{
          fontFamily: C.mono, fontSize: sm ? 34 : 42, fontWeight: 800,
          background: `linear-gradient(135deg, ${g1}55, ${g2}44)`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "-0.03em", userSelect: "none", position: "relative",
        }}>
          {initials}
        </span>
        <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 5 }}>
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} style={{
              fontSize: 9.5, fontFamily: C.mono, padding: "3px 8px", borderRadius: 5,
              background: `${g1}18`, color: g1, border: `1px solid ${g1}30`,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: sm ? "16px 14px" : "22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily: C.sans, fontWeight: 700, fontSize: sm ? 15.5 : 16.5,
          color: C.text, margin: "0 0 8px",
        }}>
          {project.name}
        </h3>
        <p style={{
          fontSize: sm ? 12.5 : 13.5, color: C.textMid,
          lineHeight: 1.78, fontFamily: C.sans, flex: 1, margin: "0 0 14px", fontWeight: 300,
        }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontSize: 10.5, fontFamily: C.mono, padding: "3px 9px", borderRadius: 20,
              background: "rgba(232,184,109,0.06)", color: "rgba(232,184,109,0.75)",
              border: "1px solid rgba(232,184,109,0.15)",
            }}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 9 }}>
          {[
            { href: project.githubLink, Icon: Gh, label: "GitHub", primary: false },
            { href: project.websiteLink, Icon: Ext, label: "Live", primary: true },
          ].map(({ href, Icon, label, primary }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "11px 0", borderRadius: 9, textDecoration: "none",
                background: primary ? `linear-gradient(135deg, ${g1}, ${g2})` : "rgba(232,184,109,0.07)",
                border: primary ? "none" : "1px solid rgba(232,184,109,0.2)",
                color: primary ? C.bg : C.accent,
                fontSize: 12, fontFamily: C.mono, minHeight: 46,
                fontWeight: primary ? 700 : 400, transition: "all 0.22s",
              }}
              onMouseEnter={(e) => {
                if (!primary) e.currentTarget.style.background = "rgba(232,184,109,0.14)";
                else e.currentTarget.style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                if (!primary) e.currentTarget.style.background = "rgba(232,184,109,0.07)";
                else e.currentTarget.style.opacity = "1";
              }}
            >
              <Icon s={13} /> {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}