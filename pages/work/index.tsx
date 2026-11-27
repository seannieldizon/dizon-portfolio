// pages/work/index.tsx — full project archive, grouped by relevance to business clients.
import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import CtaBand from "../../components/CtaBand";
import ProjectVisual from "../../components/ProjectVisual";
import StatusBadge from "../../components/StatusBadge";
import { businessProjects, featuredProjects, Project, technicalProjects } from "../../data/projects";

const groups: { id: string; title: string; intro: string; items: Project[] }[] = [
  {
    id: "featured",
    title: "Featured case studies",
    intro: "The projects that best show how I help businesses win customers, sell and run operations.",
    items: featuredProjects,
  },
  {
    id: "business",
    title: "More business work",
    intro: "Storefronts, booking apps, reporting systems and automation tools.",
    items: businessProjects,
  },
  {
    id: "technical",
    title: "Research & technical work",
    intro:
      "Academic research, engineering and R&D projects. Less directly commercial, but they show depth in computer vision, machine learning, embedded systems and desktop software.",
    items: technicalProjects,
  },
];

function Card({ p }: { p: Project }) {
  return (
    <li>
      <Link href={`/work/${p.slug}`} className="group flex h-full flex-col">
        <div className="transition-transform duration-500 group-hover:-translate-y-1">
          <ProjectVisual project={p} compact sizes="(max-width: 768px) 100vw, 380px" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <StatusBadge status={p.status} />
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-accent">{p.title}</h3>
        <p className="mt-1.5 text-[0.95rem] leading-snug text-ink-soft">{p.headline}</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{p.sector}</p>
      </Link>
    </li>
  );
}

export default function WorkIndex() {
  return (
    <Layout>
      <Seo
        title="Work & Case Studies | Sean Niel Dizon"
        description="Websites, booking systems, lead-capture automation, business systems and technical projects by independent full-stack developer Sean Niel Dizon, each with an honest status label."
        path="/work"
      />
      <section className="pb-16 pt-[128px] md:pt-[156px]">
        <div className="container-x">
          <div className="max-w-4xl">
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 text-display-xl font-medium">Every project, with an honest status.</h1>
          <p className="lead mt-6 max-w-2xl">
            Live, historical, client delivery or prototype: each project says which it is. No project shows invented
            results; where a visual is a concept render rather than a real screenshot, it&apos;s labeled.
          </p>
          <nav aria-label="Project groups" className="mt-8 flex flex-wrap gap-2">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="chip !px-4 !py-2 !text-sm hover:border-ink">
                {g.title} ({g.items.length})
              </a>
            ))}
          </nav>
          </div>
        </div>
      </section>

      {groups.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-title`}
          className={`section !pt-16 ${i % 2 === 0 ? "bg-paper-deep" : ""}`}
        >
          <div className="container-x">
            <h2 id={`${g.id}-title`} className="h-section !text-display-md">
              {g.title}
            </h2>
            <p className="mt-3 max-w-2xl text-ink-soft">{g.intro}</p>
            <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((p) => (
                <Card key={p.slug} p={p} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand />
    </Layout>
  );
}
