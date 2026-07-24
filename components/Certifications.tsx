// components/Certifications.tsx
import Reveal from "./Reveal";
import { certifications } from "../data/profile";

export default function Certifications(): JSX.Element {
  return (
    <section
      id="certifications"
      className="section-shell"
      style={{ backgroundColor: "#111827" }}
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 id="certifications-heading" className="section-title">
            Certifications & Eligibility
          </h2>
          <p className="section-lead">
            Official credentials that demonstrate professional readiness.
          </p>
        </Reveal>

        <div className="mt-12 max-w-3xl">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.08}>
              <article className="card-glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div
                  className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-30 blur-2xl pointer-events-none"
                  style={{ background: "rgba(94,184,240,0.25)" }}
                  aria-hidden
                />

                <div className="relative flex flex-col sm:flex-row gap-6 items-start">
                  <div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center border border-primary-400/40 bg-gradient-to-br from-primary-400/20 to-primary-600/10"
                    aria-hidden
                  >
                    <svg
                      className="w-10 h-10 text-primary-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l2.4 4.86L20 7.27l-4 3.9.94 5.5L12 14.77 7.06 16.67 8 11.17l-4-3.9 5.6-.41L12 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 20h8M10 20v2M14 20v2"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-300 font-semibold">
                      Official Eligibility
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-light">
                      {cert.title}
                    </h3>
                    {cert.level && (
                      <p className="mt-1 text-lg text-primary-300 font-medium">
                        {cert.level}
                      </p>
                    )}
                    {cert.issuer && (
                      <p className="mt-1 text-sm text-light/60">{cert.issuer}</p>
                    )}
                    {cert.description && (
                      <p className="mt-3 text-sm text-light/75 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                    <p className="mt-4 inline-flex items-center text-sm font-semibold text-light bg-primary-400/15 border border-primary-400/30 rounded-full px-4 py-1.5">
                      Passed: {cert.passed}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
