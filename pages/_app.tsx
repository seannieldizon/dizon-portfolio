import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { display, sans } from "../lib/fonts";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Links like "/#process" from another page: the Pages Router lands at the
  // top of the new page, so scroll to the section once it has rendered.
  useEffect(() => {
    const onDone = (url: string) => {
      const hash = url.split("#")[1];
      if (!hash) return;
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ block: "start" });
      });
    };
    router.events.on("routeChangeComplete", onDone);
    return () => router.events.off("routeChangeComplete", onDone);
  }, [router.events]);

  return (
    <div className={`${sans.variable} ${display.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
