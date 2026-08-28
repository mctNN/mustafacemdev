"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import { RawCard } from "@/components/ui/RawCard";
import { EASE_SNAP } from "@/lib/motion";
import { cn } from "@/lib/cn";

const STATUS_META = {
  live: { badge: "Canlı", badgeClass: "bg-accent text-accent-fg" },
  delivered: { badge: "Stark Bilişim Projesi", badgeClass: "bg-bg text-fg-muted" },
  concept: { badge: "Konsept Çalışma", badgeClass: "bg-bg text-fg-muted" },
};

const NO_LINK_NOTE = {
  delivered: "Bu proje Stark Bilişim bünyesinde tamamlandı; şu anda herkese açık bir demo bağlantısı bulunmuyor.",
  concept: "Bu bir konsept çalışmasıdır; canlı bir demo veya kod deposu bulunmuyor.",
};

export function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const meta = STATUS_META[project.status] ?? STATUS_META.concept;
  const hasLinks = Boolean(project.demoHref || project.githubHref);

  return (
    <motion.div layout transition={{ duration: 0.3, ease: EASE_SNAP }}>
      <RawCard className="overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-4 p-6 text-left"
          aria-expanded={open}
        >
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg font-bold uppercase text-fg">{project.title}</h3>
              <span className={cn("border-2 border-fg px-2 py-0.5 font-mono text-xs font-bold uppercase", meta.badgeClass)}>
                {meta.badge}
              </span>
            </div>
            <p className="text-sm text-fg-muted">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border-2 border-fg/30 px-2 py-1 font-mono text-xs text-fg-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <FaChevronDown
            className={cn("mt-1 shrink-0 text-fg transition-transform", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_SNAP }}
              className="overflow-hidden border-t-2 border-fg"
            >
              <div className="space-y-3 p-6 pt-4 text-sm">
                {project.problem && (
                  <div>
                    <span className="font-bold text-fg">Problem: </span>
                    <span className="text-fg-muted">{project.problem}</span>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <span className="font-bold text-fg">Çözüm: </span>
                    <span className="text-fg-muted">{project.solution}</span>
                  </div>
                )}
                {!hasLinks && NO_LINK_NOTE[project.status] && (
                  <p className="text-xs italic text-fg-muted">{NO_LINK_NOTE[project.status]}</p>
                )}
                {hasLinks && (
                  <div className="flex gap-3 pt-1">
                    {project.githubHref && (
                      <a
                        href={project.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-2 border-fg px-3 py-1.5 font-mono text-xs font-bold uppercase text-fg transition-colors hover:bg-fg hover:text-bg"
                      >
                        <FaGithub /> Kod
                      </a>
                    )}
                    {project.demoHref && (
                      <Link
                        href={project.demoHref}
                        target={project.demoHref.startsWith("http") ? "_blank" : undefined}
                        rel={project.demoHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 border-2 border-fg bg-accent px-3 py-1.5 font-mono text-xs font-bold uppercase text-accent-fg"
                      >
                        <FaExternalLinkAlt /> Demo
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </RawCard>
    </motion.div>
  );
}
