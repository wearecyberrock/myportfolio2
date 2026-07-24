import { useEffect, useState } from "react";

/**
 * Custom hook that returns a normalized scroll progress value (0–1)
 * for a given scrollable range.
 *
 * @param {Object} options
 * @param {number} options.start - Scroll position (px) where progress = 0. Default: 0
 * @param {number} options.end - Scroll position (px) where progress = 1. Default: document height - window height
 * @returns {number} progress - Value between 0 and 1
 */
export function useScrollProgress({ start = 0, end } = {}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const endPos =
        end ?? document.documentElement.scrollHeight - window.innerHeight;
      const range = endPos - start;

      if (range <= 0) {
        setProgress(0);
        return;
      }

      const raw = (scrollY - start) / range;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  return progress;
}
