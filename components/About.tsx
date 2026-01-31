import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Lottie from "lottie-react";

type Skill = { name: string; icon: string };

type EducationEntry = {
  level: string;
  institution: string;
  period: string;
  degree?: string;
  location?: string;
  honor?: string;
};

export default function About(): JSX.Element {
  const [devAnimation, setDevAnimation] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;

    const tryFetchJson = async (path: string) => {
      try {
        const r = await fetch(path);
        if (!r.ok) return null;
        return await r.json();
      } catch {
        return null;
      }
    };

    (async () => {
      const dev =
        (await tryFetchJson("/lottie/developer.json")) ||
        (await tryFetchJson("/lottie/Developer.json")) ||
        null;

      if (!mounted) return;
      setDevAnimation(dev);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Small helper to create an inline SVG data-URI fallback with initials
  const makeFallbackDataUri = (name: string, bg = "#2B2B2B", fg = "#ffffff") => {
    const initials = name
      .split(" ")
      .map((p) => p[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='100%' height='100%' rx='10' fill='${bg}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial,sans-serif' font-size='14' fill='${fg}'>${initials}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  // Small Icon component that falls back to an inline SVG if loading the remote icon fails
  const SkillIcon: React.FC<{ src: string; name: string }> = ({ src, name }) => {
    return (
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${"#74c69d"}22, ${"#52b788"}08)`,
          border: `1px solid rgba(255,255,255,0.03)`,
        }}
      >
        <img
          src={src}
          alt={`${name} logo`}
          className="w-5 h-5 object-contain"
          onError={(e) => {
            // replace with fallback data URI (initials)
            const img = e.currentTarget as HTMLImageElement;
            img.onerror = null;
            img.src = makeFallbackDataUri(name);
          }}
          width={20}
          height={20}
        />
      </div>
    );
  };

  const skillGroups: { title: string; items: Skill[] }[] = [
    {
      title: "Frontend",
      items: [
        {
          name: "JavaScript",
          icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          name: "Next.js",
          icon: "https://cdn.simpleicons.org/nextdotjs/000000",
        },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        // Keep CSS3 but be resilient to any CDN failure via SkillIcon
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
        {
          name: "Tailwind",
          icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "JavaScript",
          icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        {
          name: "Node.js",
          icon: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        {
          name: "PostgreSQL",
          icon: "https://cdn.simpleicons.org/postgresql/31648C",
        },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
      ],
    },
    {
      title: "Mobile & Embedded",
      items: [
        { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
        { name: "ESP32", icon: "https://cdn.simpleicons.org/espressif/000000" },
        { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D" },
        {
          name: "Raspberry Pi",
          icon: "https://cdn.simpleicons.org/raspberrypi/E44334",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      items: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "MySQL Workbench", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma/000000" },
        { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0079BF" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" }
      ],
    },
    {
      title: "Machine Learning",
      items: [{ name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }],
    },
  ];

  // palette
  const accentA = "#74c69d";
  const accentB = "#52b788";
  const frosted = "#d8f3dc";

  const education: EducationEntry[] = [
    {
      level: "Tertiary",
      institution: "Camarines Norte State College",
      period: "A.Y. 2022 – 2026",
      degree: "BS Information Technology",
      location: "Daet, Camarines Norte",
    },
    {
      level: "Secondary",
      institution: "Vinzons Pilot High School",
      period: "A.Y. 2020 – 2022",
      honor: "Graduated with high honors",
      location: "Vinzons, Camarines Norte",
    },
    {
      level: "Secondary",
      institution: "D.Q. Liwag National High School",
      period: "A.Y. 2016 – 2020",
      honor: "Graduated with high honors",
      location: "Vinzons, Camarines Norte",
    },
    {
      level: "Primary",
      institution: "Sto. Domingo Elementary School",
      period: "A.Y. 2010 – 2016",
      honor: "Graduated valedictorian",
      location: "Vinzons, Camarines Norte",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 text-white relative overflow-hidden"
      style={{ backgroundColor: "#283618" }}
      aria-labelledby="about-heading"
    >
      {/* decorative blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-12 right-12 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(82,183,136,0.07)" }}
          animate={{ scale: [1, 1.25, 1], x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-extrabold mb-8 font-display"
          style={{ color: frosted }}
        >
          About Me
        </h2>

        {/* mobile primary visual */}
        <Reveal delay={0.12}>
          <motion.div
            className="mb-8 block md:hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-black/40 border border-white/6 p-3 shadow-lg">
              <div className="relative w-full h-64">
                {devAnimation ? (
                  <Lottie
                    animationData={devAnimation}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                    aria-label="Developer animation"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-gray-400">
                    <div className="text-center px-3 text-sm">Visualization preview</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start">
          <article className="md:col-span-2 text-gray-200 leading-relaxed h-full flex flex-col">
            <div>
              <Reveal delay={0.05}>
                <p className="mb-4 text-lg md:text-base">
                  I am <strong>Sean Niel S. Dizon</strong>, a graduating
                  Bachelor of Science in Information Technology student at{" "}
                  <span className="font-medium" style={{ color: frosted }}>
                    Camarines Norte State College
                  </span>{" "}
                  (expected 2026). I build practical web applications and
                  embedded prototypes that connect software and hardware.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mb-6 text-base text-gray-300">
                  My work focuses on full-stack web development, systems
                  integration, and small-scale IoT solutions. I enjoy
                  translating requirements into reliable interfaces and
                  maintainable backends, delivering working prototypes that
                  solve real problems.
                </p>
              </Reveal>

              {/* Technical skills */}
              <Reveal delay={0.14}>
                <div className="mt-2">
                  <h4
                    className="text-base font-semibold mb-4"
                    style={{ color: frosted }}
                  >
                    Technical skills
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {skillGroups.map((group) => (
                      <motion.div
                        key={group.title}
                        className="rounded-2xl p-6"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
                          border: "1px solid rgba(255,255,255,0.04)",
                          boxShadow: "0 6px 18px rgba(4,10,6,0.35)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-100">
                            {group.title}
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {group.items.map((s) => (
                            <div
                              key={s.name}
                              className="flex items-center gap-3 text-sm bg-white/3 px-3 py-2 rounded-lg hover:-translate-y-1 transform transition"
                              role="img"
                              aria-label={s.name}
                            >
                              <SkillIcon src={s.icon} name={s.name} />

                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-100">
                                  {s.name}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          <div className="md:col-span-1">
            <Reveal delay={0.18}>
              <motion.div
                className="sticky top-20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Large developer visual (primary) */}
                <div className="hidden md:block rounded-2xl overflow-hidden bg-black/30 border border-white/6 p-3 shadow-2xl">
                  <div className="relative w-full h-80">
                    {devAnimation ? (
                      <Lottie
                        animationData={devAnimation}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                        aria-label="Developer animation"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-gray-400">
                        <div className="text-center px-3 text-sm">Visualization preview</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-6" />

                <motion.aside
                  className="rounded-2xl p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs uppercase tracking-wider text-green-100 mb-4">Education</div>

                  {/* Education timeline (original layout kept) */}
                  <div className="flex flex-col gap-4">
                    {education.map((e, idx) => (
                      <motion.div
                        key={`${e.level}-${idx}`}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full border-2 border-green-200 bg-black/40" aria-hidden />
                          {idx !== education.length - 1 && <div className="w-px h-full bg-white/6 mt-1" />}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold text-white">{e.institution}</div>
                              <div className="text-xs text-gray-300">{e.location}</div>
                            </div>

                            <div className="text-xs text-gray-400 text-right">{e.period}</div>
                          </div>

                          {e.degree && <div className="text-sm text-gray-200 mt-2">{e.degree}</div>}

                          {e.honor && (
                            <div
                              className="mt-2 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold"
                              style={{
                                color: frosted,
                                background:
                                  "linear-gradient(90deg, rgba(82,183,136,0.12), rgba(116,198,157,0.08))",
                                border: "1px solid rgba(82,183,136,0.18)",
                                boxShadow: "0 6px 18px rgba(4,10,6,0.35)",
                                backdropFilter: "blur(6px)",
                              }}
                              aria-label={`${e.honor} badge`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="currentColor" aria-hidden>
                                <path d="M12 2l2.09 4.24L18.6 7l-3.3 2.86L15.8 14 12 11.8 8.2 14l.5-4.14L5.4 7l4.51-.76L12 2z" />
                              </svg>
                              {e.honor}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="h-4" />

                  <div>
                    <div className="text-xs uppercase tracking-wider text-green-100 mb-2">Contact</div>
                    <div className="text-gray-200 text-sm">saynoseanniel@gmail.com</div>

                    <a href="https://github.com/seannieldizon" className="text-sm text-green-200 hover:text-white block mt-3 transition inline-block">
                      github.com/seannieldizon
                    </a>

                    <a href="https://linkedin.com/in/sean-niel-dizon-296b49382" className="text-sm text-green-200 hover:text-white block mt-1 transition inline-block">
                      linkedin.com/in/sean-niel-dizon-296b49382
                    </a>
                  </div>
                </motion.aside>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* bottom row: highlights / certifications / roles */}
        <Reveal delay={0.2}>
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-1 md:order-1">
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.02))",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="text-sm font-semibold text-gray-100 mb-2">Highlights</div>
                <ul className="text-sm text-gray-300 list-inside list-disc space-y-1">
                  <li>Focused on practical full-stack projects</li>
                  <li>Embedded systems prototypes with ESP32</li>
                  <li>Open to internships & entry-level roles</li>
                </ul>
              </div>
            </div>

            <div className="order-2 md:order-2">
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.02))",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="text-sm font-semibold text-gray-100 mb-2">Certifications & trainings</div>
                <ul className="text-sm text-gray-300 list-inside list-disc space-y-1">
                  <li>TESDA CSS NC II Trainee</li>
                  <li>TOPCIT (Test of Practical Competency in IT) Level 3 – [June 2025]</li>
                  <li>Responsive Web Design — freeCodeCamp</li>
                </ul>
              </div>
            </div>

            <div className="order-3 md:order-3 flex flex-col gap-4">
              <div className="rounded-2xl p-4" style={{ background: "rgba(15,20,14,0.55)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="text-sm uppercase tracking-wide text-green-100 mb-1">Target Roles</h3>
                <p className="text-sm text-gray-200">Junior Web Developer • Systems Engineer • IoT / Embedded Developer</p>
              </div>

              <div className="rounded-2xl p-4" style={{ background: "rgba(15,20,14,0.55)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="text-sm uppercase tracking-wide text-green-100 mb-1">Strengths</h3>
                <p className="text-sm text-gray-200">Problem-solving • Team collaboration • Clear communication • Rapid prototyping</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
