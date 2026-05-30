import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { renderMarkdown } from "@/lib/markdown";
import { LegalShell } from "@/app/_components/legal-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Mythic Lobby: qué datos recolectamos, cómo los usamos, con quién los compartimos y los derechos que tenés sobre ellos.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "PRIVACY-POLICY.md"),
    "utf8"
  );

  return (
    <LegalShell related={{ href: "/terms", label: "Leer los Términos de servicio →" }}>
      {renderMarkdown(md)}
    </LegalShell>
  );
}
