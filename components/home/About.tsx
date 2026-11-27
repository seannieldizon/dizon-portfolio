// components/home/About.tsx
import Image from "next/image";
import Reveal from "../Reveal";
import { certifications, education, experience, profile } from "../../data/profile";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-card border border-line bg-paper-deep lg:mx-0">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.shortName}`}
              fill
              sizes="(max-width: 1024px) 340px, 33vw"
              className="object-cover object-top"
            />
          </div>
          <div className="mx-auto mt-5 flex max-w-[340px] flex-wrap gap-x-5 gap-y-2 text-sm lg:mx-0">
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
              LinkedIn
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
              GitHub
            </a>
            <a href={profile.resumePath} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Résumé (PDF)
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 id="about-title" className="h-section mt-4">
              The developer behind the work.
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink-soft">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="label-caps text-muted">Experience</h3>
              <ol className="mt-4 space-y-6">
                {experience.map((e) => (
                  <li key={e.company} className="border-l-2 border-line-strong pl-4">
                    <p className="font-semibold text-ink">{e.role}</p>
                    <p className="text-sm text-ink-soft">
                      {e.company} · {e.period}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{e.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="label-caps text-muted">Credentials</h3>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li key={c.title}>
                      <p className="font-semibold text-ink">
                        {c.title}
                        {c.level ? ` · ${c.level}` : ""}
                      </p>
                      <p className="text-sm text-ink-soft">
                        {c.issuer} · {c.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label-caps text-muted">Education</h3>
                <ul className="mt-4 space-y-3">
                  {education.map((e) => (
                    <li key={e.degree}>
                      <p className="font-semibold text-ink">{e.degree}</p>
                      <p className="text-sm text-ink-soft">
                        {e.institution} · {e.note ?? e.graduated}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
