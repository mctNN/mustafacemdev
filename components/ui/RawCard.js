import { cn } from "@/lib/cn";

// Brütalist kart: blur/gradient/transparanlık yok. Derinlik sadece kalın
// border + sert offset gölgeyle (shadow-brutal) kuruluyor.
export function RawCard({ children, className, as: Comp = "div", ...props }) {
  return (
    <Comp
      className={cn("border-2 border-fg bg-bg-elevated shadow-brutal", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
