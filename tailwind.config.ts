import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          deep: "var(--brand-deep)",
          tint: "var(--brand-tint)",
        },
        accent: { DEFAULT: "var(--accent)", fg: "var(--on-accent)" },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          faint: "var(--ink-faint)",
        },
        ground: "var(--ground)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        line: { DEFAULT: "var(--line)", strong: "var(--line-strong)" },
        ok: { DEFAULT: "var(--ok)", tint: "var(--ok-tint)" },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: { card: "0.75rem", pill: "999px" },
      maxWidth: { prose: "66ch", shell: "1200px" },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up .4s ease both" },
    },
  },
  plugins: [],
};
export default config;
