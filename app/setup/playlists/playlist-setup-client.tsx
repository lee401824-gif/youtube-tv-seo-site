"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteHeader from "@/app/components/site-header";
import {
  getDefaultPlaylistGenerationSettings,
  loadPlaylistGenerationSettings,
  savePlaylistGenerationSettings,
  type PlaylistDurationMode,
  type PlaylistGenerationSettings,
  type PlaylistLanguageMode,
} from "@/app/lib/local-store";

const durationOptions: Array<{
  value: PlaylistDurationMode;
  label: string;
  description: string;
}> = [
  {
    value: "min_180",
    label: "3 minutes or longer",
    description: "This is the current setting. Shorts videos are not included.",
  },
  {
    value: "min_120",
    label: "2 minutes or longer",
    description: "Shorts videos may be included.",
  },
  {
    value: "min_60",
    label: "1 minute or longer",
    description: "Shorts videos may be included.",
  },
  {
    value: "all",
    label: "All lengths",
    description: "Do not filter by video length.",
  },
  {
    value: "max_179",
    label: "Under 3 minutes",
    description: "Useful when you want only shorter videos.",
  },
];

const languageOptions: Array<{
  value: PlaylistLanguageMode;
  label: string;
  description: string;
}> = [
  {
    value: "en",
    label: "English priority",
    description: "Search should prefer English-focused results.",
  },
  {
    value: "ko",
    label: "Korean priority",
    description: "Search should prefer Korean-focused results.",
  },
  {
    value: "ja",
    label: "Japanese priority",
    description: "Search should prefer Japanese-focused results.",
  },
  {
    value: "zh",
    label: "Chinese priority",
    description: "Search should prefer Chinese-focused results.",
  },
  {
    value: "hi",
    label: "Hindi priority",
    description: "Search should prefer Hindi-focused results.",
  },
  {
    value: "pt-BR",
    label: "Brazilian Portuguese priority",
    description: "Search should prefer Brazilian Portuguese-focused results.",
  },
  {
    value: "all",
    label: "All languages",
    description: "Do not push one language first.",
  },
];

const playlistSizeOptions = [50, 100, 200, 300, 500];

function getDurationLabel(value: PlaylistDurationMode): string {
  const matched = durationOptions.find((item) => item.value === value);
  return matched?.label ?? value;
}

function getLanguageLabel(value: PlaylistLanguageMode): string {
  const matched = languageOptions.find((item) => item.value === value);
  return matched?.label ?? value;
}

export default function PlaylistSetupClient() {
  const [settings, setSettings] = useState<PlaylistGenerationSettings>(
    getDefaultPlaylistGenerationSettings(),
  );
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    setSettings(loadPlaylistGenerationSettings());
  }, []);

  function updateDurationMode(value: PlaylistDurationMode): void {
    setSettings((current) => ({
      ...current,
      durationMode: value,
    }));
  }

  function updatePlaylistMaxSize(value: number): void {
    setSettings((current) => ({
      ...current,
      playlistMaxSize: value,
    }));
  }

  function updateLanguageMode(value: PlaylistLanguageMode): void {
    setSettings((current) => ({
      ...current,
      languageMode: value,
    }));
  }

  function handleReset(): void {
    const defaults = getDefaultPlaylistGenerationSettings();
    setSettings(defaults);
    setSavedMessage("Settings were reset in the screen. Press Save Settings to store them.");
  }

  function handleSave(): void {
    savePlaylistGenerationSettings(settings);
    setSavedMessage("Playlist generation settings saved in this browser.");
  }

  return (
    <main className="page">
      <SiteHeader currentPath="/setup/playlists" />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Step 3</p>
          <h1 className="heroTitle">Set playlist generation rules</h1>
          <p className="heroDescription">
            This page saves only the playlist generation settings.
            It does not change the watch logic yet.
            In other words, this is the safe first step before connecting the settings to real YouTube search and playlist build flow.
          </p>

          <div className="heroButtons">
            <Link href="/setup/channels" className="secondaryButton">
              Back to Channel Setup
            </Link>
            <Link href="/watch" className="secondaryButton">
              Open Watch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          <article className="featureCard">
            <h2 className="cardTitle">What this page changes</h2>
            <p className="cardText">
              It saves your preferred video duration rule, playlist max size, and language priority in this browser.
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">What this page does not change yet</h2>
            <p className="cardText">
              It does not rewrite watch logic, autoplay logic, load more logic, or existing channel cache logic yet.
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">Why this is safer</h2>
            <p className="cardText">
              The current project is already working, so it is better to save the settings first and connect them in a smaller second step.
            </p>
          </article>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Choose your playlist settings</h2>
          <p className="sectionText">
            Change only the rules you really need.
            Small changes are easier to test than a big refactor.
          </p>

          <div
            className="cardGrid"
            style={{
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            }}
          >
            <article className="featureCard">
              <h3 className="cardTitle">1. Video duration filter</h3>
              <p className="cardText" style={{ marginBottom: 18 }}>
                Choose what kind of video length should be favored when building a playlist.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                  gap: 12,
                }}
              >
                {durationOptions.map((option) => {
                  const isSelected = settings.durationMode === option.value;

                  return (
                    <label
                      key={option.value}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        borderRadius: 16,
                        border: isSelected
                          ? "1px solid rgba(90, 169, 255, 0.6)"
                          : "1px solid var(--card-border)",
                        background: isSelected ? "rgba(90, 169, 255, 0.08)" : "var(--card)",
                        padding: 16,
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="durationMode"
                        checked={isSelected}
                        onChange={() => updateDurationMode(option.value)}
                        style={{ marginTop: 4 }}
                      />
                      <div>
                        <p
                          className="cardText"
                          style={{
                            marginBottom: 6,
                            color: "var(--foreground)",
                            fontWeight: 700,
                          }}
                        >
                          {option.label}
                        </p>
                        <p className="cardText">{option.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">2. Playlist max size</h3>
              <p className="cardText" style={{ marginBottom: 18 }}>
                Choose how many videos can be kept in one playlist.
                The current project default is 300, so keeping 300 is the safest first choice.
              </p>

              <label
                className="cardText"
                htmlFor="playlistMaxSize"
                style={{ display: "block", marginBottom: 8 }}
              >
                Max playlist size
              </label>

              <select
                id="playlistMaxSize"
                value={settings.playlistMaxSize}
                onChange={(event) => updatePlaylistMaxSize(Number(event.target.value))}
                style={{
                  width: "100%",
                  minHeight: 48,
                  borderRadius: 12,
                  border: "1px solid var(--card-border)",
                  background: "#0b1020",
                  color: "var(--foreground)",
                  padding: "0 14px",
                  fontSize: 16,
                }}
              >
                {playlistSizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size} videos
                  </option>
                ))}
              </select>
            </article>

            <article className="featureCard">
              <h3 className="cardTitle">3. Language priority</h3>
              <p className="cardText" style={{ marginBottom: 18 }}>
                Choose whether search should focus on one language first or stay open to all languages.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                  gap: 12,
                }}
              >
                {languageOptions.map((option) => {
                  const isSelected = settings.languageMode === option.value;

                  return (
                    <label
                      key={option.value}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        borderRadius: 16,
                        border: isSelected
                          ? "1px solid rgba(90, 169, 255, 0.6)"
                          : "1px solid var(--card-border)",
                        background: isSelected ? "rgba(90, 169, 255, 0.08)" : "var(--card)",
                        padding: 16,
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="languageMode"
                        checked={isSelected}
                        onChange={() => updateLanguageMode(option.value)}
                        style={{ marginTop: 4 }}
                      />
                      <div>
                        <p
                          className="cardText"
                          style={{
                            marginBottom: 6,
                            color: "var(--foreground)",
                            fontWeight: 700,
                          }}
                        >
                          {option.label}
                        </p>
                        <p className="cardText">{option.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </article>
          </div>

          <div className="heroButtons">
            <button type="button" className="secondaryButton" onClick={handleReset}>
              Reset Screen to Default
            </button>

            <button type="button" className="secondaryButton" onClick={handleSave}>
              Save Settings
            </button>
          </div>

          {savedMessage ? (
            <p
              className="sectionText"
              style={{
                marginTop: 18,
                color: "var(--foreground)",
              }}
            >
              {savedMessage}
            </p>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <article className="featureCard">
            <h2 className="cardTitle">Current selected values</h2>
            <p className="cardText" style={{ marginBottom: 10 }}>
              Video duration: {getDurationLabel(settings.durationMode)}
            </p>
            <p className="cardText" style={{ marginBottom: 10 }}>
              Playlist max size: {settings.playlistMaxSize}
            </p>
            <p className="cardText">
              Language priority: {getLanguageLabel(settings.languageMode)}
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">Important next step</h2>
            <p className="cardText">
              Right now this page only saves the settings.
              In the next safe step, the watch playlist build flow can be updated to read these values and apply them during real YouTube search.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
