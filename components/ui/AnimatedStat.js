"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function AnimatedStat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 36;
    const duration = 1100;
    const increment = value / steps;
    let current = 0;
    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      current += increment;
      if (frame >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="border-2 border-fg bg-bg-elevated p-3">
      <div className="font-mono text-xs uppercase tracking-wide text-fg-muted">{label}</div>
      <div className="font-display text-lg font-bold text-fg">
        {count}
        {suffix}
      </div>
    </div>
  );
}
