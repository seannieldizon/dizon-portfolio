// tailwind.config.js — design tokens (see docs/redesign-strategy.md §4)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F4F2EC", deep: "#EAE6DC" },
        card: "#FFFFFF",
        ink: { DEFAULT: "#15171B", soft: "#3A3E45", raised: "#1E2126", line: "#2E3238" },
        muted: { DEFAULT: "#62666E", dark: "#A6AAB1" },
        line: { DEFAULT: "#DCD7CB", strong: "#C9C3B5" },
        accent: { DEFAULT: "#B8441A", hover: "#9C3713", soft: "#F5E2D6", bright: "#F0884F" },
        success: "#2F6B4F",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 5.6vw, 4.75rem)", { lineHeight: "1.04", letterSpacing: "-0.012em" }],
        "display-lg": ["clamp(2.1rem, 4vw, 3.4rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.6rem, 2.6vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        frame: "0 1px 0 rgba(21,23,27,0.04), 0 24px 48px -24px rgba(21,23,27,0.28)",
        lift: "0 18px 40px -22px rgba(21,23,27,0.35)",
      },
    },
  },
  plugins: [],
};
