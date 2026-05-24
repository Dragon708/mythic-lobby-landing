import Image from "next/image";
import Link from "next/link";

const APK_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://github.com/Dragon708/mlbb-landing/releases/latest/download/mlbb-mythic-lobby.apk";
const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <Voice />
        <Donate />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(5,7,14,0.65)] border-b border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 group">
          <Image
            src="/brand/icon.png"
            alt="MLBB Mythic Lobby"
            width={36}
            height={36}
            className="rounded-lg ring-1 ring-border/70 group-hover:ring-primary/60 transition"
            priority
          />
          <span className="text-foreground font-bold tracking-tight">
            Mythic <span className="text-gradient">Lobby</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-soft">
          <a href="#features" className="hover:text-foreground transition">Características</a>
          <a href="#showcase" className="hover:text-foreground transition">Cómo funciona</a>
          <a href="#voice" className="hover:text-foreground transition">Voz en juego</a>
          <a href="#donate" className="hover:text-foreground transition">Apoyar</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href={APK_DOWNLOAD_URL} className="btn-primary text-sm py-2.5 px-4">
          <IconDownload className="w-4 h-4" />
          Descargar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="space-y-7">
          <span className="chip">
            <span className="dot text-warning" />
            En MODO PRUEBA · v{APP_VERSION}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            La comunidad cubana de{" "}
            <span className="text-gradient">Mobile Legends</span> ahora vive en una sola app.
          </h1>
          <p className="text-soft text-lg max-w-xl leading-relaxed">
            Armá equipo, organizá partidas, hablá por voz y conocé a otros
            jugadores — todo en español, sin Discord, sin VPN, hecho para
            funcionar en Cuba.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={APK_DOWNLOAD_URL} className="btn-primary animate-pulse-glow">
              <IconAndroid className="w-5 h-5" />
              Descargar APK · Android
            </a>
            <a href="#features" className="btn-secondary">
              <IconSparkles className="w-5 h-5" />
              Ver características
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs text-muted">
            <Bullet>100% gratis</Bullet>
            <Bullet>Sin anuncios</Bullet>
            <Bullet>Push sin VPN (Pushy)</Bullet>
            <Bullet>Hecho por la comunidad</Bullet>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-to-tr from-primary/40 via-accent/30 to-pink-500/20 rounded-[40px]" />
          <div className="card p-3 md:p-4 rotate-[1.5deg] animate-float-slow">
            <Image
              src="/brand/banner.png"
              alt="Vista previa de la app"
              width={1200}
              height={450}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-10 card p-3 w-[210px] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success/15 border border-success/40 grid place-items-center text-success">
                <IconUsers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider">En línea</p>
                <p className="text-foreground font-bold leading-tight">132 jugadores</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -right-3 md:-right-8 card p-3 w-[230px] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary">
                <IconMic className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider">Sala de voz</p>
                <p className="text-foreground font-bold leading-tight">5 hablando ahora</p>
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

function Features() {
  const items = [
    {
      icon: <IconSearch className="w-5 h-5" />,
      title: "Encontrá jugadores",
      desc: "Buscá por nick, rol, rank o estado. Marcá amigos y aparecen primero. Tocá WhatsApp y abre el chat directo.",
      color: "from-blue-500/20 to-indigo-500/10",
    },
    {
      icon: <IconShield className="w-5 h-5" />,
      title: "Armá tu equipo",
      desc: "Crear casual, ranked, coliseo o competitivo. Aceptás solicitudes, invitás desde el perfil y cada equipo tiene su chat propio.",
      color: "from-purple-500/20 to-pink-500/10",
    },
    {
      icon: <IconCalendar className="w-5 h-5" />,
      title: "Organizá partidas",
      desc: "Definí horario, capacidad y rango de rank. Si compartís equipo con alguien, te unís automático. Se agrega al calendario del teléfono.",
      color: "from-emerald-500/20 to-teal-500/10",
    },
    {
      icon: <IconMic className="w-5 h-5" />,
      title: "Chat de voz",
      desc: "Sala propia por equipo y por partida. Funciona en segundo plano mientras jugás MLBB. Auto-mute si quedás solo.",
      color: "from-amber-500/20 to-orange-500/10",
    },
    {
      icon: <IconChat className="w-5 h-5" />,
      title: "Chats con todo",
      desc: "Comunidad, DMs, equipos y partidas. Imágenes, voz, menciones, formato y notificaciones push siempre que te escriben.",
      color: "from-cyan-500/20 to-blue-500/10",
    },
    {
      icon: <IconBell className="w-5 h-5" />,
      title: "Push sin VPN",
      desc: "Usamos Pushy, que funciona en Cuba sin saltar la red. Te llega cuando te invitan, te aceptan o te mencionan.",
      color: "from-rose-500/20 to-red-500/10",
    },
    {
      icon: <IconStar className="w-5 h-5" />,
      title: "Mains y perfil real",
      desc: "Hasta 6 héroes mains, rol principal y secundarios, rank actual. Tu Player ID y Server ID copiables con un toque.",
      color: "from-yellow-500/20 to-amber-500/10",
    },
    {
      icon: <IconUpdate className="w-5 h-5" />,
      title: "Updates dentro de la app",
      desc: "Cuando sacamos versión nueva, te avisa con un modal y la descargás e instalás directo. No tenés que buscar el APK por afuera.",
      color: "from-fuchsia-500/20 to-purple-500/10",
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Todo en una sola app"
          title={<>Diseñada para la realidad <span className="text-gradient">de jugar en Cuba</span></>}
          subtitle="Sin saltar entre Discord, WhatsApp y los grupos. Acá tenés todo lo que necesitás para coordinar y jugar."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {items.map((it) => (
            <div key={it.title} className="card card-hover p-5 relative overflow-hidden">
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${it.color} blur-2xl pointer-events-none`} />
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border grid place-items-center text-primary mb-4">
                {it.icon}
              </div>
              <h3 className="text-foreground font-semibold text-[17px] mb-1.5">
                {it.title}
              </h3>
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
      <p className="text-primary text-xs font-bold uppercase tracking-[0.18em] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-soft mt-4 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Showcase() {
  const steps = [
    {
      n: "01",
      title: "Creá tu perfil",
      desc: "Foto, MLBB Nickname, Player ID, rol principal, mains y rank. Tu WhatsApp es opcional, pero hace que te contacten en un toque.",
    },
    {
      n: "02",
      title: "Encontrá gente y armá equipo",
      desc: "Filtrá por rol o por amigos. Mandás solicitud o creás tu propio equipo en casual, ranked o coliseo.",
    },
    {
      n: "03",
      title: "Programá la partida",
      desc: "Capacidad 5/7/10, link de la sala, rango de rank permitido. Compartís por WhatsApp y se agrega al calendario.",
    },
    {
      n: "04",
      title: "Hablá por voz mientras jugás",
      desc: "Cada partida tiene su sala. Sigue funcionando con la pantalla apagada y la app en segundo plano.",
    },
  ];
  return (
    <section id="showcase" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Cómo funciona"
          title={<>De &ldquo;¿alguien para jugar?&rdquo; a <span className="text-gradient">partida en marcha</span> en minutos</>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {steps.map((s) => (
            <div key={s.n} className="card card-hover p-5">
              <p className="text-gradient text-2xl font-extrabold mb-2">{s.n}</p>
              <h3 className="text-foreground font-semibold mb-1.5">{s.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voice() {
  const voiceUsers = [
    { name: "Alex_Mythic", role: "Jungler", talking: true },
    { name: "Sofia_GG", role: "Gold Laner", talking: false },
    { name: "ElCapi", role: "Mid Laner", talking: true },
    { name: "Yaniris", role: "Roamer", talking: false },
    { name: "Reyhd", role: "EXP Laner", talking: false },
  ];
  return (
    <section id="voice" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="card relative overflow-hidden p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="chip mb-5">
              <IconMic className="w-3.5 h-3.5" />
              Voz integrada
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Una sala de voz por <span className="text-gradient">cada equipo y cada partida</span>.
            </h2>
            <p className="text-soft mt-4 leading-relaxed">
              Hablá con tu squad sin tener que abrir otra app. La sala sigue
              activa con la pantalla apagada, y si quedás solo 3 minutos te
              desconecta automáticamente para no quemar batería ni datos.
            </p>
            <ul className="mt-6 space-y-3 text-soft">
              <li className="flex gap-3"><IconCheck className="w-5 h-5 text-success mt-0.5" /> Mini banner para volver mientras hacés otra cosa</li>
              <li className="flex gap-3"><IconCheck className="w-5 h-5 text-success mt-0.5" /> Mute y colgar siempre a la vista</li>
              <li className="flex gap-3"><IconCheck className="w-5 h-5 text-success mt-0.5" /> Contador en vivo de quién está adentro</li>
            </ul>
            <p className="mt-6 text-xs text-muted leading-relaxed">
              En algunos Xiaomi/Huawei/OPPO conviene activar <em>Inicio
              automático</em> y <em>Sin restricción de batería</em> en
              Configuración → Apps → MLBB Mythic Lobby.
            </p>
          </div>
          <div className="relative">
            <div className="card p-5 space-y-3 bg-[rgba(5,7,14,0.55)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Sala de voz</p>
                  <p className="text-foreground font-bold">Coliseo · 21:00</p>
                </div>
                <span className="chip text-success bg-success/15 border-success/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  En vivo
                </span>
              </div>
              <div className="divider" />
              {voiceUsers.map((u, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full grid place-items-center text-foreground font-bold text-sm ${u.talking ? "bg-primary/25 ring-2 ring-primary" : "bg-surface-2 ring-1 ring-border"}`}>
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
                  <IconMic className="w-4 h-4" /> Mute
                </button>
                <button className="flex-1 text-sm py-2 px-3 rounded-xl bg-danger/15 border border-danger/40 text-danger font-semibold flex items-center justify-center gap-2">
                  <IconHangup className="w-4 h-4" /> Colgar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Donate() {
  const methods = [
    { label: "USDT", sub: "TRC-20" },
    { label: "BTC", sub: "On-chain" },
    { label: "Lightning", sub: "BTC LN" },
    { label: "Otras", sub: "Cripto / app" },
  ];
  return (
    <section id="donate" className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-60 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="relative">
            <span className="chip mx-auto"><IconHeart className="w-3.5 h-3.5 text-rose-400" /> Apoyo voluntario</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
              Esta app la <span className="text-gradient">sostiene la comunidad</span>.
            </h2>
            <p className="text-soft mt-4 max-w-2xl mx-auto leading-relaxed">
              El 100% de lo que entra va a servidores, dominio, push
              notifications y chat de voz. No hay anuncios ni venta de datos.
              Cualquier monto ayuda a mantenerla viva.
            </p>
            <div className="grid sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
              {methods.map((m) => (
                <div key={m.label} className="card-hover bg-surface-2 border border-border rounded-xl px-4 py-3">
                  <p className="text-foreground font-bold">{m.label}</p>
                  <p className="text-muted text-xs">{m.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-6">
              Las direcciones exactas están dentro de la app, en{" "}
              <span className="text-foreground">Perfil → Apoyar</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    {
      q: "¿Es gratis?",
      a: "Sí, 100%. No hay anuncios ni planes premium. Si querés ayudar, podés aportar desde la sección Apoyar dentro de la app.",
    },
    {
      q: "¿Funciona en Cuba sin VPN?",
      a: "Sí. Las notificaciones usan Pushy, que funciona en redes cubanas sin VPN. El chat de voz usa LiveKit Cloud y también funciona.",
    },
    {
      q: "¿Por qué solo Android por ahora?",
      a: "Estamos en MODO PRUEBA y arrancamos con APK directo para iterar rápido. iOS llega más adelante.",
    },
    {
      q: "¿Es seguro instalar el APK?",
      a: "Sí, lo firmamos nosotros y la app se actualiza sola desde adentro. Si te aparece advertencia de \"Origen desconocido\" es lo normal cuando una app no viene del Play Store — activá la instalación para nuestra app y listo.",
    },
    {
      q: "¿Qué hago si encuentro un bug o tengo una idea?",
      a: "Mandanos feedback desde Perfil → Feedback dentro de la app. Lo leemos todo y muchas ideas de la comunidad ya están integradas.",
    },
    {
      q: "¿Necesito Discord?",
      a: "No. Cada equipo y cada partida tiene su chat y su sala de voz adentro de la app.",
    },
  ];
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="Preguntas frecuentes" title={<>Lo que más nos preguntan</>} />
        <div className="mt-12 space-y-3">
          {qs.map((item, i) => (
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

function CallToAction() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Listo para jugar con la comunidad.
            </h2>
            <p className="text-soft mt-3 max-w-xl mx-auto">
              Descargá la app, creá tu perfil y empezá a armar partidas en
              minutos.
            </p>
            <div className="flex justify-center mt-7">
              <a href={APK_DOWNLOAD_URL} className="btn-primary">
                <IconAndroid className="w-5 h-5" />
                Descargar APK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-10 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
        <div className="flex items-center gap-2.5">
          <Image
            src="/brand/icon.png"
            alt="MLBB Mythic Lobby"
            width={28}
            height={28}
            className="rounded-md"
          />
          <p className="text-soft">MLBB Mythic Lobby · {year}</p>
        </div>
        <p className="text-center md:text-right max-w-md leading-relaxed">
          Proyecto comunitario sin afiliación a Moonton ni Mobile Legends:
          Bang Bang. Todas las marcas son de sus respectivos dueños.
        </p>
      </div>
    </footer>
  );
}

type IconProps = { className?: string };

function IconDownload({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
    </svg>
  );
}
function IconAndroid({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.6 9.5 19 7.3a.6.6 0 0 0-1-.6L16.4 9c-1.3-.6-2.8-1-4.4-1s-3.1.4-4.4 1L6 6.7a.6.6 0 1 0-1 .6l1.4 2.2C5 10.8 4 12.7 4 14.8h16c0-2.1-1-4-2.4-5.3ZM8.5 13a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm7 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8ZM4 15.8v3.4c0 .7.6 1.3 1.3 1.3h.4v2c0 .5.4.9.9.9s.9-.4.9-.9v-2h8.9v2c0 .5.4.9.9.9s.9-.4.9-.9v-2h.4c.7 0 1.3-.6 1.3-1.3v-3.4H4ZM2.7 10c-.7 0-1.2.6-1.2 1.3v5.4c0 .7.5 1.3 1.2 1.3.8 0 1.3-.6 1.3-1.3v-5.4c0-.7-.5-1.3-1.3-1.3Zm18.6 0c-.7 0-1.3.6-1.3 1.3v5.4c0 .7.6 1.3 1.3 1.3s1.2-.6 1.2-1.3v-5.4c0-.7-.5-1.3-1.2-1.3Z"/>
    </svg>
  );
}
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
