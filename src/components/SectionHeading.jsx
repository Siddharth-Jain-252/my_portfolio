import { C } from "../constants/theme";

export default function SectionHeading({ num, label, title, center = false, sm = false }) {
  return (
    <div style={{ marginBottom: sm ? 30 : 52, textAlign: center ? "center" : "left" }}>
      <div style={{
        fontSize: 10.5, letterSpacing: "0.22em", color: C.accent,
        fontFamily: C.mono, textTransform: "uppercase", marginBottom: 10,
        display: "flex", alignItems: "center", gap: 10,
        justifyContent: center ? "center" : "flex-start",
      }}>
        <span style={{ color: C.accent2, opacity: 0.8 }}>{num}.</span>
        {label}
        <span style={{
          flex: center ? 0 : 1, maxWidth: 60, height: 1,
          background: `linear-gradient(90deg, ${C.accent}, transparent)`,
          display: center ? "none" : "block",
        }} />
      </div>

      <h2 style={{
        fontFamily: C.sans, fontWeight: 800, margin: 0,
        letterSpacing: "-0.025em", lineHeight: 1.1, color: C.text,
        fontSize: sm ? "1.7rem" : "clamp(1.9rem, 5vw, 2.8rem)",
      }}>
        {title}
      </h2>

      <div style={{
        width: 52, height: 3.5,
        background: `linear-gradient(90deg, ${C.accent}, ${C.accent2})`,
        borderRadius: 2, marginTop: 16,
        boxShadow: `0 0 12px rgba(232,184,109,0.4)`,
        ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
      }} />
    </div>
  );
}