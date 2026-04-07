import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Watch YouTube Like TV on Desktop | YouTube TV Web",
  description:
    "Learn how to watch YouTube like TV on desktop with channel-style playback, autoplay flow, playlist loop behavior, and a more continuous viewing experience.",
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Watch YouTube Like TV on Desktop",
  description:
    "A search landing page about watching YouTube like TV on desktop with a channel-style web app experience.",
  url: "https://youtube-tv-seo-site.vercel.app/watch-youtube-like-tv",
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
          <h2 className="sectionTitle">What makes a TV-style YouTube experience</h2>

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
            YouTube TV Web is being built around exactly this viewing problem:
            how to make YouTube feel less like endless manual searching and more
            like a simple channel-based desktop viewing system.
          </p>
          <p className="sectionText">
            That means focusing on channel flow, autoplay, playlist loop
            behavior, and a viewing rhythm that feels closer to TV than standard
            browsing.
          </p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this is for</h2>
            <p className="sectionText">
              This kind of experience is useful for desktop users who want a
              more passive viewing session, a calmer interface, and a channel
              concept instead of constant searching.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What to do next</h2>
            <p className="sectionText">
              You can continue to the features page to understand the core
              playback ideas, move to the guide page for usage flow, or open the
              app area where the real player experience will connect later.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Quick links</h2>

          <div className="linkGrid">
            <Link href="/features" className="linkCard">
              <h3 className="cardTitle">Features</h3>
              <p className="cardText">
                Learn how channel-style playback, autoplay, and looping work.
              </p>
            </Link>

            <Link href="/guide" className="linkCard">
              <h3 className="cardTitle">Guide</h3>
              <p className="cardText">
                Read the basic viewing flow and setup direction.
              </p>
            </Link>

            <Link href="/faq" className="linkCard">
              <h3 className="cardTitle">FAQ</h3>
              <p className="cardText">
                Read common questions about browser storage, API keys, and
                desktop use.
              </p>
            </Link>

            <Link href="/app" className="linkCard">
              <h3 className="cardTitle">Open App</h3>
              <p className="cardText">
                Move toward the real app entry point.
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