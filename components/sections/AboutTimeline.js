"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import { gsap, ensureGsapPlugins } from "@/lib/gsap";
import { RawCard } from "@/components/ui/RawCard";
import { experience, education, technicalSkillTags } from "@/lib/data";

function TimelineList({ items }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      gsap.fromTo(
        containerRef.current.querySelector(".timeline-line"),
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 65%",
            scrub: 0.5,
          },
        }
      );
      gsap.from(containerRef.current.querySelectorAll(".timeline-item"), {
        opacity: 0,
        x: -16,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative pl-8">
      <div className="absolute bottom-0 left-3 top-0 w-1 bg-border/30" />
      <div className="timeline-line absolute bottom-0 left-3 top-0 w-1 bg-accent" />
      <div className="space-y-6">
        {items.map((item) => (
          <div key={`${item.title}-${item.subtitle}`} className="timeline-item relative">
            <div className="absolute -left-[1.85rem] top-0.5 h-4 w-4 border-2 border-fg bg-accent" />
            <div className="font-mono text-sm font-bold text-accent">{item.period}</div>
            <div className="font-bold text-fg">{item.title}</div>
            <div className="text-sm text-fg-muted">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutTimeline() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <RawCard className="p-6">
        <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold uppercase text-fg">
          <FaCode className="text-accent" /> Teknik Yetenekler
        </h3>
        <div className="flex flex-wrap gap-2">
          {technicalSkillTags.map((skill) => (
            <span key={skill} className="border-2 border-fg px-3 py-1.5 font-mono text-xs uppercase text-fg-muted">
              {skill}
            </span>
          ))}
        </div>
      </RawCard>

      <RawCard className="p-6">
        <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-bold uppercase text-fg">
          <FaGraduationCap className="text-accent" /> Eğitim
        </h3>
        <TimelineList items={education} />
      </RawCard>

      <RawCard className="p-6 md:col-span-2">
        <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-bold uppercase text-fg">
          <FaCode className="text-accent" /> Deneyim
        </h3>
        <TimelineList items={experience} />
      </RawCard>
    </div>
  );
}
