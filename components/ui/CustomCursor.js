"use client";

import { useEffect, useRef, useState } from "react";

// Sadece "pointer: fine" (fare) cihazlarda ve prefers-reduced-motion kapalıyken
// çalışır; native imleci gizlemez, sadece üzerine ince bir accent iz/halka ekler.
export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reduceMotion) return;
    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf;

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    }

    function loop() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function handleOver(e) {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        ringRef.current?.classList.add("scale-150", "border-accent", "bg-accent/20");
      }
    }
    function handleOut(e) {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        ringRef.current?.classList.remove("scale-150", "border-accent", "bg-accent/20");
      }
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 bg-accent"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 border-2 border-fg/40 transition-[transform,background-color,border-color] duration-150 ease-out"
        aria-hidden="true"
      />
    </>
  );
}
