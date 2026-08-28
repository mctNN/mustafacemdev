"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import { RawBackdrop } from "@/components/ui/RawBackdrop";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { HardButton } from "@/components/ui/HardButton";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { personalInfo } from "@/lib/data";

const terminalLines = [
  [{ type: "comment", text: "// Mustafa Cem Taşkın" }],
  [
    { type: "keyword", text: "const " },
    { type: "variable", text: "developer" },
    { type: "punct", text: " = {" },
  ],
  [
    { type: "property", text: "  name" },
    { type: "punct", text: ": " },
    { type: "string", text: "'Mustafa Cem'" },
    { type: "punct", text: "," },
  ],
  [
    { type: "property", text: "  role" },
    { type: "punct", text: ": " },
    { type: "string", text: "'Founder @ Stark Bilişim'" },
    { type: "punct", text: "," },
  ],
  [
    { type: "property", text: "  skills" },
    { type: "punct", text: ": [" },
    { type: "string", text: "'JavaScript'" },
    { type: "punct", text: ", " },
    { type: "string", text: "'React'" },
    { type: "punct", text: ", " },
    { type: "string", text: "'Node.js'" },
    { type: "punct", text: "]," },
  ],
  [
    { type: "property", text: "  location" },
    { type: "punct", text: ": " },
    { type: "string", text: "'Türkiye'" },
  ],
  [{ type: "punct", text: "};" }],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
      <RawBackdrop />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="show">
          <motion.span
            variants={staggerItem}
            className="mb-6 inline-block border-2 border-fg bg-bg-elevated px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-fg"
          >
            merhaba@dünya ~
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="font-display text-display-1 font-bold uppercase leading-[0.88] text-fg"
          >
            Kod yazarım.
            <br />
            <span className="bg-accent px-2 text-accent-fg">Geri kalanı</span>
            <br />
            önemsiz.
          </motion.h1>

          <motion.div variants={staggerItem} className="mt-7 h-8 font-mono text-lg font-bold uppercase tracking-wide text-fg-muted md:text-xl">
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 1500])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p variants={staggerItem} className="mt-6 max-w-lg text-base text-fg-muted md:text-lg">
            Web uygulamaları geliştiren, kullanıcı deneyimine önem veren ve modern teknolojileri
            kullanan bir yazılım geliştiriciyim.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap gap-4">
            <HardButton href="/projects" className="gap-2 bg-accent px-6 py-3 text-accent-fg">
              Projelerimi Gör <FaArrowRight size={14} />
            </HardButton>
            <HardButton href="/contact" className="bg-bg-elevated px-6 py-3 text-fg">
              İletişime Geç
            </HardButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div
            className="absolute -right-3 -top-3 z-10 hidden -rotate-6 border-2 border-fg bg-bg-elevated px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-fg shadow-brutal-sm sm:block"
          >
            {personalInfo.location}
          </div>
          <CodeTerminal lines={terminalLines} />
        </motion.div>
      </div>
    </section>
  );
}
