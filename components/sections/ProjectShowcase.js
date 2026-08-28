"use client";

import { FaGithub } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { projects, socialLinks } from "@/lib/data";

export function ProjectShowcase() {
  const githubLink = socialLinks.find((s) => s.name === "GitHub");

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="font-display text-2xl font-bold uppercase text-fg">Daha Fazla Proje</h2>
        <p className="mx-auto mb-6 mt-4 max-w-2xl text-fg-muted">
          Tüm projelerimi GitHub üzerinden inceleyebilirsiniz. Her zaman yeni projeler üzerinde çalışıyorum.
        </p>
        {githubLink && (
          <a
            href={githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-fg bg-fg px-6 py-3 font-bold uppercase tracking-wide text-bg shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <FaGithub /> GitHub Profilim
          </a>
        )}
      </div>
    </div>
  );
}
