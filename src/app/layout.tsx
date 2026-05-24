import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "MLBB Mythic Lobby";
const SITE_DESCRIPTION =
  "La app cubana para conectar jugadores de Mobile Legends. Armá equipos, organizá partidas y hablá por voz, todo en un solo lugar — sin Discord ni VPN.";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Comunidad MLBB Cuba`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Mobile Legends",
    "MLBB",
    "MLBB Cuba",
    "Mythic Lobby",
    "comunidad MLBB",
    "armar equipo MLBB",
    "chat voz MLBB",
    "Mobile Legends Cuba",
  ],
  authors: [{ name: "MLBB Mythic Lobby" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "es_CU",
    images: [
      {
        url: "/brand/social-preview.png",
        width: 1920,
        height: 1080,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/brand/social-preview.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
