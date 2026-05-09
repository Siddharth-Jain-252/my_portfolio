import { C } from "../constants/theme";
import aboutData from "../data/about.json";

export default function Footer() {
  return (
    <footer style={{ padding: "26px 1.4rem", textAlign: "center", borderTop: `1px solid rgba(232,184,109,0.06)` }}>
      <p style={{ fontSize: 11, margin: 0, color: C.textDim, fontFamily: C.mono, letterSpacing: "0.06em" }}>
        Designed &amp; Built by{" "}
        <span style={{ color: C.accent, opacity: 0.8 }}>{aboutData.name}</span>
        {" "}&middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}