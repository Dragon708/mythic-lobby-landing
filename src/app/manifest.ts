import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MLBB Mythic Lobby",
    short_name: "Mythic Lobby",
    description:
      "Comunidad cubana de Mobile Legends: armá equipos, organizá partidas y hablá por voz desde una sola app.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070E",
    theme_color: "#05070E",
    lang: "es",
    orientation: "portrait",
    categories: ["games", "social"],
    icons: [
      {
        src: "/brand/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
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
