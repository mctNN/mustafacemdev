import Link from "next/link";
import { cn } from "@/lib/cn";

// Klasik neo-brütalist "bas" etkisi: buton varsayılan halde offset sert gölge
// taşır, hover/active'de gölge kadar kayıp gölgesini kaybederek "basılmış" görünür.
// Saf CSS/Tailwind ile çalışır, JS gerekmez.
const base =
  "inline-flex items-center justify-center gap-2 border-2 border-fg font-bold uppercase tracking-wide shadow-brutal-sm transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none";

export function HardButton({ children, className, href, ...props }) {
  if (href) {
    return (
      <Link href={href} className={cn(base, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, className)} {...props}>
      {children}
    </button>
  );
}
