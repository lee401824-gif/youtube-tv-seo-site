import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app";
const pageTitle = "Home";
const pageDescription =
  "YouTube TV Web is a desktop-first YouTube TV-style web app for channel-style playback, autoplay flow, playlist looping, and continuous viewing.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "YouTube TV Web | Watch YouTube Like a TV Channel",
    description: pageDescription,
    url: pageUrl,
    siteName: "YouTube TV Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/tv-app/favicon.png",
        width: 512,
        height: 512,
        alt: "YouTube TV Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube TV Web | Watch YouTube Like a TV Channel",
    description: pageDescription,
    images: ["/tv-app/favicon.png"],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "YouTube TV Web",
  description: pageDescription,
  url: pageUrl,
};

export default function HomePage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <header className="hero">
        <div className="container">
          <h1 className="heroTitle">
            YouTube TV-style Web App for Desktop Viewing
          </h1>

          <p className="heroDescription">
            A desktop-first YouTube experience with channel-style playback,
            autoplay flow, playlist looping, and continuous viewing.
          </p>

          <div className="heroButtons">
            <Link href="/app" className="primaryButton">
              Open App
            </Link>

            <Link href="/guide" className="secondaryButton">
              Read Guide
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Search landing pages</h2>

          <div className="linkGrid">
            <Link href="/watch-youtube-like-tv" className="linkCard">
              <h3>Watch YouTube Like TV</h3>
            </Link>

            <Link href="/youtube-autoplay-web-app" className="linkCard">
              <h3>YouTube Autoplay Web App</h3>
            </Link>

            <Link href="/youtube-playlist-loop-player" className="linkCard">
              <h3>Playlist Loop Player</h3>
            </Link>

            <Link href="/desktop-youtube-player" className="linkCard">
              <h3>Desktop YouTube Player</h3>
            </Link>

            <Link href="/channel-style-youtube-player" className="linkCard">
              <h3>Channel Style YouTube Player</h3>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <p>YouTube TV Web</p>
        </div>
      </footer>
    </main>
  );
}