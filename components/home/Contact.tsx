// components/home/Contact.tsx — qualifying inquiry form + direct contact.
import { FormEvent, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { budgetRanges, projectTypes } from "../../data/services";

type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };
type Errors = Partial<Record<"name" | "email" | "projectType" | "problem", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {};
    if (!data.name?.trim()) e.name = "Please enter your name.";
    if (!data.email?.trim()) e.email = "Please enter your email so I can reply.";
    else if (!emailRe.test(data.email.trim())) e.email = "That email address doesn't look right.";
    if (!data.projectType) e.projectType = "Please choose the closest option.";
    if (!data.problem || data.problem.trim().length < 20)
      e.problem = "A sentence or two helps me understand (at least 20 characters).";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload?.error || "Something went wrong.");
      form.reset();
      setStatus({
        kind: "success",
        message: "Thank you, your message is on its way. I'll reply by email after reading it.",
      });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `${(err as Error).message} You can also email me directly at ${profile.email}.`,
      });
    }
  }

  const fieldError = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-sm font-medium text-[#A12C12]">
        {errors[key]}
      </p>
    ) : null;

  const describedBy = (key: keyof Errors) => (errors[key] ? `${key}-error` : undefined);

  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-ink text-paper">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow !text-accent-bright">Start a project</p>
          <h2 id="contact-title" className="mt-4 font-display text-display-lg font-medium !text-paper">
            Tell me about your business and what you need.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-dark">
            Share what isn&apos;t working or what you want to build. You don&apos;t need a technical brief. Plain
            language is perfect.
          </p>

          <h3 className="mt-10 label-caps text-muted-dark">What happens next</h3>
          <ol className="mt-4 space-y-3 text-paper">
            {[
              "I read your message and reply by email with questions or first thoughts.",
              "If it helps, we schedule a short call to understand the details.",
              "You receive a written scope and quote. No obligation to proceed.",
            ].map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="font-display text-accent-bright">{i + 1}.</span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 space-y-3 border-t border-ink-line pt-8">
            <p className="text-sm text-muted-dark">Prefer email or a call?</p>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Project inquiry")}`}
              className="block break-all font-display text-2xl text-paper underline decoration-paper/30 underline-offset-[6px] hover:decoration-accent-bright"
            >
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="block text-paper/90 hover:text-paper">
              {profile.phone} <span className="text-muted-dark">(Philippines)</span>
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="block text-paper/90 hover:text-paper">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            aria-labelledby="contact-title"
            className="rounded-card bg-paper p-6 text-ink sm:p-8 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">Your name</label>
                <input id="name" name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} aria-describedby={describedBy("name")} />
                {fieldError("name")}
              </div>
              <div>
                <label htmlFor="business" className="field-label">
                  Business name <span className="font-normal text-muted">(optional)</span>
                </label>
                <input id="business" name="business" autoComplete="organization" className="field" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="field-label">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" inputMode="email" className="field" aria-invalid={!!errors.email} aria-describedby={describedBy("email")} />
                {fieldError("email")}
              </div>
              <div>
                <label htmlFor="projectType" className="field-label">Type of project</label>
                <select id="projectType" name="projectType" defaultValue="" className="field-select" aria-invalid={!!errors.projectType} aria-describedby={describedBy("projectType")}>
                  <option value="" disabled>Choose one…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {fieldError("projectType")}
              </div>
              <div>
                <label htmlFor="budget" className="field-label">
                  Estimated budget <span className="font-normal text-muted">(optional)</span>
                </label>
                <select id="budget" name="budget" defaultValue="" className="field-select">
                  <option value="">Select a range…</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="problem" className="field-label">What problem are you trying to solve?</label>
                <textarea
                  id="problem"
                  name="problem"
                  rows={5}
                  className="field resize-y"
                  placeholder="e.g. We take bookings over Messenger and keep missing or double-booking them."
                  aria-invalid={!!errors.problem}
                  aria-describedby={describedBy("problem")}
                />
                {fieldError("problem")}
              </div>
              {/* Honeypot: hidden from people, often filled by bots. */}
              <div className="hidden" aria-hidden>
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">Your details are only used to reply to your inquiry.</p>
              <button type="submit" className="btn-primary" disabled={status.kind === "sending"} aria-busy={status.kind === "sending"}>
                {status.kind === "sending" ? "Sending…" : "Send inquiry"}
                {status.kind !== "sending" && <span aria-hidden>→</span>}
              </button>
            </div>

            <div aria-live="polite" role="status" className="empty:hidden">
              {status.kind === "success" && (
                <p className="mt-6 rounded-xl border border-success/30 bg-[#E7F0EA] p-4 text-sm font-medium text-success">{status.message}</p>
              )}
              {status.kind === "error" && (
                <p className="mt-6 rounded-xl border border-[#A12C12]/30 bg-accent-soft p-4 text-sm font-medium text-[#A12C12]">{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
