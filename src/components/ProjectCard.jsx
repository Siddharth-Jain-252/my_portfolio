import { C } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { Gh, Ext } from "./Icons";

/**
 * Single project card with cover art, description, tags, and action buttons.
 *
 * Props:
 *  project – project data object from projects.json
 *  idx     – position index (used for stagger delay)
 *  sm      – mobile flag (disables hover lift on touch)
 */
export default function ProjectCard({ project, idx, sm }) {
  const [ref, inView] = useInView(0.07);
  const initials = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      ref={ref}
      style={{
        borderRadius: 14, overflow: "hidden",
        background: "rgba(49,54,63,0.6)",
        border: "1px solid rgba(118,171,174,0.1)",
        display: "flex", flexDirection: "column",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(34px)",
        transition: `opacity 0.55s ease ${Math.min(idx, 2) * 0.07}s, transform 0.55s ease ${Math.min(idx, 2) * 0.07}s`,
      }}
      onMouseEnter={(e) => {
        if (!sm) {
          e.currentTarget.style.borderColor = "rgba(118,171,174,0.36)";
          e.currentTarget.style.transform   = "translateY(-5px)";
          e.currentTarget.style.boxShadow   = "0 20px 48px rgba(0,0,0,0.28)";
        }
      }}
      onMouseLeave={(e) => {
        if (!sm) {
          e.currentTarget.style.borderColor = "rgba(118,171,174,0.1)";
          e.currentTarget.style.transform   = "none";
          e.currentTarget.style.boxShadow   = "none";
        }
      }}
    >
      {/* ── Cover ── */}
      <div style={{
        height: sm ? 110 : 130, flexShrink: 0,
        background: "linear-gradient(135deg, #222831 0%, #31363f 55%, rgba(118,171,174,0.14) 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {project.picture ? (
          <img
            src={project.picture}
            alt={project.name}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        ) : (
          <>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle at 30% 40%, rgba(118,171,174,0.1) 0%, transparent 60%)",
            }} />
            {/* Monogram fallback */}
            <span style={{
              fontFamily: C.mono, fontSize: sm ? 32 : 38, fontWeight: 800,
              color: "rgba(118,171,174,0.2)", letterSpacing: "-0.03em", userSelect: "none",
            }}>
              {initials}
            </span>
          </>
        )}

        {/* Top-right tag badges */}
        <div style={{ position: "absolute", top: 9, right: 9, display: "flex", gap: 5 }}>
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} style={{
              fontSize: 10, fontFamily: C.mono, padding: "3px 7px", borderRadius: 4,
              background: "rgba(118,171,174,0.14)", color: C.accent,
              border: "1px solid rgba(118,171,174,0.2)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: sm ? "15px 14px" : "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily: C.sans, fontWeight: 700, fontSize: sm ? 15 : 16,
          color: C.text, margin: "0 0 8px", letterSpacing: "-0.01em",
        }}>
          {project.name}
        </h3>

        <p style={{
          fontSize: sm ? 12.5 : 13, color: "rgba(238,238,238,0.58)",
          lineHeight: 1.75, fontFamily: C.sans, flex: 1, margin: "0 0 14px",
        }}>
          {project.description}
        </p>

        {/* All tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontSize: 10.5, fontFamily: C.mono, padding: "3px 9px", borderRadius: 20,
              background: "rgba(118,171,174,0.07)", color: "rgba(118,171,174,0.8)",
              border: "1px solid rgba(118,171,174,0.14)",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 9 }}>
          
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "11px 0", borderRadius: 7,
              border: "1px solid rgba(118,171,174,0.24)",
              color: C.accent, textDecoration: "none",
              fontSize: 12, fontFamily: C.mono, minHeight: 46, transition: "background 0.18s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(118,171,174,0.09)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Gh s={15} /> GitHub
          </a>
          
            href={project.websiteLink}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "11px 0", borderRadius: 7,
              background: "rgba(118,171,174,0.14)",
              border: "1px solid rgba(118,171,174,0.24)",
              color: C.accent, textDecoration: "none",
              fontSize: 12, fontFamily: C.mono, minHeight: 46, transition: "background 0.18s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(118,171,174,0.24)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(118,171,174,0.14)")}
          >
            <Ext s={13} /> Live
          </a>
        </div>
      </div>
    </div>
  );
}
