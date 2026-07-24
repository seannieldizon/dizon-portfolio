// components/Contact.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/seannieldizon",
    href: profile.social.github,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Sean Niel Dizon",
    href: profile.social.linkedin,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    value: "seannieldizon.dev",
    href: profile.siteUrl,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const modalCloseRef = useRef<HTMLButtonElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const openModal = (type: "success" | "error", title: string, msg: string) => {
    setModalType(type);
    setModalTitle(title);
    setModalMessage(msg);
    setModalOpen(true);
    setTimeout(() => modalCloseRef.current?.focus(), 80);
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const validateForm = (): boolean => {
    const next: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) next.email = "Email is required";
    else if (!emailRegex.test(email)) next.email = "Enter a valid email address";
    if (!message) next.message = "Message is required";
    else if (message.trim().length < 10) next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    if (!validateForm()) {
      emailInputRef.current?.focus();
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({} as { error?: string }));
        openModal("error", "Send failed", payload?.error || "Failed to send — please try again later.");
      } else {
        openModal("success", "Message sent", "Thank you! I will respond as soon as I can.");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      openModal("error", "Network error", "Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-shell"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(94,184,240,0.08), transparent 50%), #070b14",
      }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 id="contact-heading" className="section-title">
            Contact
          </h2>
          <p className="section-lead">
            Open to full-time roles, freelance projects, and collaborations. Reach out anytime.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
          <Reveal delay={0.05}>
            <aside className="lg:col-span-2 card-glass rounded-2xl p-6 md:p-7 space-y-4">
              <h3 className="font-display text-lg font-semibold text-light">
                Connect directly
              </h3>
              <ul className="space-y-3">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 bg-white/[0.03] border border-white/5 hover:border-primary-400/30 hover:bg-primary-400/5 transition-colors group"
                    >
                      <span className="text-primary-300 group-hover:text-primary-400">
                        {link.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-light/50">
                          {link.label}
                        </span>
                        <span className="block text-sm text-light truncate">{link.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-light/50 pt-2">
                Based in {profile.location}
              </p>
            </aside>
          </Reveal>

          <motion.form
            onSubmit={onSubmit}
            className="lg:col-span-3 card-glass rounded-2xl p-6 md:p-8 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            noValidate
            aria-label="Contact form"
          >
            <motion.div variants={inputVariants}>
              <label htmlFor="contact-name" className="block text-sm text-light/70 mb-1.5">
                Name <span className="text-light/40">(optional)</span>
              </label>
              <input
                id="contact-name"
                type="text"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-light placeholder:text-light/35 focus:ring-2 focus:ring-primary-400/40 focus:border-primary-400/50 outline-none"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="contact-email" className="block text-sm text-light/70 mb-1.5">
                Email *
              </label>
              <input
                id="contact-email"
                ref={emailInputRef}
                type="email"
                required
                className={`w-full bg-black/30 border rounded-xl px-4 py-3 text-sm text-light placeholder:text-light/35 focus:ring-2 focus:ring-primary-400/40 outline-none ${
                  errors.email ? "border-red-400/50" : "border-white/10"
                }`}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-300" role="alert">
                  {errors.email}
                </p>
              )}
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="contact-message" className="block text-sm text-light/70 mb-1.5">
                Message *
              </label>
              <textarea
                id="contact-message"
                ref={messageInputRef}
                required
                className={`w-full bg-black/30 border rounded-xl px-4 py-3 text-sm text-light placeholder:text-light/35 h-36 resize-none focus:ring-2 focus:ring-primary-400/40 outline-none ${
                  errors.message ? "border-red-400/50" : "border-white/10"
                }`}
                placeholder="Tell me about the role, project, or opportunity…"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                }}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-300" role="alert">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: sending ? 1 : 1.01 }}
              whileTap={{ scale: sending ? 1 : 0.98 }}
              disabled={sending}
              aria-busy={sending}
            >
              {sending ? "Sending…" : "Send message"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {modalOpen && (
        <div
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setModalOpen(false)} aria-hidden />
          <div className="relative z-50 max-w-md w-full card-glass rounded-2xl p-6">
            <h3 id="modal-title" className="text-lg font-semibold text-light">
              {modalTitle}
            </h3>
            <p className="mt-2 text-sm text-light/75" role="status">
              {modalMessage}
            </p>
            <div className="mt-5 flex justify-end">
              <button
                ref={modalCloseRef}
                className="btn-ghost text-sm !px-4 !py-2"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
            <span className="sr-only">{modalType}</span>
          </div>
        </div>
      )}
    </section>
  );
}
