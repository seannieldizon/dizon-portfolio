// components/home/Process.tsx — make starting a project feel low-risk.
import Reveal from "../Reveal";
import { processSteps } from "../../data/services";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section bg-paper-deep">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How we&apos;d work together</p>
          <h2 id="process-title" className="h-section mt-4">
            A clear process, from first conversation to launch and beyond.
          </h2>
          <p className="lead mt-5">
            You always know what&apos;s being built, what it costs and what happens next.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line-strong bg-line-strong md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-paper p-6">
              <span className="font-display text-4xl text-accent" aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm text-ink">
                <span className="font-semibold">You get: </span>
                {s.deliverable}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
