import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mythic Lobby",
    short_name: "Mythic Lobby",
    description:
      "El lobby donde gamers arman squad para ranked en cualquier juego competitivo. Filtros por rank, rol, horario y región. Voz integrada por partida.",
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
