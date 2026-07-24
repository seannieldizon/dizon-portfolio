// components/Skills.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

function SkillIcon({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10"
      aria-hidden
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          className="w-[18px] h-[18px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[10px] font-bold text-primary-300">{initials}</span>
      )}
    </div>
  );
}

export default function Skills(): JSX.Element {
  return (
    <section
      id="skills"
      className="section-shell"
      style={{ backgroundColor: "#0b1220" }}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 id="skills-heading" className="section-title">
            Tech Stack
          </h2>
          <p className="section-lead">
            Tools and technologies I use to ship production-ready applications.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <motion.div
                className="card-glass rounded-2xl p-5 h-full"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-display font-semibold text-light text-lg mb-4">
                  {group.title}
                </h3>
                <ul className="grid grid-cols-2 gap-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 bg-white/[0.03] border border-white/5"
                    >
                      <SkillIcon src={skill.icon} name={skill.name} />
                      <span className="text-sm text-light/85 font-medium leading-tight">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
