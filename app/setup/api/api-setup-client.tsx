"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/app/components/site-header";
import { loadApiKey, saveApiKey } from "@/app/lib/local-store";

export default function ApiSetupPage() {
  const [apiKey, setApiKey] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    setApiKey(loadApiKey());
  }, []);

  const maskedKey = useMemo(() => {
    const trimmed = apiKey.trim();
    if (trimmed.length <= 8) {
      return trimmed;
    }
    return `${trimmed.slice(0, 4)}••••••••${trimmed.slice(-4)}`;
  }, [apiKey]);

  function handleSave(): void {
    const trimmed = apiKey.trim();
    saveApiKey(trimmed);
    setApiKey(trimmed);
    setSavedMessage(trimmed ? "API key saved in this browser." : "Saved an empty API key value.");
  }

  return (
    <main className="page">
      <SiteHeader currentPath="/setup/api" />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Step 1</p>
          <h1 className="heroTitle">Create and save your YouTube API key</h1>
          <p className="heroDescription">
            This page explains the beginner setup from the very beginning: where to go,
            which menu to open, what to click, how to restrict the key, and where to
            paste the final value.
          </p>

          <div className="heroButtons">
            <Link href="/setup/channels" className="primaryButton">
              Next: Channel Setup
            </Link>
            <Link href="/watch" className="secondaryButton">
              Open Watch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">What this key does</h2>
            <p className="sectionText">
              The API key is the block that lets the app talk to YouTube Data API v3.
              Without it, channel search, playlist building, and video discovery will not work.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Where you make it</h2>
            <p className="sectionText">
              Open Google Cloud Console, create or select your project, enable YouTube Data API v3,
              then create an API key under APIs &amp; Services → Credentials.
            </p>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Step-by-step path for complete beginners</h2>
          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">1. Open Google Cloud Console</h3>
              <p className="cardText">
                Go to console.cloud.google.com and sign in with your Google account.
                If you have never used Google Cloud before, that is fine. The first goal is only entering the console.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">2. Create a project</h3>
              <p className="cardText">
                Click the project selector near the top, choose New Project, and create one with a clear name,
                such as YouTube TV Web. A clear name helps later when checking quota and restrictions.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">3. Enable YouTube Data API v3</h3>
              <p className="cardText">
                Open APIs &amp; Services, open Library, search for YouTube Data API v3, then click Enable.
                If this step is skipped, the app can still have a key but the API calls will fail.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">4. Create the API key</h3>
              <p className="cardText">
                Open Credentials, click Create Credentials, and choose API key.
                Google creates the key immediately, but you should not stop here.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">5. Protect the key</h3>
              <p className="cardText">
                In Application restrictions choose Websites. Add youtube-tv-seo-site.vercel.app and
                youtube-tv-seo-site.vercel.app/*, then in API restrictions allow only YouTube Data API v3.
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">6. Save and test</h3>
              <p className="cardText">
                Copy the final key, paste it below on this page, save it in your browser, then continue to the
                channel page. After that you will test the full flow in the watch page.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Restriction examples for this site</h2>
          <div className="cardGrid">
            <article className="featureCard">
              <h3 className="cardTitle">Application restrictions</h3>
              <p className="cardText">Websites</p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">Website restrictions</h3>
              <p className="cardText">
                youtube-tv-seo-site.vercel.app
                <br />
                youtube-tv-seo-site.vercel.app/*
              </p>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">API restrictions</h3>
              <p className="cardText">YouTube Data API v3 only</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container twoColumn">
          <div>
            <h2 className="sectionTitle">Quota basics</h2>
            <p className="sectionText">
              Beginners do not need advanced cloud knowledge. The simple rule is that every API request uses part
              of a daily quota budget. Broad search requests are usually the most expensive part of testing.
            </p>
            <p className="sectionText">
              The easiest beginner habit is small testing: one API key, one channel, one focused keyword set, one watch test.
            </p>
          </div>

          <div>
            <h2 className="sectionTitle">Save your key in this browser</h2>
            <div className="featureCard">
              <h3 className="cardTitle">API key</h3>
              <input
                value={apiKey}
                onChange={(event) => setApiKey(event.target.value)}
                placeholder="Paste your YouTube Data API key"
                style={{
                  width: "100%",
                  minHeight: 48,
                  borderRadius: 12,
                  border: "1px solid var(--card-border)",
                  background: "#0b1020",
                  color: "var(--foreground)",
                  padding: "0 14px",
                  fontSize: 16,
                  marginBottom: 14,
                }}
              />

              <div className="heroButtons" style={{ marginTop: 0 }}>
                <button type="button" className="primaryButton" onClick={handleSave}>
                  Save API Key
                </button>
                <Link href="/setup/channels" className="secondaryButton">
                  Continue
                </Link>
              </div>

              <p className="cardText" style={{ marginTop: 14 }}>
                Current saved value: {maskedKey || "Nothing saved yet"}
              </p>
              {savedMessage ? (
                <p className="cardText" style={{ marginTop: 8 }}>
                  {savedMessage}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}