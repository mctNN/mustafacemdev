/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "oklch(var(--bg) / <alpha-value>)",
          elevated: "oklch(var(--bg-elevated) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "oklch(var(--fg) / <alpha-value>)",
          muted: "oklch(var(--fg-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          fg: "oklch(var(--accent-fg) / <alpha-value>)",
        },
        border: "oklch(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 7vw + 1rem, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.01em" }],
        "display-2": ["clamp(2.25rem, 5vw + 1rem, 4.5rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "brutal-sm": "4px 4px 0 0 oklch(var(--fg))",
        brutal: "8px 8px 0 0 oklch(var(--fg))",
        "brutal-accent": "8px 8px 0 0 oklch(var(--accent))",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
