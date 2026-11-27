// lib/fonts.ts
import { DM_Sans, Fraunces } from "next/font/google";

// Body & UI — kept from the previous site for continuity and readability.
export const sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Display — an editorial serif with optical sizing, used for headlines only.
export const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz"],
});
