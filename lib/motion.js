// Framer Motion ve GSAP çağrıları arasında paylaşılan easing/süre sabitleri.
// Brütalist konsept "yumuşak" değil "keskin/ani" hareket ister: kısa süreler, sert çıkışlar.
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
export const EASE_SNAP = [0.16, 1, 0.3, 1];

export const DURATION = {
  micro: 0.12,
  normal: 0.25,
  slow: 0.4,
  reveal: 0.45,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE_SNAP } },
};

export const staggerContainer = (stagger = 0.07, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_SNAP } },
};
