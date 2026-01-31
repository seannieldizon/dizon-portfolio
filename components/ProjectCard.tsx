// components/ProjectCard.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleEscape);
      // Focus trap: focus close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <motion.article
        className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/5 rounded-xl p-5 shadow-lg cursor-pointer group"
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(221, 161, 94, 0.3)",
          boxShadow: "0 20px 40px rgba(221, 161, 94, 0.1)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="w-20 h-20 flex-none rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center text-gray-200 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt=""
                width={80}
                height={80}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <div className="text-sm text-center px-2">{project.title}</div>
            )}
          </motion.div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>

            {/* Client badge: placed directly under the title */}
            {project.client && (
              <span className="inline-block text-xs font-semibold mt-2 px-2 py-1 rounded bg-slate-700/50 text-gray-200">
                Client: {project.client}
              </span>
            )}

            <p className="mt-2 text-sm text-gray-300">{project.short}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t, index) => (
                <motion.span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(221, 161, 94, 0.14)",
                    color: "var(--cornsilk-500)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, background: "rgba(221, 161, 94, 0.25)" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {project.repo && project.repo !== "Private (available on request)" ? (
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm px-3 py-2 rounded bg-primary-400/10 text-primary-600 hover:bg-primary-400/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} repository`}
                >
                  View Repo
                </motion.a>
              ) : null}

              {project.demo && project.demo !== "#" ? (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm px-3 py-2 rounded border border-white/5 hover:bg-white/5 hover:border-primary-400/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} live demo`}
                >
                  Live Demo
                </motion.a>
              ) : null}

              <motion.button
                onClick={() => setOpen(true)}
                className="ml-auto text-sm px-3 py-2 rounded bg-primary-400 text-neutral-900 font-medium focus:outline-none focus:ring-4 focus:ring-primary-400/50"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(221, 161, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View details for ${project.title}`}
              >
                Details
              </motion.button>
            </div>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-description"
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-hidden="true"
              />
              <motion.div
                ref={modalRef}
                className="relative z-10 max-w-3xl w-full bg-slate-900 rounded-xl p-6 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3
                      id="project-modal-title"
                      className="text-xl font-bold text-white mb-2"
                    >
                      {project.title}
                    </h3>
                    <p
                      id="project-modal-description"
                      className="mt-2 text-gray-300"
                    >
                      {project.detailed || project.short}
                    </p>

                    <motion.div
                      className="mt-4 flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.tech.map((t, index) => (
                        <motion.span
                          key={t}
                          className="text-xs bg-white/5 px-2 py-1 rounded-full text-gray-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          whileHover={{ scale: 1.1, background: "rgba(221, 161, 94, 0.2)" }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="mt-6 flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.repo && project.repo !== "Private (available on request)" && (
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-4 py-2 bg-primary-400 text-neutral-900 rounded font-medium focus:outline-none focus:ring-4 focus:ring-primary-400/50"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View ${project.title} repository`}
                        >
                          View Repo
                        </motion.a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-4 py-2 border border-white/10 rounded hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View ${project.title} live demo`}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      <motion.button
                        ref={closeButtonRef}
                        onClick={() => setOpen(false)}
                        className="ml-auto px-4 py-2 bg-white/5 rounded hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Close project details"
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  </div>

                  {project.image && (
                    <div className="w-40 hidden md:block relative h-28">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover rounded"
                        sizes="160px"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
