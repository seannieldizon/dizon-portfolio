// components/Achievements.tsx
import Reveal from "./Reveal";
import { achievements, type Achievement } from "../data/profile";

const icons: Record<Achievement["icon"], JSX.Element> = {
  badge: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 4.86L20 7.27l-4 3.9.94 5.5L12 14.77 7.06 16.67 8 11.17l-4-3.9 5.6-.41L12 2z" />
    </svg>
  ),
  grad: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10L12 5 2 10l10 5 10-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
    </svg>
  ),
  globe: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
    </svg>
  ),
  code: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" />
    </svg>
  ),
};

export default function Achievements(): JSX.Element {
  return (
    <section
      id="achievements"
      className="section-shell"
      style={{
        background:
          "linear-gradient(180deg, #111827 0%, #0b1220 55%, #070b14 100%)",
      }}
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 id="achievements-heading" className="section-title">
            Achievements
          </h2>
          <p className="section-lead">
            Milestones that signal readiness for professional software roles.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <article className="card-glass rounded-2xl p-6 h-full flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-300 bg-primary-400/10 border border-primary-400/25">
                  {icons[item.icon]}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-light leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-light/70 leading-relaxed">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
