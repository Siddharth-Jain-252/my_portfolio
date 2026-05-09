import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";
import skillsData from "../data/skills.json";

export default function SkillsSection() {
  const sm  = useIsMobile();
  const md  = useIsMobile(1024);
  const [ref, inView] = useInView();

  // Responsive grid: 1 col → 2 cols → 3 cols
  const cols = sm ? "1fr" : md ? "1fr 1fr" : "repeat(3, 1fr)";

  return (
    <section
      id="skills"
      style={{ padding: sm ? "72px 1.2rem" : "110px 2rem", background: "rgba(49,54,63,0.32)" }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeading num="02" label="Skills" title="Tech Stack" sm={sm} />

        <div
          ref={ref}
          style={{
            display: "grid", gridTemplateColumns: cols, gap: sm ? 12 : 18,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
          }}
        >
          {skillsData.map((group, i) => (
            <div
              key={group.broad}
              style={{
                padding: sm ? "15px 14px" : "20px",
                borderRadius: 12, background: "rgba(34,40,49,0.85)",
                border: "1px solid rgba(118,171,174,0.11)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(118,171,174,0.38)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(118,171,174,0.11)")}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ fontFamily: C.mono, fontSize: 10, color: C.accent, opacity: 0.5 }}>
                  0{i + 1}
                </span>
                <span style={{ fontFamily: C.sans, fontWeight: 700, fontSize: 13.5, color: C.text, letterSpacing: "0.03em" }}>
                  {group.broad}
                </span>
              </div>

              {/* Tech pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {group.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "3px 10px", borderRadius: 20,
                      fontSize: 11.5, fontFamily: C.mono, letterSpacing: "0.02em",
                      background: "rgba(118,171,174,0.09)", color: C.accent,
                      border: "1px solid rgba(118,171,174,0.18)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
