import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mythic Lobby",
    short_name: "Mythic Lobby",
    description:
      "La app donde gamers arman squad, compiten en torneos con árbitros, transmiten en vivo y hablan por voz. En cualquier juego competitivo.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070E",
    theme_color: "#05070E",
    lang: "es",
    orientation: "portrait",
    categories: ["games", "social"],
    icons: [
      {
        src: "/brand/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
