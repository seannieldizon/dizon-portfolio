// components/Experience.tsx
import Reveal from "./Reveal";
import { experience } from "../data/profile";

export default function Experience(): JSX.Element {
  return (
    <section
      id="experience"
      className="section-shell"
      style={{
        background:
          "linear-gradient(180deg, #0b1220 0%, #111827 50%, #152033 100%)",
      }}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 id="experience-heading" className="section-title">
            Experience
          </h2>
          <p className="section-lead">
            Client-facing and production work delivering real software end to end.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.map((job, idx) => (
            <Reveal key={job.role} delay={idx * 0.08}>
              <article className="card-glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-light">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-primary-300 font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary-400/15 text-primary-300 border border-primary-400/25">
                      {job.type}
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-light/70 border border-white/10">
                      {job.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm md:text-base text-light/80 leading-relaxed"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
