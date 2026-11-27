// pages/work/[slug].tsx — dedicated case study page for every project.
// Order: business story first (challenge → solution → value → evidence), implementation last.
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { absoluteUrl } from "../../components/Seo";
import CtaBand from "../../components/CtaBand";
import StatusBadge from "../../components/StatusBadge";
import ProjectVisual, { ConceptLabel } from "../../components/ProjectVisual";
import { getProject, projects, Project, NOT_MEASURED } from "../../data/projects";
import { profile } from "../../data/profile";

type Props = { slug: string };

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug);
  if (!getProject(slug)) return { notFound: true };
  return { props: { slug } };
};

const tierLabel: Record<Project["tier"], string> = {
  featured: "Featured case study",
  business: "Business work",
  technical: "Research & technical work",
};

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8">
      <h2 id={id} className="font-display text-2xl font-medium md:col-span-4">
        {label}
      </h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

export default function CaseStudy({ slug }: Props) {
  const p = getProject(slug)!;
  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const gallery = p.images.filter((i) => i.fit !== "contain");
  const extraShots = gallery.length > 1 && gallery[0].width >= gallery[0].height ? gallery.slice(1) : [];
  const ogImage = gallery.find((i) => i.kind === "screenshot" && i.width > i.height)?.src;

  return (
    <Layout>
      <Seo
        title={`${p.title}: ${p.headline} | Sean Niel Dizon`}
        description={p.summary}
        path={`/work/${p.slug}`}
        image={ogImage}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.title,
          headline: p.headline,
          description: p.summary,
          url: absoluteUrl(`/work/${p.slug}`),
          dateCreated: String(p.year),
          creator: { "@type": "Person", name: profile.name },
          keywords: p.tech.join(", "),
        }}
      />

      <article>
        <header className="pb-12 pt-[120px] md:pt-[148px]">
          <div className="container-x">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href="/work" className="hover:text-accent">
                ← All work
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span>{tierLabel[p.tier]}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StatusBadge status={p.status} />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{p.sector}</span>
            </div>
            <p className="mt-6 font-display text-xl text-accent">{p.title}</p>
            <h1 className="mt-2 max-w-4xl text-display-lg font-medium">{p.headline}</h1>
            <p className="lead mt-6 max-w-3xl">{p.summary}</p>

            <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-6 border-t border-line pt-6 text-sm md:grid-cols-4">
              {p.client && (
                <div>
                  <dt className="text-muted">Client</dt>
                  <dd className="mt-1 font-semibold">{p.client}</dd>
                </div>
              )}
              <div>
                <dt className="text-muted">My role</dt>
                <dd className="mt-1 font-semibold">{p.role}</dd>
              </div>
              <div>
                <dt className="text-muted">Year</dt>
                <dd className="mt-1 font-semibold">{p.year}</dd>
              </div>
              <div>
                <dt className="text-muted">Status</dt>
                <dd className="mt-1 font-semibold">{p.status.label}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Open the live project <span aria-hidden>↗</span>
                </a>
              )}
              <Link href="/#contact" className={p.demo ? "btn-secondary" : "btn-primary"}>
                Discuss a similar project
              </Link>
            </div>

            {p.status.note && (
              <p className="mt-8 max-w-3xl rounded-card border border-line-strong bg-white p-5 text-[0.95rem] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">Status note: </span>
                {p.status.note}
              </p>
            )}
          </div>
        </header>

        <div className="container-x">
          <ProjectVisual project={p} priority banner sizes="(max-width: 1200px) 100vw, 1200px" />
          {extraShots.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {extraShots.map((img) => (
                <figure key={img.src} className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-white">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 600px" className="object-cover object-top" />
                  {img.kind === "concept" && <ConceptLabel className="absolute bottom-3 left-3" />}
                </figure>
              ))}
            </div>
          )}
        </div>

        <div className="container-x mt-16 pb-20">
          <Section id="challenge" label="The challenge">
            <p className="max-w-prose text-lg leading-relaxed text-ink-soft">{p.challenge}</p>
          </Section>

          <Section id="solution" label="The solution">
            <p className="max-w-prose text-lg leading-relaxed text-ink-soft">{p.solution}</p>
          </Section>

          <Section id="value" label="The business value">
            <p className="text-sm text-muted">What this system makes possible for the people who use it:</p>
            <ul className="mt-4 space-y-3">
              {p.value.map((v) => (
                <li key={v} className="flex gap-3 text-lg leading-relaxed text-ink">
                  <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {v}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="evidence" label="Status & evidence">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-white p-5">
                <h3 className="label-caps text-success">Verified</h3>
                <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {p.evidence.verified.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card border border-line bg-white p-5">
                <h3 className="label-caps text-muted">Measured results</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{p.evidence.measured ?? NOT_MEASURED}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  The benefits above describe what the system is built to do.
                </p>
              </div>
            </div>
          </Section>

          <Section id="implementation" label="Implementation">
            <p className="max-w-prose leading-relaxed text-ink-soft">{p.implementation}</p>
            <h3 className="mt-8 label-caps text-muted">Key features</h3>
            <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem] leading-snug text-ink-soft">
                  <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-ink" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 label-caps text-muted">Technology</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            {p.codeNote && <p className="mt-6 text-sm text-muted">{p.codeNote}</p>}
          </Section>

          <nav aria-label="Next project" className="mt-6 border-t border-ink pt-8">
            <p className="text-sm text-muted">Next project</p>
            <Link href={`/work/${next.slug}`} className="group mt-2 block">
              <span className="font-display text-display-md font-medium group-hover:text-accent">
                {next.title} <span aria-hidden>→</span>
              </span>
              <span className="mt-1 block text-ink-soft">{next.headline}</span>
            </Link>
          </nav>
        </div>
      </article>

      <CtaBand
        title="Want something like this for your business?"
        body="Tell me about your situation. I'll tell you honestly what would help and what it would take."
      />
    </Layout>
  );
}
