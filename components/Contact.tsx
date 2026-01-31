// components/Contact.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Reveal from "./Reveal";
import Lottie from "lottie-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [emailAnimation, setEmailAnimation] = useState<any | null>(null);

  // Form validation errors
  const [errors, setErrors] = useState<{
    email?: string;
    message?: string;
  }>({});

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState<"success" | "error" | "warning">("success");

  const modalCloseRef = useRef<HTMLButtonElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // load Email.json exactly as requested
    fetch("/lottie/Email.json")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setEmailAnimation(data))
      .catch(() => {
        /* ignore */
      });
  }, []);

  // modal helpers
  const openModal = (type: "success" | "error" | "warning", title: string, message: string) => {
    setModalType(type);
    setModalTitle(title);
    setModalMessage(message);
    setModalOpen(true);
    // focus will be moved to close button once modal renders
    setTimeout(() => modalCloseRef.current?.focus(), 80);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // form animation variants
  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!message) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form
    if (!validateForm()) {
      // Focus first error field
      if (errors.email) {
        emailInputRef.current?.focus();
      } else if (errors.message) {
        messageInputRef.current?.focus();
      }
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
        // attempt to parse server error message
        const payload = await res.json().catch(() => ({} as any));
        const msg = payload?.error || "Failed to send message — please try again later.";
        openModal("error", "Send failed", msg);
      } else {
        openModal("success", "Message sent", "Thank you! I will respond as soon as I can.");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      openModal("error", "Network error", "Network error while sending message. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  // Modal visuals per type
  const icon = {
    success: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="#16A34A" strokeWidth="1.5" />
        <path d="M7 13l3 3 7-7" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    error: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="#DC2626" strokeWidth="1.5" />
        <path d="M9 9l6 6M15 9l-6 6" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    warning: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M12 8v5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="16.2" r="0.6" fill="#F59E0B" />
      </svg>
    ),
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* subtle background glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(116,198,157,0.06)" }}
        animate={{ scale: [1, 1.12, 1], x: [0, 24, 0], y: [0, -24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Get in touch
          </motion.h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-gray-300 mb-10 max-w-2xl">
            I'm open to internships and junior developer roles. Send a short message and I’ll respond as soon as I can.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ASIDE: animation — appears first on mobile, second on md+ */}
          <aside className="order-first md:order-last">
            <div className="md:sticky md:top-24 rounded-2xl bg-black/30 border border-white/6 p-4 shadow-lg">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md h-48 md:h-64 flex items-center justify-center">
                  {emailAnimation ? (
                    <Lottie animationData={emailAnimation} loop autoplay style={{ width: "100%", height: "100%" }} aria-label="Email animation" />
                  ) : (
                    <div className="text-gray-400 text-sm">Animation unavailable</div>
                  )}
                </div>
              </div>

              <div className="mt-4 text-center text-sm text-gray-300">Let’s build something together — internships, collaborations, or questions welcome.</div>

              <div className="mt-4 text-center">
                <a href="mailto:saynoseanniel@gmail.com" className="inline-block text-xs px-3 py-2 rounded-full font-medium bg-gradient-to-r from-[#74c69d] to-[#52b788] text-black shadow-sm">
                  saynoseanniel@gmail.com
                </a>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <motion.form
            onSubmit={onSubmit}
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            noValidate
            aria-label="Contact form"
          >
            <motion.div variants={inputVariants}>
              <label htmlFor="contact-name" className="sr-only">
                Your name (optional)
              </label>
              <input
                id="contact-name"
                ref={nameInputRef}
                type="text"
                className="w-full bg-slate-900 border border-white/5 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 outline-none transition-colors"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Your name (optional)"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="contact-email" className="sr-only">
                Email address (required)
              </label>
              <input
                id="contact-email"
                ref={emailInputRef}
                type="email"
                required
                className={`w-full bg-slate-900 border rounded px-4 py-3 text-sm focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 outline-none transition-colors ${
                  errors.email ? "border-red-500/50 focus:ring-red-500/50" : "border-white/5"
                }`}
                placeholder="Email *"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
                aria-label="Email address (required)"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="contact-message" className="sr-only">
                Message (required)
              </label>
              <textarea
                id="contact-message"
                ref={messageInputRef}
                required
                className={`w-full bg-slate-900 border rounded px-4 py-3 text-sm h-36 resize-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 outline-none transition-colors ${
                  errors.message ? "border-red-500/50 focus:ring-red-500/50" : "border-white/5"
                }`}
                placeholder="Message *"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) {
                    setErrors((prev) => ({ ...prev, message: undefined }));
                  }
                }}
                aria-label="Message (required)"
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className={`w-full py-3 rounded font-medium shadow-lg bg-gradient-to-r from-primary-300 to-primary-500 text-neutral-900 focus:outline-none focus:ring-4 focus:ring-primary-400/50 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity`}
              whileHover={{ scale: sending ? 1 : 1.04 }}
              whileTap={{ scale: sending ? 1 : 0.96 }}
              disabled={sending}
              aria-busy={sending}
              aria-label={sending ? "Sending message..." : "Send message"}
            >
              {sending ? (
                <span className="inline-flex items-center justify-center gap-2 text-sm">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.15)" strokeWidth="4"></circle>
                    <path d="M22 12a10 10 0 00-10-10" stroke="black" strokeWidth="4" strokeLinecap="round"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Modal (portal-like positioned inside component) */}
      {modalOpen && (
        <div
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-message"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* modal panel */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="relative z-50 max-w-xl w-full rounded-2xl bg-white/6 backdrop-blur p-6 border border-white/6 shadow-2xl"
            role="document"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-black/20 p-2">{icon[modalType]}</div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 id="modal-title" className="text-lg font-semibold text-white">
                  {modalTitle}
                </h3>
                <p id="modal-message" className="mt-2 text-sm text-gray-200 whitespace-pre-wrap" role="status">
                  {modalMessage}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                ref={modalCloseRef}
                className="px-4 py-2 text-sm rounded-md bg-white/10 text-white hover:bg-white/12 transition focus:outline-none focus:ring-2 focus:ring-primary-400"
                onClick={closeModal}
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
