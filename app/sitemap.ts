import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://youtube-tv-seo-site.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/app`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/watch-youtube-like-tv`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/youtube-autoplay-web-app`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/youtube-playlist-loop-player`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desktop-youtube-player`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/channel-style-youtube-player`,
      lastModified: new Date(),
    },
  ];
}