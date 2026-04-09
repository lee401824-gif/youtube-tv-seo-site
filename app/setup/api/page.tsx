import type { Metadata } from "next";
import ApiSetupClient from "./api-setup-client";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/setup/api";
const pageDescription =
  "Step-by-step beginner page for creating a YouTube API key, protecting it, understanding quota basics, and saving the key for YouTube TV Web.";

export const metadata: Metadata = {
  title: "API Setup",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
};

export default function ApiSetupPage() {
  return <ApiSetupClient />;
}