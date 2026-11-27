// components/Seo.tsx — titles, descriptions, canonical, Open Graph and JSON-LD.
import Head from "next/head";
import { profile } from "../data/profile";

type Props = {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/work/hotvibes". */
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

export const SITE_NAME = `${profile.shortName} — Websites & Business Systems`;

export function absoluteUrl(path = "/") {
  return `${profile.siteUrl.replace(/\/$/, "")}${path}`;
}

export default function Seo({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  type = "website",
  jsonLd,
  noindex = false,
}: Props) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex" /> : <meta name="robots" content="index, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_PH" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {ld.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe here: content is authored in this repo.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
