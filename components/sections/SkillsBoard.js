"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { gsap, ensureGsapPlugins } from "@/lib/gsap";
import { RawCard } from "@/components/ui/RawCard";
import { Icon } from "@/components/ui/icon-map";
import { frontendSkills, backendSkills, otherSkills } from "@/lib/data";

function SkillCard({ skill }) {
  const barRef = useRef(null);

  useGSAP(() => {
    ensureGsapPlugins();
    if (!barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      {
        width: `${skill.level}%`,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: barRef.current, start: "top 90%" },
      }
    );
  });

  return (
    <div className="flex items-center gap-3 border-2 border-fg bg-bg-elevated p-4">
      <div className="text-2xl text-accent">
        <Icon name={skill.icon} />
      </div>
      <div className="flex-grow">
        <div className="mb-1.5 flex justify-between font-mono text-xs uppercase tracking-wide">
          <span className="font-bold text-fg">{skill.name}</span>
          <span className="text-fg-muted">{skill.level}%</span>
        </div>
        <div className="h-2.5 w-full border-2 border-fg bg-bg">
          <div ref={barRef} className="h-full w-0 bg-accent" />
        </div>
      </div>
    </div>
  );
}

function SkillColumn({ title, icon, skills }) {
  return (
    <RawCard className="mb-5 p-6">
      <h2 className="mb-5 flex items-center gap-2 font-display text-xl font-bold uppercase text-fg">
        {icon} {title}
      </h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </RawCard>
  );
}

export function SkillsBoard() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <SkillColumn title="Frontend" icon={<FaReact className="text-accent" />} skills={frontendSkills} />
      <SkillColumn title="Backend" icon={<FaNodeJs className="text-accent" />} skills={backendSkills} />
      <div>
        <SkillColumn title="Diğer" icon={<FaCode className="text-accent" />} skills={otherSkills} />
        <RawCard className="p-6">
          <h2 className="mb-4 font-display text-xl font-bold uppercase text-fg">Öğrenim Sürecim</h2>
          <p className="text-sm text-fg-muted">
            Teknoloji dünyasında güncel kalmak için düzenli olarak yeni araçlar ve kütüphaneler öğrenmeye devam ediyorum.
          </p>
        </RawCard>
      </div>
    </div>
  );
}
