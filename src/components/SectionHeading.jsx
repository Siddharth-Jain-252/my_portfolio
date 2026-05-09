import { C } from "../constants/theme";

/**
 * Reusable section heading with numbered label, title, and accent underline.
 *
 * Props:
 *  num    – e.g. "01"
 *  label  – e.g. "About"
 *  title  – main heading text
 *  center – center-align everything (default false)
 *  sm     – use smaller font sizes for mobile (default false)
 */
export default function SectionHeading({ num, label, title, center = false, sm = false }) {
  return (
    <div style={{ marginBottom: sm ? 28 : 48, textAlign: center ? "center" : "left" }}>
      {/* Numbered label */}
      <div style={{
        fontSize: 11, letterSpacing: "0.18em", color: C.accent,
        fontFamily: C.mono, textTransform: "uppercase", marginBottom: 10,
      }}>
        {num}. {label}
      </div>

      {/* Main title */}
      <h2 style={{
        fontFamily: C.sans, fontWeight: 800, margin: 0,
        letterSpacing: "-0.02em", lineHeight: 1.12, color: C.text,
        fontSize: sm ? "1.65rem" : "clamp(1.8rem, 5vw, 2.6rem)",
      }}>
        {title}
      </h2>

      {/* Accent bar */}
      <div style={{
        width: 44, height: 3, background: C.accent, borderRadius: 2, marginTop: 14,
        ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
      }} />
    </div>
  );
}
