import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/guide";
const pageTitle = "Beginner Guide";
const pageDescription =
  "Read a detailed beginner guide for YouTube TV Web, including desktop setup, API key basics, API key restriction steps, channel-style playback, autoplay, playlist looping, browser storage, and common troubleshooting tips.";

const setupSteps = [
  {
    title: "1. Open the app on a desktop browser",
    text: "Start on a desktop or laptop browser. This project is designed mainly for desktop viewing because channel-style browsing, larger layouts, and longer watching sessions are more comfortable there.",
  },
  {
    title: "2. Understand what the app is",
    text: "YouTube TV Web is not a normal one-video watch page. It is a personal browser-based player concept built around channel-style playback, autoplay flow, and playlist looping.",
  },
  {
    title: "3. Prepare your YouTube Data API key",
    text: "Depending on the player flow, you may need your own YouTube Data API key so the app can request public YouTube data such as playlist and search-related information.",
  },
  {
    title: "4. Restrict the API key before using it",
    text: "Before using the key in the browser, add website restrictions and API restrictions in Google Cloud Console. This is one of the most important safety steps for beginners.",
  },
  {
    title: "5. Enter the key in the app settings area",
    text: "After the key is restricted properly, enter it into the app in the browser you plan to use. The app is built for a personal setup, so the current browser matters.",
  },
  {
    title: "6. Choose a channel-style viewing setup",
    text: "Select a channel or content flow so the app can begin playing videos in a more organized and TV-like way instead of forcing you to choose every next item manually.",
  },
  {
    title: "7. Let autoplay continue the session",
    text: "Once playback starts, the app can move to the next item automatically. This is one of the core ideas behind making YouTube feel more like a channel-based TV experience.",
  },
  {
    title: "8. Use playlist loop for longer sessions",
    text: "If loop behavior is part of your current setup, the playback flow can return to the beginning after the last item finishes. This is useful for music, repeated topics, or longer passive viewing.",
  },
  {
    title: "9. Return later in the same browser",
    text: "Because the project stores personal setup data locally in the browser, you can often return later on the same computer and browser and continue more easily.",
  },
];

const warningItems = [
  {
    title: "API keys used in browsers are not completely secret",
    text: "A browser-based API key can be exposed through developer tools or network requests. That is why the key must be restricted before use.",
  },
  {
    title: "Do not use an unrestricted key",
    text: "If a key has no website restriction and no API restriction, another person could reuse it and consume your quota.",
  },
  {
    title: "The main practical risk is quota loss",
    text: "For most users, the bigger problem is not direct billing but losing daily API quota so the app stops working properly.",
  },
  {
    title: "Never hardcode your own shared public key",
    text: "Do not place one common API key directly in public code and expect it to stay private. That is the fastest way to lose control of usage.",
  },
];

const restrictionSteps = [
  {
    title: "Step A. Open Google Cloud Console",
    text: "Go to your Google Cloud project where the YouTube Data API key was created. Then move to the Credentials area.",
  },
  {
    title: "Step B. Select your API key",
    text: "Open the API key that you want to use for this app. You will see key details and restriction settings.",
  },
  {
    title: "Step C. Add website restrictions",
    text: "Choose website or HTTP referrer restrictions so the key can be used only from your site address.",
  },
  {
    title: "Step D. Add your site address",
    text: "For the current site structure, add your real website domain or your current Vercel deployment address pattern.",
  },
  {
    title: "Step E. Restrict the API itself",
    text: "In API restrictions, allow only YouTube Data API v3 so the key cannot be used freely across unrelated Google APIs.",
  },
  {
    title: "Step F. Save first, then test",
    text: "After saving, return to the app and test basic loading. If something fails immediately, check whether the domain pattern was typed correctly.",
  },
];

const examples = [
  {
    title: "Current Vercel address example",
    text: "If you are still using the Vercel domain, add a website restriction pattern that matches your deployed site address.",
  },
  {
    title: "Custom domain example",
    text: "If you later move to your own domain, update the website restriction so the key allows the new domain instead of the old one.",
  },
  {
    title: "One project, one purpose",
    text: "It is easier for beginners when one API key is used only for this YouTube TV Web setup instead of many unrelated experiments.",
  },
];

const troubleshootingItems = [
  {
    question: "The app says the API key is invalid.",
    answer:
      "First check whether the key was copied completely. Then check whether YouTube Data API v3 is enabled in the same Google Cloud project as the key.",
  },
  {
    question: "The app worked before but stopped later.",
    answer:
      "This often points to quota limits, changed restrictions, or an incorrect domain restriction after moving to a new deployment address.",
  },
  {
    question: "The page loads but no useful results appear.",
    answer:
      "Check whether the API key is present, whether YouTube Data API v3 is enabled, and whether the current browser is still using the same saved settings.",
  },
  {
    question: "I changed computers and my setup disappeared.",
    answer:
      "This project stores personal settings in the browser environment, so the same saved setup does not automatically move to a different computer or browser.",
  },
  {
    question: "Why is desktop recommended so strongly?",
    answer:
      "The project is designed around a desktop-first layout, channel-like browsing, and longer viewing sessions. Those ideas work better on a larger screen.",
  },
  {
    question: "Can I safely use one shared API key for all visitors?",
    answer:
      "That is not recommended. A shared public key is much easier to abuse and much harder to protect. A personal key with proper restrictions is safer for this kind of browser-based setup.",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Beginner Guide | YouTube TV Web",
      description: pageDescription,
      url: pageUrl,
    },
    {
      "@type": "HowTo",
      name: "How to use YouTube TV Web",
      description: pageDescription,
      url: pageUrl,
      step: setupSteps.map((step) => ({
        "@type": "HowToStep",
        name: step.title,
        text: step.text,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: troubleshootingItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
        alt: "YouTube TV Web Beginner Guide",
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
          <p className="eyebrow">Beginner Guide</p>
          <h1 className="heroTitle">
            A detailed beginner guide for using YouTube TV Web
          </h1>
          <p className="heroDescription">
            This guide is written for beginners who want to understand what the
            app does, how to start safely, how API keys fit into the setup, how
            autoplay and playlist looping work, and what to check when something
            does not work as expected.
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
            <h2 className="sectionTitle">What this app is</h2>
            <p className="sectionText">
              YouTube TV Web is a desktop-first personal web app concept that
              tries to make YouTube feel less like repeated manual searching and
              more like a channel-based viewing experience.
            </p>
            <p className="sectionText">
              Instead of picking every next video one by one, the app is built
              around channel-style playback, automatic next video flow, playlist
              looping, and a more continuous watching rhythm.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Who this guide is for</h2>
            <p className="sectionText">
              This page is for beginners, desktop users, and anyone who wants a
              clearer explanation of how to start using the app without guessing
              what each setting means.
            </p>
            <p className="sectionText">
              It is especially useful if you are new to YouTube Data API keys,
              browser-based tools, local storage, or TV-style playback ideas.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Before you begin</h2>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Use desktop first</h3>
              <p className="cardText">
                This project is designed mainly for desktop viewing. The larger
                screen makes channels, controls, and longer sessions easier to
                manage.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Use one main browser</h3>
              <p className="cardText">
                Your saved setup usually stays in the current browser
                environment, so it is easier if you choose one main browser and
                keep using it.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Know that this is personal setup</h3>
              <p className="cardText">
                This is closer to a personal browser tool than a shared cloud
                account system. That means your setup is usually tied to your
                own browser on your own computer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Step-by-step getting started</h2>

          <div className="cardGrid">
            {setupSteps.map((step) => (
              <article className="featureCard" key={step.title}>
                <h3 className="cardTitle">{step.title}</h3>
                <p className="cardText">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Why an API key may be needed</h2>
            <p className="sectionText">
              The app can use public YouTube data to build a more organized
              browser player flow. In practice, that often means using a YouTube
              Data API key to request information such as search or playlist
              data.
            </p>
            <p className="sectionText">
              This is why some setups ask you to enter your own API key instead
              of relying on a single shared public key.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What beginners should understand</h2>
            <p className="sectionText">
              A browser-based API key is not a hidden password. It can be seen
              in browser tools or network requests. The way you make it safer is
              by restricting where it can be used and which API it can access.
            </p>
            <p className="sectionText">
              In simple words, the key is safer when it only works on your site
              and only works for YouTube Data API v3.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Important security warnings</h2>

          <div className="cardGrid">
            {warningItems.map((item) => (
              <article className="featureCard" key={item.title}>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">How to restrict your API key safely</h2>

          <div className="cardGrid">
            {restrictionSteps.map((step) => (
              <article className="featureCard" key={step.title}>
                <h3 className="cardTitle">{step.title}</h3>
                <p className="cardText">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Restriction examples for beginners</h2>

          <div className="cardGrid">
            {examples.map((item) => (
              <article className="featureCard" key={item.title}>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </article>
            ))}

            <article className="featureCard">
              <h3 className="cardTitle">Website restriction reminder</h3>
              <p className="cardText">
                Restrict the key to your real site address, not to every
                website. If you later change from the Vercel address to your own
                custom domain, update the restriction list again.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">API restriction reminder</h3>
              <p className="cardText">
                Restrict the key to YouTube Data API v3 only. This reduces the
                damage if the key is exposed because it cannot be used as
                broadly.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Test after every change</h3>
              <p className="cardText">
                After changing restrictions, test the app again. A small typo in
                the website restriction can make the app fail even when the key
                itself is correct.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">How playback is supposed to feel</h2>
            <p className="sectionText">
              The app is meant to feel calmer than ordinary YouTube browsing.
              You choose a channel-style setup, begin playback, and let the
              session keep moving with less manual decision-making.
            </p>
            <p className="sectionText">
              The idea is not only speed. The bigger idea is continuity: fewer
              interruptions, longer viewing flow, and a more TV-like rhythm.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What playlist loop means</h2>
            <p className="sectionText">
              Playlist loop means the session can return to the beginning after
              the last item finishes. This is useful for repeated topics, music,
              background playback, and longer desktop sessions.
            </p>
            <p className="sectionText">
              When combined with autoplay, loop behavior helps the app feel more
              stable and more like a personal browser TV system.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Where your data is stored</h2>
            <p className="sectionText">
              The project stores personal setup data in the browser environment.
              That can include things like API key settings, channels, keywords,
              playlist-related data, and playback-related state.
            </p>
            <p className="sectionText">
              This is why the same setup usually stays on the same computer and
              browser instead of automatically following you everywhere.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What this means in real life</h2>
            <p className="sectionText">
              If you change browsers, clear storage, use private mode, or move
              to a different computer, your saved setup may not appear there.
            </p>
            <p className="sectionText">
              Beginners should treat this like a personal local tool, not like a
              cloud account that syncs automatically across devices.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Common problems and simple answers</h2>

          <div className="cardGrid">
            {troubleshootingItems.map((item) => (
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
            <h2 className="sectionTitle">Best beginner path</h2>
            <p className="sectionText">
              The simplest safe path is this: use desktop, prepare your YouTube
              Data API key, add website restriction, add API restriction, enter
              the key in the app, choose your channel-style setup, and test one
              short viewing session first.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">What to do after the first success</h2>
            <p className="sectionText">
              After the first working session, explore features, test autoplay,
              test looping, and then return to the FAQ if you want short answers
              to common beginner questions.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Quick links</h2>

          <div className="linkGrid">
            <Link href="/app" className="linkCard">
              <h3 className="cardTitle">Open App</h3>
              <p className="cardText">
                Jump to the actual Flutter player entry point.
              </p>
            </Link>

            <Link href="/features" className="linkCard">
              <h3 className="cardTitle">Features</h3>
              <p className="cardText">
                Read about autoplay, looping, and channel-style playback.
              </p>
            </Link>

            <Link href="/faq" className="linkCard">
              <h3 className="cardTitle">FAQ</h3>
              <p className="cardText">
                Read short answers to the most common questions.
              </p>
            </Link>

            <Link href="/watch-youtube-like-tv" className="linkCard">
              <h3 className="cardTitle">Watch YouTube Like TV</h3>
              <p className="cardText">
                Learn the main idea behind the TV-style viewing concept.
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
            <Link href="/faq">FAQ</Link>
            <Link href="/app">App</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}