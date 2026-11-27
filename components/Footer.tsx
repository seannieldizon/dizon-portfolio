// components/Footer.tsx
import Link from "next/link";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink text-paper">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl">{profile.shortName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-dark">{profile.positioning}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block text-sm font-semibold text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-accent-bright"
          >
            {profile.email}
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm md:col-span-7 md:grid-cols-3">
          <div>
            <p className="font-semibold text-paper">Explore</p>
            <ul className="mt-3 space-y-2 text-muted-dark">
              <li><Link className="hover:text-paper" href="/#services">Services</Link></li>
              <li><Link className="hover:text-paper" href="/work">All work</Link></li>
              <li><Link className="hover:text-paper" href="/#process">Process</Link></li>
              <li><Link className="hover:text-paper" href="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-paper">About</p>
            <ul className="mt-3 space-y-2 text-muted-dark">
              <li><Link className="hover:text-paper" href="/#about">Background</Link></li>
              <li><Link className="hover:text-paper" href="/#capabilities">Technical capabilities</Link></li>
              <li>
                <a className="hover:text-paper" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-paper">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-muted-dark">
              <li>
                <a className="hover:text-paper" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-paper" href={profile.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li><Link className="hover:text-paper" href="/#contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-ink-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-dark sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Based in {profile.publicLocation}</p>
        </div>
      </div>
    </footer>
  );
}
