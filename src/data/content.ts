// Textos por idioma. Ingles e o padrao; portugues e a traducao.
// As listas (projects / experience / skillGroups) casam por indice com portfolio.ts.

export type Lang = "en" | "pt";

const en = {
  location: "Brazil",
  role: "Mobile & Web Developer",
  intro:
    "I build apps and interfaces focused on clarity, performance, and code the next dev can actually read. Currently on the mobile side of Prepara+.",
  about:
    "I'm a mobile developer specialized in React Native and TypeScript, with experience in Swift/SwiftUI for native iOS, Next.js on the web front-end, and Node.js on the back-end. I like well-structured apps, with organized, scalable code, and following the product from architecture to delivery. I learn by building, use AI to move faster, and speak advanced English.",
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
    year: "Year",
    stack: "Stack",
    viewRepo: "View on GitHub",
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
      title: "AI Chat",
      description:
        "Native mobile chat with GPT-4o-mini, no login required, local history, and a lean Node/Express API behind it.",
    },
    {
      title: "Pulso",
      description:
        "AI-assisted workout app in React Native/Expo, building the core training logic on top of the project skeleton.",
    },
    {
      title: "iOS readiness auditor",
      description:
        "Multi-agent CLI (privacy, permissions, orchestrator) that audits React Native/iOS apps for App Store compliance and outputs a JSON/HTML report.",
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
        "Landing pages, e-commerce, and dashboards for small businesses, from design to hosting.",
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
    "Sou desenvolvedor mobile especializado em React Native e TypeScript, com experiencia em Swift/SwiftUI para iOS nativo, Next.js no front-end web e Node.js no back-end. Gosto de apps bem estruturados, com codigo organizado e escalavel, e de acompanhar o produto da arquitetura ate a entrega. Aprendo construindo, uso IA para trabalhar com mais agilidade e tenho ingles avancado.",
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
    year: "Ano",
    stack: "Stack",
    viewRepo: "Ver no GitHub",
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
      title: "Chat com IA",
      description:
        "Chat mobile nativo com GPT-4o-mini, sem necessidade de login, historico local e uma API Node/Express enxuta por tras.",
    },
    {
      title: "Pulso",
      description:
        "App de treino assistido por IA em React Native/Expo, construindo a logica principal de treino sobre o esqueleto do projeto.",
    },
    {
      title: "Auditor de prontidao iOS",
      description:
        "CLI multiagente (privacidade, permissoes, orquestrador) que audita apps React Native/iOS quanto a conformidade com a App Store e gera um relatorio em JSON/HTML.",
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
