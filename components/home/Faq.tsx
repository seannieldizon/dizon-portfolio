// components/home/Faq.tsx
import Reveal from "../Reveal";
import { faqs } from "../../data/services";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-paper-deep">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title" className="h-section mt-4">
            Before you reach out
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line-strong py-5 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-lg transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
