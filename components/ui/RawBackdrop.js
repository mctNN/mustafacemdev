import { cn } from "@/lib/cn";

// Aurora/blur yerine ham, teknik bir "milimetrik kağıt" ızgarası — statik,
// animasyonsuz, sıfır performans maliyeti.
export function RawBackdrop({ className }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(oklch(var(--border) / 0.14) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--border) / 0.14) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
}
