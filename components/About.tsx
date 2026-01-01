// components/About.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Lottie from "lottie-react";

export default function About(): JSX.Element {
  const [animationData, setAnimationData] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/lottie/isometric-data-analysis.json")
      .then((r) => r.json())
      .then((json) => {
        if (mounted) setAnimationData(json);
      })
      .catch(() => {
        if (mounted) setAnimationData(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 text-white relative overflow-hidden"
      style={{ backgroundColor: "#283618" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(82,183,136,0.06)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-sunlit-clay-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* MOBILE: big visual above text (shown only on small screens) */}
        <Reveal delay={0.12}>
          <motion.div
            className="mb-8 block md:hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden bg-black-forest-600/60 border border-white/10 p-2 shadow-lg">
              <div className="relative w-full h-64">
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                    aria-label="Isometric data animation"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-gray-400">
                    <div className="text-center px-3 text-sm">Visualization preview</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* MAIN CONTENT (left two columns) — flex column and full height */}
          <div className="md:col-span-2 text-gray-300 leading-relaxed h-full flex flex-col">
            <div>
              <Reveal delay={0.05}>
                <motion.p className="mb-4" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  I am <strong>Sean Niel S. Dizon</strong>, a graduating Bachelor of Science in Information Technology
                  student at{" "}
                  <motion.span className="text-sunlit-clay-600 font-medium inline-block" whileHover={{ scale: 1.03 }}>
                    Camarines Norte State College
                  </motion.span>{" "}
                  (expected 2026). I build practical web applications and embedded prototypes that connect software and hardware.
                </motion.p>
              </Reveal>

              <Reveal delay={0.08}>
                <motion.p className="mb-4" whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  My work focuses on full-stack web development, systems integration, and small-scale IoT solutions. I enjoy
                  translating user needs into reliable interfaces and maintainable backends, and I prefer shipping working
                  prototypes that solve real problems.
                </motion.p>
              </Reveal>

              {/* TECHNICAL SKILLS — badges */}
              <Reveal delay={0.12}>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Technical skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "SQL",
                      "HTML",
                      "CSS",
                      "Tailwind",
                      "Git",
                      "Linux",
                      "ESP32",
                      "Arduino",
                      "Flutter",
                    ].map((skill) => (
                      <motion.span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(82,183,136,0.12)", color: "var(--frosted-mint)" }}
                        whileHover={{ scale: 1.03 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* NEW: Certifications & Availability block (fills previous empty gap) */}
              <Reveal delay={0.16}>
                <motion.div
                  className="mt-6 grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Certifications */}
                  <div className="bg-black-forest-600/60 border border-white/8 rounded-lg p-4">
                    <div className="text-sm font-semibold text-white mb-2">Certifications & trainings</div>
                    <ul className="text-sm text-gray-300 list-inside list-disc space-y-1">
                      <li>Google IT Support Professional Certificate (in progress)</li>
                      <li>AWS Cloud Practitioner — Coursera (self-study)</li>
                      <li>Responsive Web Design — freeCodeCamp</li>
                    </ul>
                  </div>

                  {/* Availability & Languages */}
                  <div className="bg-black-forest-600/60 border border-white/8 rounded-lg p-4">
                    <div className="text-sm font-semibold text-white mb-2">Availability & languages</div>
                    <div className="text-sm text-gray-300 space-y-2">
                      <div>Available for internships & entry-level roles — open to remote/hybrid work.</div>
                      <div className="mt-2">
                        <div className="text-xs text-sunlit-clay-500 mb-1">Languages</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-white/5">English</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-white/5">Filipino</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>

            {/* push the roles block to the bottom of the left column to eliminate blank space */}
            <div className="grid sm:grid-cols-2 gap-6 mt-auto">
              <Reveal delay={0.20}>
                <motion.div
                  className="bg-black-forest-600/60 border border-white/10 rounded-lg p-4 hover:border-sunlit-clay-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-sm uppercase tracking-wide text-sunlit-clay-500 mb-1">Target Roles</h3>
                  <p className="text-sm text-gray-200">
                    Junior Web Developer • Systems Engineer • IoT / Embedded Developer
                  </p>
                </motion.div>
              </Reveal>

              <Reveal delay={0.22}>
                <motion.div
                  className="bg-black-forest-600/60 border border-white/10 rounded-lg p-4 hover:border-sunlit-clay-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-sm uppercase tracking-wide text-sunlit-clay-500 mb-1">Strengths</h3>
                  <p className="text-sm text-gray-200">Problem-solving • Team collaboration • Clear communication • Rapid prototyping</p>
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* SIDEBAR (right column) — contains the large Lottie visual + Education/Contact below) */}
          <div className="md:col-span-1">
            <Reveal delay={0.18}>
              <motion.div
                className="sticky top-20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Desktop large Lottie card */}
                <div className="hidden md:block">
                  <div className="rounded-xl overflow-hidden bg-black-forest-600/60 border border-white/10 p-3 shadow-xl">
                    <div className="relative w-full h-96 md:h-80">
                      {animationData ? (
                        <Lottie
                          animationData={animationData}
                          loop
                          autoplay
                          style={{ width: "100%", height: "100%" }}
                          aria-label="Isometric data animation"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-gray-400">
                          <div className="text-center px-3 text-sm">Visualization preview</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* small spacer */}
                  <div className="h-6" />
                </div>

                {/* Education & Contact card stays below the visual */}
                <motion.aside
                  className="bg-black-forest-600/70 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-lg"
                  whileHover={{ scale: 1.02, borderColor: "rgba(221,161,94,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs uppercase tracking-wider text-sunlit-clay-500 mb-2">Education</div>

                  <div className="text-white font-semibold">BS Information Technology</div>
                  <div className="text-gray-300 text-sm">Camarines Norte State College</div>
                  <div className="text-gray-400 text-sm mb-6">Expected 2026</div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-sunlit-clay-500 mb-2">Contact</div>
                    <div className="text-gray-200 text-sm">saynoseanniel@gmail.com</div>

                    <a href="https://github.com/YOUR-USERNAME" className="text-sm text-sunlit-clay-600 hover:text-white block mt-3 transition inline-block">
                      github.com/YOUR-USERNAME
                    </a>

                    <a href="https://linkedin.com/in/YOUR-LINKEDIN" className="text-sm text-sunlit-clay-600 hover:text-white block mt-1 transition inline-block">
                      linkedin.com/in/YOUR-LINKEDIN
                    </a>
                  </div>
                </motion.aside>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
