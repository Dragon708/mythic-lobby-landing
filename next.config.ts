import type { NextConfig } from "next";

// Dominio propio de la landing. El viejo *.vercel.app redirige aquí, salvo
// app-ads.txt: AdMob lo rastrea en el sitio de desarrollador de Play y no
// conviene que dependa de una redirección entre dominios.
const CANONICAL_ORIGIN = "https://mythic.dsmarts.app";
const LEGACY_HOST = "mythic-lobby.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    const fromLegacyHost = [{ type: "host" as const, value: LEGACY_HOST }];
    return [
      {
        source: "/",
        has: fromLegacyHost,
        destination: `${CANONICAL_ORIGIN}/`,
        permanent: true,
      },
      {
        source: "/:path((?!app-ads\\.txt$).*)",
        has: fromLegacyHost,
        destination: `${CANONICAL_ORIGIN}/:path`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
