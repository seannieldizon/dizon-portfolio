// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "certifications",
  "projects",
  "achievements",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const scrollToElement = (el: HTMLElement | null) => {
    if (!el) return;
    const headerEl = document.querySelector("header");
    const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined,
    href: string
  ) => {
    if (e) e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) {
      setOpen(false);
      return;
    }
    if (open) {
      setOpen(false);
      setTimeout(() => scrollToElement(el), 240);
    } else {
      scrollToElement(el);
    }
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      aria-label="Primary navigation"
    >
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-neutral-500/85 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display font-bold text-light text-base md:text-lg tracking-tight shrink-0"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            {profile.shortName}
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.id ||
                (link.id === "experience" && activeSection === "certifications");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary-300 bg-primary-400/10 font-semibold"
                      : "text-light/70 hover:text-primary-300 hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={profile.resumePath}
              download
              className="ml-2 btn-secondary !px-3.5 !py-1.5 text-sm"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-light/90 hover:text-primary-300 hover:bg-white/5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden bg-neutral-500/95 backdrop-blur-xl border-b border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="menu"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg ${
                      isActive
                        ? "text-primary-300 font-semibold bg-primary-400/10"
                        : "text-light/80 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={profile.resumePath}
                download
                className="mt-2 btn-secondary text-center text-sm"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
