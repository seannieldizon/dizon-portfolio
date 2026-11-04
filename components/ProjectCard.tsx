// components/ProjectCard.tsx
import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "../data/projects";

function isContainImage(src: string) {
  return src.endsWith(".svg") || src.includes("logo");
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasRepo =
    Boolean(project.repo) &&
    project.repo !== "Private (available on request)" &&
    !project.repo?.includes("YOUR-USERNAME");
  const hasDemo = Boolean(project.demo) && project.demo !== "#";
  const visibleTech = project.tech.slice(0, featured ? 4 : 3);
  const extraTech = project.tech.length - visibleTech.length;

  const gallery = useMemo(() => {
    const images = [
      ...(project.image ? [project.image] : []),
      ...(project.gallery || []),
    ];
    return Array.from(new Set(images));
  }, [project.image, project.gallery]);

  const currentSrc = gallery[activeImage];

  useEffect(() => {
    if (open) {
      setActiveImage(0);
      setImageLoaded(false);
    }
  }, [open, project.id]);

  useEffect(() => {
    setImageLoaded(false);
  }, [activeImage, currentSrc]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleEscape);
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.article
        className="card-glass rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpen(true)}
      >
        <div
          className={`relative w-full bg-neutral-600 overflow-hidden ${
            featured ? "aspect-[16/9]" : "aspect-[16/11]"
          }`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className={
                isContainImage(project.image)
                  ? "object-contain p-4 bg-neutral-700/40"
                  : "object-cover"
              }
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 560px"
                  : "(max-width: 768px) 100vw, 360px"
              }
              loading="lazy"
              unoptimized={project.image.endsWith(".svg")}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-light/40 text-sm">
              {project.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          {project.status && (
            <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-400 text-neutral-800">
              {project.status}
            </span>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1 gap-3">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3
                className={`font-display font-bold text-light leading-snug ${
                  featured ? "text-lg" : "text-base"
                }`}
              >
                {project.title}
              </h3>
              {project.year && (
                <span className="text-xs text-light/45 shrink-0 pt-0.5">{project.year}</span>
              )}
            </div>
            {project.client && (
              <p className="mt-1 text-xs text-light/50 truncate">{project.client}</p>
            )}
            <p className="mt-2 text-sm text-light/70 leading-relaxed line-clamp-2">
              {project.short}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {visibleTech.map((t) => (
              <span key={t} className="tech-badge !text-[10px] !px-2 !py-0.5">
                {t}
              </span>
            ))}
            {extraTech > 0 && (
              <span className="tech-badge !text-[10px] !px-2 !py-0.5">+{extraTech}</span>
            )}
          </div>

          <div
            className="mt-auto pt-3 border-t border-white/10 flex flex-wrap gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary !text-xs !px-3 !py-1.5"
                aria-label={`${project.title} live demo`}
              >
                Live Demo
              </a>
            )}
            {hasRepo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary !text-xs !px-3 !py-1.5"
                aria-label={`${project.title} on GitHub`}
              >
                GitHub
              </a>
            )}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-ghost !text-xs !px-3 !py-1.5 ml-auto"
              aria-label={`Details for ${project.title}`}
            >
              Details
            </button>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-${project.id}-title`}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              className="relative z-10 max-w-3xl w-full card-glass rounded-2xl p-5 md:p-7 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    id={`modal-${project.id}-title`}
                    className="font-display text-xl md:text-2xl font-bold text-light"
                  >
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="mt-2 inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-400/15 text-primary-300 border border-primary-400/25">
                      {project.status}
                    </span>
                  )}
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-ghost !px-2.5 !py-1.5 !text-sm shrink-0"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {gallery.length > 0 && currentSrc && (
                <div className="mt-5 space-y-3">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-neutral-700/50">
                    {!imageLoaded && (
                      <div
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-600/90 to-neutral-700/95"
                        aria-busy="true"
                        aria-label="Loading screenshot"
                      >
                        <span className="h-9 w-9 rounded-full border-2 border-primary-400/25 border-t-primary-400 animate-spin" />
                        <span className="text-xs text-light/55 tracking-wide">
                          Loading preview…
                        </span>
                      </div>
                    )}
                    <Image
                      src={currentSrc}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      fill
                      className={`transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      } ${
                        isContainImage(currentSrc)
                          ? "object-contain p-6"
                          : "object-cover object-top"
                      }`}
                      sizes="(max-width: 768px) 100vw, 768px"
                      priority
                      unoptimized={currentSrc.endsWith(".svg")}
                      onLoadingComplete={() => setImageLoaded(true)}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>

                  {gallery.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {gallery.map((src, index) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          className={`relative h-16 w-24 shrink-0 rounded-lg overflow-hidden border transition ${
                            index === activeImage
                              ? "border-primary-400 ring-2 ring-primary-400/30"
                              : "border-white/10 hover:border-primary-400/40"
                          }`}
                          aria-label={`View screenshot ${index + 1}`}
                          aria-pressed={index === activeImage}
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            className={
                              isContainImage(src) ? "object-contain p-1 bg-black/30" : "object-cover"
                            }
                            sizes="96px"
                            unoptimized={src.endsWith(".svg")}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <p className="mt-5 text-sm text-light/75 leading-relaxed">
                {project.detailed || project.short}
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                {project.role && (
                  <div>
                    <dt className="text-primary-300 font-semibold text-xs uppercase tracking-wider">
                      My role
                    </dt>
                    <dd className="text-light/70 mt-0.5">{project.role}</dd>
                  </div>
                )}
                {project.problem && (
                  <div>
                    <dt className="text-primary-300 font-semibold text-xs uppercase tracking-wider">
                      Problem
                    </dt>
                    <dd className="text-light/70 mt-0.5">{project.problem}</dd>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <dt className="text-primary-300 font-semibold text-xs uppercase tracking-wider">
                      Solution
                    </dt>
                    <dd className="text-light/70 mt-0.5">{project.solution}</dd>
                  </div>
                )}
              </dl>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-primary-300 font-semibold mb-2">
                    Key features
                  </p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-light/70">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary text-sm !px-4 !py-2"
                  >
                    Live Demo
                  </a>
                )}
                {hasRepo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-secondary text-sm !px-4 !py-2"
                  >
                    GitHub
                  </a>
                )}
                {project.private && !hasRepo && (
                  <span className="text-xs text-light/50 self-center px-1">
                    Private — available on request
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
