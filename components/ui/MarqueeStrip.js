import { cn } from "@/lib/cn";

// Dekoratif kayan şerit — içerik iki kez basılıp %50 kaydırılarak dikişsiz
// döngü sağlanır. Tekrarlı/dekoratif olduğu için ekran okuyuculardan gizlenir.
export function MarqueeStrip({ items, className }) {
  return (
    <div
      className={cn("overflow-hidden border-y-2 border-fg bg-accent text-accent-fg", className)}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-3 px-4 py-2 font-mono text-sm font-bold uppercase tracking-wide sm:text-base"
              >
                {item}
                <span>◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
