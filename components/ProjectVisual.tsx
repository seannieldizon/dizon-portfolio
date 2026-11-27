// components/ProjectVisual.tsx
// Shows a project's visual honestly:
//   - real screenshots in a neutral browser frame
//   - concept renders with a visible "Concept visual" label
//   - a typographic cover when no honest screenshot exists
import Image from "next/image";
import type { Project, ProjectImage } from "../data/projects";
import { HOTVIBES_USERS } from "../data/profile";

function hostOf(url?: string) {
  if (!url) return undefined;
  try {
    return new URL(url).host;
  } catch {
    return undefined;
  }
}

export function ConceptLabel({ className = "", short = false }: { className?: string; short?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-semibold text-paper backdrop-blur ${className}`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8h.01M11 12h1v5h1" strokeLinecap="round" />
      </svg>
      {short ? "Concept visual" : "Concept visual, not a product screenshot"}
    </span>
  );
}

export function BrowserFrame({
  image,
  url,
  priority = false,
  sizes,
  className = "",
  compact = false,
}: {
  image: ProjectImage;
  url?: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  compact?: boolean;
}) {
  const host = hostOf(url);
  return (
    <figure className={`overflow-hidden rounded-card border border-line-strong bg-white shadow-frame ${className}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-paper px-3" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        {host && (
          <span className="ml-3 truncate rounded-full bg-white px-3 py-0.5 text-[11px] text-muted">{host}</span>
        )}
      </div>
      <div className="relative aspect-[16/10] bg-paper-deep">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
        {image.kind === "concept" && <ConceptLabel short={compact} className="absolute bottom-3 left-3" />}
      </div>
    </figure>
  );
}

/** Typographic cover used where no honest screenshot exists (e.g. HotVibes, client work under NDA). */
export function ProjectCover({
  project,
  compact = false,
  banner = false,
}: {
  project: Project;
  compact?: boolean;
  banner?: boolean;
}) {
  const logo = project.images.find((i) => i.fit === "contain");
  const stat =
    project.slug === "hotvibes"
      ? { value: HOTVIBES_USERS, label: "users served while it was online" }
      : project.client
      ? { value: project.client, label: `${project.status.label}` }
      : undefined;

  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-card bg-ink text-paper ${
        compact ? "aspect-[16/10] p-5" : banner ? "aspect-[16/10] p-7 md:aspect-[12/5] md:p-12" : "aspect-[16/10] p-7 md:p-10"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-bright">{project.sector}</p>
        {logo && (
          <div className={`relative shrink-0 overflow-hidden rounded-xl bg-white ${compact ? "h-10 w-10" : "h-16 w-16"}`}>
            <Image src={logo.src} alt={logo.alt} fill sizes="64px" className="object-contain p-1.5" />
          </div>
        )}
      </div>
      <div>
        <p className={`font-display leading-[1.05] ${compact ? "text-2xl" : "text-4xl md:text-5xl"}`}>{project.title}</p>
        {stat && !compact && (
          <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-paper/15 pt-5">
            <span className="font-display text-2xl text-accent-bright md:text-3xl">{stat.value}</span>
            <span className="text-sm text-muted-dark">{stat.label}</span>
          </p>
        )}
      </div>
    </div>
  );
}

/** Picks the right visual for cards and case-study headers. */
export default function ProjectVisual({
  project,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 640px",
  compact = false,
  banner = false,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  compact?: boolean;
  /** Wider, shorter cover for case-study headers. */
  banner?: boolean;
}) {
  const primary = project.images.find((i) => i.fit !== "contain");

  if (!primary) return <ProjectCover project={project} compact={compact} banner={banner} />;

  // Portrait phone captures: show on a neutral stage without cropping.
  if (primary.height > primary.width) {
    const phones = project.images.filter((i) => i.height > i.width).slice(0, compact ? 1 : 3);
    return (
      <div className="relative flex aspect-[16/10] items-center justify-center gap-4 overflow-hidden rounded-card border border-line bg-paper-deep p-6">
        {phones.map((img, i) => (
          <div
            key={img.src}
            className={`relative h-full overflow-hidden rounded-[18px] border border-line-strong bg-white shadow-frame ${
              i === 1 ? "hidden sm:block" : i === 2 ? "hidden md:block" : ""
            }`}
            style={{ aspectRatio: `${img.width} / ${img.height}` }}
          >
            <Image src={img.src} alt={img.alt} fill sizes="220px" priority={priority && i === 0} className="object-cover" />
          </div>
        ))}
        {primary.kind === "concept" && <ConceptLabel short={compact} className="absolute bottom-3 left-3" />}
      </div>
    );
  }

  return <BrowserFrame image={primary} url={project.demo} priority={priority} sizes={sizes} compact={compact} />;
}
