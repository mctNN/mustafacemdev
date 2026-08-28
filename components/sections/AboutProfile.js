"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { HardButton } from "@/components/ui/HardButton";
import { RawCard } from "@/components/ui/RawCard";
import { Icon } from "@/components/ui/icon-map";
import { fadeUp } from "@/lib/motion";
import { personalInfo, aboutStats, socialLinks } from "@/lib/data";

const profileLines = [
  [{ type: "comment", text: "// Kişisel Bilgiler" }],
  [
    { type: "keyword", text: "const " },
    { type: "variable", text: "name" },
    { type: "punct", text: " = " },
    { type: "string", text: `'${personalInfo.fullName}'` },
    { type: "punct", text: ";" },
  ],
  [
    { type: "keyword", text: "const " },
    { type: "variable", text: "title" },
    { type: "punct", text: " = " },
    { type: "string", text: `'${personalInfo.title}'` },
    { type: "punct", text: ";" },
  ],
  [
    { type: "keyword", text: "const " },
    { type: "variable", text: "location" },
    { type: "punct", text: " = " },
    { type: "string", text: `'${personalInfo.location}'` },
    { type: "punct", text: ";" },
  ],
  [
    { type: "keyword", text: "const " },
    { type: "variable", text: "email" },
    { type: "punct", text: " = " },
    { type: "string", text: `'${personalInfo.email}'` },
    { type: "punct", text: ";" },
  ],
];

export function AboutProfile() {
  const hasCv = Boolean(personalInfo.cvUrl);
  const cvHref = personalInfo.cvUrl ?? `mailto:${personalInfo.email}?subject=CV%20Talebi`;
  const cvLabel = hasCv ? "CV İndir" : "CV Talep Et";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="lg:col-span-1"
      >
        <CodeTerminal fileName="profile.js" lines={profileLines} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-2"
      >
        <RawCard className="p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold uppercase text-fg">
            Merhaba, Ben {personalInfo.displayName}!
          </h2>

          <div className="mt-4 space-y-4 text-fg-muted">
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {aboutStats.map((stat) =>
              stat.type === "counter" ? (
                <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ) : (
                <div key={stat.label} className="border-2 border-fg bg-bg-elevated p-3">
                  <div className="font-mono text-xs uppercase tracking-wide text-fg-muted">{stat.label}</div>
                  <div className="font-display text-sm font-bold text-fg">{stat.display}</div>
                </div>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HardButton href="/contact" className="bg-accent px-5 py-2.5 text-accent-fg">
              İletişime Geç
            </HardButton>
            <HardButton href={cvHref} className="gap-2 bg-bg-elevated px-5 py-2.5 text-fg">
              <FaDownload size={14} /> {cvLabel}
            </HardButton>

            <div className="ml-auto flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center border-2 border-fg text-fg-muted transition-colors hover:bg-accent hover:text-accent-fg"
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </RawCard>
      </motion.div>
    </div>
  );
}
