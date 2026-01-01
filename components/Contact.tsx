// components/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  function encodeMailto() {
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    return `mailto:saynoseanniel@gmail.com?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !message) {
      alert("Please include your email and a short message.");
      return;
    }

    setSending(true);
    window.location.href = encodeMailto();
    setTimeout(() => setSending(false), 1000);
  }

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-copperwood-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Reveal delay={0.1}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-sunlit-clay-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in touch
          </motion.h2>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.p
            className="text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm open to internships and junior developer roles. Send a short message and I'll respond as soon as I can.
          </motion.p>
        </Reveal>

        <motion.form
          onSubmit={onSubmit}
          className="grid gap-4"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.input
            variants={inputVariants}
            className="bg-slate-900 border border-white/5 rounded px-4 py-3 text-sm focus:border-sunlit-clay-500/50 focus:outline-none focus:ring-2 focus:ring-sunlit-clay-500/20 transition-all"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            variants={inputVariants}
            type="email"
            className="bg-slate-900 border border-white/5 rounded px-4 py-3 text-sm focus:border-sunlit-clay-500/50 focus:outline-none focus:ring-2 focus:ring-sunlit-clay-500/20 transition-all"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            variants={inputVariants}
            className="bg-slate-900 border border-white/5 rounded px-4 py-3 text-sm h-32 resize-none focus:border-sunlit-clay-500/50 focus:outline-none focus:ring-2 focus:ring-sunlit-clay-500/20 transition-all"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.div
            className="flex justify-center"
            variants={inputVariants}
          >
            <motion.button
              type="submit"
              className="px-6 py-3 bg-sunlit-clay-500 text-black-forest-500 rounded font-medium shadow-lg"
              disabled={sending}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(221, 161, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {sending ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  Sending...
                </motion.span>
              ) : (
                "Send message"
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        <Reveal delay={0.6}>
          <motion.div
            className="mt-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Or email directly at{" "}
            <motion.a
              href="mailto:saynoseanniel@gmail.com"
              className="text-sunlit-clay-500 hover:text-sunlit-clay-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              saynoseanniel@gmail.com
            </motion.a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
