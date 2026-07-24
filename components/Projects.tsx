// components/Projects.tsx
import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell"
      style={{
        background:
          "linear-gradient(180deg, #0b1220 0%, #070b14 40%, #0b1220 100%)",
      }}
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(94,184,240,0.06)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        <Reveal>
          <h2 id="projects-heading" className="section-title">
            Projects
          </h2>
          <p className="section-lead">
            Selected work — click a card for full details.
          </p>
        </Reveal>

        {featuredProjects.length > 0 && (
          <div>
            <Reveal>
              <h3 className="text-sm uppercase tracking-[0.16em] text-primary-300 font-semibold mb-4">
                Featured
              </h3>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                  <ProjectCard project={p} featured />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div>
          <Reveal>
            <h3 className="text-sm uppercase tracking-[0.16em] text-primary-300 font-semibold mb-4">
              More work
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
