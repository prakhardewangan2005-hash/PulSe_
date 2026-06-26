"use client";

import { useRef, type ReactNode } from "react";

/**
 * Premium 3D card.
 *  - Visibly extruded at rest
 *  - Mouse-tracked perspective tilt
 *  - Click triggers metallic silver shine-sweep
 */
export default function Card3D({
  children,
  className = "",
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const MAX_TILT = 10; // degrees

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * MAX_TILT * 2;
    const ry = (px - 0.5) * MAX_TILT * 2;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      el.style.transform =
        `translate3d(0, -10px, 0) scale(1.015) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "0%");
    el.style.transform = "";
  }

  function onClick() {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-shined");
    void el.offsetWidth;
    el.classList.add("is-shined");
  }

  const Element = Tag as unknown as React.ElementType;

  return (
    <Element
      ref={ref as React.RefObject<HTMLElement>}
      className={`card3d ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}
