// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Accent — soft sky blue
        primary: {
          DEFAULT: "#5eb8f0",
          50: "#eef8fd",
          100: "#d6eefb",
          200: "#aedcf7",
          300: "#7ec8f3",
          400: "#5eb8f0",
          500: "#3aa0e0",
          600: "#2680bc",
          700: "#1e648f",
          800: "#1a4f70",
          900: "#0f2f44"
        },
        // Backgrounds — cool slate
        neutral: {
          DEFAULT: "#0b1220",
          50: "#e8eef7",
          100: "#c5d0e0",
          200: "#9aa8bc",
          300: "#6b7a90",
          400: "#3d4d66",
          500: "#0b1220",
          600: "#111827",
          700: "#070b14",
          800: "#05080f",
          900: "#02040a"
        },
        // Secondary surface accent
        accent: {
          DEFAULT: "#3aa0e0",
          50: "#e8f4fc",
          100: "#c5e4f7",
          200: "#8ec9ef",
          300: "#5eb8f0",
          400: "#3aa0e0",
          500: "#2680bc",
          600: "#1e648f",
          700: "#174d6e",
          800: "#11364d",
          900: "#0a2030"
        },
        // Soft off-white text (not warm cream)
        light: {
          DEFAULT: "#e8eef7",
          50: "#ffffff",
          100: "#f5f8fc",
          200: "#e8eef7",
          300: "#d4dde9",
          400: "#e8eef7",
          500: "#9aa8bc",
          600: "#6b7a90",
          700: "#3d4d66",
          800: "#1e2a3d",
          900: "#0b1220"
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-clay': '0 6px 30px rgba(58, 160, 224, 0.12)',
        'glow-primary': '0 8px 32px rgba(58, 160, 224, 0.2)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      ringColor: {
        clay: '#5eb8f0',
        primary: '#5eb8f0',
      },
      maxWidth: {
        'container': '1280px',
        'content': '768px',
      },
    }
  },
  plugins: []
};
