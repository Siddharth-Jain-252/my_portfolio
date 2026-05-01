import { C } from "../constants/theme";
import aboutData from "../data/about.json";

export default function Footer() {
  return (
    <footer style={{
      padding: "22px 1.2rem",
      textAlign: "center",
      borderTop: "1px solid rgba(118,171,174,0.07)",
    }}>
      <p style={{
        fontSize: 11, margin: 0,
        color: "rgba(238,238,238,0.25)",
        fontFamily: C.mono, letterSpacing: "0.05em",
      }}>
        Designed &amp; Built by {aboutData.name} &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
