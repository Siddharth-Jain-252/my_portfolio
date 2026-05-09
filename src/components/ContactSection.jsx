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
    <section
      id="contact"
      style={{ padding: sm ? "72px 1.2rem" : "110px 2rem", background: "rgba(49,54,63,0.32)" }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <SectionHeading num="04" label="Contact" title="Let's Connect" center sm={sm} />

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(22px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p style={{
            color: "rgba(238,238,238,0.63)", lineHeight: 1.82,
            marginBottom: 30, fontFamily: C.sans,
            fontSize: sm ? 14 : 15,
          }}>
            Whether you have a project in mind, a question, or just want to say hi —
            my inbox is always open. I'll try my best to get back to you!
          </p>

          {/* CTA Button */}
          <a
            href={`mailto:${aboutData.email}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: sm ? "13px 28px" : "14px 36px",
              borderRadius: 10, background: C.accent, color: "#222831",
              textDecoration: "none", fontWeight: 700, fontFamily: C.mono,
              letterSpacing: "0.06em", minHeight: 50,
              boxShadow: "0 4px 20px rgba(118,171,174,0.3)",
              fontSize: sm ? 13 : 14,
            }}
          >
            Say Hello ✉
          </a>

          {/* Social icon row */}
          <div style={{
            marginTop: 40, display: "flex", justifyContent: "center",
            gap: sm ? 12 : 14, flexWrap: "wrap",
          }}>
            {aboutData.links.map((link) => {
              const Icon = ICON_MAP[link.icon] || Cv;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  title={link.label}
                  style={{
                    width: 50, height: 50, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(118,171,174,0.2)",
                    color: "rgba(118,171,174,0.68)", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color       = C.accent;
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.background  = "rgba(118,171,174,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color       = "rgba(118,171,174,0.68)";
                    e.currentTarget.style.borderColor = "rgba(118,171,174,0.2)";
                    e.currentTarget.style.background  = "transparent";
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
