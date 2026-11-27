// components/home/Hero.tsx
import Link from "next/link";
import { BrowserFrame } from "../ProjectVisual";
import { getProject, liveProjectCount } from "../../data/projects";
import { HOTVIBES_USERS, profile } from "../../data/profile";

const front = getProject("beloved-invitations")!;
const back = getProject("cott-lab-reservation")!;
const side = getProject("waste-reporting")!;

export default function Hero() {
  const proof = [
    { value: HOTVIBES_USERS, label: "users served by a payments platform I built and maintained" },
    { value: String(liveProjectCount), label: "live projects you can open and try today" },
    { value: "2024", label: "working independently, including client work in real estate and delivery services" },
  ];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-[120px] md:pb-24 md:pt-[148px]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
            Available for new projects · {profile.publicLocation}
          </p>

          <h1 id="hero-title" className="mt-6 text-display-xl font-medium">
            Websites and business systems that bring in customers and{" "}
            <em className="font-normal not-italic text-accent">take work off your plate.</em>
          </h1>

          <p className="lead mt-6 max-w-[36rem]">
            I&apos;m Sean Niel Dizon, an independent full-stack developer. I help small businesses, startups and
            organisations replace lost inquiries, scattered spreadsheets and repetitive admin with fast websites,
            booking and lead-capture flows, and custom software built around how they work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="btn-primary">
              Discuss your project
              <span aria-hidden>→</span>
            </Link>
            <Link href="#work" className="btn-secondary">
              Explore my work
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-5" aria-label="Screenshots of live projects">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px]">
            <div className="absolute right-0 top-0 w-[78%] opacity-90">
              <BrowserFrame image={back.images[0]} url={back.demo} sizes="(max-width: 1024px) 70vw, 420px" />
            </div>
            <div className="absolute bottom-[4%] left-0 w-[84%]">
              <BrowserFrame image={front.images[0]} url={front.demo} priority sizes="(max-width: 1024px) 80vw, 460px" />
            </div>
            <div className="absolute -bottom-2 right-[2%] hidden w-[42%] sm:block">
              <BrowserFrame image={side.images[0]} sizes="240px" />
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-muted lg:text-right">
            Real, live projects: Beloved, CoTT Lab Reservation, Paliparan III Waste Reporting
          </p>
        </div>
      </div>

      <div className="container-x mt-16 md:mt-20">
        <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
          {proof.map((p) => (
            <div key={p.label} className="bg-paper px-6 py-5">
              <dt className="sr-only">{p.label}</dt>
              <dd>
                <span className="block font-display text-3xl text-ink">{p.value}</span>
                <span className="mt-1 block text-sm leading-snug text-muted">{p.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
