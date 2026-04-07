import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "YouTube Playlist Loop Player for Desktop | YouTube TV Web",
  description:
    "Explore a desktop-first YouTube playlist loop player concept with looping playback, channel-style flow, autoplay behavior, and continuous viewing.",
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "YouTube Playlist Loop Player for Desktop",
  description:
    "A search landing page about looping YouTube playlists on desktop with a channel-style web app experience.",
  url: "https://example.com/youtube-playlist-loop-player",
};

export default function YouTubePlaylistLoopPlayerPage() {
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
            A YouTube playlist loop player for longer desktop viewing sessions
          </h1>
          <p className="heroDescription">
            Many users want a YouTube playlist loop player that can keep videos
            going without stopping at the end of a list. This page explains a
            desktop-first approach built around looping playback, autoplay flow,
            and a more continuous YouTube viewing experience.
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
            <h2 className="sectionTitle">Why playlist loop matters</h2>
            <p className="sectionText">
              A standard YouTube session often stops when a playlist finishes or
              when users reach the end of the current flow. A playlist loop
              player solves that problem by returning playback to the beginning.
            </p>
            <p className="sectionText">
              This is especially useful on desktop, where users often want
              longer passive viewing sessions for music, background watching,
              repeated topic viewing, or a TV-like continuous experience.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What users usually want</h2>
            <p className="sectionText">
              When people search for a YouTube playlist loop player, they often
              want a simple way to keep a playlist alive without manually
              restarting it every time it ends.
            </p>
            <p className="sectionText">
              Many users also want autoplay support, a smoother browsing flow,
              and a channel-style viewing structure that feels less interrupted
              and more continuous.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">What makes a good playlist loop experience</h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Loop back to the beginning</h3>
              <p className="cardText">
                The core idea is simple. When the last video finishes, playback
                should return to the first item so the viewing session can
                continue.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Autoplay between videos</h3>
              <p className="cardText">
                A useful loop player also needs autoplay behavior between items,
                so the playlist feels smooth instead of constantly interrupted.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Longer passive watching</h3>
              <p className="cardText">
                Looping is valuable when users want music, repeated topics, or a
                TV-like background session that stays active longer.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Desktop-first layout</h3>
              <p className="cardText">
                Desktop screens make longer looping sessions easier because users
                can keep the player open and manage channels more comfortably.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Channel-style flow</h3>
              <p className="cardText">
                A playlist loop player becomes even more useful when videos are
                grouped into channel-like viewing flows rather than random one-off
                choices.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Less stopping and restarting</h3>
              <p className="cardText">
                The main value of looping is reducing the need to restart the
                session manually every time the playlist reaches its end.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">How YouTube TV Web approaches playlist looping</h2>
          <p className="sectionText">
            YouTube TV Web is being built around continuous desktop viewing. One
            important part of that idea is playlist loop behavior, where the
            final item can lead back to the beginning to keep the session alive.
          </p>
          <p className="sectionText">
            Combined with channel-style playback and autoplay flow, playlist
            looping helps turn YouTube into a more relaxed desktop viewing
            system that feels closer to TV.
          </p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this page is for</h2>
            <p className="sectionText">
              This page is useful for desktop users searching for a YouTube
              playlist loop player, a better way to keep playlists going, or a
              more continuous channel-style playback experience.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where to go next</h2>
            <p className="sectionText">
              You can continue to the features page to understand playback
              behavior, move to the guide page for basic usage flow, or open the
              app area where the future player entry point will live.
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
                Read a detailed page about autoplay flow and continuous YouTube
                playback on desktop.
              </p>
            </Link>

            <Link href="/features" className="linkCard">
              <h3 className="cardTitle">Features</h3>
              <p className="cardText">
                Learn how autoplay, channel-style playback, and looping work.
              </p>
            </Link>

            <Link href="/faq" className="linkCard">
              <h3 className="cardTitle">FAQ</h3>
              <p className="cardText">
                Read common questions about browser storage, API keys, and
                playback behavior.
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