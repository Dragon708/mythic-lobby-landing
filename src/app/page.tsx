"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { STRINGS, type Lang } from "@/lib/strings";
import { IndependenceNotice } from "@/app/_components/independence-notice";

const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.mythiclobby.app";
const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "1.1.7";
const CONTACT_EMAIL = "jorgegmdgonzalez@gmail.com";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://mythic-lobby.vercel.app");

const STORAGE_KEY = "ml.lang";

// Logo real de cada juego (en public/games/), keyeado por el `name` que usa
// strings.ts (igual en ES/EN). Si falta, la card cae al ícono genérico.
const GAME_ICONS: Record<string, string> = {
  "Mobile Legends": "/games/mlbb.png",
  "Free Fire": "/games/free-fire.png",
  "COD Mobile": "/games/cod-mobile.png",
  "Honor of Kings": "/games/honor-of-kings.png",
  "PUBG Mobile": "/games/pubg-mobile.png",
  "Blood Strike": "/games/blood-strike.png",
  "Counter-Strike 2": "/games/counter-strike-2.png",
  "EA SPORTS FC Mobile": "/games/fifa-mobile.png",
  "Clash Royale": "/games/clash-royale.png",
  "Clash of Clans": "/games/clash-of-clans.png",
  "Rise of Kingdoms": "/games/rise-of-kingdoms.png",
  "Albion Online": "/games/albion-online.png",
  Skylore: "/games/skylore.png",
  "Neo Monsters": "/games/neo-monsters.png",
};

// Arte de cada minijuego (copiado de assets/ del repo de la app), keyeado por
// el `name` de strings.ts. `cover` = el arte llena la caja en vez de verse como logo.
const ARCADE_ART: Record<string, { src: string; cover: boolean }> = {
  "Mythic Battle Squad": { src: "/minigames/mbs-logo.webp", cover: false },
  Ajedrez: { src: "/minigames/chess-logo.jpg", cover: true },
  Chess: { src: "/minigames/chess-logo.jpg", cover: true },
  Damas: { src: "/minigames/checkers-logo.jpg", cover: true },
  Checkers: { src: "/minigames/checkers-logo.jpg", cover: true },
};

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "es" || saved === "en") {
      setLangState(saved);
      return;
    }
    if (typeof navigator !== "undefined" && navigator.language) {
      const nav = navigator.language.toLowerCase();
      if (nav.startsWith("en")) setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    const t = STRINGS[lang];
    document.title = `${t.meta.siteName} — ${t.meta.tagline}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [lang]);

  return [lang, setLang];
}

export default function Home() {
  const [lang, setLang] = useLang();
  const t = STRINGS[lang];

  return (
    <>
      <StructuredData lang={lang} />
      <NavBar lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">
        <Hero t={t} />
        <Highlights t={t} />
        <Games t={t} />
        <Features t={t} />
        <Competitive t={t} />
        <Live t={t} />
        <Arcade t={t} />
        <Rewards t={t} />
        <Showcase t={t} />
        <Voice t={t} />
        <Partnership t={t} />
        <Donate t={t} />
        <FAQ t={t} />
        <CallToAction t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

function StructuredData({ lang }: { lang: Lang }) {
  const t = STRINGS[lang];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: t.meta.siteName,
      url: SITE_URL,
      inLanguage: lang,
      description: t.jsonLd.description,
      publisher: {
        "@type": "Organization",
        name: t.meta.siteName,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/icon.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: t.meta.siteName,
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      applicationSubCategory: "Community",
      inLanguage: lang,
      softwareVersion: APP_VERSION,
      downloadUrl: PLAY_STORE_URL,
      installUrl: PLAY_STORE_URL,
      description: t.jsonLd.mobileAppDescription,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      image: `${SITE_URL}/brand/og-image.png`,
      screenshot: `${SITE_URL}/brand/banner.png`,
      author: {
        "@type": "Organization",
        name: t.meta.siteName,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type T = (typeof STRINGS)[Lang];

function NavBar({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: T }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(5,7,14,0.65)] border-b border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">
        <Link href="#top" className="flex items-center gap-2.5 group min-w-0">
          <Image
            src="/brand/icon.png"
            alt={t.meta.siteName}
            width={40}
            height={40}
            className="rounded-lg ring-1 ring-border/70 group-hover:ring-primary/60 transition shrink-0"
            priority
          />
          <span className="text-foreground font-bold tracking-tight hidden sm:inline">
            Mythic <span className="text-gradient">Lobby</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-soft">
          <a href="#games" className="hover:text-foreground transition">{t.nav.games}</a>
          <a href="#features" className="hover:text-foreground transition">{t.nav.features}</a>
          <a href="#competitive" className="hover:text-foreground transition">{t.nav.competitive}</a>
          <a href="#live" className="hover:text-foreground transition">{t.nav.live}</a>
          <a href="#arcade" className="hover:text-foreground transition">{t.nav.arcade}</a>
          <a href="#faq" className="hover:text-foreground transition">{t.nav.faq}</a>
          <a href="#partnership" className="hidden lg:inline hover:text-foreground transition">{t.nav.partnership}</a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} setLang={setLang} label={t.nav.languageLabel} />
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-4"
          >
            <IconGooglePlay className="w-4 h-4" />
            <span className="hidden sm:inline">{t.nav.download}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
  label,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-border/70 bg-surface-2/70 p-0.5 text-xs font-bold"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={
            "px-2.5 py-1 rounded-full transition " +
            (lang === l
              ? "bg-primary/85 text-white shadow"
              : "text-soft hover:text-foreground")
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Hero({ t }: { t: T }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="space-y-7">
          <span className="chip">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {t.hero.chipLive(APP_VERSION)}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t.hero.titlePart1}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titlePart2}
          </h1>
          <p className="text-soft text-lg max-w-xl leading-relaxed">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2 items-stretch">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-emerald-400/50 bg-surface-2/70 text-foreground hover:border-emerald-400 transition animate-pulse-glow"
            >
              <IconGooglePlay className="w-7 h-7 text-emerald-400 shrink-0" />
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-bold">
                  {t.hero.playStoreTop}
                </span>
                <span className="text-base font-bold tracking-tight">
                  {t.hero.playStoreBottom}
                </span>
              </span>
            </a>
            <a href="#features" className="btn-secondary">
              <IconSparkles className="w-5 h-5" />
              {t.hero.ctaFeatures}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs text-muted">
            {t.hero.bullets.map((b) => (
              <Bullet key={b}>{b}</Bullet>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-70 bg-gradient-to-tr from-primary/40 via-accent/30 to-pink-500/20 rounded-full" />
          <div className="relative grid place-items-center">
            <Image
              src="/brand/logo.png"
              alt={t.meta.siteName}
              width={620}
              height={500}
              className="w-full max-w-[520px] h-auto animate-float-slow drop-shadow-[0_30px_60px_rgba(99,102,241,0.45)]"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -left-2 md:-left-6 card p-3 w-[210px] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-danger/15 border border-danger/40 grid place-items-center text-danger">
                <IconBroadcast className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider">
                  {t.hero.cardLiveLabel}
                </p>
                <p className="text-foreground font-bold leading-tight">
                  {t.hero.cardLiveValue}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-1 md:-right-6 card p-3 w-[230px] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary">
                <IconMic className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider">
                  {t.hero.cardVoiceLabel}
                </p>
                <p className="text-foreground font-bold leading-tight">
                  {t.hero.cardVoiceValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <IconCheck className="w-3.5 h-3.5 text-success" />
      {children}
    </span>
  );
}

function Games({ t }: { t: T }) {
  return (
    <section id="games" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.games.eyebrow}
          title={
            <>
              {t.games.titlePart1}{" "}
              <span className="text-gradient">{t.games.titleHighlight}</span>{" "}
              {t.games.titlePart2}
            </>
          }
          subtitle={t.games.subtitle}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
          {t.games.items.map((g) => (
            <div
              key={g.name}
              className="card card-hover p-4 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-gradient-to-br from-primary/30 to-accent/20" />
              <div className="flex items-center justify-between mb-3">
                {GAME_ICONS[g.name] ? (
                  <Image
                    src={GAME_ICONS[g.name]}
                    alt={g.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-xl border border-border object-cover shadow-lg shadow-black/30"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border grid place-items-center text-primary">
                    <IconController className="w-5 h-5" />
                  </div>
                )}
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border bg-success/15 text-success border-success/40"
                  aria-label={t.games.liveLabel}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  {t.games.liveLabel}
                </span>
              </div>
              <p className="text-foreground font-bold text-sm leading-tight">{g.name}</p>
              <p className="text-muted text-xs mt-0.5">{g.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ t }: { t: T }) {
  const icons = [
    <IconSearch key="search" className="w-5 h-5" />,
    <IconBolt key="ready" className="w-5 h-5" />,
    <IconShield key="shield" className="w-5 h-5" />,
    <IconCalendar key="cal" className="w-5 h-5" />,
    <IconMic key="mic" className="w-5 h-5" />,
    <IconChat key="chat" className="w-5 h-5" />,
    <IconBell key="bell" className="w-5 h-5" />,
    <IconStar key="star" className="w-5 h-5" />,
    <IconBook key="book" className="w-5 h-5" />,
  ];
  const colors = [
    "from-blue-500/20 to-indigo-500/10",
    "from-lime-500/20 to-emerald-500/10",
    "from-purple-500/20 to-pink-500/10",
    "from-emerald-500/20 to-teal-500/10",
    "from-amber-500/20 to-orange-500/10",
    "from-cyan-500/20 to-blue-500/10",
    "from-rose-500/20 to-red-500/10",
    "from-yellow-500/20 to-amber-500/10",
    "from-fuchsia-500/20 to-purple-500/10",
  ];
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.features.eyebrow}
          title={
            <>
              {t.features.titlePart1}{" "}
              <span className="text-gradient">{t.features.titleHighlight}</span>
            </>
          }
          subtitle={t.features.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {t.features.items.map((it, i) => (
            <div key={it.title} className="card card-hover p-5 relative overflow-hidden">
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${colors[i]} blur-2xl pointer-events-none`}
              />
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border grid place-items-center text-primary mb-4">
                {icons[i]}
              </div>
              <h3 className="text-foreground font-semibold text-[17px] mb-1.5">{it.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights({ t }: { t: T }) {
  return (
    <section aria-label={t.meta.siteName} className="relative -mt-8 md:-mt-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-border bg-border/70 overflow-hidden">
          {t.highlights.map((h) => (
            <div key={h.label} className="px-5 py-5 text-center bg-surface/95">
              <p className="text-gradient text-2xl md:text-3xl font-extrabold tracking-tight tabular-nums">
                {h.value}
              </p>
              <p className="text-muted text-xs mt-1">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Competitive({ t }: { t: T }) {
  const c = t.competitive;
  const icons = [
    <IconSwords key="swords" className="w-5 h-5" />,
    <IconGavel key="gavel" className="w-5 h-5" />,
    <IconTrophy key="trophy" className="w-5 h-5" />,
    <IconChart key="chart" className="w-5 h-5" />,
  ];
  return (
    <section id="competitive" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={c.eyebrow}
          title={
            <>
              {c.titlePart1} <span className="text-gradient">{c.titleHighlight}</span>
            </>
          }
          subtitle={c.subtitle}
        />
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 mt-14 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {c.items.map((it, i) => (
              <div key={it.title} className="card card-hover p-5">
                <div className="w-10 h-10 rounded-xl bg-warning/10 border border-warning/30 grid place-items-center text-warning mb-4">
                  {icons[i]}
                </div>
                <h3 className="text-foreground font-semibold mb-1.5">{it.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-2 sm:-inset-6 -z-10 blur-3xl opacity-60 bg-gradient-to-br from-warning/25 via-primary/20 to-accent/20 rounded-full" />
            <div className="card p-5 md:p-6 bg-[rgba(5,7,14,0.6)]">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wider">{c.bracketLabel}</p>
                  <p className="text-foreground font-bold truncate">{c.bracketTitle}</p>
                </div>
                <span className="chip text-warning bg-warning/15 border-warning/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
                  {c.bracketStatus}
                </span>
              </div>
              <div className="divider my-4" />
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="space-y-4">
                  <p className="text-[10px] text-muted uppercase tracking-[0.18em] font-bold">
                    {c.roundSemis}
                  </p>
                  {c.semis.map((m) => (
                    <div key={m.a + m.b} className="rounded-xl border border-border bg-surface-2/70 overflow-hidden text-sm">
                      <BracketRow name={m.a} score={m.winner === "a" ? 2 : 1} won={m.winner === "a"} />
                      <div className="h-px bg-border" />
                      <BracketRow name={m.b} score={m.winner === "b" ? 2 : 0} won={m.winner === "b"} />
                    </div>
                  ))}
                </div>
                <div className="hidden sm:block w-6 h-28 border-y-2 border-r-2 border-border rounded-r-lg" />
                <div className="space-y-4">
                  <p className="flex items-center gap-1.5 text-[10px] text-warning uppercase tracking-[0.18em] font-bold">
                    <IconTrophy className="w-3.5 h-3.5" />
                    {c.roundFinal}
                  </p>
                  <div className="rounded-xl border border-warning/50 bg-warning/10 overflow-hidden text-sm shadow-[0_10px_30px_-12px_rgba(245,158,11,0.55)]">
                    <BracketRow name={c.final.a} score={null} won={false} />
                    <div className="h-px bg-warning/30" />
                    <BracketRow name={c.final.b} score={null} won={false} />
                  </div>
                </div>
              </div>
              <div className="divider my-4" />
              <p className="flex items-center gap-2 text-xs text-success">
                <IconCheck className="w-4 h-4" />
                {c.refereeNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BracketRow({ name, score, won }: { name: string; score: number | null; won: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-2 px-3 py-2 ${won ? "text-foreground font-semibold" : "text-soft"}`}>
      <span className="truncate">{name}</span>
      <span className={`tabular-nums text-xs ${won ? "text-success" : "text-muted"}`}>
        {score === null ? "–" : score}
      </span>
    </div>
  );
}

function Live({ t }: { t: T }) {
  const l = t.live;
  return (
    <section id="live" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="card relative overflow-hidden p-6 sm:p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-danger/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative min-w-0 md:order-2">
            <span className="chip mb-5 text-danger bg-danger/10 border-danger/30">
              <IconBroadcast className="w-3.5 h-3.5" />
              {l.chip}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              {l.titlePart1} <span className="text-gradient">{l.titleHighlight}</span>.
            </h2>
            <p className="text-soft mt-4 leading-relaxed">{l.subtitle}</p>
            <ul className="mt-6 space-y-3 text-soft">
              {l.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <IconCheck className="w-5 h-5 text-success mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted leading-relaxed">{l.note}</p>
          </div>
          <div className="relative min-w-0 md:order-1">
            <div className="card p-5 space-y-3 bg-[rgba(5,7,14,0.55)]">
              <div>
                <p className="text-foreground font-bold">{l.tabTitle}</p>
                <p className="text-muted text-xs">{l.tabSubtitle}</p>
              </div>
              <div className="divider" />
              {l.streams.map((s) => (
                <div key={s.title} className="flex items-center gap-3">
                  <div className="relative w-16 sm:w-24 h-12 sm:h-14 shrink-0 rounded-lg overflow-hidden border border-border bg-gradient-to-br from-primary/30 via-accent/20 to-pink-500/20 grid place-items-center">
                    {GAME_ICONS[s.game] ? (
                      <Image
                        src={GAME_ICONS[s.game]}
                        alt=""
                        width={96}
                        height={96}
                        className="w-full h-full object-cover opacity-70"
                      />
                    ) : null}
                    <span className="absolute top-1 left-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-danger text-white">
                      {t.voice.liveLabel}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground text-sm font-semibold truncate">{s.title}</p>
                    <p className="text-muted text-xs truncate">
                      {s.host} · {s.game}
                    </p>
                    <p className="text-soft text-[11px] flex items-center gap-1 mt-0.5">
                      <IconEye className="w-3 h-3" /> {s.viewers}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/40 text-primary shrink-0">
                    {l.watch}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arcade({ t }: { t: T }) {
  const a = t.arcade;
  return (
    <section id="arcade" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={a.eyebrow}
          title={
            <>
              {a.titlePart1} <span className="text-gradient">{a.titleHighlight}</span>
            </>
          }
          subtitle={a.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {a.items.map((g) => {
            const art = ARCADE_ART[g.name];
            return (
              <div key={g.name} className="card card-hover overflow-hidden flex flex-col">
                <div className="relative h-40 bg-gradient-to-br from-primary/25 via-accent/15 to-transparent grid place-items-center overflow-hidden">
                  {art ? (
                    <Image
                      src={art.src}
                      alt={g.name}
                      width={400}
                      height={300}
                      className={art.cover ? "w-full h-full object-cover" : "h-32 w-auto object-contain drop-shadow-[0_12px_30px_rgba(124,92,255,0.5)]"}
                    />
                  ) : (
                    <IconController className="w-10 h-10 text-primary" />
                  )}
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[rgba(5,7,14,0.75)] border border-border text-soft">
                    {g.meta}
                  </span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-foreground font-semibold text-[17px]">{g.name}</h3>
                  <p className="text-soft text-sm leading-relaxed mt-1.5">{g.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-xs text-soft leading-relaxed">
                        <IconCheck className="w-3.5 h-3.5 text-success mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 card p-4 flex items-center gap-4">
          <Image
            src="/minigames/conquest-logo.webp"
            alt="Mythic Conquest"
            width={56}
            height={56}
            className="w-14 h-14 rounded-xl object-cover border border-border shrink-0"
          />
          <p className="text-soft text-sm leading-relaxed">{a.comingSoon}</p>
        </div>
      </div>
    </section>
  );
}

function Rewards({ t }: { t: T }) {
  const r = t.rewards;
  const icons = [
    <IconChart key="levels" className="w-5 h-5" />,
    <IconGift key="gift" className="w-5 h-5" />,
    <IconTrophy key="trophy" className="w-5 h-5" />,
    <IconSparkles key="shop" className="w-5 h-5" />,
  ];
  return (
    <section id="rewards" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={r.eyebrow}
          title={
            <>
              {r.titlePart1} <span className="text-gradient">{r.titleHighlight}</span>
            </>
          }
          subtitle={r.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {r.items.map((it, i) => (
            <div key={it.title} className="card card-hover p-5 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-accent/25 to-pink-500/10 blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center text-accent mb-4">
                {icons[i]}
              </div>
              <h3 className="text-foreground font-semibold mb-1.5">{it.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-primary text-xs font-bold uppercase tracking-[0.18em] mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">{title}</h2>
      {subtitle ? <p className="text-soft mt-4 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}

function Showcase({ t }: { t: T }) {
  return (
    <section id="showcase" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.showcase.eyebrow}
          title={
            <>
              {t.showcase.titlePart1}{" "}
              <span className="text-gradient">{t.showcase.titleHighlight}</span>{" "}
              {t.showcase.titlePart2}
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {t.showcase.steps.map((s, i) => (
            <div key={s.title} className="card card-hover p-5">
              <p className="text-gradient text-2xl font-extrabold mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-foreground font-semibold mb-1.5">{s.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voice({ t }: { t: T }) {
  return (
    <section id="voice" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="card relative overflow-hidden p-6 sm:p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="chip mb-5">
              <IconMic className="w-3.5 h-3.5" />
              {t.voice.chip}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              {t.voice.titlePart1}{" "}
              <span className="text-gradient">{t.voice.titleHighlight}</span>.
            </h2>
            <p className="text-soft mt-4 leading-relaxed">{t.voice.subtitle}</p>
            <ul className="mt-6 space-y-3 text-soft">
              {t.voice.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <IconCheck className="w-5 h-5 text-success mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted leading-relaxed">{t.voice.deviceNote}</p>
          </div>
          <div className="relative">
            <div className="card p-5 space-y-3 bg-[rgba(5,7,14,0.55)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {t.voice.roomLabel}
                  </p>
                  <p className="text-foreground font-bold">{t.voice.roomTitle}</p>
                </div>
                <span className="chip text-success bg-success/15 border-success/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  {t.voice.liveLabel}
                </span>
              </div>
              <div className="divider" />
              {t.voice.users.map((u, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full grid place-items-center text-foreground font-bold text-sm ${
                      u.talking
                        ? "bg-primary/25 ring-2 ring-primary"
                        : "bg-surface-2 ring-1 ring-border"
                    }`}
                  >
                    {u.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground text-sm font-semibold truncate">{u.name}</p>
                    <p className="text-muted text-xs truncate">{u.role}</p>
                  </div>
                  <IconMic className={`w-4 h-4 ${u.talking ? "text-primary" : "text-muted"}`} />
                </div>
              ))}
              <div className="divider" />
              <div className="flex gap-2 pt-1">
                <button className="flex-1 btn-secondary text-sm py-2">
                  <IconMic className="w-4 h-4" /> {t.voice.muteBtn}
                </button>
                <button className="flex-1 btn-secondary text-sm py-2">
                  <IconBroadcast className="w-4 h-4" /> {t.voice.shareBtn}
                </button>
                <button className="flex-1 text-sm py-2 px-3 rounded-xl bg-danger/15 border border-danger/40 text-danger font-semibold flex items-center justify-center gap-2">
                  <IconHangup className="w-4 h-4" /> {t.voice.hangupBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Donate({ t }: { t: T }) {
  return (
    <section id="donate" className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-60 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="relative">
            <span className="chip mx-auto">
              <IconHeart className="w-3.5 h-3.5 text-rose-400" /> {t.donate.chip}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
              {t.donate.titlePart1}{" "}
              <span className="text-gradient">{t.donate.titleHighlight}</span>.
            </h2>
            <p className="text-soft mt-4 max-w-2xl mx-auto leading-relaxed">{t.donate.subtitle}</p>
            <div className="grid sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
              {t.donate.methods.map((m) => (
                <div
                  key={m.label}
                  className="card-hover bg-surface-2 border border-border rounded-xl px-4 py-3"
                >
                  <p className="text-foreground font-bold">{m.label}</p>
                  <p className="text-muted text-xs">{m.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-6">
              {t.donate.footnote1}{" "}
              <span className="text-foreground">{t.donate.footnoteLink}</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }: { t: T }) {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, i) => (
            <details
              key={i}
              className="card group p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-foreground font-semibold pr-4">{item.q}</span>
                <span className="w-7 h-7 grid place-items-center rounded-full bg-surface-2 border border-border text-primary transition group-open:rotate-45">
                  <IconPlus className="w-4 h-4" />
                </span>
              </summary>
              <p className="text-soft text-sm mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership({ t }: { t: T }) {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    t.partnership.emailSubject
  )}&body=${encodeURIComponent(t.partnership.emailBody)}`;
  return (
    <section id="partnership" className="relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="partnership-wrap relative rounded-[24px] p-[1.5px] overflow-hidden">
          <div className="relative rounded-[22px] bg-[rgba(5,7,14,0.92)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/20 to-pink-500/15 pointer-events-none" />
            <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/30 blur-3xl pointer-events-none" />
            <div className="relative p-8 md:p-14 grid md:grid-cols-[1.2fr_auto] gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full bg-warning/15 border border-warning/40 text-warning">
                  <IconHandshake className="w-3.5 h-3.5" />
                  {t.partnership.eyebrow}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-5 leading-[1.05]">
                  {t.partnership.titlePart1}{" "}
                  <span className="text-gradient">{t.partnership.titleHighlight}</span>
                </h2>
                <p className="text-soft mt-5 leading-relaxed max-w-2xl text-lg">
                  {t.partnership.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {t.partnership.segments.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-2/80 border border-border text-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted mt-6">
                  {t.partnership.emailLabel}{" "}
                  <a
                    href={mailto}
                    className="text-foreground font-semibold hover:text-primary transition break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
              <div className="flex md:justify-end">
                <a href={mailto} className="btn-primary text-base px-6 py-4 animate-pulse-glow shrink-0">
                  <IconMail className="w-5 h-5" />
                  {t.partnership.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction({ t }: { t: T }) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.cta.title}</h2>
            <p className="text-soft mt-3 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <div className="flex justify-center mt-7">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <IconGooglePlay className="w-5 h-5" />
                {t.cta.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: T }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-10 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/icon.png"
              alt={t.meta.siteName}
              width={32}
              height={32}
              className="rounded-md"
            />
            <p className="text-soft">
              {t.meta.siteName} · {year}
            </p>
          </div>
          <nav className="flex items-center gap-5">
            <Link href="/privacy" className="text-soft hover:text-foreground transition">
              {t.footer.privacyLink}
            </Link>
            <Link href="/terms" className="text-soft hover:text-foreground transition">
              {t.footer.termsLink}
            </Link>
            <Link href="/delete-account" className="text-soft hover:text-foreground transition">
              {t.footer.deleteAccountLink}
            </Link>
          </nav>
        </div>
        <IndependenceNotice className="max-w-3xl mx-auto text-center" />
      </div>
    </footer>
  );
}

type IconProps = { className?: string };

function IconSparkles({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" /><path d="m6 6 2 2" /><path d="m16 16 2 2" /><path d="m6 18 2-2" /><path d="m16 8 2-2" />
    </svg>
  );
}
function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function IconMic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 19v3" />
    </svg>
  );
}
function IconHangup({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11a16 16 0 0 0-20 0l2 3 4-1v-3a12 12 0 0 1 8 0v3l4 1 2-3Z" />
    </svg>
  );
}
function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function IconCalendar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}
function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-12.2 6.8L4 20l1.2-4.8A8 8 0 1 1 21 12Z" />
    </svg>
  );
}
function IconBell({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 16a4 4 0 0 1-2-3V9a6 6 0 0 0-12 0v4a4 4 0 0 1-2 3h16Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}
function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="m12 2 3 7 7 .6-5.3 4.6L18.5 22 12 18l-6.5 4 1.8-7.8L2 9.6 9 9l3-7Z" />
    </svg>
  );
}
function IconHeart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 7c-2.5 4.65-9.5 9-9.5 9Z" />
    </svg>
  );
}
function IconPlus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" /><path d="M5 12h14" />
    </svg>
  );
}
function IconGooglePlay({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3.6 2.3a1 1 0 0 0-.6.9v17.6c0 .4.2.7.5.9l9.2-9.7L3.6 2.3Zm10.2 10.8 2.7 2.8-9 5.2 6.3-8Zm0-2.2-6.3-8 9 5.2-2.7 2.8Zm6.6 1.1L17.7 14l-2.3-2.4 2.3-2.4 2.7 1.6c.8.5.8 1.5 0 2Z" />
    </svg>
  );
}
function IconHandshake({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2 4-4" />
      <path d="m21 11-8.5-8.5a1 1 0 0 0-1.4 0L9 5l4 4-3 3-4-4-3 3 8.5 8.5a1 1 0 0 0 1.4 0L15 17l-4-4 3-3 4 4 3-3Z" />
    </svg>
  );
}
function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconController({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 11h4" />
      <path d="M8 9v4" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="18" cy="10" r="1" />
      <path d="M17 6H7a5 5 0 0 0-5 5v2a5 5 0 0 0 9.5 2h1A5 5 0 0 0 22 13v-2a5 5 0 0 0-5-5Z" />
    </svg>
  );
}
function IconBroadcast({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4" />
      <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
      <path d="M4.9 19.1a10 10 0 0 1 0-14.2" />
    </svg>
  );
}
function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
function IconBook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </svg>
  );
}
function IconTrophy({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 6h3v2a3 3 0 0 1-3 3" />
      <path d="M7 6H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}
function IconSwords({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
      <path d="m13 19 6-6" />
      <path d="m16 16 4 4" />
      <path d="m19 21 2-2" />
      <path d="M9.5 6.5 13 3h3v3l-3.5 3.5" />
      <path d="m5 14 4 4" />
      <path d="m3 21 4-4" />
    </svg>
  );
}
function IconGavel({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14 13-7.5 7.5a2.1 2.1 0 0 1-3-3L11 10" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  );
}
function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </svg>
  );
}
function IconGift({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}
function IconEye({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
