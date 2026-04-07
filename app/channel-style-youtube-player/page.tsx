import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl =
  "https://youtube-tv-seo-site.vercel.app/channel-style-youtube-player";
const pageTitle = "Channel Style YouTube Player";
const pageDescription =
  "Explore a channel style YouTube player concept for desktop viewing with channel-based playback, autoplay flow, playlist looping, and a TV-like experience.";

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
        alt: "Channel Style YouTube Player",
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

export default function ChannelStyleYouTubePlayerPage() {
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
            A channel style YouTube player for desktop continuous viewing
          </h1>
          <p className="heroDescription">
            Many users want YouTube to feel less like endless manual searching
            and more like switching between channels. This page explains a
            channel style YouTube player concept built for desktop viewing,
            autoplay flow, playlist looping, and a more TV-like experience.
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
            <h2 className="sectionTitle">Why channel-style viewing matters</h2>
            <p className="sectionText">
              Standard YouTube browsing often focuses on choosing one video at a
              time. A channel style YouTube player changes that idea by letting
              users move between organized groups of content instead of starting
              over with every new choice.
            </p>
            <p className="sectionText">
              This matters because many desktop users want a calmer viewing flow
              where content feels grouped, familiar, and easier to continue over
              time.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What users usually want</h2>
            <p className="sectionText">
              When people search for a channel style YouTube player, they often
              want a system that feels more like TV channels than random
              browsing. They want to choose a stream of content, not hunt for
              every next video.
            </p>
            <p className="sectionText">
              Many also want autoplay, playlist loop behavior, and a desktop
              layout that makes channel switching and longer sessions feel more
              natural.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">
            What makes a channel style YouTube player useful
          </h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Channel-based grouping</h3>
              <p className="cardText">
                Videos are more useful when they are grouped into named channels
                or channel-like flows instead of appearing as unrelated items.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Less repeated searching</h3>
              <p className="cardText">
                A channel style setup reduces the need to search manually for
                the next video every few minutes.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Autoplay flow</h3>
              <p className="cardText">
                Channel-style viewing works best when playback continues
                automatically from one item to the next.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Playlist loop support</h3>
              <p className="cardText">
                Looping helps a channel continue even after the end of a
                playlist, which makes the viewing experience feel more stable.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Desktop-first control</h3>
              <p className="cardText">
                Desktop screens make channel selection, browsing, and longer
                sessions more comfortable and easier to manage.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">TV-like viewing rhythm</h3>
              <p className="cardText">
                The overall benefit is not just convenience. It is a different
                viewing rhythm that feels closer to TV than ordinary browsing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">
            How YouTube TV Web uses the channel concept
          </h2>
          <p className="sectionText">
            YouTube TV Web is built around the idea that users should be able to
            pick a channel-like content group and keep watching without
            restarting the decision process over and over again.
          </p>
          <p className="sectionText">
            This approach combines channel flow, autoplay, looping playlists,
            and desktop-friendly layout into a more continuous viewing system.
          </p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this page is for</h2>
            <p className="sectionText">
              This page is useful for desktop users searching for a channel
              style YouTube player, a TV-like viewing system, or a better way to
              organize YouTube playback into channels.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where to go next</h2>
            <p className="sectionText">
              You can continue to the features page to understand the full
              playback structure, move to the guide page for usage flow, or open
              the app area where the future player entry point will live.
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

            <Link href="/desktop-youtube-player" className="linkCard">
              <h3 className="cardTitle">Desktop YouTube Player</h3>
              <p className="cardText">
                Read a detailed page about desktop-first YouTube playback.
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