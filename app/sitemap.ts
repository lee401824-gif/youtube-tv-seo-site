import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://youtube-tv-seo-site.vercel.app";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/watch-youtube-like-tv`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/youtube-autoplay-web-app`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/youtube-playlist-loop-player`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/desktop-youtube-player`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/channel-style-youtube-player`,
      lastModified: now,
    },
  ];
}