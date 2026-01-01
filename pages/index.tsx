// pages/index.tsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Niel Dizon — Web & Systems Developer</title>
        <meta name="description" content="Graduating BSIT student building React/Node.js applications and embedded prototypes. View projects and contact for opportunities." />
        <meta property="og:title" content="Sean Niel Dizon — Web & Systems Developer" />
        <meta property="og:description" content="Graduating BSIT student building React/Node.js applications and embedded prototypes. View projects and contact for opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
