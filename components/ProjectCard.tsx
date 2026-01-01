// components/ProjectCard.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

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
            className="w-20 h-20 flex-none rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center text-gray-200"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
            ) : (
              <div className="text-sm text-center px-2">{project.title}</div>
            )}
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className="text-lg font-semibold text-white group-hover:text-sunlit-clay-500 transition-colors"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
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
              {project.repo ? (
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 rounded bg-sunlit-clay-500/10 text-sunlit-clay-600 hover:bg-sunlit-clay-500/20 transition-colors"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Repo
                </motion.a>
              ) : null}

              {project.demo ? (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 rounded border border-white/5 hover:bg-white/5 hover:border-sunlit-clay-500/30 transition-colors"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              ) : null}

              <motion.button
                onClick={() => setOpen(true)}
                className="ml-auto text-sm px-3 py-2 rounded bg-sunlit-clay-500 text-black-forest-500 font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(221, 161, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
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
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="relative z-10 max-w-3xl w-full bg-slate-900 rounded-xl p-6 border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="mt-2 text-gray-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.detailed || project.short}
                    </motion.p>

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
                      {project.repo && (
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-sunlit-clay-500 text-black-forest-500 rounded font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Repo
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 border border-white/10 rounded hover:bg-white/5 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      <motion.button
                        onClick={() => setOpen(false)}
                        className="ml-auto px-4 py-2 bg-white/5 rounded hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  </div>

                  {project.image && (
                    <motion.div
                      className="w-40 hidden md:block"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <img src={project.image} alt={project.title} className="object-cover w-full h-28 rounded" />
                    </motion.div>
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
