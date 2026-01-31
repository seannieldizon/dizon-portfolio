// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Design System: Colors
      colors: {
        // Primary (accent) - sunlit clay
        primary: {
          DEFAULT: "#dda15e",
          50: "#f8ecdf",
          100: "#f1dabf",
          200: "#ebc79f",
          300: "#e4b57f",
          400: "#dda15e",
          500: "#d1842c",
          600: "#9d6321",
          700: "#684216",
          800: "#34210b",
          900: "#1a1005"
        },
        // Neutral (background/text) - black forest
        neutral: {
          DEFAULT: "#283618",
          50: "#d5e4c3",
          100: "#aac987",
          200: "#80ac4d",
          300: "#547133",
          400: "#283618",
          500: "#1f2a13",
          600: "#18200e",
          700: "#101509",
          800: "#080b05",
          900: "#000000"
        },
        // Accent (secondary) - olive leaf
        accent: {
          DEFAULT: "#606c38",
          50: "#e2e7d1",
          100: "#c5d0a3",
          200: "#a9b876",
          300: "#88994f",
          400: "#606c38",
          500: "#4c562c",
          600: "#394121",
          700: "#262b16",
          800: "#13160b",
          900: "#0a0c06"
        },
        // Light text - cornsilk
        light: {
          DEFAULT: "#fefae0",
          50: "#fffef9",
          100: "#fffdf3",
          200: "#fefced",
          300: "#fefbe7",
          400: "#fefae0",
          500: "#fbeb84",
          600: "#f8dc27",
          700: "#baa206",
          800: "#5d5103",
          900: "#2e2801"
        },
        // Legacy palette (maintained for backward compatibility)
        olive_leaf: {
          DEFAULT: "#606c38",
          100: "#13160b",
          200: "#262b16",
          300: "#394121",
          400: "#4c562c",
          500: "#606c38",
          600: "#88994f",
          700: "#a9b876",
          800: "#c5d0a3",
          900: "#e2e7d1"
        },
        black_forest: {
          DEFAULT: "#283618",
          100: "#080b05",
          200: "#101509",
          300: "#18200e",
          400: "#1f2a13",
          500: "#283618",
          600: "#547133",
          700: "#80ac4d",
          800: "#aac987",
          900: "#d5e4c3"
        },
        cornsilk: {
          DEFAULT: "#fefae0",
          100: "#5d5103",
          200: "#baa206",
          300: "#f8dc27",
          400: "#fbeb84",
          500: "#fefae0",
          600: "#fefbe7",
          700: "#fefced",
          800: "#fffdf3",
          900: "#fffef9"
        },
        sunlit_clay: {
          DEFAULT: "#dda15e",
          100: "#34210b",
          200: "#684216",
          300: "#9d6321",
          400: "#d1842c",
          500: "#dda15e",
          600: "#e4b57f",
          700: "#ebc79f",
          800: "#f1dabf",
          900: "#f8ecdf"
        },
        copperwood: {
          DEFAULT: "#bc6c25",
          100: "#251507",
          200: "#4b2b0f",
          300: "#704016",
          400: "#96561e",
          500: "#bc6c25",
          600: "#d98840",
          700: "#e3a570",
          800: "#ecc3a0",
          900: "#f6e1cf"
        }
      },
      // Design System: Typography
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
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
      // Design System: Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Design System: Border Radius
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      // Design System: Shadows
      boxShadow: {
        'glow-clay': '0 6px 30px rgba(221, 161, 94, 0.12)',
        'glow-primary': '0 8px 32px rgba(221, 161, 94, 0.2)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      // Design System: Ring Colors
      ringColor: {
        clay: '#dda15e',
        primary: '#dda15e',
      },
      // Max Width Container
      maxWidth: {
        'container': '1280px',
        'content': '768px',
      },
    }
  },
  plugins: []
};
