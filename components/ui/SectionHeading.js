"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const isCenter = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={cn("mb-12 md:mb-16 max-w-2xl", isCenter ? "mx-auto text-center" : "text-left")}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-block border-2 border-fg bg-accent px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-accent-fg",
            isCenter && "mx-auto"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h1 className="font-display text-display-2 font-bold uppercase text-fg">{title}</h1>
      <div className={cn("mt-5 h-2 w-20 bg-fg", isCenter && "mx-auto")} />
      {subtitle && <p className="mt-5 text-lg text-fg-muted">{subtitle}</p>}
    </motion.div>
  );
}
