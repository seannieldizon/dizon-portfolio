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

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.08}>
              <article className="card-glass rounded-2xl p-6 h-full relative overflow-hidden">
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-25 blur-2xl pointer-events-none"
                  style={{ background: "rgba(94,184,240,0.25)" }}
                  aria-hidden
                />

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-primary-400/40 bg-gradient-to-br from-primary-400/20 to-primary-600/10 text-primary-300 mb-4"
                    aria-hidden
                  >
                    <svg
                      className="w-6 h-6"
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
                    </svg>
                  </div>

                  <h3 className="font-display text-lg font-bold text-light leading-snug">
                    {cert.title}
                  </h3>
                  {cert.level && (
                    <p className="mt-1 text-sm text-primary-300 font-medium">{cert.level}</p>
                  )}
                  {cert.issuer && (
                    <p className="mt-1 text-xs text-light/55">{cert.issuer}</p>
                  )}
                  {cert.description && (
                    <p className="mt-3 text-sm text-light/70 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                  <p className="mt-4 inline-flex items-center text-xs font-semibold text-light bg-primary-400/15 border border-primary-400/30 rounded-full px-3 py-1.5">
                    {cert.dateLabel || "Passed"}: {cert.passed}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
