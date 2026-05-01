import { useState, useEffect } from "react";

/**
 * Returns true when the viewport width is below `bp` (default 768px).
 * Updates reactively on window resize.
 */
export function useIsMobile(bp = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < bp
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < bp);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, [bp]);

  return isMobile;
}
