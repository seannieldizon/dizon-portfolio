// components/home/Capabilities.tsx — technical detail for technical visitors, after the business story.
import Reveal from "../Reveal";
import { capabilityGroups } from "../../data/skills";

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">For the technically curious</p>
            <h2 id="capabilities-title" className="h-section mt-4">
              Technical capabilities
            </h2>
          </div>
          <p className="lead lg:col-span-7 lg:pt-10">
            What&apos;s under the hood. Each group lists the portfolio projects where it&apos;s used, so every claim can
            be traced to real work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 70}>
              <div className="card h-full p-6">
                <h3 className="font-display text-xl font-medium">{g.title}</h3>
                <p className="mt-1 text-sm text-muted">{g.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${g.title} technologies`}>
                  {g.items.map((it) => (
                    <li key={it.name} className="chip">
                      {it.name}
                      {it.resumeOnly && (
                        <span className="ml-0.5 text-muted" title="Listed on résumé; not shown in a portfolio project">
                          °
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line pt-4 text-sm text-ink-soft">
                  <span className="font-semibold text-ink">Used in: </span>
                  {g.usedIn.join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">° Listed on my résumé but not featured in a portfolio project here.</p>
      </div>
    </section>
  );
}
