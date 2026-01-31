// pages/index.tsx
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { generatePersonSchema } from "../lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seannieldizon.dev";
const siteName = "Sean Niel Dizon — Portfolio";
const description = "Full-stack web developer and systems engineer. Building React/Node.js applications, embedded prototypes, and production-ready solutions. Open to internships and junior developer roles.";
const title = "Sean Niel Dizon — Web & Systems Developer";

// Structured data for Person schema
const personSchema = generatePersonSchema({
  name: "Sean Niel S. Dizon",
  jobTitle: "Web & Systems Developer",
  email: "saynoseanniel@gmail.com",
  url: siteUrl,
  sameAs: [
    "https://github.com/seannieldizon",
    "https://linkedin.com/in/sean-niel-dizon-296b49382",
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sean Niel S. Dizon" />
        <meta name="keywords" content="web developer, full-stack developer, React, Node.js, TypeScript, Next.js, systems engineer, portfolio" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={`${siteUrl}/images/dizon-formal.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sean Niel S. Dizon - Web & Systems Developer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/dizon-formal.jpg`} />
        <meta name="twitter:image:alt" content="Sean Niel S. Dizon - Web & Systems Developer" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#283618" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      {/* Structured Data (JSON-LD) */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />
      <main id="main-content" className="pt-16" role="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
