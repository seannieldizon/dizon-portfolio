// components/Navbar.tsx
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-2" onClick={close}>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Sean Niel Dizon</span>
          <span className="hidden text-xs font-medium text-muted sm:inline">Websites &amp; business systems</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 min-[900px]:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary ml-3 !min-h-[42px] !px-5 !text-sm">
            Discuss your project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink min-[900px]:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-paper min-[900px]:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-col py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="border-b border-line py-3.5 font-display text-2xl text-ink last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={close} className="btn-primary mt-4 w-full">
            Discuss your project
          </Link>
        </nav>
      </div>
    </header>
  );
}
