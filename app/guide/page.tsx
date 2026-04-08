import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/guide";
const pageTitle = "Guide";
const pageDescription =
  "Read the beginner guide for YouTube TV Web, including API key setup, safe restriction settings, channel naming, keyword setup, playback flow, and launch checklist.";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Guide | YouTube TV Web",
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
          <h1 className="heroTitle">Beginner guide for YouTube TV Web</h1>
          <p className="heroDescription">
            This page explains the beginner setup flow step by step, including
            API key setup, safe restriction settings, channel naming, keyword
            selection, playback flow, autoplay behavior, and launch checklist.
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
              <h2 className="cardTitle">Daily default quota</h2>
              <p className="cardText">
                Beginners should first understand that daily API usage moves
                inside a limited quota budget, and the default daily quota is
                usually 10,000 units.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Largest search cost</h2>
              <p className="cardText">
                Search requests are usually the most expensive part of the flow.
                In many common cases, search.list is the main quota cost to
                watch.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Lighter detail lookups</h2>
              <p className="cardText">
                Requests such as channels.list, videos.list, and
                playlistItems.list are much lighter than broad search requests,
                but they still add up over time.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Channel naming guide</h2>
          <p className="sectionText">
            A channel name should stay short and clear so you can understand it
            quickly later. The best names usually describe one viewing mood,
            one topic, or one content direction.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Good channel name examples</h3>
              <p className="cardText">
                K-Pop Mix, News Korea, English Study, Kids Songs, and Calm Piano
                are simple examples because each name tells the user what kind
                of viewing flow to expect.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Names to avoid</h3>
              <p className="cardText">
                Very long names, mixed-topic names, or vague test names are not
                ideal because they become harder to recognize when many channels
                are saved later.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Practical rule</h3>
              <p className="cardText">
                Keep the name short, make it topic-based, and choose something
                that still makes sense when you come back days later.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Keyword setup guide</h2>
          <p className="sectionText">
            Keywords directly affect search quality. For beginners, the safest
            rule is choosing two or three keywords that point in the same
            direction instead of mixing unrelated topics.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Good keyword rules</h3>
              <p className="cardText">
                Choose meaningful words instead of one very broad word, keep the
                channel name and keywords aligned, and make the keywords more
                specific when results feel too noisy.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Example set 1</h3>
              <p className="cardText">
                English Study → english, listening, conversation
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Example set 2</h3>
              <p className="cardText">
                Calm Piano → piano, relax, calm music
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Example set 3</h3>
              <p className="cardText">
                Kids Songs → kids, songs, nursery rhyme
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">API key setup for beginners</h2>
          <p className="sectionText">
            Follow the setup steps from top to bottom without skipping. The goal
            is to create the project, enable the correct API, create the key,
            and then immediately add safe restrictions.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">1. Open Google Cloud Console</h3>
              <p className="cardText">
                Go to console.cloud.google.com and sign in with your Google
                account before starting the project setup flow.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">2. Create a new project</h3>
              <p className="cardText">
                Use the project selector at the top, create a new project, and
                give it a clear name such as YouTube TV Web.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">3. Enable YouTube Data API v3</h3>
              <p className="cardText">
                Open APIs &amp; Services, go to Library, search for YouTube Data
                API v3, and click Enable.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">4. Create the API key</h3>
              <p className="cardText">
                Open Credentials, choose Create Credentials, then create an API
                key. After that, move directly to restrictions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Restriction examples for beginners</h2>
            <p className="sectionText">
              If you are using the current Vercel domain, the most practical
              beginner setup is to restrict the key to your site and allow only
              YouTube Data API v3.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Recommended values</h2>
            <p className="sectionText">
              Application restrictions: Websites
              <br />
              Website restrictions: youtube-tv-seo-site.vercel.app
              <br />
              Website restrictions: youtube-tv-seo-site.vercel.app/*
              <br />
              API restrictions: YouTube Data API v3
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Playback and playlist flow</h2>
          <p className="sectionText">
            Beginners should treat the in-app playback flow and YouTube&apos;s
            own playlist system as separate ideas unless the app explicitly
            supports direct account playlist loading.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">In-app playback flow</h3>
              <p className="cardText">
                A user selects a channel, the app loads a matching list of
                videos, and that list becomes the playback order inside the app.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Autoplay behavior</h3>
              <p className="cardText">
                When one video ends, the app can continue to the next video
                automatically so the session feels more like channel viewing.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Loop behavior</h3>
              <p className="cardText">
                After the last video finishes, playback can return to the start
                so the channel-like experience continues more smoothly.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Real beginner usage flow</h3>
              <p className="cardText">
                Open the app, enter the API key, set the channel name and
                keywords, create or select the channel, then verify autoplay,
                loop, and resume behavior.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Launch checklist</h2>
          <p className="sectionText">
            Checking these items one by one helps reduce beginner mistakes
            before release.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Project and API</h3>
              <p className="cardText">
                Confirm the correct Google Cloud project is selected and confirm
                that YouTube Data API v3 is enabled.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Key restrictions</h3>
              <p className="cardText">
                Confirm website restrictions are enabled, confirm the Vercel
                domain values are listed, and confirm only YouTube Data API v3
                is allowed.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Channel setup</h3>
              <p className="cardText">
                Confirm channel names are short and clear, and confirm keyword
                sets stay focused on one topic.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Playback test</h3>
              <p className="cardText">
                Confirm playback, autoplay, loop, and resume behavior work
                correctly in the actual app environment.
              </p>
            </article>
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