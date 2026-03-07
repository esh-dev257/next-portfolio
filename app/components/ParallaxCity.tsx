"use client";

import { useEffect, useRef } from "react";

// ── Parallax layer config ──────────────────────────────────────────────────
// offset: fraction of scrollY added as downward translateY to counteract the
// container scrolling up. Higher = layer appears more "fixed" in the viewport.
//   offset 1.0 → completely fixed (like position:fixed)
//   offset 0.0 → scrolls normally with the page (no parallax)
const LAYERS = [
  { src: "/city/1.png", offset: 0.92 }, // sky + ground — nearly fixed
  { src: "/city/2.png", offset: 0.72 }, // far buildings
  { src: "/city/3.png", offset: 0.52 }, // mid-far buildings
  { src: "/city/4.png", offset: 0.32 }, // mid-close buildings
  { src: "/city/5.png", offset: 0.12 }, // foreground — scrolls away with page
];
// ──────────────────────────────────────────────────────────────────────────

export default function ParallaxCity() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        // Translate DOWN by (scrollY * offset) so the layer appears to move
        // slower than the container that is scrolling upward.
        el.style.transform = `translateY(${y * LAYERS[i].offset}px)`;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rendered as position:absolute inside a position:relative overflow:hidden
  // hero wrapper — city layers are fully contained and never bleed outside.
  return (
    <>
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${layer.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",
            willChange: "transform",
          }}
        />
      ))}
    </>
  );
}
