"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteHeader from "@/app/components/site-header";
import {
  createEmptyChannel,
  DEFAULT_KEYWORD_COUNT,
  getChannelLabel,
  MINIMUM_CHANNEL_COUNT,
  type ChannelConfig,
} from "@/app/lib/channel-types";
import { loadChannelConfigs, saveChannelConfigs } from "@/app/lib/local-store";

export default function ChannelSetupPage() {
  const [channels, setChannels] = useState<ChannelConfig[]>([]);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    setChannels(loadChannelConfigs());
  }, []);

  function updateDisplayName(index: number, value: string): void {
    setChannels((current) =>
      current.map((channel, channelIndex) =>
        channelIndex === index ? { ...channel, displayName: value } : channel,
      ),
    );
  }

  function updateKeyword(index: number, keywordIndex: number, value: string): void {
    setChannels((current) =>
      current.map((channel, channelIndex) => {
        if (channelIndex !== index) {
          return channel;
        }

        return {
          ...channel,
          keywords: channel.keywords.map((keyword, innerIndex) =>
            innerIndex === keywordIndex ? value : keyword,
          ),
        };
      }),
    );
  }

  function addKeyword(index: number): void {
    setChannels((current) =>
      current.map((channel, channelIndex) =>
        channelIndex === index
          ? { ...channel, keywords: [...channel.keywords, ""] }
          : channel,
      ),
    );
  }

  function removeKeyword(index: number, keywordIndex: number): void {
    setChannels((current) =>
      current.map((channel, channelIndex) => {
        if (channelIndex !== index) {
          return channel;
        }

        if (channel.keywords.length <= DEFAULT_KEYWORD_COUNT) {
          return channel;
        }

        return {
          ...channel,
          keywords: channel.keywords.filter((_, innerIndex) => innerIndex !== keywordIndex),
        };
      }),
    );
  }

  function addChannel(): void {
    setChannels((current) => [...current, createEmptyChannel()]);
  }

  function removeChannel(index: number): void {
    setChannels((current) => {
      if (current.length <= MINIMUM_CHANNEL_COUNT) {
        return current;
      }

      return current.filter((_, channelIndex) => channelIndex !== index);
    });
  }

  function handleSave(): void {
    saveChannelConfigs(channels);
    setSavedMessage("Channel and keyword settings saved in this browser.");
  }

  return (
    <main className="page">
      <SiteHeader currentPath="/setup/channels" />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Step 2</p>
          <h1 className="heroTitle">Set channel names and keywords</h1>
          <p className="heroDescription">
            This page explains how to choose channel names and keyword blocks.
            The beginner goal is simple: one channel name, one clear topic, and two or three related keywords.
          </p>

          <div className="heroButtons">
            <Link href="/setup/api" className="secondaryButton">
              Back to API Setup
            </Link>
            <Link href="/watch" className="primaryButton">
              Open Watch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          <article className="featureCard">
            <h2 className="cardTitle">How to name channels</h2>
            <p className="cardText">
              Use short names such as English Study, Calm Piano, News Korea, or Kids Songs.
              A good name should still make sense when you come back later and see many saved channels.
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">How to choose keywords</h2>
            <p className="cardText">
              Keywords should point in the same direction. For example, English Study can use
              english, listening, and conversation. Calm Piano can use piano, relax, and calm music.
            </p>
          </article>

          <article className="featureCard">
            <h2 className="cardTitle">How to test like a beginner</h2>
            <p className="cardText">
              Start with one strong channel setup first. Save it, test it in the watch flow, then improve one keyword at a time.
              Small changes make the result easier to understand.
            </p>
          </article>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <h2 className="sectionTitle">Edit your channel blocks</h2>
          <p className="sectionText">
            The structure below follows the same core idea as the Flutter app: saved channels, saved keywords,
            and browser storage. For now this step prepares the data for the full watch migration.
          </p>

          <div className="cardGrid" style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}>
            {channels.map((channel, channelIndex) => (
              <article className="featureCard" key={`channel-${channelIndex}`}>
                <h3 className="cardTitle">{getChannelLabel(channel, channelIndex)}</h3>

                <label className="cardText" style={{ display: "block", marginBottom: 8 }}>
                  Channel name
                </label>
                <input
                  value={channel.displayName}
                  onChange={(event) => updateDisplayName(channelIndex, event.target.value)}
                  placeholder={`Channel ${channelIndex + 1}`}
                  style={{
                    width: "100%",
                    minHeight: 48,
                    borderRadius: 12,
                    border: "1px solid var(--card-border)",
                    background: "#0b1020",
                    color: "var(--foreground)",
                    padding: "0 14px",
                    fontSize: 16,
                    marginBottom: 16,
                  }}
                />

                <div className="cardGrid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  {channel.keywords.map((keyword, keywordIndex) => (
                    <div key={`keyword-${channelIndex}-${keywordIndex}`}>
                      <label className="cardText" style={{ display: "block", marginBottom: 8 }}>
                        Keyword {keywordIndex + 1}
                      </label>
                      <input
                        value={keyword}
                        onChange={(event) =>
                          updateKeyword(channelIndex, keywordIndex, event.target.value)
                        }
                        placeholder={`Keyword ${keywordIndex + 1}`}
                        style={{
                          width: "100%",
                          minHeight: 48,
                          borderRadius: 12,
                          border: "1px solid var(--card-border)",
                          background: "#0b1020",
                          color: "var(--foreground)",
                          padding: "0 14px",
                          fontSize: 16,
                          marginBottom: 10,
                        }}
                      />

                      {channel.keywords.length > DEFAULT_KEYWORD_COUNT ? (
                        <button
                          type="button"
                          className="secondaryButton"
                          onClick={() => removeKeyword(channelIndex, keywordIndex)}
                        >
                          Remove Keyword
                        </button>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="heroButtons">
                  <button
                    type="button"
                    className="secondaryButton"
                    onClick={() => addKeyword(channelIndex)}
                  >
                    Add Keyword
                  </button>

                  {channels.length > MINIMUM_CHANNEL_COUNT ? (
                    <button
                      type="button"
                      className="secondaryButton"
                      onClick={() => removeChannel(channelIndex)}
                    >
                      Remove Channel
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="heroButtons" style={{ marginTop: 28 }}>
            <button type="button" className="secondaryButton" onClick={addChannel}>
              Add Channel
            </button>
            <button type="button" className="primaryButton" onClick={handleSave}>
              Save Channel Setup
            </button>
            <Link href="/watch" className="secondaryButton">
              Open Watch
            </Link>
          </div>

          {savedMessage ? (
            <p className="sectionText" style={{ marginTop: 18 }}>
              {savedMessage}
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}