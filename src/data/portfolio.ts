// =============================================================
//  Edite este arquivo para trocar todo o conteudo do portfolio.
//  Nada de arte oficial de One Piece — apenas a estetica/tema.
// =============================================================

export const pirate = {
  name: "Hiago Kalil",
  epithet: "O Navegante de Codigo",
  role: "Desenvolvedor Mobile",
  bounty: 3_200_000, // vira a "recompensa" animada no cartaz
  tagline:
    "Cruzo a Grand Line entre apps iOS e Android, mapeando rotas limpas do primeiro commit ao deploy.",
  location: "Brasil",
  photo: "", // URL ou import; vazio = silhueta estilizada
};

export type Island = {
  name: string;
  arc: string; // "arco" / categoria
  summary: string;
  log: string; // texto do "Log da Ilha"
  stack: string[];
  links: { label: string; url: string }[];
  danger: 1 | 2 | 3 | 4 | 5; // "nivel de dificuldade" -> estrelas
};

export const islands: Island[] = [
  {
    name: "Prepara+",
    arc: "App Mobile",
    summary: "Plataforma de estudos com trilhas, simulados e progresso do aluno.",
    log: "Ilha grande, de clima instavel. Construimos a navegacao principal, integracao com a API de trilhas e a tela de progresso. Ainda ha endpoints do tesouro a serem escavados pelo time de back-end.",
    stack: ["React Native", "TypeScript", "Expo", "REST"],
    links: [{ label: "Repositorio", url: "#" }],
    danger: 4,
  },
  {
    name: "Chat da Tripulacao",
    arc: "Realtime",
    summary: "App de mensagens com salas, presenca e notificacoes push.",
    log: "Correntes rapidas: WebSocket para entrega instantanea, fila offline e reconciliacao de estado ao reconectar. Um farol de boas praticas de sincronizacao.",
    stack: ["React Native", "Socket.IO", "Node", "SQLite"],
    links: [{ label: "Demo", url: "#" }, { label: "Repositorio", url: "#" }],
    danger: 3,
  },
  {
    name: "Dashboard do Porto",
    arc: "Web",
    summary: "Painel de metricas para acompanhar entregas e squads.",
    log: "Terra firme e organizada. Graficos, filtros salvos e exportacao. Foco em performance de render e leitura rapida dos numeros.",
    stack: ["React", "Vite", "Recharts", "Tailwind"],
    links: [{ label: "Repositorio", url: "#" }],
    danger: 2,
  },
  {
    name: "Auditor App Readiness",
    arc: "CLI / IA",
    summary: "CLI com agentes de IA que auditam a prontidao de um app iOS para a App Store.",
    log: "Ilha de nevoa densa. Agentes cooperam para revisar metadados, assets e conformidade antes da submissao. Nascida em um hackathon, sobreviveu a tempestade.",
    stack: ["Node", "TypeScript", "LLM Agents"],
    links: [{ label: "Repositorio", url: "#" }],
    danger: 5,
  },
];

export type Fruit = {
  name: string; // skill
  power: string; // o que ela te permite fazer
  mastery: number; // 0-100
  type: "Paramecia" | "Zoan" | "Logia";
};

export const fruits: Fruit[] = [
  { name: "React / React Native", power: "Moldo interfaces que se adaptam a qualquer mar.", mastery: 90, type: "Paramecia" },
  { name: "TypeScript", power: "Enxergo bugs antes que eles ataquem.", mastery: 88, type: "Logia" },
  { name: "Node.js", power: "Construo pontes entre o app e o servidor.", mastery: 78, type: "Paramecia" },
  { name: "UI / Animacao", power: "Dou vida e ritmo a cada tela.", mastery: 75, type: "Zoan" },
  { name: "Testes", power: "Blindo a rota contra tempestades futuras.", mastery: 70, type: "Paramecia" },
  { name: "CI/CD & Deploy", power: "Levo o navio ao porto sem encalhar.", mastery: 68, type: "Logia" },
];

export type CrewMate = {
  role: string;
  place: string;
  period: string;
  deeds: string;
};

export const crew: CrewMate[] = [
  {
    role: "Desenvolvedor Mobile",
    place: "Prepara+",
    period: "2024 — atual",
    deeds: "Lidero a frente mobile do app, defino padroes de navegacao e coordeno a integracao com o time de back-end.",
  },
  {
    role: "Desenvolvedor Front-end",
    place: "Projetos Freelance",
    period: "2022 — 2024",
    deeds: "Entreguei landing pages, e-commerces e dashboards para pequenos negocios, do design a hospedagem.",
  },
  {
    role: "Estudante / Grumete",
    place: "Faculdade & Comunidade",
    period: "2020 — 2022",
    deeds: "Primeiras viagens: fundamentos de web, algoritmos e os primeiros apps publicados.",
  },
];

export const ship = {
  name: "Going Refactor",
  about:
    "Comecei mexendo em HTML e CSS por curiosidade e nunca mais desci do navio. Hoje foco em mobile, mas gosto do mapa inteiro: design que respeita o usuario, codigo que o proximo dev entende e entregas que chegam ao porto.",
  values: [
    { title: "Rumo claro", text: "Prefiro decisoes simples e explicitas a espertezas que ninguem entende depois." },
    { title: "Tripulacao junto", text: "Codigo e esporte coletivo: review, pareamento e documentacao curta." },
    { title: "Sempre navegando", text: "Toda semana aprendo algo novo — as vezes uma lib, as vezes um erro." },
  ],
};

export const denDenMushi = {
  message: "Puru puru puru... deixe seu recado ou me chame por um dos canais abaixo.",
  channels: [
    { label: "Email", value: "hiagokalil@hotmail.com", url: "mailto:hiagokalil@hotmail.com" },
    { label: "GitHub", value: "github.com/hiagokalil", url: "https://github.com/hiagokalil" },
    { label: "LinkedIn", value: "in/hiagokalil", url: "https://linkedin.com/in/hiagokalil" },
  ],
};

export const sections = [
  { id: "cartaz", label: "Cartaz" },
  { id: "grand-line", label: "Grand Line" },
  { id: "akuma-no-mi", label: "Akuma no Mi" },
  { id: "nakama", label: "Nakama" },
  { id: "navio", label: "O Navio" },
  { id: "den-den-mushi", label: "Contato" },
] as const;
