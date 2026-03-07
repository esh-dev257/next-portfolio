"use client";

import { useEffect, useRef, useState } from "react";

// ── Cursor size config ─────────────────────────────────────────────────────
// Change these values to resize each cursor independently.
const CURSOR_SIZE = {
  default: 16, // Arrow1.png — default cursor size in px
  text: 18, // Text1.png  — text/I-beam cursor size in px
  pointer: 16, // Hand_Drag2.png — pointer cursor size in px
};
// ──────────────────────────────────────────────────────────────────────────

type CursorType = "default" | "text" | "pointer";

const CURSOR_IMAGES: Record<CursorType, string> = {
  default: "/cursor/Arrow1.png",
  text: "/cursor/Text1.png",
  pointer: "/cursor/Hand_Drag2.png",
};

// Hotspot offsets (where the "click point" is within the image, as a fraction 0–1)
const HOTSPOT: Record<CursorType, { x: number; y: number }> = {
  default: { x: 0, y: 0 }, // Arrow tip at top-left
  text: { x: 0.5, y: 0.5 }, // I-beam centered
  pointer: { x: 0.35, y: 0 }, // Finger tip near top
};

function getCursorType(el: Element | null): CursorType {
  if (!el) return "default";
  const tag = el.tagName.toLowerCase();
  const role = el.getAttribute("role");
  const tabIndex = el.getAttribute("tabindex");

  if (
    tag === "a" ||
    tag === "button" ||
    tag === "select" ||
    tag === "summary" ||
    role === "button" ||
    (tabIndex !== null && tabIndex !== "-1")
  )
    return "pointer";

  if (
    tag === "input" ||
    tag === "textarea" ||
    el.hasAttribute("contenteditable")
  )
    return "text";

  return "default";
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const posRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setCursorType(getCursorType(el));

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        const type = getCursorType(el);
        const size = CURSOR_SIZE[type];
        const hot = HOTSPOT[type];
        cursorRef.current.style.transform = `translate(${e.clientX - size * hot.x}px, ${e.clientY - size * hot.y}px)`;
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const size = CURSOR_SIZE[cursorType];

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 99999,
        imageRendering: "pixelated",
        willChange: "transform",
        transition: "width 0.05s, height 0.05s",
      }}
    >
      <img
        src={CURSOR_IMAGES[cursorType]}
        alt=""
        width={size}
        height={size}
        style={{ display: "block", imageRendering: "pixelated" }}
        draggable={false}
      />
    </div>
  );
}
