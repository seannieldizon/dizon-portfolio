// pages/sitemap.xml.ts — generated from the project list so new case studies are always included.
import type { GetServerSideProps } from "next";
import { absoluteUrl } from "../components/Seo";
import { projects } from "../data/projects";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = [
    { loc: absoluteUrl("/"), priority: "1.0" },
    { loc: absoluteUrl("/work"), priority: "0.8" },
    ...projects.map((p) => ({
      loc: absoluteUrl(`/work/${p.slug}`),
      priority: p.tier === "featured" ? "0.7" : "0.5",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
