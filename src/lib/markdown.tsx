import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal markdown renderer for the legal documents (PRIVACY-POLICY.md /
 * TERMS-OF-SERVICE.md). It deliberately supports only the subset those files
 * use — headings (#/##/###), paragraphs, dash lists, **bold**, `code`,
 * *italic*, [links](url) and `---` dividers — and styles every element with the
 * landing's own Tailwind tokens so the pages match the rest of the site.
 *
 * It is NOT a general-purpose parser. If the source docs start using features
 * not handled here (tables, nested lists, images…), extend this accordingly.
 */

// Relative .md links inside the docs point at sibling documents in the repo.
// On the web they map to the public routes.
const LINK_MAP: Record<string, string> = {
  "PRIVACY-POLICY.md": "/privacy",
  "TERMS-OF-SERVICE.md": "/terms",
};

function resolveHref(href: string): string {
  return LINK_MAP[href] ?? href;
}

const LINK_CLASS =
  "text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition break-words";

// Ordered alternation: links, **bold**, `code`, *italic*. Bold is matched
// before italic so `**x**` never falls through to the single-asterisk branch.
// A fresh RegExp is created per call — `renderInline` recurses into bold/italic
// content, and a shared stateful (`g`) regex would have its `lastIndex`
// clobbered across those nested calls.
const INLINE_PATTERN =
  "\\[([^\\]]+)\\]\\(([^)]+)\\)|\\*\\*([^*]+)\\*\\*|`([^`]+)`|\\*([^*\\n]+)\\*";

function renderInline(text: string, keyBase: string): ReactNode[] {
  const re = new RegExp(INLINE_PATTERN, "g");
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let i = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) nodes.push(text.slice(lastIndex, m.index));
    const key = `${keyBase}-${i++}`;

    if (m[1] !== undefined) {
      const href = resolveHref(m[2]);
      if (href.startsWith("/")) {
        nodes.push(
          <Link key={key} href={href} className={LINK_CLASS}>
            {m[1]}
          </Link>
        );
      } else {
        const external = /^https?:\/\//.test(href);
        nodes.push(
          <a
            key={key}
            href={href}
            className={LINK_CLASS}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {m[1]}
          </a>
        );
      }
    } else if (m[3] !== undefined) {
      // Recurse so links/code nested inside bold are still parsed.
      nodes.push(
        <strong key={key} className="font-semibold text-foreground">
          {renderInline(m[3], `${key}b`)}
        </strong>
      );
    } else if (m[4] !== undefined) {
      // Code spans are literal — no nested parsing.
      nodes.push(
        <code
          key={key}
          className="font-mono text-[0.85em] bg-surface-2 border border-border rounded px-1.5 py-0.5 text-foreground break-words"
        >
          {m[4]}
        </code>
      );
    } else if (m[5] !== undefined) {
      // Recurse so a link inside an italic line (e.g. the terms footer) parses.
      nodes.push(
        <em key={key} className="italic">
          {renderInline(m[5], `${key}i`)}
        </em>
      );
    }
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

const isHr = (line: string) => /^---+$/.test(line.trim());
const isHeading = (line: string) => /^#{1,3}\s+/.test(line);
const isListItem = (line: string) => /^[-*]\s+/.test(line);
const isQuote = (line: string) => line.startsWith("> ");

export function renderMarkdown(md: string): ReactNode {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (isHr(line)) {
      blocks.push(<hr key={key++} className="my-10 border-0 divider" />);
      i++;
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const content = renderInline(heading[2], `h${level}-${key}`);
      if (level === 1) {
        blocks.push(
          <h1
            key={key++}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            {content}
          </h1>
        );
      } else if (level === 2) {
        blocks.push(
          <h2
            key={key++}
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-12 mb-2 scroll-mt-24"
          >
            {content}
          </h2>
        );
      } else {
        blocks.push(
          <h3
            key={key++}
            className="text-base sm:text-lg font-semibold text-foreground mt-7 mb-1"
          >
            {content}
          </h3>
        );
      }
      i++;
      continue;
    }

    if (isQuote(line)) {
      const quote: string[] = [];
      while (i < lines.length && isQuote(lines[i])) {
        quote.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={key++}
          className="border-l-2 border-primary/50 pl-4 my-6 text-muted italic"
        >
          {renderInline(quote.join(" "), `bq-${key}`)}
        </blockquote>
      );
      continue;
    }

    if (isListItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isListItem(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      const listKey = key++;
      blocks.push(
        <ul key={listKey} className="my-4 space-y-2.5">
          {items.map((it, idx) => (
            <li key={idx} className="flex gap-3 text-soft leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{renderInline(it, `li-${listKey}-${idx}`)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Paragraph: gather consecutive lines until a blank line or a block element.
    // Adjacent lines (e.g. the metadata block) become one paragraph with soft
    // line breaks, matching how markdown treats them.
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !isHr(lines[i]) &&
      !isHeading(lines[i]) &&
      !isListItem(lines[i]) &&
      !isQuote(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    const paraKey = key++;
    const parts: ReactNode[] = [];
    para.forEach((p, idx) => {
      if (idx > 0) parts.push(<br key={`br-${paraKey}-${idx}`} />);
      parts.push(...renderInline(p, `p-${paraKey}-${idx}`));
    });
    blocks.push(
      <p key={paraKey} className="text-soft leading-relaxed my-4">
        {parts}
      </p>
    );
  }

  return blocks;
}
