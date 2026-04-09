import type { Metadata } from "next";
import ChannelSetupClient from "./channel-setup-client";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/setup/channels";
const pageDescription =
  "Beginner page for channel naming and keyword setup, including practical naming rules, keyword examples, and browser saving for YouTube TV Web.";

export const metadata: Metadata = {
  title: "Channel Setup",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
};

export default function ChannelSetupPage() {
  return <ChannelSetupClient />;
}