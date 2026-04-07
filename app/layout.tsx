import type { Metadata } from "next";
import "./globals.css";

const siteName = "YouTube TV Web";
const siteUrl = "https://youtube-tv-seo-site.vercel.app";
const defaultTitle = "YouTube TV Web | Watch YouTube Like a TV Channel";
const defaultDescription =
  "YouTube TV Web is a desktop-friendly web app that helps you watch YouTube like a TV channel with auto play, looping playlists, channel-style viewing, and simple continuous playback.";
const defaultOgImage = "/tv-app/favicon.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "YouTube TV Web",
    "YouTube channel style player",
    "YouTube auto play web app",
    "YouTube playlist loop player",
    "watch YouTube like TV",
    "desktop YouTube player",
    "YouTube continuous playback",
    "YouTube TV style web app",
    "desktop YouTube autoplay",
    "browser YouTube player",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 512,
        height: 512,
        alt: "YouTube TV Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}