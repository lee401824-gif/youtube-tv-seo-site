import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/watch-youtube-like-tv";
const pageTitle = "Watch YouTube Like TV on Desktop";
const pageDescription =
  "Learn how to watch YouTube like TV on desktop with channel-style playback, autoplay flow, playlist loop behavior, and a more continuous viewing experience.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | YouTube TV Web`,
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
        alt: "Watch YouTube Like TV on Desktop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | YouTube TV Web`,
    description: pageDescription,
    images: ["/tv-app/favicon.png"],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
};

export default function WatchYouTubeLikeTvPage() {
  return (
    <main className="page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Search Landing Page</p>
          <h1 className="heroTitle">
            Watch YouTube like TV on desktop with a channel-style flow
          </h1>
          <p className="heroDescription">
            Many people want to watch YouTube like TV instead of manually
            searching for the next video every few minutes. This page explains a
            desktop-first way to create a more continuous YouTube viewing
            experience with channel-style playback, autoplay flow, and playlist
            looping.
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
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Why people search this phrase</h2>
            <p className="sectionText">
              When users search for terms like watch YouTube like TV, they are
              usually looking for a more passive and comfortable viewing style.
              They do not want to keep choosing every next video by hand.
            </p>
            <p className="sectionText">
              On desktop, many viewers prefer a setup that feels more like a TV
              channel: press play, keep watching, and let the system continue
              through related content automatically.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What this page is about</h2>
            <p className="sectionText">
              This page describes the idea behind YouTube TV Web, a desktop
              YouTube TV-style web app concept built around channel-style
              playback, autoplay behavior, looping playlists, and continuous
              viewing.
            </p>
            <p className="sectionText">
              The goal is not to replace YouTube itself, but to create a simpler
              way to watch YouTube like a lightweight TV system in a browser.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">
            What makes a TV-style YouTube experience
          </h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Channel-style playback</h3>
              <p className="cardText">
                Instead of randomly choosing individual videos, users can watch
                through a grouped channel-like flow that feels more organized.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Autoplay flow</h3>
              <p className="cardText">
                A TV-like feeling needs the next video to continue
                automatically. That reduces clicking and helps the session feel
                smoother.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Playlist loop</h3>
              <p className="cardText">
                A looping playlist helps extend the viewing session and makes the
                desktop experience feel more stable and continuous.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Desktop-first layout</h3>
              <p className="cardText">
                Watching YouTube like TV makes the most sense on desktop, where
                users can browse channels and keep the player open comfortably.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Less manual browsing</h3>
              <p className="cardText">
                A TV-style setup reduces repeated decision-making and helps users
                stay in a viewing flow for longer periods.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Personal browser setup</h3>
              <p className="cardText">
                A lightweight personal setup can keep channels, keywords, and
                playback-related information inside the browser environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">How YouTube TV Web fits this need</h2>
          <p className="sectionText">
            YouTube TV Web is designed for viewers who want YouTube to feel
            simpler, more continuous, and more like watching TV on desktop.
            Instead of restarting the browsing process over and over, users can
            stay inside a channel-style playback flow.
          </p>
          <p className="sectionText">
            That makes the experience better for background watching, topic-based
            viewing, long sessions, and a more relaxed desktop setup.
          </p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this is for</h2>
            <p className="sectionText">
              This page is for users who want to watch YouTube like TV, prefer
              desktop viewing, and want an easier way to keep videos flowing
              without repeated searching and clicking.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where to go next</h2>
            <p className="sectionText">
              You can read the guide, explore the features, or open the app area
              to move toward the actual YouTube TV-style player experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Quick links</h2>

          <div className="linkGrid">
            <Link href="/youtube-autoplay-web-app" className="linkCard">
              <h3 className="cardTitle">YouTube Autoplay Web App</h3>
              <p className="cardText">
                Learn more about automatic next video playback on desktop.
              </p>
            </Link>

            <Link href="/youtube-playlist-loop-player" className="linkCard">
              <h3 className="cardTitle">Playlist Loop Player</h3>
              <p className="cardText">
                Learn more about looping playlists for longer viewing sessions.
              </p>
            </Link>

            <Link href="/desktop-youtube-player" className="linkCard">
              <h3 className="cardTitle">Desktop YouTube Player</h3>
              <p className="cardText">
                Learn more about a desktop-first YouTube player setup.
              </p>
            </Link>

            <Link href="/channel-style-youtube-player" className="linkCard">
              <h3 className="cardTitle">Channel Style YouTube Player</h3>
              <p className="cardText">
                Learn more about channel-style YouTube playback.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <p className="footerText">YouTube TV Web</p>
          <nav className="footerNav">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/guide">Guide</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/app">App</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}