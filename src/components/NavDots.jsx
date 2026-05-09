import { C, SECTIONS } from "../constants/theme";

/**
 * Vertical pill dots fixed to the right side — desktop only.
 * Active section dot expands horizontally.
 */
export default function NavDots({ active }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{
      position: "fixed", right: 18, top: "50%",
      transform: "translateY(-50%)",
      display: "flex", flexDirection: "column", gap: 10, zIndex: 200,
    }}>
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          title={s.label}
          onClick={() => scrollTo(s.id)}
          style={{
            width: active === s.id ? 28 : 8,
            height: 8, borderRadius: 4, border: "none", cursor: "pointer", padding: 0,
            background: active === s.id ? C.accent : "rgba(118,171,174,0.28)",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
      ))}
    </div>
  );
}
