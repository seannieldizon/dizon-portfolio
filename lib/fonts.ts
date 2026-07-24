// lib/fonts.ts
import { DM_Sans, Outfit } from "next/font/google";

// Body — readable, modern, not a default AI stack
export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

// Display — distinctive headings
export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});
