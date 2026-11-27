import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found | Sean Niel Dizon" description="This page doesn't exist." path="/404" noindex />
      <section className="pb-28 pt-[160px]">
        <div className="container-x max-w-2xl">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-display-lg font-medium">This page doesn&apos;t exist.</h1>
          <p className="lead mt-5">It may have moved. Here are the most useful places to go next.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">Back to the homepage</Link>
            <Link href="/work" className="btn-secondary">See my work</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
