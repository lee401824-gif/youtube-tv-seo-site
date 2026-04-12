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
  type PlaylistRegionCode,
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

const regionOptions: Array<{
  value: PlaylistRegionCode;
  label: string;
  description: string;
}> = [
  {
    value: "US",
    label: "United States",
    description: "Best overall global-style results. Recommended default.",
  },
  {
    value: "KR",
    label: "Korea",
    description: "Korea-focused search results.",
  },
  {
    value: "JP",
    label: "Japan",
    description: "Japan-focused search results.",
  },
  {
    value: "IN",
    label: "India",
    description: "Very large content pool and strong YouTube activity.",
  },
  {
    value: "BR",
    label: "Brazil",
    description: "Strong South American content and trends.",
  },
  {
    value: "DE",
    label: "Germany",
    description: "European content with strong production quality.",
  },
  {
    value: "FR",
    label: "France",
    description: "French and European-focused content.",
  },
  {
    value: "ES",
    label: "Spain",
    description: "Spanish-language content useful for Europe and Latin audiences.",
  },
];

const playlistSizeOptions = [50, 100, 200, 300, 500];

function getDurationLabel(value: PlaylistDurationMode): string {
  const matched = durationOptions.find((item) => item.value === value);
  return matched?.label ?? value;
}

function getRegionLabel(value: PlaylistRegionCode): string {
  const matched = regionOptions.find((item) => item.value === value);
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

  function updateRegionCode(value: PlaylistRegionCode): void {
    setSettings((current) => ({
      ...current,
      regionCode: value,
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
            This page saves your playlist generation settings in this browser.
            You can choose video duration, playlist size, and one global region code for YouTube search.
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
              It saves your preferred video duration rule, playlist max size, and global region code in this browser.
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">Why region code matters</h2>
            <p className="cardText">
              Region code changes the country-based search direction before the playlist is built.
              In this project it is more important than the old language priority setting.
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">Safe testing tip</h2>
            <p className="cardText">
              Change one setting at a time, save it, then open Watch and test one channel.
              Small changes are easier to understand.
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
              <h3 className="cardTitle">3. Search region code</h3>
              <p className="cardText" style={{ marginBottom: 18 }}>
                Choose one global country-based YouTube search direction for all channels.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                  gap: 12,
                }}
              >
                {regionOptions.map((option) => {
                  const isSelected = settings.regionCode === option.value;

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
                        name="regionCode"
                        checked={isSelected}
                        onChange={() => updateRegionCode(option.value)}
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
              Search region: {getRegionLabel(settings.regionCode)}
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">Important next step</h2>
            <p className="cardText">
              Save the settings, then open Watch and rebuild the playlist from a channel button.
              Region code changes usually affect search results strongly.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
