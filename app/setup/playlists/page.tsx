import type { Metadata } from "next";
import PlaylistSetupClient from "./playlist-setup-client";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/setup/playlists";
const pageDescription =
  "Beginner playlist setup page for YouTube TV Web. Choose video duration rules, playlist max size, and language preference before building watch playlists.";

export const metadata: Metadata = {
  title: "Playlist Setup",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
};

export default function PlaylistSetupPage() {
  return <PlaylistSetupClient />;
}
