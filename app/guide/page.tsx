import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Guide | YouTube TV Web",
  description:
    "Read the basic setup guide for YouTube TV Web, including desktop use, API key setup, channel selection, playlist behavior, and continue watching.",
};

export default function GuidePage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/guide" />

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