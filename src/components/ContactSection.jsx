import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { useInView } from "../hooks/useInView";
import { ICON_MAP, Cv } from "./Icons";
import SectionHeading from "./SectionHeading";
import aboutData from "../data/about.json";

export default function ContactSection() {
  const sm = useIsMobile();
  const [ref, inView] = useInView();

  return (
    <section id="contact" style={{
      padding: sm ? "80px 1.4rem" : "120px 2rem",
      background: "rgba(17,24,39,0.4)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,123,107,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <SectionHeading num="04" label="Contact" title="Let's Connect" center sm={sm} />

        <div ref={ref} style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(24px)",
          transition: "opacity 0.65s ease, transform 0.65s ease",
        }}>
          <p style={{
            color: C.textMid, lineHeight: 1.88, marginBottom: 36,
            fontFamily: C.sans, fontWeight: 300, fontSize: sm ? 14 : 15.5,
          }}>
            Whether you have a project in mind, a question, or just want to say hi —
            my inbox is always open. I'll try my best to get back to you!
          </p>

          <a href={`mailto:${aboutData.email}`} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: sm ? "14px 30px" : "15px 40px", borderRadius: 12,
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
            color: C.bg, textDecoration: "none", fontWeight: 700,
            fontFamily: C.mono, letterSpacing: "0.07em", minHeight: 52,
            boxShadow: `0 6px 28px rgba(232,184,109,0.35)`,
            fontSize: sm ? 13 : 14.5,
            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(232,184,109,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(232,184,109,0.35)";
            }}
          >
            Say Hello ✉
          </a>

          <div style={{
            marginTop: 44, display: "flex", justifyContent: "center",
            gap: sm ? 12 : 14, flexWrap: "wrap",
          }}>
            {aboutData.links.map((link) => {
              const Icon = ICON_MAP[link.icon] || Cv;
              return (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                  title={link.label} className="social-icon"
                  style={{
                    width: 52, height: 52, borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1px solid ${C.border}`,
                    color: "rgba(232,184,109,0.6)", textDecoration: "none",
                    transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                    background: "rgba(232,184,109,0.04)",
                  }}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}