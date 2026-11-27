// pages/index.tsx — homepage conversion journey:
// value → problem → solution → proof → process → about → contact
import Layout from "../components/Layout";
import Seo, { absoluteUrl } from "../components/Seo";
import Hero from "../components/home/Hero";
import Problems from "../components/home/Problems";
import Services from "../components/home/Services";
import SelectedWork from "../components/home/SelectedWork";
import Trust from "../components/home/Trust";
import Process from "../components/home/Process";
import About from "../components/home/About";
import Capabilities from "../components/home/Capabilities";
import Faq from "../components/home/Faq";
import Contact from "../components/home/Contact";
import CtaBand from "../components/CtaBand";
import { profile } from "../data/profile";
import { faqs } from "../data/services";

const title = "Sean Niel Dizon | Websites & Business Systems That Help Businesses Grow";
const description =
  "Independent full-stack developer in the Philippines building conversion-focused websites, booking and lead-capture systems, and custom business software that brings in customers and reduces manual work.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.shortName}: Websites & Business Systems`,
    url: absoluteUrl("/"),
    image: absoluteUrl(profile.photo),
    email: profile.email,
    telephone: profile.phoneHref.replace("tel:", ""),
    address: { "@type": "PostalAddress", addressRegion: "Camarines Norte", addressCountry: "PH" },
    areaServed: "Worldwide",
    founder: { "@type": "Person", name: profile.name },
    serviceType: [
      "Website development",
      "Landing page development",
      "Booking and reservation systems",
      "Lead capture automation",
      "Custom business software",
      "Workflow automation",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: absoluteUrl("/"),
    sameAs: [profile.social.github, profile.social.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <Layout>
      <Seo title={title} description={description} path="/" jsonLd={jsonLd} />
      <Hero />
      <Problems />
      <Services />
      <SelectedWork />
      <CtaBand />
      <Trust />
      <Process />
      <About />
      <Capabilities />
      <Faq />
      <Contact />
    </Layout>
  );
}
