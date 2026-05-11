import { C } from "../constants/theme";

export default function NotLive() {
  return (
    <div style={{
      minHeight: "100vh",
      background: C.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: C.sans,
    }}>
      <span style={{ fontSize: 48, marginBottom: 16 }}>🚧</span>
      <h1 style={{
        color: C.text,
        fontSize: 28,
        fontWeight: 700,
        margin: "0 0 12px",
        letterSpacing: "-0.02em",
      }}>
        This website is not live right now
      </h1>
      <p style={{
        color: "rgba(238,238,238,0.45)",
        fontSize: 14,
        fontFamily: C.mono,
        margin: "0 0 32px",
      }}>
        Check back later — it's coming soon.
      </p>
      <a
        href="/"
        style={{
          padding: "10px 24px",
          borderRadius: 8,
          border: "1px solid rgba(118,171,174,0.3)",
          color: C.accent,
          textDecoration: "none",
          fontSize: 13,
          fontFamily: C.mono,
        }}
      >
        ← Back to portfolio
      </a>
    </div>
  );
}