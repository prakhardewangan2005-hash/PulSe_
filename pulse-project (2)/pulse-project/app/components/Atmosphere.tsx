"use client";

import { useEffect } from "react";

/**
 * Atmosphere — premium ambient layers.
 *  1. Cursor-reactive aurora (two soft gradient blobs that follow the mouse on a 2s lag)
 *  2. Scroll progress bar (a gradient hairline at the top of the page)
 * Both are driven by CSS variables updated from JS, for GPU-cheap motion.
 */
export default function Atmosphere() {
  useEffect(() => {
    let raf = 0;

    function onMove(e: MouseEvent) {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mx = (e.clientX / window.innerWidth) * 100;
        const my = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty("--mx", `${mx}%`);
        document.documentElement.style.setProperty("--my", `${my}%`);
      });
    }

    function onScroll() {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, (scrolled / max) * 100);
      document.documentElement.style.setProperty("--progress", `${pct}%`);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="aurora-base" aria-hidden />
      <div className="aurora" aria-hidden />
      <div className="scroll-progress" aria-hidden />
    </>
  );
}
