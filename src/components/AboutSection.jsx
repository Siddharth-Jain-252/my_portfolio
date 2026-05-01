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
    <section id="about" style={{ padding: sm ? "72px 1.2rem" : "110px 2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeading num="01" label="About" title="Who I Am" sm={sm} />

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: sm ? "1fr" : "1fr 1fr",
            gap: sm ? 24 : 48,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          {/* Bio + meta */}
          <div>
            <p style={{
              color: "rgba(238,238,238,0.72)", lineHeight: 1.85,
              fontFamily: C.sans, marginBottom: 22,
              fontSize: sm ? 14 : 15,
            }}>
              {aboutData.bio}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Email",     aboutData.email],
                ["Location",  aboutData.location],
                ["Education", aboutData.university],
              ].map(([key, val]) => (
                <div key={key} style={{
                  display: "flex", gap: 10, fontSize: 13,
                  fontFamily: C.mono, alignItems: "flex-start", flexWrap: "wrap",
                }}>
                  <span style={{ color: C.accent, minWidth: 76, flexShrink: 0 }}>{key}</span>
                  <span style={{ color: "rgba(238,238,238,0.68)", wordBreak: "break-word", flex: 1 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important links panel */}
          <div style={{
            padding: "20px", borderRadius: 12,
            background: "rgba(118,171,174,0.05)",
            border: "1px solid rgba(118,171,174,0.14)",
          }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.14em", color: C.accent,
              fontFamily: C.mono, marginBottom: 14,
            }}>
              IMPORTANT LINKS
            </div>

            {aboutData.links.map((link) => {
              const Icon = ICON_MAP[link.icon] || Cv;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    color: "rgba(238,238,238,0.78)", textDecoration: "none",
                    fontSize: 13, fontFamily: C.mono,
                    padding: "13px 0", borderBottom: "1px solid rgba(118,171,174,0.08)",
                    minHeight: 50, transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,238,238,0.78)")}
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
