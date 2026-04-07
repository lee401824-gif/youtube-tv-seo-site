import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "FAQ | YouTube TV Web",
  description:
    "Read frequently asked questions about YouTube TV Web, including desktop use, channel-style playback, autoplay, playlist looping, browser storage, and API key setup.",
};

const faqItems = [
  {
    question: "What is YouTube TV Web?",
    answer:
      "YouTube TV Web is a desktop-first personal web app designed to make YouTube feel more like a TV channel experience. Instead of manually choosing every next video, users can move through channel-style playback with a more continuous viewing flow.",
  },
  {
    question: "Can I watch YouTube like a TV channel on desktop?",
    answer:
      "Yes. The main idea of YouTube TV Web is to make desktop YouTube viewing feel more like a channel-based TV experience. Users can choose a channel-style setup and continue watching in a more relaxed flow.",
  },
  {
    question: "Does YouTube TV Web support automatic next video playback?",
    answer:
      "Yes. Automatic next video behavior is one of the main ideas behind the app. When one video ends, the app can move to the next item in the playlist so the session keeps going with less manual action.",
  },
  {
    question: "Can the playlist loop from the end back to the beginning?",
    answer:
      "Yes. Playlist loop behavior is part of the intended experience. When the last video finishes, playback can return to the beginning so users can keep a longer passive viewing session.",
  },
  {
    question: "Is YouTube TV Web made for desktop or mobile?",
    answer:
      "The experience is designed mainly for desktop use. The layout, browsing flow, and channel-style viewing concept make more sense on a larger screen where users can manage playback more comfortably.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "The app uses local browser storage for personal setup data. This can include items such as API key settings, channels, keywords, playlist-related data, and playback-related state in the current browser environment.",
  },
  {
    question: "Can I use the same saved setup on another computer?",
    answer:
      "Usually no. Because the data is stored in the current browser environment, the same saved setup is generally tied to the same computer and browser unless you manually recreate it elsewhere.",
  },
  {
    question: "Do I need my own YouTube Data API key?",
    answer:
      "Depending on how the player is configured, your own YouTube Data API key may be used for search, playlist loading, or related data behavior. The exact requirement depends on the final player setup.",
  },
  {
    question: "What makes this different from normal YouTube browsing?",
    answer:
      "Normal YouTube use often focuses on choosing one video at a time. YouTube TV Web is built around continuity, channel-style grouping, automatic playback, playlist looping, and a more TV-like viewing rhythm.",
  },
  {
    question: "Is YouTube TV Web a shared cloud service?",
    answer:
      "No. The current concept is closer to a personal browser-based setup than a shared cloud account system. The app is intended to be lightweight and simple for individual desktop use.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/faq" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1 className="heroTitle">
            Frequently asked questions about YouTube TV Web
          </h1>
          <p className="heroDescription">
            This page answers common questions about desktop YouTube TV-style
            viewing, channel-like playback, autoplay flow, playlist loop
            behavior, browser storage, and API key setup.
          </p>

          <div className="heroButtons">
            <Link href="/" className="secondaryButton">
              Back Home
            </Link>
            <Link href="/guide" className="primaryButton">
              Read Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Quick answers</h2>
          <p className="sectionText">
            Below are the most common questions people may ask when they want to
            watch YouTube like a TV channel on desktop, keep videos playing
            automatically, or build a more continuous personal viewing setup.
          </p>

          <div className="cardGrid">
            {faqItems.slice(0, 6).map((item) => (
              <article className="featureCard" key={item.question}>
                <h3 className="cardTitle">{item.question}</h3>
                <p className="cardText">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">More detailed FAQ</h2>
          <p className="sectionText">
            These answers explain the current structure and purpose of the app
            in more detail.
          </p>

          <div className="cardGrid">
            {faqItems.slice(6).map((item) => (
              <article className="featureCard" key={item.question}>
                <h3 className="cardTitle">{item.question}</h3>
                <p className="cardText">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Who this FAQ helps</h2>
            <p className="sectionText">
              This FAQ is useful for users who are trying to understand whether
              YouTube TV Web fits their desktop viewing style, especially if
              they want autoplay, looping playlists, and a channel-style flow.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where to go next</h2>
            <p className="sectionText">
              After reading the FAQ, users can move to the guide page to
              understand the basic usage flow or open the app area to see where
              the player experience will live.
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
            <Link href="/guide">Guide</Link>
            <Link href="/app">App</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}