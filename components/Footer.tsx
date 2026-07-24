// components/Footer.tsx
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#05080f] text-center">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <p className="font-display font-semibold text-light">{profile.shortName}</p>
        <p className="text-sm text-light/55">{profile.title}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-light/60 hover:text-primary-300"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-light/60 hover:text-primary-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-light/60 hover:text-primary-300"
          >
            Email
          </a>
          <a href="#projects" className="text-light/60 hover:text-primary-300">
            Projects
          </a>
        </div>
        <p className="text-xs text-light/40 pt-2">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
