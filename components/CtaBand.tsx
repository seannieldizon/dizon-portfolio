// components/CtaBand.tsx — repeated call to action at natural decision points.
import Link from "next/link";

export default function CtaBand({
  title = "Have a business idea or a process that needs fixing?",
  body = "Tell me what you're trying to achieve. I'll reply with honest advice on what would help, even if that's something small.",
  href = "/#contact",
}: {
  title?: string;
  body?: string;
  href?: string;
}) {
  return (
    <section aria-label="Start a project" className="bg-accent text-white">
      <div className="container-x flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          <p className="font-display text-display-md font-medium !text-white">{title}</p>
          <p className="mt-3 text-lg leading-relaxed text-white/85">{body}</p>
        </div>
        <Link href={href} className="btn shrink-0 bg-white text-ink hover:bg-ink hover:text-white">
          Discuss your project <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
