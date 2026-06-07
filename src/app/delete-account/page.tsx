import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { renderMarkdown } from "@/lib/markdown";
import { LegalShell } from "@/app/_components/legal-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Eliminación de cuenta",
  description:
    "Cómo eliminar tu cuenta de Mythic Lobby y qué datos se borran o se conservan.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "DELETE-ACCOUNT.md"),
    "utf8"
  );

  return (
    <LegalShell related={{ href: "/privacy", label: "Leer la Política de privacidad →" }}>
      {renderMarkdown(md)}
    </LegalShell>
  );
}
