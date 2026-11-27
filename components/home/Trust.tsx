// components/home/Trust.tsx — verifiable reasons to trust, no invented social proof.
import Reveal from "../Reveal";
import { HOTVIBES_USERS } from "../../data/profile";
import { liveProjectCount } from "../../data/projects";

const reasons = [
  {
    title: "Real client work",
    body: "Delivered a client and transaction records system for Grand Eleva Prime Properties Co., and a booking and delivery app prototype for Amors Group's feasibility study.",
  },
  {
    title: "Tested at real scale",
    body: `Built and maintained a subscription and pay-per-view platform that served ${HOTVIBES_USERS} users while it was online, including payments, payouts and admin review.`,
  },
  {
    title: "Work you can click",
    body: `${liveProjectCount} projects are live right now. Open them on your phone and judge the experience yourself.`,
  },
  {
    title: "One person, end to end",
    body: "Website, database, admin panel, integrations and deployment handled by one developer. Fewer hand-offs, one point of contact.",
  },
  {
    title: "Honest status on every project",
    body: "This portfolio labels what is live, what is historical and what is a prototype, and never invents results.",
  },
  {
    title: "Formally qualified",
    body: "BS Information Technology graduate (2026), Civil Service Professional eligibility, and TOPCIT Level 3.",
  },
];

export default function Trust() {
  return (
    <section id="why" aria-labelledby="why-title" className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Why work with me</p>
          <h2 id="why-title" className="h-section mt-4">
            Reasons you can check for yourself.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80} className="bg-paper">
              <div className="h-full p-7">
                <h3 className="font-display text-xl font-medium">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
