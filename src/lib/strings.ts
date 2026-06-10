export type Lang = "es" | "en";

type FaqItem = { q: string; a: string };

export type Strings = {
  meta: {
    siteName: string;
    tagline: string;
    description: string;
  };
  nav: {
    features: string;
    showcase: string;
    voice: string;
    games: string;
    donate: string;
    faq: string;
    partnership: string;
    download: string;
    languageLabel: string;
  };
  hero: {
    chipBeta: (v: string) => string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaDownload: string;
    ctaFeatures: string;
    playStoreTop: string;
    playStoreBottom: string;
    bullets: string[];
    cardOnlineLabel: string;
    cardOnlineValue: string;
    cardVoiceLabel: string;
    cardVoiceValue: string;
  };
  games: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    liveLabel: string;
    items: { name: string; tag: string }[];
  };
  features: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  showcase: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    steps: { title: string; desc: string }[];
  };
  voice: {
    chip: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    bullets: string[];
    deviceNote: string;
    roomLabel: string;
    roomTitle: string;
    liveLabel: string;
    muteBtn: string;
    hangupBtn: string;
    users: { name: string; role: string; talking: boolean }[];
  };
  donate: {
    chip: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    methods: { label: string; sub: string }[];
    footnote1: string;
    footnoteLink: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  partnership: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    button: string;
    emailSubject: string;
    emailBody: string;
    segments: string[];
    emailLabel: string;
  };
  footer: {
    disclaimer: string;
    privacyLink: string;
    termsLink: string;
  };
  jsonLd: {
    description: string;
    mobileAppDescription: string;
  };
};

export const STRINGS: Record<Lang, Strings> = {
  es: {
    meta: {
      siteName: "Mythic Lobby",
      tagline: "Encontrá tu squad. En cualquier juego. En cualquier rank.",
      description:
        "Mythic Lobby es el lobby global donde gamers arman squad para ranked en MLBB, Free Fire, COD Mobile, Clash Royale, Clash of Clans y Rise of Kingdoms. Filtros por rank, rol, horario y región. Voz integrada por partida. Sin Discord.",
    },
    nav: {
      features: "Características",
      showcase: "Cómo funciona",
      voice: "Voz en juego",
      games: "Juegos",
      donate: "Apoyar",
      faq: "FAQ",
      partnership: "Colaborar",
      download: "Descargar",
      languageLabel: "Idioma",
    },
    hero: {
      chipBeta: (v) => `En modo prueba · v${v}`,
      titlePart1: "Encontrá tu squad.",
      titleHighlight: "En cualquier juego.",
      titlePart2: "En cualquier rank.",
      subtitle:
        "El lobby global donde gamers se conectan para ranked, clan wars y scrims. Filtrá por rank, rol, horario y región. Voz integrada por partida. Sin Discord.",
      ctaDownload: "Descargar en Google Play",
      ctaFeatures: "Ver características",
      playStoreTop: "Disponible en",
      playStoreBottom: "Google Play",
      bullets: ["100% gratis", "Sin anuncios", "Notificaciones realtime", "Hecho por gamers"],
      cardOnlineLabel: "En línea",
      cardOnlineValue: "132 jugadores",
      cardVoiceLabel: "Sala de voz",
      cardVoiceValue: "5 hablando ahora",
    },
    games: {
      eyebrow: "Multi-juego",
      titlePart1: "Un perfil.",
      titleHighlight: "Todos tus juegos.",
      titlePart2: "",
      subtitle:
        "Soporte completo desde el día uno para los 6 juegos competitivos mobile más jugados del mundo. Rank, rol, mains y stats independientes por cada uno.",
      liveLabel: "Disponible",
      items: [
        { name: "Mobile Legends", tag: "MOBA 5v5" },
        { name: "Free Fire", tag: "Battle Royale" },
        { name: "COD Mobile", tag: "FPS / BR" },
        { name: "Clash Royale", tag: "Card 1v1" },
        { name: "Clash of Clans", tag: "Clan Wars" },
        { name: "Rise of Kingdoms", tag: "Alliance / Strategy" },
      ],
    },
    features: {
      eyebrow: "Todo en una sola app",
      titlePart1: "Pensada para gamers que",
      titleHighlight: "juegan en serio",
      subtitle:
        "Sin saltar entre Discord, WhatsApp y mil grupos. Acá tenés todo lo que necesitás para coordinar y jugar — en el juego que sea.",
      items: [
        {
          title: "Encontrá jugadores",
          desc: "Filtrá por juego, rank, rol u horario. Marcá amigos y aparecen primero. WhatsApp opcional para chat directo.",
        },
        {
          title: "Armá squad, clan o alliance",
          desc: "Squad de 5 para MOBA/FPS, clan para CR y CoC, alliance de 100 para RoK. Cada team tiene su chat propio.",
        },
        {
          title: "Organizá partidas",
          desc: "Casual, ranked, scrim, clan war o torneo. Horario, capacidad, rango de rank permitido. Se agrega al calendario del teléfono.",
        },
        {
          title: "Chat de voz",
          desc: "Sala por team y por partida. Sigue funcionando con la pantalla apagada y la app en segundo plano. Auto-mute si quedás solo.",
        },
        {
          title: "Chats con todo",
          desc: "Comunidad por juego, DMs, equipos y partidas. Imágenes, voz, menciones, formato y push siempre que te escriben.",
        },
        {
          title: "Notificaciones realtime",
          desc: "Push que no se pierde aunque tu Xiaomi, Huawei u OPPO maten apps en segundo plano. Te avisa cuando te invitan, te aceptan o te mencionan.",
        },
        {
          title: "Perfil multi-juego",
          desc: "Rank, rol y mains por cada juego que jugás. Tu Player ID copiable con un toque. Stats que se quedan con vos.",
        },
        {
          title: "Updates dentro de la app",
          desc: "Cuando sacamos versión nueva, te avisa con un modal y la descargás e instalás directo. No buscás APKs por afuera.",
        },
      ],
    },
    showcase: {
      eyebrow: "Cómo funciona",
      titlePart1: "De",
      titleHighlight: "“¿alguien para jugar?”",
      titlePart2: "a partida en marcha en minutos",
      steps: [
        {
          title: "Creá tu perfil",
          desc: "Elegí los juegos que jugás. Cada uno con su rank, rol, mains y Player ID. Foto y nickname una sola vez.",
        },
        {
          title: "Encontrá gente",
          desc: "Filtrá por juego activo, rank o role. Mandás solicitud, te aceptan, y ya están en el mismo chat.",
        },
        {
          title: "Programá la partida",
          desc: "Capacidad, link de sala, rango de rank permitido. Compartís por WhatsApp y se agrega al calendario.",
        },
        {
          title: "Hablá por voz mientras jugás",
          desc: "Cada partida tiene su sala. Funciona con la pantalla apagada y la app en segundo plano.",
        },
      ],
    },
    voice: {
      chip: "Voz integrada",
      titlePart1: "Una sala de voz por",
      titleHighlight: "cada equipo y cada partida",
      subtitle:
        "Hablá con tu squad sin abrir otra app. La sala sigue activa con la pantalla apagada, y si quedás solo 3 minutos te desconecta automáticamente para no quemar batería ni datos.",
      bullets: [
        "Mini banner para volver mientras hacés otra cosa",
        "Mute y colgar siempre a la vista",
        "Contador en vivo de quién está adentro",
      ],
      deviceNote:
        "En algunos Xiaomi/Huawei/OPPO conviene activar Inicio automático y Sin restricción de batería en Configuración → Apps → Mythic Lobby.",
      roomLabel: "Sala de voz",
      roomTitle: "Ranked · 21:00",
      liveLabel: "En vivo",
      muteBtn: "Mute",
      hangupBtn: "Colgar",
      users: [
        { name: "Alex_Mythic", role: "Squad lead", talking: true },
        { name: "Sofia_GG", role: "Carry", talking: false },
        { name: "ElCapi", role: "Mid / IGL", talking: true },
        { name: "Yaniris", role: "Support", talking: false },
        { name: "Reyhd", role: "Flex", talking: false },
      ],
    },
    donate: {
      chip: "Apoyo voluntario",
      titlePart1: "Esta app la",
      titleHighlight: "sostiene la comunidad",
      subtitle:
        "El 100% de lo que entra va a servidores, dominio, push notifications y chat de voz. No hay anuncios ni venta de datos. Cualquier monto ayuda a mantenerla viva.",
      methods: [
        { label: "USDT", sub: "TRC-20" },
        { label: "BTC", sub: "On-chain" },
        { label: "Lightning", sub: "BTC LN" },
        { label: "Otras", sub: "Cripto / app" },
      ],
      footnote1: "Las direcciones exactas están dentro de la app, en",
      footnoteLink: "Perfil → Apoyar",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que más nos preguntan",
      items: [
        {
          q: "¿Es gratis?",
          a: "Sí, 100%. No hay anuncios ni planes premium obligatorios. Si querés ayudar, podés aportar desde la sección Apoyar dentro de la app.",
        },
        {
          q: "¿Qué juegos están soportados?",
          a: "Mobile Legends, Free Fire, COD Mobile, Clash Royale, Clash of Clans y Rise of Kingdoms — los 6 disponibles desde el lanzamiento, con rank, rol, mains y stats independientes por juego.",
        },
        {
          q: "¿Por qué solo Android por ahora?",
          a: "Estamos en MODO PRUEBA y arrancamos con APK directo para iterar rápido. iOS y web llegan más adelante.",
        },
        {
          q: "¿Es seguro instalar el APK?",
          a: "Sí, lo firmamos nosotros y la app se actualiza sola desde adentro. Si te aparece advertencia de \"Origen desconocido\" es lo normal cuando una app no viene del Play Store — activá la instalación para Mythic Lobby y listo.",
        },
        {
          q: "¿Necesito Discord?",
          a: "No. Cada team, clan, alliance y partida tiene su chat y su sala de voz adentro de la app.",
        },
        {
          q: "¿Qué hago si encuentro un bug o tengo una idea?",
          a: "Mandanos feedback desde Perfil → Feedback dentro de la app. Lo leemos todo y muchas ideas de la comunidad ya están integradas.",
        },
      ],
    },
    cta: {
      title: "Listo para encontrar tu squad.",
      subtitle: "Descargá la app, creá tu perfil y empezá a armar partidas en minutos.",
      button: "Descargar en Google Play",
    },
    partnership: {
      eyebrow: "Colaboraciones",
      titlePart1: "¿Querés",
      titleHighlight: "colaborar con Mythic Lobby?",
      subtitle:
        "Partnerships, promoción cruzada, sponsorships y torneos. Si tu marca, equipo o comunidad quiere sumarse — armamos algo juntos.",
      button: "Contactanos",
      emailSubject: "Colaboración / Partnership con Mythic Lobby",
      emailBody:
        "Hola Jorge,\n\nMe gustaría colaborar con Mythic Lobby. Cuento un poco lo que tengo en mente:\n\n— \n\nGracias!\n",
      segments: ["Streamers", "Cybercafés", "Torneos", "Equipos esports", "Sponsors"],
      emailLabel: "Escribinos a",
    },
    footer: {
      disclaimer:
        "Proyecto comunitario independiente. Sin afiliación con ningún publisher de videojuegos. Todas las marcas pertenecen a sus respectivos dueños.",
      privacyLink: "Política de privacidad",
      termsLink: "Términos de servicio",
    },
    jsonLd: {
      description:
        "Mythic Lobby es el lobby donde gamers arman squad para ranked en cualquier juego competitivo. Filtros por rank, rol, horario y región. Voz integrada por partida.",
      mobileAppDescription:
        "Armá squad, organizá partidas, hablá por voz y conocé jugadores en MLBB, Free Fire, COD Mobile, Clash Royale y más — sin Discord, comunidad global.",
    },
  },
  en: {
    meta: {
      siteName: "Mythic Lobby",
      tagline: "Find your squad. Any game. Every rank.",
      description:
        "Mythic Lobby is the global lobby where gamers find squad for ranked in MLBB, Free Fire, COD Mobile, Clash Royale, Clash of Clans and Rise of Kingdoms. Filter by rank, role, schedule and region. Built-in voice per match. No Discord.",
    },
    nav: {
      features: "Features",
      showcase: "How it works",
      voice: "In-game voice",
      games: "Games",
      donate: "Support",
      faq: "FAQ",
      partnership: "Partner",
      download: "Download",
      languageLabel: "Language",
    },
    hero: {
      chipBeta: (v) => `In beta · v${v}`,
      titlePart1: "Find your squad.",
      titleHighlight: "Any game.",
      titlePart2: "Every rank.",
      subtitle:
        "The global lobby where gamers connect for ranked, clan wars and scrims. Filter by rank, role, schedule and region. Built-in voice per match. No Discord.",
      ctaDownload: "Get it on Google Play",
      ctaFeatures: "See features",
      playStoreTop: "Get it on",
      playStoreBottom: "Google Play",
      bullets: ["100% free", "No ads", "Real-time notifications", "Built by gamers"],
      cardOnlineLabel: "Online",
      cardOnlineValue: "132 players",
      cardVoiceLabel: "Voice room",
      cardVoiceValue: "5 speaking now",
    },
    games: {
      eyebrow: "Multi-game",
      titlePart1: "One profile.",
      titleHighlight: "All your games.",
      titlePart2: "",
      subtitle:
        "Full support from day one for the 6 biggest mobile competitive games worldwide. Independent rank, role, mains and stats per game.",
      liveLabel: "Live",
      items: [
        { name: "Mobile Legends", tag: "5v5 MOBA" },
        { name: "Free Fire", tag: "Battle Royale" },
        { name: "COD Mobile", tag: "FPS / BR" },
        { name: "Clash Royale", tag: "1v1 Card" },
        { name: "Clash of Clans", tag: "Clan Wars" },
        { name: "Rise of Kingdoms", tag: "Alliance / Strategy" },
      ],
    },
    features: {
      eyebrow: "Everything in one app",
      titlePart1: "Built for gamers who",
      titleHighlight: "play to climb",
      subtitle:
        "No more jumping between Discord, WhatsApp and a dozen group chats. Everything you need to coordinate and play — in any game.",
      items: [
        {
          title: "Find players",
          desc: "Filter by game, rank, role or schedule. Friends show up first. Optional WhatsApp link for direct chat.",
        },
        {
          title: "Build squad, clan or alliance",
          desc: "Squad of 5 for MOBA/FPS, clan for CR and CoC, alliance of 100 for RoK. Each team has its own chat.",
        },
        {
          title: "Schedule matches",
          desc: "Casual, ranked, scrim, clan war or tournament. Time, capacity, allowed rank range. Adds to your phone calendar.",
        },
        {
          title: "Voice chat",
          desc: "A room per team and per match. Keeps working with the screen off and the app in background. Auto-mute if you're alone.",
        },
        {
          title: "Chat for everything",
          desc: "Per-game community, DMs, teams and matches. Images, voice notes, mentions, formatting and push every time someone messages you.",
        },
        {
          title: "Real-time notifications",
          desc: "Push that doesn't get killed by Xiaomi, Huawei or OPPO background limits. Pings you on invites, accepts and mentions.",
        },
        {
          title: "Multi-game profile",
          desc: "Rank, role and mains per game. Player ID copyable in one tap. Stats that stay with you across games.",
        },
        {
          title: "In-app updates",
          desc: "When a new version ships, a modal lets you download and install in place. No hunting for APKs.",
        },
      ],
    },
    showcase: {
      eyebrow: "How it works",
      titlePart1: "From",
      titleHighlight: "“anyone up to play?”",
      titlePart2: "to live match in minutes",
      steps: [
        {
          title: "Build your profile",
          desc: "Pick the games you play. Rank, role, mains and Player ID per game. Photo and nickname once.",
        },
        {
          title: "Find people",
          desc: "Filter by active game, rank or role. Send a request, get accepted, you're already in the team chat.",
        },
        {
          title: "Schedule the match",
          desc: "Capacity, room link, allowed rank range. Share via WhatsApp and add to calendar.",
        },
        {
          title: "Talk while you play",
          desc: "Each match gets its own voice room. Works with the screen off and the app backgrounded.",
        },
      ],
    },
    voice: {
      chip: "Built-in voice",
      titlePart1: "A voice room for",
      titleHighlight: "every team and every match",
      subtitle:
        "Talk with your squad without opening another app. The room stays alive with the screen off, and if you're alone for 3 minutes it disconnects automatically so you don't burn battery or data.",
      bullets: [
        "Mini banner to jump back while doing something else",
        "Mute and hangup always visible",
        "Live count of who's in the room",
      ],
      deviceNote:
        "On some Xiaomi/Huawei/OPPO devices, enable Autostart and No battery restriction in Settings → Apps → Mythic Lobby.",
      roomLabel: "Voice room",
      roomTitle: "Ranked · 9:00 PM",
      liveLabel: "Live",
      muteBtn: "Mute",
      hangupBtn: "Hang up",
      users: [
        { name: "Alex_Mythic", role: "Squad lead", talking: true },
        { name: "Sofia_GG", role: "Carry", talking: false },
        { name: "ElCapi", role: "Mid / IGL", talking: true },
        { name: "Yaniris", role: "Support", talking: false },
        { name: "Reyhd", role: "Flex", talking: false },
      ],
    },
    donate: {
      chip: "Voluntary support",
      titlePart1: "This app is",
      titleHighlight: "community-funded",
      subtitle:
        "100% of contributions go to servers, domain, push notifications and voice chat. No ads, no data selling. Any amount helps keep it alive.",
      methods: [
        { label: "USDT", sub: "TRC-20" },
        { label: "BTC", sub: "On-chain" },
        { label: "Lightning", sub: "BTC LN" },
        { label: "Other", sub: "Crypto / app" },
      ],
      footnote1: "Exact addresses live inside the app, under",
      footnoteLink: "Profile → Support",
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "The questions we hear the most",
      items: [
        {
          q: "Is it free?",
          a: "Yes, 100%. No ads and no required premium. If you want to help, you can contribute from the Support section inside the app.",
        },
        {
          q: "Which games are supported?",
          a: "Mobile Legends, Free Fire, COD Mobile, Clash Royale, Clash of Clans and Rise of Kingdoms — all 6 available at launch, with independent rank, role, mains and stats per game.",
        },
        {
          q: "Why Android only for now?",
          a: "We're in beta and shipping a direct APK to iterate fast. iOS and web come later.",
        },
        {
          q: "Is it safe to install the APK?",
          a: "Yes — we sign it and the app self-updates from inside. If you see an \"Unknown source\" warning, that's normal when an app doesn't come from the Play Store — allow install for Mythic Lobby and you're set.",
        },
        {
          q: "Do I need Discord?",
          a: "No. Every team, clan, alliance and match has its own chat and voice room inside the app.",
        },
        {
          q: "Found a bug or have an idea?",
          a: "Send feedback from Profile → Feedback inside the app. We read every one and many ideas from the community are already shipped.",
        },
      ],
    },
    cta: {
      title: "Ready to find your squad.",
      subtitle: "Download the app, build your profile and start scheduling matches in minutes.",
      button: "Get it on Google Play",
    },
    partnership: {
      eyebrow: "Partnerships",
      titlePart1: "Want to",
      titleHighlight: "partner with Mythic Lobby?",
      subtitle:
        "Partnerships, cross-promotion, sponsorships and tournaments. If your brand, team or community wants in — let's build something together.",
      button: "Get in touch",
      emailSubject: "Partnership / collaboration with Mythic Lobby",
      emailBody:
        "Hi Jorge,\n\nI'd like to collaborate with Mythic Lobby. Quick context on what I have in mind:\n\n— \n\nThanks!\n",
      segments: ["Streamers", "Internet cafés", "Tournaments", "Esports teams", "Sponsors"],
      emailLabel: "Reach us at",
    },
    footer: {
      disclaimer:
        "Independent community project. Not affiliated with any game publisher. All trademarks belong to their respective owners.",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Service",
    },
    jsonLd: {
      description:
        "Mythic Lobby is the lobby where gamers find squad for ranked in any competitive game. Filter by rank, role, schedule and region. Built-in voice per match.",
      mobileAppDescription:
        "Build squad, schedule matches, talk by voice and meet players in MLBB, Free Fire, COD Mobile, Clash Royale and more — no Discord, global community.",
    },
  },
};
