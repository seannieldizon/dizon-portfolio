// components/home/Problems.tsx — speak to the owner's problem before the service.
import Link from "next/link";
import Reveal from "../Reveal";
import { problems } from "../../data/services";

export default function Problems() {
  return (
    <section id="problems" aria-labelledby="problems-title" className="section bg-ink text-paper">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow !text-accent-bright">Problems I solve</p>
            <h2 id="problems-title" className="mt-4 font-display text-display-lg font-medium !text-paper">
              Sound familiar?
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-dark">
              If any of these describe your business, there&apos;s a practical fix, and it doesn&apos;t require you
              to become technical.
            </p>
            <Link href="#contact" className="btn-light mt-8">
              Tell me what&apos;s slowing you down
            </Link>
          </div>
        </div>

        <ol className="lg:col-span-8">
          {problems.map((p, i) => (
            <li key={p.problem} className="border-t border-ink-line py-8 first:border-t-0 first:pt-0 md:py-10">
              <Reveal>
                <div className="grid gap-4 md:grid-cols-[3rem_1fr]">
                  <span className="font-display text-lg text-accent-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug !text-paper md:text-[1.7rem]">{p.problem}</h3>
                    <p className="mt-3 max-w-prose leading-relaxed text-muted-dark">
                      <span className="font-semibold text-paper">What I&apos;d build: </span>
                      {p.fix}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
