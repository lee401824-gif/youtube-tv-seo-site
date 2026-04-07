import Link from "next/link";
import SiteHeader from "./components/site-header";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "YouTube TV Web",
  description:
    "A desktop-first YouTube TV-style web app for channel-style playback, autoplay flow, playlist looping, and continuous viewing.",
  url: "https://youtube-tv-seo-site.vercel.app",
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