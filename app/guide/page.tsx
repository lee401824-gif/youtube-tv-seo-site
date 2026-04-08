import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

const pageUrl = "https://youtube-tv-seo-site.vercel.app/guide";
const pageTitle = "Guide";
const pageDescription =
  "Detailed beginner guide for YouTube TV Web, including API key setup, safe restriction settings, channel naming, keyword setup, playback flow, and launch checklist.";

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
            This page explains the full beginner flow in a much more detailed
            way, including API key setup, safe restriction settings, channel
            naming, keyword selection, playback flow, autoplay behavior, quota
            basics, and a final launch checklist.
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
              <h2 className="cardTitle">Start with the real order</h2>
              <p className="cardText">
                The safest beginner order is simple: create the Google Cloud
                project, enable YouTube Data API v3, create the API key, add
                restrictions, set a clear channel name, choose focused
                keywords, open the app, test playback, and only then prepare
                for release.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Do not skip restrictions</h2>
              <p className="cardText">
                Creating the API key is not the last step. For a browser-based
                app, the key should be restricted to your website and limited to
                YouTube Data API v3. This is one of the most important beginner
                safety steps.
              </p>
            </article>

            <article className="featureCard">
              <h2 className="cardTitle">Think in small tests first</h2>
              <p className="cardText">
                Before release, always test with one clear channel name, one
                focused keyword set, and one real playback session. Small tests
                make it much easier to understand whether the setup is working.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Detailed API key setup for beginners</h2>
          <p className="sectionText">
            This section is written for someone who has never done this before.
            The goal is to help you move from zero to a working API key without
            guessing which menu to use.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Step 1. Open Google Cloud Console</h3>
              <p className="cardText">
                Open Google Cloud Console in your browser and sign in with your
                Google account. If you see a project selector at the top, that
                is normal. Google Cloud can hold many projects, so the first
                beginner task is simply making sure you are working in the
                correct project before enabling anything.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Step 2. Create a new project</h3>
              <p className="cardText">
                Click the project selector near the top of the page, choose
                <strong> New Project</strong>, and create a project with a clear
                name such as <strong>YouTube TV Web</strong>. A simple name is
                best because later you may need to confirm which project owns
                the API key and quota settings.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Step 3. Enable YouTube Data API v3</h3>
              <p className="cardText">
                In the left-side menu, open <strong>APIs &amp; Services</strong>,
                then open <strong>Library</strong>. Search for
                <strong> YouTube Data API v3</strong>, open it, and click
                <strong> Enable</strong>. If this API is not enabled, the key
                may exist but the app still will not work correctly.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Step 4. Create the API key</h3>
              <p className="cardText">
                Go to <strong>APIs &amp; Services</strong>, then
                <strong> Credentials</strong>, then
                <strong> Create Credentials</strong>, and choose
                <strong> API key</strong>. Google will generate the key right
                away. That is the moment many beginners stop, but you should
                continue directly to the restrictions screen before using it.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Step 5. Restrict the key immediately</h3>
              <p className="cardText">
                After the key is created, open its settings page. In
                <strong> Application restrictions</strong>, choose
                <strong> Websites</strong>. Then add only your real site values:
                <br />
                <strong>youtube-tv-seo-site.vercel.app</strong>
                <br />
                <strong>youtube-tv-seo-site.vercel.app/*</strong>
                <br />
                In <strong>API restrictions</strong>, allow only
                <strong> YouTube Data API v3</strong>. This keeps the key much
                safer for browser use.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Step 6. Verify before leaving</h3>
              <p className="cardText">
                Before closing Google Cloud Console, confirm four things:
                the correct project is selected, YouTube Data API v3 is enabled,
                the key exists, and the restrictions were saved. Beginners often
                assume settings were saved when they were not, so this final
                check prevents confusion later.
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
              If you are using the current Vercel domain, the simplest safe
              beginner setup is to allow only your site and only YouTube Data
              API v3. This keeps the key more focused and reduces accidental
              misuse.
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
          <h2 className="sectionTitle">Quota explanation for complete beginners</h2>
          <p className="sectionText">
            Quota is the daily budget for API usage. You do not need to fear the
            word, but you do need to understand it. The important beginner idea
            is that not all API requests cost the same amount.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">What quota means</h3>
              <p className="cardText">
                Think of quota like a daily points budget. A project usually
                starts with a default daily quota of around 10,000 units. Every
                API request uses some of that budget. When the daily budget is
                gone, requests can fail until the quota resets.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Why search requests matter most</h3>
              <p className="cardText">
                Broad search requests often cost much more than detail lookups.
                That means keyword-based discovery is usually the first place to
                watch. Beginners should understand that even a working app can
                run into quota limits if search is repeated too heavily.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">How to think about testing</h3>
              <p className="cardText">
                Start with one channel and one focused keyword set. Test small,
                verify the behavior, then expand slowly. This keeps usage easier
                to understand and prevents confusing quota spikes while you are
                still learning the setup.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Where to check quota later</h3>
              <p className="cardText">
                In Google Cloud Console, open the correct project and review the
                quota area under APIs &amp; Services. You do not need advanced
                cloud knowledge to do this. The main beginner goal is simply
                checking whether the project is using the API more than you
                expected.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Channel naming guide</h2>
          <p className="sectionText">
            Channel names should be easy to understand later. A strong beginner
            rule is: one name, one topic, one clear purpose. If a saved channel
            name looks confusing after a few days, it is not a good name.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Good channel name examples</h3>
              <p className="cardText">
                Names like <strong>K-Pop Mix</strong>,
                <strong> News Korea</strong>,
                <strong> English Study</strong>,
                <strong> Kids Songs</strong>, and
                <strong> Calm Piano</strong> are useful because each one clearly
                suggests the kind of viewing experience the user should expect.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Why short names work better</h3>
              <p className="cardText">
                A short name is easier to scan when many channels are saved.
                Beginners often create names that are too long because they try
                to describe everything at once. In practice, shorter names are
                much easier to manage.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">What to avoid</h3>
              <p className="cardText">
                Avoid vague test names, very long labels, or names that mix too
                many unrelated ideas. A name such as
                <strong> music news study kids all</strong> does not help the
                user understand what the channel is meant to do.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Beginner naming rule</h3>
              <p className="cardText">
                If you can understand the saved name instantly and it still
                matches the keyword set, the name is probably good enough. If
                you have to stop and think, simplify it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Keyword setup guide</h2>
          <p className="sectionText">
            Keywords shape search quality. For beginners, the safest method is
            choosing two or three related keywords that support the same topic
            instead of trying to cover many unrelated directions at once.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Good keyword rules</h3>
              <p className="cardText">
                Use meaningful words, keep them related to one another, and make
                sure they match the channel name. If one keyword points toward
                music and another points toward news, the results can become
                noisy and harder to predict.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Example set 1</h3>
              <p className="cardText">
                <strong>English Study</strong> →
                <br />
                english, listening, conversation
                <br />
                This set works because all three words support the same learning
                goal.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Example set 2</h3>
              <p className="cardText">
                <strong>Calm Piano</strong> →
                <br />
                piano, relax, calm music
                <br />
                This set works because all three keywords support a soft and
                quiet listening mood.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Example set 3</h3>
              <p className="cardText">
                <strong>Kids Songs</strong> →
                <br />
                kids, songs, nursery rhyme
                <br />
                This set works because it stays focused on one child-friendly
                playback direction.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">How to improve weak results</h3>
              <p className="cardText">
                If results feel random, the first beginner fix is not changing
                everything at once. Instead, make one keyword more specific,
                test again, and compare. Small changes make it easier to learn
                which keyword is helping and which one is hurting.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Beginner keyword rule</h3>
              <p className="cardText">
                A useful beginner rule is simple: if the keywords look like they
                belong in the same sentence, they probably belong in the same
                channel setup.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Playback and playlist flow</h2>
          <p className="sectionText">
            Beginners should think of the app playback flow as its own system.
            Unless the app explicitly supports account playlists, the in-app
            channel flow and YouTube&apos;s own playlist system should be treated
            as separate concepts.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">What happens inside the app</h3>
              <p className="cardText">
                A user selects or creates a channel. The app then loads a list
                of matching videos based on the saved setup. That list becomes
                the playback order for the app experience.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">How autoplay feels</h3>
              <p className="cardText">
                When one video ends, the app can move to the next one
                automatically. This is one of the main reasons the app feels
                more like channel viewing than manual one-video-at-a-time use.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">How loop behavior works</h3>
              <p className="cardText">
                After the last video finishes, playback can return to the
                beginning. This makes the channel feel continuous instead of
                stopping suddenly after one sequence.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">What beginners should test first</h3>
              <p className="cardText">
                Open the app, enter the API key, create one clear channel, save
                one focused keyword set, start playback, and then verify
                autoplay, loop, and resume behavior before trying larger tests.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Why this matters before release</h3>
              <p className="cardText">
                A setup may look correct on paper but still feel wrong in actual
                playback. That is why a real end-to-end session matters. The
                goal is not only creating a channel but making sure the full
                viewing flow feels stable and natural.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Resume behavior</h3>
              <p className="cardText">
                If the app supports resume behavior, make sure it continues in a
                way that feels predictable. Beginners should check whether the
                app returns to the right place instead of assuming it works.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Beginner release checklist</h2>
          <p className="sectionText">
            Before release, the safest method is checking one item at a time.
            This helps beginners avoid the common mistake of changing too many
            things without confirming what actually works.
          </p>

          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Project and API checks</h3>
              <p className="cardText">
                Confirm the correct Google Cloud project is selected, confirm
                YouTube Data API v3 is enabled, and confirm the API key exists
                inside that same project.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Key restriction checks</h3>
              <p className="cardText">
                Confirm website restrictions are enabled, confirm the Vercel
                domain values are listed correctly, and confirm only YouTube
                Data API v3 is allowed in API restrictions.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Channel setup checks</h3>
              <p className="cardText">
                Confirm channel names are short and clear, confirm keyword sets
                stay focused on one topic, and confirm each saved setup still
                makes sense when viewed later.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Playback checks</h3>
              <p className="cardText">
                Confirm playback starts correctly, autoplay moves to the next
                item, loop behavior works as expected, and resume behavior feels
                natural in a real browser session.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Final beginner rule</h3>
              <p className="cardText">
                Do not release immediately after only reading the guide. Release
                only after you have completed at least one real end-to-end test
                yourself.
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