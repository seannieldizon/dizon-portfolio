import type { AppProps } from "next/app";
import { useEffect } from "react";
import { dmSans, outfit } from "../lib/fonts";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const top =
        window.scrollY +
        targetElement.getBoundingClientRect().top -
        headerHeight -
        8;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-400 focus:text-neutral-900 focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-400/50"
      >
        Skip to main content
      </a>
      <Component {...pageProps} />
    </div>
  );
}
