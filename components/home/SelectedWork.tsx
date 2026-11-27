// components/home/SelectedWork.tsx — featured case studies + more business work.
import Link from "next/link";
import Reveal from "../Reveal";
import ProjectVisual from "../ProjectVisual";
import StatusBadge from "../StatusBadge";
import { businessProjects, featuredProjects, projects } from "../../data/projects";

export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="section bg-paper-deep">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="h-section mt-4">
              Real projects, explained in business terms.
            </h2>
            <p className="lead mt-5">
              Each case study covers the problem, what I built and what it makes possible, with an honest status
              label. Technical details are there when you want them.
            </p>
          </div>
          <Link href="/work" className="link-arrow shrink-0">
            All {projects.length} projects <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="mt-14 space-y-20 md:space-y-28">
          {featuredProjects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14" aria-labelledby={`case-${p.slug}`}>
                  <Link
                    href={`/work/${p.slug}`}
                    className={`group block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
                    aria-label={`Read the ${p.title} case study`}
                    tabIndex={-1}
                  >
                    <div className="transition-transform duration-500 group-hover:-translate-y-1">
                      <ProjectVisual project={p} sizes="(max-width: 1024px) 100vw, 700px" />
                    </div>
                  </Link>
                  <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <StatusBadge status={p.status} />
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{p.sector}</span>
                    </div>
                    <h3 id={`case-${p.slug}`} className="mt-4 font-display text-display-md font-medium">
                      <Link href={`/work/${p.slug}`} className="hover:text-accent">
                        {p.headline}
                      </Link>
                    </h3>
                    {p.client && <p className="mt-2 text-sm font-semibold text-ink-soft">Client: {p.client}</p>}
                    <p className="mt-4 leading-relaxed text-ink-soft">{p.summary}</p>
                    <ul className="mt-5 space-y-2 border-l-2 border-accent pl-4">
                      {p.value.slice(0, 3).map((v) => (
                        <li key={v} className="text-[0.95rem] leading-snug text-ink-soft">
                          {v}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/work/${p.slug}`} className="link-arrow mt-7">
                      Read the case study <span aria-hidden>→</span>
                      <span className="sr-only">: {p.title}</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-24">
          <h3 className="font-display text-display-md font-medium">More business work</h3>
          <ul className="mt-6 border-t border-ink">
            {businessProjects.map((p) => (
              <li key={p.slug} className="border-b border-line-strong">
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid gap-2 py-5 transition-colors hover:bg-paper/60 md:grid-cols-12 md:items-center md:gap-6 md:px-2"
                >
                  <span className="font-display text-xl text-ink group-hover:text-accent md:col-span-4">{p.title}</span>
                  <span className="text-[0.95rem] leading-snug text-ink-soft md:col-span-5">{p.headline}</span>
                  <span className="flex items-center justify-between gap-3 md:col-span-3">
                    <StatusBadge status={p.status} />
                    <span className="hidden text-xl text-muted group-hover:text-accent md:block" aria-hidden>
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Looking for research, engineering and education projects?{" "}
            <Link href="/work#technical" className="font-semibold text-ink underline underline-offset-4 hover:text-accent">
              See the technical work
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
