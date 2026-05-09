import { C, SECTIONS } from "../constants/theme";

export default function NavDots({ active }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{
      position: "fixed", right: 20, top: "50%",
      transform: "translateY(-50%)",
      display: "flex", flexDirection: "column", gap: 12, zIndex: 200,
    }}>
      {SECTIONS.map((s) => (
        <button key={s.id} title={s.label} onClick={() => scrollTo(s.id)} style={{
          width: active === s.id ? 30 : 8,
          height: 8, borderRadius: 4, border: "none", cursor: "pointer", padding: 0,
          background: active === s.id
            ? `linear-gradient(90deg, ${C.accent}, ${C.accent2})`
            : "rgba(232,184,109,0.22)",
          transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: active === s.id ? "0 0 10px rgba(232,184,109,0.4)" : "none",
        }} />
      ))}
    </div>
  );
}