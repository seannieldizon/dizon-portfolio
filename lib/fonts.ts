// lib/fonts.ts
import { Inter, Poppins } from 'next/font/google';

// Primary font for body text - Inter (clean, readable)
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

// Display font for headings - Poppins (modern, professional)
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});
