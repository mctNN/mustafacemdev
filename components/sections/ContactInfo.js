"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";
import { RawCard } from "@/components/ui/RawCard";
import { Icon } from "@/components/ui/icon-map";
import { fadeUp } from "@/lib/motion";
import { personalInfo, socialLinks } from "@/lib/data";

export function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API kullanılamıyorsa sessizce yoksay; e-posta zaten metin olarak görünür durumda.
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="lg:col-span-1"
    >
      <RawCard className="h-full p-6">
        <h2 className="mb-6 border-b-2 border-fg pb-3 font-display text-lg font-bold uppercase text-fg">
          İletişim Bilgileri
        </h2>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="border-2 border-fg bg-accent p-3 text-accent-fg">
              <FaEnvelope />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-fg">Email</h3>
              <div className="flex items-center gap-2">
                <a href={`mailto:${personalInfo.email}`} className="truncate text-fg-muted hover:text-accent">
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="E-postayı kopyala"
                  className="shrink-0 text-fg-muted hover:text-accent"
                >
                  {copied ? <FaCheck className="text-accent" /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="border-2 border-fg bg-accent p-3 text-accent-fg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-fg">Konum</h3>
              <p className="text-fg-muted">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <h3 className="mb-4 mt-10 font-display text-base font-bold uppercase text-fg">Sosyal Medya</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center border-2 border-fg text-fg-muted transition-colors hover:bg-accent hover:text-accent-fg"
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </RawCard>
    </motion.div>
  );
}
