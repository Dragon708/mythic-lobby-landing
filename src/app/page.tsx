"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { STRINGS, type Lang } from "@/lib/strings";
import { IndependenceNotice } from "@/app/_components/independence-notice";

const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.mythiclobby.app";
const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0";
const CONTACT_EMAIL = "jorgegmdgonzalez@gmail.com";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://mythic-lobby.vercel.app");

const STORAGE_KEY = "ml.lang";

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
        <Games t={t} />
        <Partnership t={t} />
        <Features t={t} />
        <Showcase t={t} />
        <Voice t={t} />
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
      fileSize: "110MB",
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
          <a href="#showcase" className="hover:text-foreground transition">{t.nav.showcase}</a>
          <a href="#voice" className="hover:text-foreground transition">{t.nav.voice}</a>
          <a href="#donate" className="hover:text-foreground transition">{t.nav.donate}</a>
          <a href="#faq" className="hover:text-foreground transition">{t.nav.faq}</a>
          <a href="#partnership" className="hover:text-foreground transition">{t.nav.partnership}</a>
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
            <span className="dot text-warning" />
            {t.hero.chipBeta(APP_VERSION)}
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
              <div className="w-10 h-10 rounded-full bg-success/15 border border-success/40 grid place-items-center text-success">
                <IconUsers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider">
                  {t.hero.cardOnlineLabel}
                </p>
                <p className="text-foreground font-bold leading-tight">
                  {t.hero.cardOnlineValue}
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
                <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border grid place-items-center text-primary">
                  <IconController className="w-4 h-4" />
                </div>
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
    <IconShield key="shield" className="w-5 h-5" />,
    <IconCalendar key="cal" className="w-5 h-5" />,
    <IconMic key="mic" className="w-5 h-5" />,
    <IconChat key="chat" className="w-5 h-5" />,
    <IconBell key="bell" className="w-5 h-5" />,
    <IconStar key="star" className="w-5 h-5" />,
    <IconUpdate key="update" className="w-5 h-5" />,
  ];
  const colors = [
    "from-blue-500/20 to-indigo-500/10",
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
        <div className="card relative overflow-hidden p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
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
function IconUsers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
function IconUpdate({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
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
