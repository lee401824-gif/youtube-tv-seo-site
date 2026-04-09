import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/site-header";

export const metadata: Metadata = {
  title: "YouTube TV Web",
  description: "Build your own YouTube TV using API + Channel + Keywords blocks.",
};

export default function HomePage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/" />

      <header className="hero">
        <div className="container">
          <h1 className="heroTitle">
            Build your own YouTube TV
          </h1>

          <p className="heroDescription">
            Think of this like LEGO.
            <br />
            You combine blocks and create your own result.
          </p>

          <div className="heroButtons">
            <Link href="/setup/api" className="primaryButton">
              Start Building
            </Link>

            <Link href="/watch" className="secondaryButton">
              See Result
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container cardGrid">
          <div className="featureCard">
            <h2 className="cardTitle">Block 1: API Key</h2>
            <p className="cardText">
              This is your power source.
              <br />
              It lets the app talk to YouTube.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">Block 2: Channel Name</h2>
            <p className="cardText">
              This is the identity of your TV channel.
              <br />
              Example: English Study, Calm Piano
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">Block 3: Keywords</h2>
            <p className="cardText">
              These decide what videos come in.
              <br />
              You control the content flow.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">How it works</h2>

          <p className="sectionText">
            API + Channel + Keywords = Your own YouTube TV
          </p>

          <p className="sectionText">
            Change the blocks → Change the result
          </p>
        </div>
      </section>

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
    </main>
  );
}