// Sabit, düşük opasiteli grain dokusu — tüm sayfalarda derinlik hissi katar.
// Statik bir SVG filtresi olduğu için performans maliyeti yoktur (per-frame animasyon yok).
export function NoiseOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.035] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}
