"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";
import { EASE_OUT_EXPO } from "@/lib/motion";

// Sadece <main> içeriğini sarar — Header/Footer layout.js'de bunun DIŞINDA kalır,
// aksi halde her route değişiminde onlar da gereksiz remount/animasyona girer.
export function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
        onAnimationComplete={() => {
          // Yeni sayfanın DOM yüksekliği eskisinden farklı olabilir,
          // ScrollTrigger pozisyonlarını yeniden hesaplat.
          if (typeof window !== "undefined") ScrollTrigger.refresh();
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
