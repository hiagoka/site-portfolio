// Textos por idioma. Ingles e o padrao; portugues e a traducao.
// As listas (projects / experience / skillGroups) casam por indice com portfolio.ts.

export type Lang = "en" | "pt";

const en = {
  location: "Brazil",
  role: "Mobile & Web Developer",
  intro:
    "I build apps and interfaces focused on clarity, performance, and code the next dev can actually read. Currently on the mobile side of Prepara+.",
  about:
    "I started messing with HTML and CSS out of curiosity and never stopped. These days I focus on mobile, but I like the whole process: design that respects the user, readable code, and shipping all the way. Away from the editor I'm usually trying a new tool or reading about product.",
  aboutLine: "Based in Brazil. Open to remote work.",

  nav: {
    projetos: "Projects",
    sobre: "About",
    experiencia: "Experience",
    contato: "Contact",
  } as Record<string, string>,

  contactLine: ["Let's build", "something", "?"] as [string, string, string],

  ui: {
    specSheet: "Spec sheet — 01",
    getInTouch: "Get in touch",
    available: "Available",
    busy: "Busy",
    portrait: "[ portrait ]",
    fig: "Fig. 01",
    records: (n: number) => `${n} records`,
    endOfSheet: "end of sheet",
    open: "open",
    close: "close",
    year: "Year",
    stack: "Stack",
    media: "Media",
    ref: "Ref",
    mediaVideo: "video",
    mediaPhoto: "photo",
    mediaNone: "—",
    noMedia: "[ no media — add video or image ]",
    viewProject: "View project",
    backToTop: "back to top",
    techAria: "Technologies",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    langSwitch: "Mudar para português",
  },

  projects: [
    {
      title: "Prepara+",
      description:
        "Study app with learning tracks, mock exams, and student progress tracking.",
    },
    {
      title: "Real-time chat",
      description:
        "Messaging with rooms, presence, an offline queue, and state reconciliation on reconnect.",
    },
    {
      title: "Pulso",
      description:
        "AI-powered workout app, currently in early development.",
    },
    {
      title: "iOS readiness auditor",
      description:
        "CLI with AI agents that review an app's metadata and assets before App Store submission.",
    },
  ],

  experience: [
    {
      period: "2024 — now",
      role: "Mobile Developer",
      company: "Prepara+",
      summary:
        "I lead the app's mobile side, set navigation patterns, and coordinate integration with the back-end.",
    },
    {
      period: "2022 — 2024",
      role: "Front-end Developer",
      company: "Freelance",
      summary:
        "Landing pages, e-commerce, and dashboards for small businesses — from design to hosting.",
    },
    {
      period: "2020 — 2022",
      role: "Student & first projects",
      company: "College / community",
      summary: "Web fundamentals, algorithms, and the first published apps.",
    },
  ],

  skillGroups: ["Mobile", "Web", "Back-end", "Tools"],
};

export type Dict = typeof en;

const pt: Dict = {
  location: "Brasil",
  role: "Desenvolvedor Mobile & Web",
  intro:
    "Construo aplicativos e interfaces com foco em clareza, performance e um codigo que o proximo dev entende. Atualmente na frente mobile do Prepara+.",
  about:
    "Comecei mexendo em HTML e CSS por curiosidade e nao parei mais. Hoje foco em mobile, mas gosto do processo inteiro: design que respeita o usuario, codigo legivel e entregas que chegam ao fim. Fora do editor, geralmente estou testando alguma ferramenta nova ou lendo sobre produto.",
  aboutLine: "Baseado no Brasil. Aberto a trabalho remoto.",

  nav: {
    projetos: "Projetos",
    sobre: "Sobre",
    experiencia: "Experiencia",
    contato: "Contato",
  },

  contactLine: ["Vamos construir", "algo", "?"],

  ui: {
    specSheet: "Ficha tecnica — 01",
    getInTouch: "Entrar em contato",
    available: "Disponivel",
    busy: "Ocupado",
    portrait: "[ retrato ]",
    fig: "Fig. 01",
    records: (n: number) => `${n} registros`,
    endOfSheet: "fim da ficha",
    open: "abrir",
    close: "fechar",
    year: "Ano",
    stack: "Stack",
    media: "Midia",
    ref: "Ref",
    mediaVideo: "video",
    mediaPhoto: "foto",
    mediaNone: "—",
    noMedia: "[ sem midia — adicione video ou imagem ]",
    viewProject: "Ver projeto",
    backToTop: "voltar ao topo",
    techAria: "Tecnologias",
    themeToLight: "Mudar para tema claro",
    themeToDark: "Mudar para tema escuro",
    langSwitch: "Switch to English",
  },

  projects: [
    {
      title: "Prepara+",
      description:
        "App de estudos com trilhas, simulados e acompanhamento de progresso do aluno.",
    },
    {
      title: "Chat em tempo real",
      description:
        "Mensagens com salas, presenca, fila offline e reconciliacao de estado ao reconectar.",
    },
    {
      title: "Pulso",
      description:
        "App de treino com inteligencia artificial, ainda em desenvolvimento inicial.",
    },
    {
      title: "Auditor de prontidao iOS",
      description:
        "CLI com agentes de IA que revisam metadados e assets de um app antes da submissao a App Store.",
    },
  ],

  experience: [
    {
      period: "2024 — agora",
      role: "Desenvolvedor Mobile",
      company: "Prepara+",
      summary:
        "Lidero a frente mobile do app, defino padroes de navegacao e coordeno a integracao com o back-end.",
    },
    {
      period: "2022 — 2024",
      role: "Desenvolvedor Front-end",
      company: "Freelance",
      summary:
        "Landing pages, e-commerces e dashboards para pequenos negocios, do design a hospedagem.",
    },
    {
      period: "2020 — 2022",
      role: "Estudante & primeiros projetos",
      company: "Faculdade / comunidade",
      summary: "Fundamentos de web, algoritmos e os primeiros apps publicados.",
    },
  ],

  skillGroups: ["Mobile", "Web", "Back-end", "Ferramentas"],
};

export const content: Record<Lang, Dict> = { en, pt };
