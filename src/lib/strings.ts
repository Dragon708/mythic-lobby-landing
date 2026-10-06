export type Lang = "es" | "en";

type FaqItem = { q: string; a: string };
type Item = { title: string; desc: string };

export type Strings = {
  meta: {
    siteName: string;
    tagline: string;
    description: string;
  };
  nav: {
    features: string;
    competitive: string;
    live: string;
    arcade: string;
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
    chipLive: (v: string) => string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaDownload: string;
    ctaFeatures: string;
    playStoreTop: string;
    playStoreBottom: string;
    bullets: string[];
    cardLiveLabel: string;
    cardLiveValue: string;
    cardVoiceLabel: string;
    cardVoiceValue: string;
  };
  highlights: { value: string; label: string }[];
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
    items: Item[];
  };
  competitive: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    items: Item[];
    bracketLabel: string;
    bracketTitle: string;
    bracketStatus: string;
    roundSemis: string;
    roundFinal: string;
    refereeNote: string;
    semis: { a: string; b: string; winner: "a" | "b" }[];
    final: { a: string; b: string };
  };
  live: {
    chip: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    bullets: string[];
    note: string;
    tabTitle: string;
    tabSubtitle: string;
    watch: string;
    streams: { title: string; host: string; game: string; viewers: string }[];
  };
  arcade: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    items: { name: string; meta: string; desc: string; bullets: string[] }[];
    comingSoon: string;
  };
  rewards: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    items: Item[];
  };
  showcase: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    steps: Item[];
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
    shareBtn: string;
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
    deleteAccountLink: string;
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
      tagline: "Encuentra tu squad. En cualquier juego. En cualquier rank.",
      description:
        "Mythic Lobby es la app gratis donde gamers arman squad, compiten en torneos con árbitros, transmiten su partida en vivo y hablan por voz. MLBB, Free Fire, COD Mobile, PUBG Mobile, Clash Royale y más. Sin Discord.",
    },
    nav: {
      features: "Características",
      competitive: "Competitivo",
      live: "En vivo",
      arcade: "Minijuegos",
      showcase: "Cómo funciona",
      voice: "Voz",
      games: "Juegos",
      donate: "Apoyar",
      faq: "FAQ",
      partnership: "Colaborar",
      download: "Descargar",
      languageLabel: "Idioma",
    },
    hero: {
      chipLive: (v) => `Ya en Google Play · v${v}`,
      titlePart1: "Encuentra tu squad.",
      titleHighlight: "En cualquier juego.",
      titlePart2: "En cualquier rank.",
      subtitle:
        "Arma equipo, compite en torneos con árbitros, transmite tu partida en vivo y juega minijuegos con tu squad. Voz, chats y notificaciones en una sola app. Sin Discord.",
      ctaDownload: "Descargar en Google Play",
      ctaFeatures: "Ver características",
      playStoreTop: "Disponible en",
      playStoreBottom: "Google Play",
      bullets: ["100% gratis", "Sin anuncios", "Voz y streams integrados", "Hecho por gamers"],
      cardLiveLabel: "En vivo",
      cardLiveValue: "Ranked MLBB · 12 mirando",
      cardVoiceLabel: "Sala de voz",
      cardVoiceValue: "5 hablando ahora",
    },
    highlights: [
      { value: "14", label: "juegos soportados" },
      { value: "3", label: "minijuegos con tu squad" },
      { value: "1–100", label: "niveles con recompensas" },
      { value: "ES · EN · PT", label: "idiomas en la app" },
    ],
    games: {
      eyebrow: "Multi-juego",
      titlePart1: "Un perfil.",
      titleHighlight: "Todos tus juegos.",
      titlePart2: "",
      subtitle:
        "Soporte completo para 14 juegos competitivos (mobile y PC). Rank, rol, mains y stats independientes por cada uno.",
      liveLabel: "Disponible",
      items: [
        { name: "Mobile Legends", tag: "MOBA 5v5" },
        { name: "Free Fire", tag: "Battle Royale" },
        { name: "COD Mobile", tag: "FPS / BR" },
        { name: "Honor of Kings", tag: "MOBA 5v5" },
        { name: "PUBG Mobile", tag: "Battle Royale" },
        { name: "Blood Strike", tag: "Battle Royale" },
        { name: "Counter-Strike 2", tag: "FPS Táctico" },
        { name: "EA SPORTS FC Mobile", tag: "Fútbol" },
        { name: "Clash Royale", tag: "Card 1v1" },
        { name: "Clash of Clans", tag: "Clan Wars" },
        { name: "Rise of Kingdoms", tag: "Estrategia" },
        { name: "Albion Online", tag: "MMORPG" },
        { name: "Skylore", tag: "MMORPG" },
        { name: "Neo Monsters", tag: "RPG Coleccionable" },
      ],
    },
    features: {
      eyebrow: "Todo en una sola app",
      titlePart1: "Pensada para gamers que",
      titleHighlight: "juegan en serio",
      subtitle:
        "Sin saltar entre Discord, WhatsApp y mil grupos. Aquí tienes todo lo que necesitas para coordinar, jugar y competir, en el juego que sea.",
      items: [
        {
          title: "Encuentra jugadores",
          desc: "Filtra por juego, rank, rol u horario. Tus amigos aparecen primero y ves quién está en línea, ausente o jugando.",
        },
        {
          title: "Listo para jugar",
          desc: "Un toque y tus amigos y tu equipo reciben el aviso de que quieres jugar ya. Agrega una nota (“falta tanque”) y se apaga solo.",
        },
        {
          title: "Equipos que suben de nivel",
          desc: "Squad, clan o alliance con chat y voz propios. El equipo gana XP con la actividad, los retos y los torneos, y desbloquea marcos y etiquetas.",
        },
        {
          title: "Organiza partidas",
          desc: "Casual, ranked, scrim, clan war o torneo. Horario, capacidad y rango de rank permitido. Se agrega al calendario del teléfono.",
        },
        {
          title: "Voz y pantalla compartida",
          desc: "Sala de voz por equipo y por partida, que sigue activa con la pantalla apagada. Toca Transmitir y los de la sala ven tu juego.",
        },
        {
          title: "Chats y mensajes directos",
          desc: "Comunidad por juego, DMs, equipos y partidas. Fotos, notas de voz, respuestas, menciones y palomitas de leído.",
        },
        {
          title: "Notificaciones que llegan",
          desc: "Push que no depende de los servicios de Google y aguanta los ahorros de batería de Xiaomi, Huawei u OPPO. Te avisa de invitaciones, retos y menciones.",
        },
        {
          title: "Perfil multi-juego",
          desc: "Rank, rol y mains por cada juego. Tu Player ID copiable con un toque, nivel, títulos, insignias y logros a la vista.",
        },
        {
          title: "Guías y tier lists",
          desc: "Cientos de guías por juego: tutoriales, tier lists, guías para principiantes, análisis de meta y patch notes.",
        },
      ],
    },
    competitive: {
      eyebrow: "Competitivo",
      titlePart1: "Retos, torneos y clasificación",
      titleHighlight: "con árbitros de verdad",
      subtitle:
        "Lleva a tu equipo más allá de las partidas casuales. Reta a otros equipos, inscríbete en torneos con bracket y sube en la tabla de la temporada. Cada resultado lo valida un árbitro con capturas.",
      items: [
        {
          title: "Retos entre equipos",
          desc: "El capitán elige rival, fecha y formato (BO1, BO3, BO5). Al terminar, reporta el ganador con capturas del resultado.",
        },
        {
          title: "Árbitros que validan",
          desc: "Solo los árbitros confirman los resultados, y nunca los de su propio equipo. Sin resultados inventados ni discusiones.",
        },
        {
          title: "Torneos con bracket",
          desc: "Inscripciones abiertas, bracket por sorteo u orden de inscripción, pases directos y el ganador avanza solo. Con premios y título de campeón.",
        },
        {
          title: "Clasificación por temporada",
          desc: "Cada reto y torneo suma puntos. El top de la temporada se lleva recompensas y logros como Campeón o Dinastía.",
        },
      ],
      bracketLabel: "Torneo",
      bracketTitle: "Copa Mythic · MLBB",
      bracketStatus: "En curso",
      roundSemis: "Semifinal",
      roundFinal: "Final",
      refereeNote: "Resultado validado por un árbitro",
      semis: [
        { a: "Night Owls", b: "Team Phoenix", winner: "a" },
        { a: "Los Mancos", b: "Havana Kings", winner: "b" },
      ],
      final: { a: "Night Owls", b: "Havana Kings" },
    },
    live: {
      chip: "Nuevo · En vivo",
      titlePart1: "Transmite tu partida",
      titleHighlight: "sin salir de la app",
      subtitle:
        "Comparte la pantalla desde cualquier sala de voz y tu squad ve lo que estás jugando en tiempo real. La pestaña En vivo muestra todas las partidas que se están transmitiendo ahora mismo.",
      bullets: [
        "Botón Transmitir para abrir tu propia sala de stream",
        "Todos pueden mirar, pero solo hablan los que tú invites",
        "Pantalla completa en horizontal para ver el juego en grande",
        "Contador en vivo de cuántos están mirando",
      ],
      note: "En Android el audio del juego no se transmite, solo la pantalla y la voz de la sala. Activa No molestar para que no se vean tus notificaciones.",
      tabTitle: "En vivo",
      tabSubtitle: "Partidas que se están jugando ahora mismo",
      watch: "Mirar",
      streams: [
        { title: "Ranked a Mítico", host: "Alex_Mythic", game: "Mobile Legends", viewers: "12 mirando" },
        { title: "Scrim de clan", host: "Sofia_GG", game: "Free Fire", viewers: "8 mirando" },
        { title: "Final de la Copa", host: "ElCapi", game: "COD Mobile", viewers: "23 mirando" },
      ],
    },
    arcade: {
      eyebrow: "Minijuegos",
      titlePart1: "Algo para jugar",
      titleHighlight: "mientras esperas al squad",
      subtitle:
        "Partidas rápidas dentro de la app, contra amigos, contra otros jugadores o contra la IA. Con voz integrada y XP para tu perfil.",
      items: [
        {
          name: "Mythic Battle Squad",
          meta: "1v1 · 3v3 · 5v5",
          desc: "Batalla naval reimaginada. Hunde la flota enemiga por turnos, solo o en equipo.",
          bullets: [
            "Online contra un rival real o contra la IA en 3 dificultades",
            "Modo equipo: el capitán dispara y el resto coordina por voz",
            "Habilidades: Radar, Bombardeo, Escudo, Señuelo y Reparación",
            "Anti-trampa: el tablero del rival vive oculto en el servidor",
          ],
        },
        {
          name: "Ajedrez",
          meta: "1v1 · Elo · IA",
          desc: "Ajedrez clásico con ranking Elo para las partidas online.",
          bullets: [
            "Partida rápida contra alguien de Elo parecido",
            "Sala con código para jugar con un amigo",
            "Relojes Bala, Blitz y Rápida",
            "Práctica contra la IA o 2 jugadores en el mismo teléfono",
          ],
        },
        {
          name: "Damas",
          meta: "1v1 · Elo · IA",
          desc: "Damas con captura obligatoria y coronación, también con su propio Elo.",
          bullets: [
            "Online con ranking de jugadores",
            "Sala con código para retar a un amigo",
            "IA en 3 niveles para practicar",
            "Las partidas contra la IA no tocan tu Elo",
          ],
        },
      ],
      comingSoon:
        "Y estamos cocinando más: Mythic Conquest, un juego de territorios por equipos, ya está en pruebas.",
    },
    rewards: {
      eyebrow: "Progresión",
      titlePart1: "Cada partida",
      titleHighlight: "te hace subir",
      subtitle:
        "Jugar, chatear y competir te da EXP y diamantes. Sube de nivel, completa logros y personaliza tu perfil para que se note quién eres.",
      items: [
        {
          title: "Niveles del 1 al 100",
          desc: "Ganas EXP con casi todo lo que haces en la app. Cada 10 niveles hay recompensa.",
        },
        {
          title: "Tareas y cofre diario",
          desc: "Tareas diarias y semanales que dan EXP y 💎. Complétalas y abre el cofre del día. Mantén tu racha.",
        },
        {
          title: "Logros",
          desc: "Primera victoria, Campeón, Dinastía, Inquebrantable… retos de equipos, comunidad y competitivo con premio.",
        },
        {
          title: "Tienda de cosméticos",
          desc: "Avatares de tus juegos, marcos, títulos, insignias y emojis para el chat. Se compran con los diamantes que ganas.",
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
          title: "Crea tu perfil",
          desc: "Elige los juegos que juegas. Cada uno con su rank, rol, mains y Player ID. Foto y nickname una sola vez.",
        },
        {
          title: "Encuentra gente",
          desc: "Filtra por juego, rank o rol, o activa Listo para jugar. Mandas solicitud, te aceptan y ya están en el mismo chat.",
        },
        {
          title: "Programa la partida o el reto",
          desc: "Partida casual o ranked, o un reto contra otro equipo. Compártela por WhatsApp y se agrega al calendario.",
        },
        {
          title: "Habla y transmite",
          desc: "Cada partida tiene su sala de voz. Comparte la pantalla y tu squad mira en vivo mientras juegas.",
        },
      ],
    },
    voice: {
      chip: "Voz integrada",
      titlePart1: "Una sala de voz por",
      titleHighlight: "cada equipo y cada partida",
      subtitle:
        "Habla con tu squad sin abrir otra app. La sala sigue activa con la pantalla apagada y la app en segundo plano, y si te quedas solo 3 minutos te desconecta para no gastar batería ni datos.",
      bullets: [
        "Mini banner para volver mientras usas otra app",
        "Silenciar y colgar siempre a la vista",
        "Reconexión rápida si se cae la señal",
        "Compartir pantalla desde la misma sala",
      ],
      deviceNote:
        "En algunos Xiaomi/Huawei/OPPO conviene activar Inicio automático y Sin restricción de batería en Configuración → Apps → Mythic Lobby.",
      roomLabel: "Sala de voz",
      roomTitle: "Ranked · 21:00",
      liveLabel: "En vivo",
      muteBtn: "Silenciar",
      hangupBtn: "Colgar",
      shareBtn: "Transmitir",
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
        "El 100% de lo que entra va a servidores, notificaciones push y el chat de voz. No hay anuncios ni venta de datos. Cualquier monto ayuda a mantenerla viva.",
      methods: [
        { label: "USDT", sub: "TRC-20" },
        { label: "BTC", sub: "On-chain" },
        { label: "Lightning", sub: "BTC LN" },
        { label: "Otras", sub: "Cripto / app" },
      ],
      footnote1: "Las direcciones exactas y el muro de aportantes están dentro de la app, en",
      footnoteLink: "Perfil → Apoyar",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que más nos preguntan",
      items: [
        {
          q: "¿Es gratis?",
          a: "Sí, 100%. No hay anuncios ni planes premium. Los diamantes para la tienda se ganan jugando, con tareas, cofres y logros. Si quieres ayudar, puedes aportar desde Perfil → Apoyar.",
        },
        {
          q: "¿Dónde la descargo?",
          a: "En Google Play, buscando Mythic Lobby o desde el botón de esta página. Las actualizaciones llegan por la tienda como cualquier otra app.",
        },
        {
          q: "¿Qué juegos están soportados?",
          a: "14 juegos: Mobile Legends, Free Fire, COD Mobile, Honor of Kings, PUBG Mobile, Blood Strike, Counter-Strike 2, EA SPORTS FC Mobile, Clash Royale, Clash of Clans, Rise of Kingdoms, Albion Online, Skylore y Neo Monsters, con rank, rol, mains y stats independientes por juego.",
        },
        {
          q: "¿Cómo funcionan los retos y torneos?",
          a: "Los capitanes retan a otro equipo del mismo juego o inscriben al equipo en un torneo. Al terminar, reportan el ganador con capturas y un árbitro lo confirma. Los resultados suman puntos a la clasificación de la temporada.",
        },
        {
          q: "¿Puedo transmitir mi partida?",
          a: "Sí. Desde una sala de voz toca Transmitir y los demás ven tu pantalla, o abre tu propia sala desde la pestaña En vivo. En Android se transmite la imagen y la voz de la sala, pero no el audio del juego.",
        },
        {
          q: "¿Funciona si mi conexión es mala o Google está limitado?",
          a: "La app está pensada para eso. Las notificaciones no dependen de los servicios de Google, la voz se reconecta sola si se cae la señal y las salas te desconectan si te quedas solo para no gastar datos.",
        },
        {
          q: "¿Hay versión para iPhone?",
          a: "Por ahora solo Android, en Google Play. iOS llega más adelante.",
        },
        {
          q: "¿Necesito Discord?",
          a: "No. Cada equipo, clan, alliance y partida tiene su chat y su sala de voz dentro de la app, y puedes compartir pantalla desde ahí.",
        },
        {
          q: "¿En qué idiomas está?",
          a: "La app está en español, inglés y portugués, y se pone sola en el idioma de tu teléfono.",
        },
        {
          q: "¿Qué hago si encuentro un bug o tengo una idea?",
          a: "Mándanos feedback desde Perfil → Feedback dentro de la app. Lo leemos todo y muchas ideas de la comunidad ya están integradas.",
        },
      ],
    },
    cta: {
      title: "Tu squad te está esperando.",
      subtitle: "Descarga la app, crea tu perfil y empieza a armar partidas, retos y streams en minutos.",
      button: "Descargar en Google Play",
    },
    partnership: {
      eyebrow: "Colaboraciones",
      titlePart1: "¿Quieres",
      titleHighlight: "colaborar con Mythic Lobby?",
      subtitle:
        "Partnerships, promoción cruzada, sponsorships y torneos. Si tu marca, equipo o comunidad quiere sumarse, armamos algo juntos.",
      button: "Contáctanos",
      emailSubject: "Colaboración / Partnership con Mythic Lobby",
      emailBody:
        "Hola Jorge,\n\nMe gustaría colaborar con Mythic Lobby. Cuento un poco lo que tengo en mente:\n\n— \n\n¡Gracias!\n",
      segments: ["Streamers", "Cybercafés", "Torneos", "Equipos esports", "Sponsors"],
      emailLabel: "Escríbenos a",
    },
    footer: {
      disclaimer:
        "Proyecto comunitario independiente. Sin afiliación con ningún publisher de videojuegos. Todas las marcas pertenecen a sus respectivos dueños.",
      privacyLink: "Política de privacidad",
      termsLink: "Términos de servicio",
      deleteAccountLink: "Borrar cuenta",
    },
    jsonLd: {
      description:
        "Mythic Lobby es la app donde gamers arman squad, compiten en torneos con árbitros y transmiten en vivo. Filtros por rank, rol, horario y región. Voz integrada por partida.",
      mobileAppDescription:
        "Arma squad, organiza partidas y retos, compite en torneos, transmite tu pantalla, habla por voz y juega minijuegos como ajedrez y Battle Squad. MLBB, Free Fire, COD Mobile y más, sin Discord.",
    },
  },
  en: {
    meta: {
      siteName: "Mythic Lobby",
      tagline: "Find your squad. Any game. Every rank.",
      description:
        "Mythic Lobby is the free app where gamers find a squad, compete in refereed tournaments, stream their match live and talk by voice. MLBB, Free Fire, COD Mobile, PUBG Mobile, Clash Royale and more. No Discord.",
    },
    nav: {
      features: "Features",
      competitive: "Competitive",
      live: "Live",
      arcade: "Minigames",
      showcase: "How it works",
      voice: "Voice",
      games: "Games",
      donate: "Support",
      faq: "FAQ",
      partnership: "Partner",
      download: "Download",
      languageLabel: "Language",
    },
    hero: {
      chipLive: (v) => `Now on Google Play · v${v}`,
      titlePart1: "Find your squad.",
      titleHighlight: "Any game.",
      titlePart2: "Every rank.",
      subtitle:
        "Build a team, compete in refereed tournaments, stream your match live and play minigames with your squad. Voice, chats and notifications in one app. No Discord.",
      ctaDownload: "Get it on Google Play",
      ctaFeatures: "See features",
      playStoreTop: "Get it on",
      playStoreBottom: "Google Play",
      bullets: ["100% free", "No ads", "Built-in voice and streams", "Built by gamers"],
      cardLiveLabel: "Live",
      cardLiveValue: "MLBB Ranked · 12 watching",
      cardVoiceLabel: "Voice room",
      cardVoiceValue: "5 speaking now",
    },
    highlights: [
      { value: "14", label: "supported games" },
      { value: "3", label: "minigames for your squad" },
      { value: "1–100", label: "levels with rewards" },
      { value: "ES · EN · PT", label: "in-app languages" },
    ],
    games: {
      eyebrow: "Multi-game",
      titlePart1: "One profile.",
      titleHighlight: "All your games.",
      titlePart2: "",
      subtitle:
        "Full support for 14 competitive games (mobile and PC). Independent rank, role, mains and stats per game.",
      liveLabel: "Live",
      items: [
        { name: "Mobile Legends", tag: "5v5 MOBA" },
        { name: "Free Fire", tag: "Battle Royale" },
        { name: "COD Mobile", tag: "FPS / BR" },
        { name: "Honor of Kings", tag: "5v5 MOBA" },
        { name: "PUBG Mobile", tag: "Battle Royale" },
        { name: "Blood Strike", tag: "Battle Royale" },
        { name: "Counter-Strike 2", tag: "Tactical FPS" },
        { name: "EA SPORTS FC Mobile", tag: "Football" },
        { name: "Clash Royale", tag: "1v1 Card" },
        { name: "Clash of Clans", tag: "Clan Wars" },
        { name: "Rise of Kingdoms", tag: "Strategy" },
        { name: "Albion Online", tag: "MMORPG" },
        { name: "Skylore", tag: "MMORPG" },
        { name: "Neo Monsters", tag: "Collectible RPG" },
      ],
    },
    features: {
      eyebrow: "Everything in one app",
      titlePart1: "Built for gamers who",
      titleHighlight: "play to climb",
      subtitle:
        "No more jumping between Discord, WhatsApp and a dozen group chats. Everything you need to coordinate, play and compete, in any game.",
      items: [
        {
          title: "Find players",
          desc: "Filter by game, rank, role or schedule. Friends show up first and you can see who's online, away or playing.",
        },
        {
          title: "Ready to play",
          desc: "One tap and your friends and team get a ping that you want to play now. Add a note (“need a tank”) and it turns itself off.",
        },
        {
          title: "Teams that level up",
          desc: "Squad, clan or alliance with its own chat and voice. Teams earn XP from activity, challenges and tournaments, unlocking frames and tags.",
        },
        {
          title: "Schedule matches",
          desc: "Casual, ranked, scrim, clan war or tournament. Time, capacity and allowed rank range. Adds to your phone calendar.",
        },
        {
          title: "Voice and screen share",
          desc: "A voice room per team and per match that keeps going with the screen off. Tap Stream and the room sees your game.",
        },
        {
          title: "Chats and DMs",
          desc: "Per-game community, DMs, teams and matches. Photos, voice notes, replies, mentions and read receipts.",
        },
        {
          title: "Notifications that arrive",
          desc: "Push that doesn't rely on Google services and survives Xiaomi, Huawei or OPPO battery savers. Pings you on invites, challenges and mentions.",
        },
        {
          title: "Multi-game profile",
          desc: "Rank, role and mains per game. Player ID copyable in one tap, plus your level, titles, badges and achievements.",
        },
        {
          title: "Guides and tier lists",
          desc: "Hundreds of guides per game: tutorials, tier lists, beginner guides, meta analysis and patch notes.",
        },
      ],
    },
    competitive: {
      eyebrow: "Competitive",
      titlePart1: "Challenges, tournaments and rankings",
      titleHighlight: "with real referees",
      subtitle:
        "Take your team past casual matches. Challenge other teams, join bracket tournaments and climb the season table. Every result is confirmed by a referee with screenshots.",
      items: [
        {
          title: "Team challenges",
          desc: "The captain picks the rival, date and format (BO1, BO3, BO5). When it's over, they report the winner with screenshots.",
        },
        {
          title: "Referees confirm results",
          desc: "Only referees validate results, and never for their own team. No made-up scores, no arguments.",
        },
        {
          title: "Bracket tournaments",
          desc: "Open registration, random or sign-up-order brackets, byes, and winners advance automatically. With prizes and a champion title.",
        },
        {
          title: "Season rankings",
          desc: "Every challenge and tournament adds points. The season's top teams earn rewards and achievements like Champion or Dynasty.",
        },
      ],
      bracketLabel: "Tournament",
      bracketTitle: "Mythic Cup · MLBB",
      bracketStatus: "In progress",
      roundSemis: "Semifinal",
      roundFinal: "Final",
      refereeNote: "Result confirmed by a referee",
      semis: [
        { a: "Night Owls", b: "Team Phoenix", winner: "a" },
        { a: "Los Mancos", b: "Havana Kings", winner: "b" },
      ],
      final: { a: "Night Owls", b: "Havana Kings" },
    },
    live: {
      chip: "New · Live",
      titlePart1: "Stream your match",
      titleHighlight: "without leaving the app",
      subtitle:
        "Share your screen from any voice room and your squad watches what you're playing in real time. The Live tab shows every match being streamed right now.",
      bullets: [
        "Stream button to open your own stream room",
        "Anyone can watch, only the people you invite can talk",
        "Landscape fullscreen to see the game big",
        "Live count of how many are watching",
      ],
      note: "On Android the game's audio isn't streamed, only the screen and the room's voice. Turn on Do Not Disturb so your notifications don't show.",
      tabTitle: "Live",
      tabSubtitle: "Matches being played right now",
      watch: "Watch",
      streams: [
        { title: "Ranked to Mythic", host: "Alex_Mythic", game: "Mobile Legends", viewers: "12 watching" },
        { title: "Clan scrim", host: "Sofia_GG", game: "Free Fire", viewers: "8 watching" },
        { title: "Cup final", host: "ElCapi", game: "COD Mobile", viewers: "23 watching" },
      ],
    },
    arcade: {
      eyebrow: "Minigames",
      titlePart1: "Something to play",
      titleHighlight: "while you wait for the squad",
      subtitle:
        "Quick matches inside the app, against friends, other players or the AI. With built-in voice and XP for your profile.",
      items: [
        {
          name: "Mythic Battle Squad",
          meta: "1v1 · 3v3 · 5v5",
          desc: "Battleship, reimagined. Sink the enemy fleet turn by turn, solo or as a team.",
          bullets: [
            "Online against a real rival, or the AI on 3 difficulties",
            "Team mode: the captain fires, the rest coordinate by voice",
            "Abilities: Radar, Bombard, Shield, Decoy and Repair",
            "Anti-cheat: the rival's board stays hidden on the server",
          ],
        },
        {
          name: "Chess",
          meta: "1v1 · Elo · AI",
          desc: "Classic chess with an Elo ranking for online games.",
          bullets: [
            "Quick match against someone with a similar Elo",
            "Room code to play a friend",
            "Bullet, Blitz and Rapid clocks",
            "Practice vs the AI or 2 players on one phone",
          ],
        },
        {
          name: "Checkers",
          meta: "1v1 · Elo · AI",
          desc: "Checkers with forced captures and kings, with its own Elo too.",
          bullets: [
            "Online with a player ranking",
            "Room code to challenge a friend",
            "AI on 3 levels to practice",
            "Games against the AI never touch your Elo",
          ],
        },
      ],
      comingSoon:
        "And there's more cooking: Mythic Conquest, a team territory game, is already in testing.",
    },
    rewards: {
      eyebrow: "Progression",
      titlePart1: "Every match",
      titleHighlight: "levels you up",
      subtitle:
        "Playing, chatting and competing earns EXP and diamonds. Level up, complete achievements and customize your profile so people know who you are.",
      items: [
        {
          title: "Levels 1 to 100",
          desc: "You earn EXP from almost everything you do in the app. Every 10 levels there's a reward.",
        },
        {
          title: "Tasks and daily chest",
          desc: "Daily and weekly tasks that give EXP and 💎. Finish them to open the chest of the day. Keep your streak alive.",
        },
        {
          title: "Achievements",
          desc: "First win, Champion, Dynasty, Unbreakable… team, community and competitive challenges with a prize.",
        },
        {
          title: "Cosmetics shop",
          desc: "Avatars from your games, frames, titles, badges and chat emojis. Bought with the diamonds you earn.",
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
          desc: "Filter by game, rank or role, or turn on Ready to play. Send a request, get accepted, and you're in the same chat.",
        },
        {
          title: "Schedule a match or challenge",
          desc: "A casual or ranked match, or a challenge against another team. Share it on WhatsApp and add it to your calendar.",
        },
        {
          title: "Talk and stream",
          desc: "Each match gets its own voice room. Share your screen and your squad watches live while you play.",
        },
      ],
    },
    voice: {
      chip: "Built-in voice",
      titlePart1: "A voice room for",
      titleHighlight: "every team and every match",
      subtitle:
        "Talk with your squad without opening another app. The room stays alive with the screen off and the app in background, and if you're alone for 3 minutes it disconnects so you don't burn battery or data.",
      bullets: [
        "Mini banner to jump back while using another app",
        "Mute and hang up always visible",
        "Fast reconnect if your signal drops",
        "Screen share from the same room",
      ],
      deviceNote:
        "On some Xiaomi/Huawei/OPPO devices, enable Autostart and No battery restriction in Settings → Apps → Mythic Lobby.",
      roomLabel: "Voice room",
      roomTitle: "Ranked · 9:00 PM",
      liveLabel: "Live",
      muteBtn: "Mute",
      hangupBtn: "Hang up",
      shareBtn: "Stream",
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
        "100% of contributions go to servers, push notifications and voice chat. No ads, no data selling. Any amount helps keep it alive.",
      methods: [
        { label: "USDT", sub: "TRC-20" },
        { label: "BTC", sub: "On-chain" },
        { label: "Lightning", sub: "BTC LN" },
        { label: "Other", sub: "Crypto / app" },
      ],
      footnote1: "Exact addresses and the supporters wall live inside the app, under",
      footnoteLink: "Profile → Support",
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "The questions we hear the most",
      items: [
        {
          q: "Is it free?",
          a: "Yes, 100%. No ads and no premium plans. Shop diamonds are earned by playing, with tasks, chests and achievements. If you want to help, you can contribute from Profile → Support.",
        },
        {
          q: "Where do I get it?",
          a: "On Google Play: search for Mythic Lobby or use the button on this page. Updates come through the store like any other app.",
        },
        {
          q: "Which games are supported?",
          a: "14 games: Mobile Legends, Free Fire, COD Mobile, Honor of Kings, PUBG Mobile, Blood Strike, Counter-Strike 2, EA SPORTS FC Mobile, Clash Royale, Clash of Clans, Rise of Kingdoms, Albion Online, Skylore and Neo Monsters, with independent rank, role, mains and stats per game.",
        },
        {
          q: "How do challenges and tournaments work?",
          a: "Captains challenge another team in the same game or sign their team up for a tournament. When it's over, they report the winner with screenshots and a referee confirms it. Results add points to the season ranking.",
        },
        {
          q: "Can I stream my match?",
          a: "Yes. In a voice room tap Stream and everyone sees your screen, or open your own room from the Live tab. On Android the picture and the room's voice are streamed, but not the game's audio.",
        },
        {
          q: "Does it work on a bad connection or where Google is restricted?",
          a: "It's built for that. Notifications don't rely on Google services, voice reconnects on its own when the signal drops, and rooms disconnect you when you're alone so you don't burn data.",
        },
        {
          q: "Is there an iPhone version?",
          a: "Android only for now, on Google Play. iOS comes later.",
        },
        {
          q: "Do I need Discord?",
          a: "No. Every team, clan, alliance and match has its own chat and voice room inside the app, and you can share your screen from there.",
        },
        {
          q: "Which languages does it support?",
          a: "The app is in Spanish, English and Portuguese, and it picks your phone's language automatically.",
        },
        {
          q: "Found a bug or have an idea?",
          a: "Send feedback from Profile → Feedback inside the app. We read every one and many ideas from the community are already shipped.",
        },
      ],
    },
    cta: {
      title: "Your squad is waiting.",
      subtitle: "Download the app, build your profile and start setting up matches, challenges and streams in minutes.",
      button: "Get it on Google Play",
    },
    partnership: {
      eyebrow: "Partnerships",
      titlePart1: "Want to",
      titleHighlight: "partner with Mythic Lobby?",
      subtitle:
        "Partnerships, cross-promotion, sponsorships and tournaments. If your brand, team or community wants in, let's build something together.",
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
      deleteAccountLink: "Delete account",
    },
    jsonLd: {
      description:
        "Mythic Lobby is the app where gamers find a squad, compete in refereed tournaments and stream live. Filter by rank, role, schedule and region. Built-in voice per match.",
      mobileAppDescription:
        "Build a squad, schedule matches and challenges, compete in tournaments, share your screen, talk by voice and play minigames like chess and Battle Squad. MLBB, Free Fire, COD Mobile and more, no Discord.",
    },
  },
};
