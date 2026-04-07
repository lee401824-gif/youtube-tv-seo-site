import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl =
  "https://youtube-tv-seo-site.vercel.app/youtube-autoplay-web-app";
const pageTitle = "YouTube Autoplay Web App for Desktop";
const pageDescription =
  "Explore a desktop-first YouTube autoplay web app concept with channel-style playback, automatic next video flow, playlist loop behavior, and continuous viewing.";

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
        alt: "YouTube Autoplay Web App for Desktop",
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

export default function YouTubeAutoplayWebAppPage() {
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
            A YouTube autoplay web app for desktop continuous viewing
          </h1>
          <p className="heroDescription">
            Many users want a YouTube autoplay web app that keeps playback going
            automatically instead of forcing them to search and click again and
            again. This page explains a desktop-first approach built around
            automatic next video flow, channel-style playback, and playlist loop
            behavior.
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
            <h2 className="sectionTitle">Why autoplay matters</h2>
            <p className="sectionText">
              A normal YouTube session often requires repeated manual action.
              Users finish one video, then search, click, wait, and decide
              again. A YouTube autoplay web app is useful because it reduces
              that repeated friction.
            </p>
            <p className="sectionText">
              On desktop, autoplay becomes even more valuable because users
              often want longer passive sessions while working, studying,
              relaxing, or simply watching from a larger screen.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What users usually want</h2>
            <p className="sectionText">
              When people search for a YouTube autoplay web app, they are often
              looking for a player that can continue to the next video
              automatically, keep a smoother flow, and feel less interrupted
              than ordinary browsing.
            </p>
            <p className="sectionText">
              Many also want looping playlists, channel-like grouping, and a
              desktop layout that supports more relaxed continuous playback.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">
            Core ideas behind a better autoplay experience
          </h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Automatic next video</h3>
              <p className="cardText">
                The most important part of an autoplay web app is simple: when
                one video ends, the next one should continue with as little
                manual work as possible.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Channel-style grouping</h3>
              <p className="cardText">
                Videos feel more useful when they are grouped into channel-like
                flows, so users can stay inside a mood or topic for longer.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Playlist loop</h3>
              <p className="cardText">
                A longer autoplay session often needs loop behavior so the
                playlist can return to the beginning and keep going.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Desktop-first player flow</h3>
              <p className="cardText">
                A desktop layout supports longer viewing sessions better because
                users can keep the player open and browse more comfortably.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Less interruption</h3>
              <p className="cardText">
                The real value of autoplay is not only speed. It is the feeling
                of continuity and reduced interruption during the viewing
                session.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Personal browser setup</h3>
              <p className="cardText">
                A lightweight browser-based setup can store playback-related
                information locally to support continuous use on the same
                machine.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">
            How YouTube TV Web approaches autoplay
          </h2>
          <p className="sectionText">
            YouTube TV Web is being built around the idea that YouTube playback
            should feel more continuous on desktop. That means giving users a
            channel-style flow, automatic next video behavior, and playlist loop
            support instead of a one-video-at-a-time browsing pattern.
          </p>
          <p className="sectionText">
            This creates a viewing experience that feels calmer, more passive,
            and more like a lightweight personal TV system inside a browser.
          </p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this page is for</h2>
            <p className="sectionText">
              This page is useful for desktop users looking for a YouTube
              autoplay web app, a better way to keep videos moving
              automatically, or a more continuous playback environment.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where to go next</h2>
            <p className="sectionText">
              You can continue to the features page to understand the core
              playback behavior, move to the guide page for the usage flow, or
              open the app area where the future player entry point will live.
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

            <Link href="/features" className="linkCard">
              <h3 className="cardTitle">Features</h3>
              <p className="cardText">
                Learn how autoplay, channel-style playback, and looping work.
              </p>
            </Link>

            <Link href="/guide" className="linkCard">
              <h3 className="cardTitle">Guide</h3>
              <p className="cardText">
                Read the basic usage flow and setup direction.
              </p>
            </Link>

            <Link href="/faq" className="linkCard">
              <h3 className="cardTitle">FAQ</h3>
              <p className="cardText">
                Read common questions about desktop use, browser storage, and
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