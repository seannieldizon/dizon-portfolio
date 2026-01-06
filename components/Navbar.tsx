// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  /**
   * Scroll helper that accounts for the fixed header height.
   */
  const scrollToElement = (el: HTMLElement | null) => {
    if (!el) return;
    // compute header height from DOM (works even if motion ref isn't set)
    const headerEl = document.querySelector("header");
    const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top - headerHeight - 8; // small gap
    window.scrollTo({ top, behavior: "smooth" });
  };

  /**
   * Smooth-scrolling handler for internal links.
   * Prevents the default jump, accounts for the fixed header height,
   * performs smooth scroll, and closes the mobile menu if open.
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | undefined, href: string) => {
    if (e) e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (!el) {
      // fallback to changing the hash (so browser history still works)
      if (typeof window !== "undefined") {
        window.location.hash = href;
      }
      setOpen(false);
      return;
    }

    // If the mobile menu is open, close it first and wait for the collapse animation to finish
    // (the menu uses a 0.25s animate/exit in the component). Waiting prevents layout shift
    // that would make the scroll target wrong on mobile.
    if (open) {
      setOpen(false);
      // match a bit more than animation duration for safety
      setTimeout(() => scrollToElement(el), 260);
    } else {
      scrollToElement(el);
    }
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-label="Primary navigation"
    >
      <motion.div
        className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-black-forest-500/90 border-b border-white/5" : "bg-black/60"
        }`}
      >
        <motion.a
          href="#home"
          className="text-white font-semibold text-lg relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Sean Niel Dizon
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sunlit-clay-500 group-hover:w-full transition-all duration-300" />
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-sunlit-clay-500 relative transition-colors duration-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sunlit-clay-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}

          <motion.a
            href="/resume.pdf"
            className="ml-2 px-3 py-1 border border-white/20 rounded hover:bg-sunlit-clay-500/10 hover:border-sunlit-clay-500/50 transition-all duration-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-gray-200 hover:text-sunlit-clay-500 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </motion.button>
      </motion.div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-black-forest-500/95 backdrop-blur-md border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="px-6 py-4 flex flex-col gap-3 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-sunlit-clay-500 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06 + 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                className="mt-2 inline-block px-4 py-2 border rounded hover:bg-sunlit-clay-500/10 hover:border-sunlit-clay-500/50 transition-all"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
