// components/home/Services.tsx — services organised by business outcome.
import Link from "next/link";
import Reveal from "../Reveal";
import { aiService, services } from "../../data/services";
import { getProject } from "../../data/projects";

function ProofLinks({ slugs }: { slugs: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {slugs.map((slug) => {
        const p = getProject(slug);
        if (!p) return null;
        return (
          <li key={slug}>
            <Link href={`/work/${slug}`} className="text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent">
              {p.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 id="services-title" className="h-section mt-4">
            Three outcomes. One developer who builds the whole thing.
          </h2>
          <p className="lead mt-5">
            Every project starts with what your business needs to achieve. The technology is chosen to serve that
            goal, not the other way around.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-ink">
          {services.map((s) => (
            <Reveal key={s.id}>
              <article className="grid gap-8 border-b border-line py-10 md:py-14 lg:grid-cols-12" aria-labelledby={`svc-${s.id}`}>
                <div className="lg:col-span-4">
                  <p className="font-display text-lg text-accent">{s.number}</p>
                  <h3 id={`svc-${s.id}`} className="mt-2 font-display text-display-md font-medium">
                    {s.outcome}
                  </h3>
                  <p className="mt-2 font-semibold text-ink-soft">{s.name}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">The problem: </span>
                    {s.problem}
                  </p>
                  <p className="mt-6 label-caps text-muted">What I build</p>
                  <ul className="mt-3 space-y-2.5">
                    {s.builds.map((b) => (
                      <li key={b} className="flex gap-3 leading-snug text-ink-soft">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  <div className="rounded-card bg-paper-deep p-5">
                    <p className="label-caps text-muted">The benefit</p>
                    <p className="mt-2 font-display text-xl leading-snug text-ink">{s.benefit}</p>
                    <p className="mt-5 label-caps text-muted">See it in</p>
                    <ProofLinks slugs={s.proof} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <aside className="mt-12 grid gap-8 rounded-card border border-ink p-7 md:p-10 lg:grid-cols-12" aria-labelledby="ai-title">
            <div className="lg:col-span-5">
              <p className="eyebrow">Plus</p>
              <h3 id="ai-title" className="mt-3 font-display text-display-md font-medium">
                {aiService.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{aiService.intro}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              <ul className="space-y-3">
                {aiService.uses.map((u) => (
                  <li key={u} className="flex gap-3 leading-snug text-ink-soft">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {u}
                  </li>
                ))}
              </ul>
              <div>
                <p className="label-caps text-muted">See it in</p>
                <ProofLinks slugs={aiService.proof} />
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
