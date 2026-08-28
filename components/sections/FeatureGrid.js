"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ensureGsapPlugins } from "@/lib/gsap";
import { RawCard } from "@/components/ui/RawCard";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Icon } from "@/components/ui/icon-map";
import { Container } from "@/components/ui/Container";
import { heroFeatures, techMarquee } from "@/lib/data";

export function FeatureGrid() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      gsap.from(".feature-card", {
        opacity: 0,
        y: 24,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <MarqueeStrip items={techMarquee} className="mt-4" />

      <section className="py-16 md:py-20">
        <Container>
          <div ref={containerRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {heroFeatures.map((item) => (
              <RawCard
                key={item.title}
                className="feature-card p-6 text-center transition-[transform,box-shadow] duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border-2 border-fg bg-accent text-accent-fg">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold uppercase text-fg">{item.title}</h3>
                <p className="text-sm text-fg-muted">{item.desc}</p>
              </RawCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
