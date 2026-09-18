// components/About.tsx
import Reveal from "./Reveal";
import { education, profile } from "../data/profile";

export default function About(): JSX.Element {
  return (
    <section
      id="about"
      className="section-shell"
      style={{
        background:
          "linear-gradient(180deg, #070b14 0%, #0b1220 45%, #111827 100%)",
      }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 id="about-heading" className="section-title">
            About
          </h2>
          <p className="section-lead">
            Who I am, how I work, and the foundation behind my engineering craft.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-3 space-y-5 text-light/80 leading-relaxed text-base md:text-lg">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={0.06 * (i + 1)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <aside className="card-glass rounded-2xl p-6 md:p-7">
                <h3 className="text-xs uppercase tracking-[0.18em] text-primary-300 font-semibold mb-5">
                  Education
                </h3>
                <ol className="relative space-y-0">
                  {education.map((entry, idx) => (
                    <li key={entry.degree} className="relative flex gap-4 pb-2">
                      <div className="flex flex-col items-center" aria-hidden>
                        <span className="mt-1.5 h-3 w-3 rounded-full bg-primary-400 ring-4 ring-primary-400/20" />
                        {idx < education.length - 1 && (
                          <span className="w-px flex-1 bg-white/10 mt-1" />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className="font-display font-semibold text-light text-lg leading-snug">
                          {entry.degree}
                        </p>
                        <p className="mt-1 text-sm text-light/70">{entry.institution}</p>
                        {entry.location && (
                          <p className="text-sm text-light/50">{entry.location}</p>
                        )}
                        <p className="mt-3 inline-flex items-center text-sm font-medium text-primary-300 bg-primary-400/10 border border-primary-400/20 rounded-full px-3 py-1">
                          {entry.note || entry.graduated}
                        </p>
                        {entry.note && (
                          <p className="mt-2 text-xs text-light/50">{entry.graduated}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-2 pt-5 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-300 font-semibold mb-3">
                    Quick facts
                  </p>
                  <ul className="space-y-2 text-sm text-light/75">
                    <li>BS Information Technology</li>
                    <li>Focus: scalable, maintainable software</li>
                    <li>Interests: AI · Web · Mobile · Automation</li>
                  </ul>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
