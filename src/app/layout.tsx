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
const SITE_TAGLINE = "Comunidad cubana de Mobile Legends";
const SITE_DESCRIPTION =
  "MLBB Mythic Lobby es la app cubana para conectar jugadores de Mobile Legends: armá equipos, organizá partidas, hablá por voz y conocé jugadores — todo en español, sin Discord ni VPN, gratis y hecho por la comunidad.";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://mlbb-landing.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  category: "Games",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "MLBB",
    "Mobile Legends",
    "MLBB Cuba",
    "Mobile Legends Cuba",
    "Mythic Lobby",
    "comunidad MLBB",
    "armar equipo MLBB",
    "buscar jugadores MLBB",
    "chat de voz MLBB",
    "partidas MLBB Cuba",
    "scrim MLBB",
    "coliseo MLBB",
    "ranked MLBB Cuba",
    "MLBB sin Discord",
    "MLBB sin VPN",
    "APK MLBB Cuba",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CU",
    alternateLocale: ["es_ES", "es_MX", "es_AR"],
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        type: "image/jpeg",
      },
      {
        url: "/brand/og-image-square.jpg",
        width: 1080,
        height: 1080,
        alt: SITE_NAME,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070E",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
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
