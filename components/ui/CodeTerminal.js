"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ensureGsapPlugins } from "@/lib/gsap";
import { cn } from "@/lib/cn";

function tokenClass(type) {
  switch (type) {
    case "keyword":
      return "text-accent";
    case "variable":
      return "text-fg font-bold";
    case "string":
      return "text-amber-500";
    case "comment":
      return "italic text-fg-muted";
    case "property":
      return "text-fg";
    case "punct":
      return "text-fg-muted";
    default:
      return "text-fg";
  }
}

// Sekmeli/dosya çubuklu, satır satır GSAP ile "yazılan" sözde-terminal.
// Her satır kendi genişliğine sahip (w-max) bir kutuya sarılıp clip-path ile
// soldan sağa açılıyor — gerçek karakter ekleme yapılmadığı için ekran
// okuyucular metni bozuk/parçalı okumuyor.
export function CodeTerminal({ fileName = "developer.js", lines, className }) {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  lineRefs.current = [];

  const registerLine = (el) => {
    if (el) lineRefs.current.push(el);
  };

  useGSAP(
    () => {
      ensureGsapPlugins();
      const tl = gsap.timeline({ delay: 0.5 });
      lineRefs.current.forEach((el, i) => {
        const len = Number(el.dataset.len) || 20;
        tl.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: Math.max(0.25, len * 0.03),
            ease: `steps(${Math.max(4, Math.round(len / 2))})`,
          },
          i === 0 ? undefined : "-=0.05"
        );
      });
      tl.to(".terminal-cursor", { opacity: 1, repeat: -1, yoyo: true, duration: 0.5 }, "-=0.1");
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn("overflow-hidden border-2 border-fg bg-bg-elevated shadow-brutal", className)}>
      <div className="flex items-center gap-2 border-b-2 border-fg bg-accent px-4 py-3 text-accent-fg">
        <span className="h-3 w-3 border-2 border-accent-fg" />
        <span className="h-3 w-3 border-2 border-accent-fg" />
        <span className="h-3 w-3 border-2 border-accent-fg" />
        <span className="ml-2 truncate font-mono text-xs font-bold uppercase tracking-wide">{fileName}</span>
      </div>
      <div className="space-y-2 overflow-x-auto p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            ref={registerLine}
            data-len={line.reduce((acc, t) => acc + t.text.length, 0)}
            className="block w-max whitespace-pre"
          >
            {line.map((token, j) => (
              <span key={j} className={tokenClass(token.type)}>
                {token.text}
              </span>
            ))}
          </div>
        ))}
        <span className="terminal-cursor mt-1 inline-block h-4 w-2 bg-accent opacity-0 align-middle" aria-hidden="true" />
      </div>
    </div>
  );
}
