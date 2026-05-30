import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { IndependenceNotice } from "./independence-notice";

const SITE_NAME = "Mythic Lobby";

type RelatedDoc = { href: string; label: string };

/**
 * Shared chrome for the public legal pages (/privacy, /terms): a slim header
 * matching the landing's nav, a "Volver al inicio" button on top, the rendered
 * document, a cross-link to the other legal page, and the independence notice.
 */
export function LegalShell({
  children,
  related,
}: {
  children: ReactNode;
  related: RelatedDoc;
}) {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(5,7,14,0.65)] border-b border-border/60">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 group min-w-0">
            <Image
              src="/brand/icon.png"
              alt={SITE_NAME}
              width={36}
              height={36}
              className="rounded-lg ring-1 ring-border/70 group-hover:ring-primary/60 transition shrink-0"
              priority
            />
            <span className="text-foreground font-bold tracking-tight">
              Mythic <span className="text-gradient">Lobby</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary text-sm py-2 px-4">
            <IconArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Volver al inicio</span>
            <span className="sm:hidden">Inicio</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-soft hover:text-foreground transition mb-8"
          >
            <IconArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <article>{children}</article>

          <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link href="/" className="btn-secondary text-sm py-2.5 px-5 w-full sm:w-auto">
              <IconArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Link
              href={related.href}
              className="text-sm text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition text-center"
            >
              {related.label}
            </Link>
          </div>

          <IndependenceNotice className="mt-10" />
        </div>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-xs text-muted text-center">
          {SITE_NAME} · Contacto:{" "}
          <a
            href="mailto:jorgegmdgonzalez@gmail.com"
            className="text-soft hover:text-foreground transition"
          >
            jorgegmdgonzalez@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}

function IconArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}
