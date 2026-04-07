import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube TV Web | Watch YouTube Like a TV Channel",
  description:
    "YouTube TV Web is a desktop-friendly web app that helps you watch YouTube like a TV channel with auto play, looping playlists, channel-style viewing, and simple continuous playback.",
  keywords: [
    "YouTube TV Web",
    "YouTube channel style player",
    "YouTube auto play web app",
    "YouTube playlist loop player",
    "watch YouTube like TV",
    "desktop YouTube player",
    "YouTube continuous playback",
  ],
  openGraph: {
    title: "YouTube TV Web | Watch YouTube Like a TV Channel",
    description:
      "Watch YouTube like a TV channel with auto play, looping playlists, and simple desktop-friendly viewing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube TV Web | Watch YouTube Like a TV Channel",
    description:
      "Watch YouTube like a TV channel with auto play, looping playlists, and simple desktop-friendly viewing.",
  },
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