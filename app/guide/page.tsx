import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/guide";
const pageTitle = "Guide";
const pageDescription =
  "Read the basic setup guide for YouTube TV Web, including desktop use, API key setup, channel selection, playlist behavior, and continue watching.";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use YouTube TV Web",
  description: pageDescription,
  url: pageUrl,
  step: [
    {
      "@type": "HowToStep",
      name: "Open the app",
      text: "Move into the app area and prepare the player environment on a desktop browser.",
    },
    {
      "@type": "HowToStep",
      name: "Set up your API key",
      text: "Enter your own YouTube Data API key if the player setup requires it for playlist and search behavior.",
    },
    {
      "@type": "HowToStep",
      name: "Choose a channel",
      text: "Select a channel-style group to start watching videos in a more organized flow.",
    },
    {
      "@type": "HowToStep",
      name: "Let playback continue",
      text: "The app can move to the next video automatically and keep the session flowing.",
    },
    {
      "@type": "HowToStep",
      name: "Loop if needed",
      text: "When the playlist reaches the end, the viewing flow can return to the beginning.",
    },
    {
      "@type": "HowToStep",
      name: "Continue later",
      text: "Because the app uses local browser storage, playback-related state can be remembered for later use in the same environment.",
    },
  ],
};

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
    type: "article",
    images: [
      {
        url: "/tv-app/favicon.png",
        width: 512,
        height: 512,
        alt: "YouTube TV Web Guide",
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

export default function GuidePage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/guide" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Guide</p>
          <h1 className="heroTitle">How to use YouTube TV Web</h1>
          <p className="heroDescription">
            This guide explains the basic idea of the app, how the viewing flow
            works, and what users should expect from a desktop-first personal
            YouTube TV-style experience.
          </p>

          <div className="heroButtons">
            <Link href="/" className="secondaryButton">
              Back Home
            </Link>
            <Link href="/features" className="primaryButton">
              View Features
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Basic usage flow</h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">1. Open the app</h3>
              <p className="cardText">
                Move into the app area and prepare the player environment on a
                desktop browser.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">2. Set up your API key</h3>
              <p className="cardText">
                Enter your own YouTube Data API key if the player setup requires
                it for playlist and search behavior.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">3. Choose a channel</h3>
              <p className="cardText">
                Select a channel-style group to start watching videos in a more
                organized flow.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">4. Let playback continue</h3>
              <p className="cardText">
                The app can move to the next video automatically and keep the
                session flowing.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">5. Loop if needed</h3>
              <p className="cardText">
                When the playlist reaches the end, the viewing flow can return
                to the beginning.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">6. Continue later</h3>
              <p className="cardText">
                Because the app uses local browser storage, playback-related
                state can be remembered for later use in the same environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Important note</h2>
            <p className="sectionText">
              This system is designed for personal use and stores data in the
              current browser. That means settings and playback information are
              typically tied to the same computer and browser.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Desktop recommendation</h2>
            <p className="sectionText">
              The viewing experience is intended for desktop use. Larger screens
              make the channel-like flow, playlist behavior, and control layout
              more comfortable.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <p className="footerText">YouTube TV Web</p>
          <nav className="footerNav">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/app">App</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}