import type { Metadata } from "next";
import WatchClient from "./watch-client";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/watch";
const pageDescription =
  "Watch page for YouTube TV Web with channel buttons, playlist generation, autoplay, loop, resume behavior, and browser-based saving.";

export const metadata: Metadata = {
  title: "Watch",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
};

export default function WatchPage() {
  return <WatchClient />;
}