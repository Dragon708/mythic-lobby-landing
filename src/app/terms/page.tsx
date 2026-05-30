import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { renderMarkdown } from "@/lib/markdown";
import { LegalShell } from "@/app/_components/legal-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Términos de servicio",
  description:
    "Términos de servicio de Mythic Lobby: quién puede usar la app, conducta esperada, donaciones, moderación, limitación de responsabilidad y más.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "TERMS-OF-SERVICE.md"),
    "utf8"
  );

  return (
    <LegalShell related={{ href: "/privacy", label: "Leer la Política de privacidad →" }}>
      {renderMarkdown(md)}
    </LegalShell>
  );
}
