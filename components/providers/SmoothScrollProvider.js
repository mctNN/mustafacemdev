"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, ensureGsapPlugins } from "@/lib/gsap";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

// Root layout'ta Header/Footer'la aynı seviyede, kalıcı bir provider.
// Route değişiminde unmount olmadığı için Lenis instance'ı sayfalar arası korunur.
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    ensureGsapPlugins();

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = instance;
    setLenis(instance);

    // Lenis kendi rAF döngüsünü açmak yerine gsap.ticker'a bağlanıyor,
    // böylece tek bir sürücü döngüsü kalıyor ve ScrollTrigger senkron ilerliyor.
    const onTick = (time) => instance.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    instance.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(onTick);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // Next.js'in native scroll-restore davranışıyla Lenis'in animasyonlu
  // scroll'unun çakışmaması için route değişiminde anında en üste dönülür.
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
