"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
};

/**
 * Fade-up reveal on scroll using IntersectionObserver.
 * The .reveal CSS class has a safety-fallback animation in case
 * the observer is delayed, so content is never stuck invisible.
 */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = setTimeout(() => {
              el.classList.add("in");
            }, delay);
            io.unobserve(el);
            return () => clearTimeout(t);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
