// pages/robots.txt.ts — points crawlers at the sitemap on whichever domain is configured.
import type { GetServerSideProps } from "next";
import { absoluteUrl } from "../components/Seo";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400");
  res.write(`User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`);
  res.end();
  return { props: {} };
};

export default function Robots() {
  return null;
}
