// pages/index.tsx
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { generatePersonSchema } from "../lib/utils";
import { profile } from "../data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;
const siteName = `${profile.shortName} — Portfolio`;
const title = `${profile.shortName} — Full-Stack Software Developer`;
const description =
  "Full-Stack Software Developer specializing in web development, mobile apps, AI applications, automation, and REST APIs. BS IT graduate building production-ready software. View projects including hotvibes.vip.";

const personSchema = generatePersonSchema({
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  telephone: profile.phoneHref.replace("tel:", ""),
  url: siteUrl,
  sameAs: [profile.social.github, profile.social.linkedin],
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description,
  author: { "@type": "Person", name: profile.name },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={profile.name} />
        <meta
          name="keywords"
          content="full-stack developer, software developer, React, Next.js, TypeScript, Node.js, Flutter, portfolio, Sean Niel Dizon, web developer, mobile developer, AI applications"
        />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={`${siteUrl}/images/dizon-formal.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${profile.name} — ${profile.title}`} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/dizon-formal.jpg`} />
        <meta name="twitter:image:alt" content={`${profile.name} — ${profile.title}`} />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b1220" />
        <meta name="color-scheme" content="dark" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/dizon-formal.jpg" />
      </Head>

      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Navbar />
      <main id="main-content" className="pt-14" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
