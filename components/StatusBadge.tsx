// components/StatusBadge.tsx — honest project status, always visible.
import type { Project, StatusKind } from "../data/projects";

const tone: Record<StatusKind, { dot: string; text: string }> = {
  live: { dot: "bg-success", text: "text-success" },
  client: { dot: "bg-accent", text: "text-accent" },
  built: { dot: "bg-ink", text: "text-ink" },
  historical: { dot: "bg-muted", text: "text-ink-soft" },
  prototype: { dot: "bg-[#A0761B]", text: "text-[#7A5A12]" },
  "in-development": { dot: "bg-[#A0761B]", text: "text-[#7A5A12]" },
  offline: { dot: "bg-muted", text: "text-ink-soft" },
};

export default function StatusBadge({ status, onDark = false }: { status: Project["status"]; onDark?: boolean }) {
  const t = tone[status.kind];
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold ${
        onDark ? "border-paper/20 bg-ink-raised text-paper" : `border-line bg-white ${t.text}`
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${onDark && status.kind !== "live" ? "bg-accent-bright" : t.dot}`} aria-hidden />
      <span className="sr-only">Status: </span>
      {status.label}
    </span>
  );
}
