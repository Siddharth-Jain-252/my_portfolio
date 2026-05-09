import { C } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";
import skillsData from "../data/skills.json";

const CARD_COLORS = ["#E8B86D", "#F07B6B", "#7EC8C8", "#A78BFA", "#6EE7B7", "#FCA5A5"];

function SkillCard({ group, index, inView }) {
  const color = CARD_COLORS[index % CARD_COLORS.length];
  return (
    <div className="skill-card" style={{
      padding: "22px 20px", borderRadius: 14,
      background: "linear-gradient(135deg, rgba(26,34,54,0.9) 0%, rgba(17,24,39,0.7) 100%)",
      border: `1px solid rgba(232,184,109,0.1)`,
      transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transitionDelay: `${index * 0.08}s`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${color}, transparent)`, opacity: 0.7,
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{
          width: 28, height: 28, borderRadius: 8, flexShrink: 0,
          background: `linear-gradient(135deg, ${color}22, ${color}11)`,
          border: `1px solid ${color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 10, fontFamily: "monospace", color: color, fontWeight: 600,
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span style={{ fontFamily: C.sans, fontWeight: 700, fontSize: 13.5, color: C.text }}>
          {group.broad}
        </span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {group.technologies.map((tech) => (
          <span key={tech} style={{
            padding: "4px 11px", borderRadius: 20,
            fontSize: 11.5, fontFamily: C.mono,
            background: `${color}0D`, color: color, border: `1px solid ${color}28`,
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sm = useIsMobile();
  const md = useIsMobile(1024);
  const [ref, inView] = useInView();
  const cols = sm ? "1fr" : md ? "1fr 1fr" : "repeat(3, 1fr)";

  return (
    <section id="skills" style={{
      padding: sm ? "80px 1.4rem" : "120px 2rem",
      background: "rgba(17,24,39,0.4)", position: "relative",
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <SectionHeading num="02" label="Skills" title="Tech Stack" sm={sm} />
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: cols, gap: sm ? 12 : 18 }}>
          {skillsData.map((group, i) => (
            <SkillCard key={group.broad} group={group} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}