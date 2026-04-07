import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Desktop YouTube Player | YouTube TV Web",
  description:
    "Explore a desktop YouTube player concept built for channel-style playback, autoplay flow, playlist looping, and continuous viewing on larger screens.",
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Desktop YouTube Player",
  description:
    "A search landing page about a desktop YouTube player with channel-style flow and continuous viewing.",
  url: "https://example.com/desktop-youtube-player",
};

export default function DesktopYouTubePlayerPage() {
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
            A desktop YouTube player built for continuous viewing
          </h1>
          <p className="heroDescription">
            Many users want a better desktop YouTube player experience instead
            of standard one-video browsing. This page explains a desktop-first
            player concept built around channel-style playback, autoplay flow,
            playlist looping, and a more relaxed viewing rhythm.
          </p>

          <div className="heroButtons">
            <Link href="/app" className="primaryButton">
              Open App
            </Link>
            <Link href="/features" className="secondaryButton">
              View Features
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Why desktop viewing is different</h2>
            <p className="sectionText">
              Watching on desktop is not the same as casually opening one video
              on mobile. Desktop users often want longer sessions, bigger
              screens, easier channel browsing, and a more stable playback
              layout.
            </p>
            <p className="sectionText">
              Because of that, a desktop YouTube player should support smoother
              continuation, less manual clicking, and a viewing flow that feels
              comfortable over time.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What users usually want</h2>
            <p className="sectionText">
              When people search for a desktop YouTube player, they often want a
              cleaner interface, a bigger-screen viewing experience, and a way
              to let playback continue without constant manual choice.
            </p>
            <p className="sectionText">
              Many also want autoplay, looping playlists, channel-like grouping,
              and a more TV-style rhythm that works well on desktop monitors.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">What makes a better desktop YouTube player</h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Large-screen comfort</h3>
              <p className="cardText">
                A desktop player should take advantage of larger screens and
                make longer viewing sessions feel easy and comfortable.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Channel-style flow</h3>
              <p className="cardText">
                Instead of one-by-one video choice, a desktop player works
                better when videos are grouped into a channel-like flow.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Autoplay support</h3>
              <p className="cardText">
                A strong desktop experience needs automatic next video behavior
                so users can keep watching with less interruption.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Playlist looping</h3>
              <p className="cardText">
                Loop behavior helps longer sessions continue when the end of a
                playlist is reached.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Less manual browsing</h3>
              <p className="cardText">
                The value of a desktop player increases when users do not need
                to keep searching and clicking for each next video.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Personal browser setup</h3>
              <p className="cardText">
                A lightweight browser-based system can keep channels, keywords,
                and playback-related information in the local environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">How YouTube TV Web fits desktop viewing</h2>
          <p className="sectionText">
            YouTube TV Web is being built as a desktop-first experience rather
            than a normal single-video page. The idea is to support channel
            flow, autoplay, looping, and a more TV-like viewing rhythm that
            feels natural on larger screens.
          </p>
          <p className="sectionText">
            This makes the desktop player idea stronger because the interface is
            built around continuity instead of repeated manual browsing.
          </p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this page is for</h2>
            <p className="sectionText">
              This page is useful for people searching for a desktop YouTube
              player, a better large-screen YouTube experience, or a more
              continuous playback environment.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where to go next</h2>
            <p className="sectionText">
              You can continue to the features page to understand the playback
              system, move to the guide page for usage flow, or open the app
              area where the future player entry point will live.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Quick links</h2>

          <div className="linkGrid">
            <Link href="/watch-youtube-like-tv" className="linkCard">
              <h3 className="cardTitle">Watch YouTube Like TV</h3>
              <p className="cardText">
                Read a detailed page about TV-style YouTube viewing on desktop.
              </p>
            </Link>

            <Link href="/youtube-autoplay-web-app" className="linkCard">
              <h3 className="cardTitle">YouTube Autoplay Web App</h3>
              <p className="cardText">
                Read a detailed page about autoplay flow and continuous desktop
                viewing.
              </p>
            </Link>

            <Link href="/youtube-playlist-loop-player" className="linkCard">
              <h3 className="cardTitle">YouTube Playlist Loop Player</h3>
              <p className="cardText">
                Read a detailed page about looping playlists and longer viewing
                sessions.
              </p>
            </Link>

            <Link href="/features" className="linkCard">
              <h3 className="cardTitle">Features</h3>
              <p className="cardText">
                Learn how autoplay, channel-style playback, and looping work.
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