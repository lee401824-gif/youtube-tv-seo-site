import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/features";
const pageTitle = "Features";
const pageDescription =
  "Explore the main features of YouTube TV Web, including channel-style playback, automatic next video, playlist looping, continue watching, and desktop-first viewing.";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Features | YouTube TV Web",
  description: pageDescription,
  url: pageUrl,
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
    type: "website",
    images: [
      {
        url: "/tv-app/favicon.png",
        width: 512,
        height: 512,
        alt: "YouTube TV Web Features",
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

export default function FeaturesPage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/features" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h1 className="heroTitle">Core features of YouTube TV Web</h1>
          <p className="heroDescription">
            This page explains the core viewing features that make YouTube TV
            Web feel more like a personal desktop TV system than a normal
            one-video-at-a-time YouTube session.
          </p>

          <div className="heroButtons">
            <Link href="/" className="secondaryButton">
              Back Home
            </Link>
            <Link href="/app" className="primaryButton">
              Open App Area
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cardGrid">
            <article className="featureCard">
              <h2 className="cardTitle">Channel-style playback</h2>
              <p className="cardText">
                Videos can be grouped into channel-like collections so users can
                choose a viewing mood or topic instead of manually picking every
                single video.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Automatic next video</h2>
              <p className="cardText">
                When one video ends, the next video can play automatically. This
                reduces interruptions and helps create a more relaxed viewing
                flow.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Playlist loop</h2>
              <p className="cardText">
                When the last item in the playlist finishes, playback can return
                to the beginning. This makes long passive viewing much easier.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Continue watching</h2>
              <p className="cardText">
                The browser can remember playback-related information so users
                can return later and continue in the same browser environment.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Local browser storage</h2>
              <p className="cardText">
                Settings, channels, keywords, playlists, and playback-related
                information are stored locally in the browser for lightweight
                personal use.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Desktop-first design</h2>
              <p className="cardText">
                The experience is designed primarily for desktop use, where
                larger screens make channel browsing and continuous watching
                easier and more comfortable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Why these features matter</h2>
            <p className="sectionText">
              Most video browsing experiences are built around repeated manual
              choice. YouTube TV Web focuses on continuity, which helps users
              spend less time choosing and more time watching.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Best use case</h2>
            <p className="sectionText">
              This feature set is especially useful for users who want a simple,
              personal, desktop-based YouTube viewing tool with channel-style
              flow and automatic playback.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <p className="footerText">YouTube TV Web</p>
          <nav className="footerNav">
            <Link href="/">Home</Link>
            <Link href="/guide">Guide</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/app">App</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}