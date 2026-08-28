"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

// ScrollTrigger.registerPlugin çağrısını sadece tarayıcıda ve tek sefer yapar.
// Modül üst seviyesinde çağrılırsa `npm run build` sırasında SSR'da window hatası verir.
export function ensureGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
