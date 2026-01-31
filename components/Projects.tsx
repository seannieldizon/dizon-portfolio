// components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // group projects by category
  const clientProjects = projects.filter((p) => p.category === "client");
  const schoolProjects = projects.filter((p) => p.category === "school");
  const sideProjects = projects.filter((p) => p.category === "side");

  // small helper to render a grid of project cards for a given list
  const renderProjectGrid = (items: typeof projects) => {
    if (!items || items.length === 0) {
      return (
        <div className="rounded-xl border border-white/5 bg-slate-800/40 p-6 text-center text-sm text-gray-300">
          N/A
        </div>
      );
    }

    return (
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {items.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-olive-leaf-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        <Reveal delay={0.1}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 text-sunlit-clay-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
        </Reveal>

        {/* Client / Company Projects */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Client / Company Projects</h3>
          <p className="mb-6 text-sm text-gray-300">Production work completed for paying clients or employers.</p>
          {renderProjectGrid(clientProjects)}
        </div>

        {/* School / Academic Projects */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">School Projects</h3>
          <p className="mb-6 text-sm text-gray-300">Academic, capstone, or course projects.</p>
          {renderProjectGrid(schoolProjects)}
        </div>

        {/* Side / Personal Projects */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Side Projects</h3>
          <p className="mb-6 text-sm text-gray-300">Personal or experimental projects.</p>
          {renderProjectGrid(sideProjects)}
        </div>
      </div>
    </section>
  );
}
