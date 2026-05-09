import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { useInView } from "../hooks/useInView";
import { ICON_MAP, Cv, Ext } from "./Icons";
import SectionHeading from "./SectionHeading";
import aboutData from "../data/about.json";

export default function AboutSection() {
  const sm = useIsMobile();
  const [ref, inView] = useInView();

  return (
    <section id="about" style={{ padding: sm ? "80px 1.4rem" : "120px 2rem", position: "relative" }}>
      <div style={{
        position: "absolute", right: 0, top: "20%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,123,107,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <SectionHeading num="01" label="About" title="Who I Am" sm={sm} />

        <div ref={ref} style={{
          display: "grid",
          gridTemplateColumns: sm ? "1fr" : "1fr 1fr",
          gap: sm ? 28 : 52,
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <div>
            <p style={{
              color: C.textMid, lineHeight: 1.9,
              fontFamily: C.sans, marginBottom: 28, fontWeight: 300,
              fontSize: sm ? 14 : 15.5,
            }}>
              {aboutData.bio}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["Email",     aboutData.email],
                ["Location",  aboutData.location],
                ["Education", aboutData.university],
              ].map(([key, val]) => (
                <div key={key} style={{
                  display: "flex", gap: 12, fontSize: 13,
                  fontFamily: C.mono, alignItems: "flex-start", flexWrap: "wrap",
                  padding: "12px 0", borderBottom: `1px solid rgba(232,184,109,0.07)`,
                }}>
                  <span style={{ color: C.accent2, minWidth: 80, flexShrink: 0, fontWeight: 500 }}>{key}</span>
                  <span style={{ color: C.textMid, wordBreak: "break-word", flex: 1 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: "24px 22px", borderRadius: 16,
            background: "linear-gradient(135deg, rgba(26,34,54,0.8) 0%, rgba(17,24,39,0.6) 100%)",
            border: `1px solid ${C.border}`,
            backdropFilter: "blur(10px)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0, width: 80, height: 80,
              background: `radial-gradient(circle at top right, rgba(232,184,109,0.12) 0%, transparent 70%)`,
            }} />

            <div style={{
              fontSize: 10, letterSpacing: "0.2em", color: C.accent,
              fontFamily: C.mono, marginBottom: 16,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{
                display: "inline-block", width: 6, height: 6, borderRadius: "50%",
                background: C.accent, boxShadow: "0 0 6px rgba(232,184,109,0.6)",
              }} />
              IMPORTANT LINKS
            </div>

            {aboutData.links.map((link) => {
              const Icon = ICON_MAP[link.icon] || Cv;
              return (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                  className="about-link"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    color: C.textMid, textDecoration: "none",
                    fontSize: 13, fontFamily: C.mono,
                    padding: "14px 0", borderBottom: `1px solid rgba(232,184,109,0.07)`,
                    minHeight: 50, transition: "color 0.22s, padding-left 0.22s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = C.accent; e.currentTarget.style.paddingLeft = "6px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = "0"; }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon /> {link.label}
                  </span>
                  <Ext />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}