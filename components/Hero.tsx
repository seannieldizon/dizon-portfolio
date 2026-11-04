// components/Hero.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { profile } from "../data/profile";

export default function Hero(): JSX.Element {
  const [imageError, setImageError] = useState(false);
  const ease = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background: "transparent",
      }}
      aria-label="Hero"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary-300 font-medium mb-4">
              Available for full-time & freelance
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] text-light">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl md:text-2xl font-display font-semibold text-primary-400">
              {profile.title}
            </p>

            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl text-light/75">
              {profile.subtitle}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
              {profile.heroFocus.map((item) => (
                <li
                  key={item}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-light/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary" aria-label="View projects">
                View Projects
              </a>
              <a
                href={profile.resumePath}
                className="btn-secondary"
                download
                aria-label="Download resume PDF"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost" aria-label="Contact me">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[1.75rem] opacity-70 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(94,184,240,0.3), rgba(58,160,224,0.12))",
                }}
                aria-hidden
              />
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] rounded-3xl overflow-hidden border border-primary-400/25 shadow-2xl bg-neutral-600 ring-1 ring-white/10">
                {!imageError ? (
                  <Image
                    src={profile.photo}
                    alt={`${profile.name} — ${profile.title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, 288px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-light/50 text-sm p-4 text-center">
                    Photo unavailable
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
