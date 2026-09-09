// Todo o conteudo do portfolio vive aqui. Edite a vontade.

export const profile = {
  name: "Hiago Kalil",
  role: "Desenvolvedor Mobile & Web",
  location: "Brasil",
  available: true,
  intro:
    "Construo aplicativos e interfaces com foco em clareza, performance e um codigo que o proximo dev entende. Atualmente na frente mobile do Prepara+.",
  email: "hiagokalil@hotmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/hiagokalil" },
    { label: "LinkedIn", url: "https://linkedin.com/in/hiagokalil" },
  ],
};

export type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Prepara+",
    year: "2024",
    description:
      "App de estudos com trilhas, simulados e acompanhamento de progresso do aluno.",
    stack: ["React Native", "TypeScript", "Expo"],
    url: "#",
  },
  {
    title: "Chat em tempo real",
    year: "2024",
    description:
      "Mensagens com salas, presenca, fila offline e reconciliacao de estado ao reconectar.",
    stack: ["React Native", "Socket.IO", "Node"],
    url: "#",
  },
  {
    title: "Dashboard de metricas",
    year: "2023",
    description:
      "Painel para acompanhar entregas e squads, com filtros salvos e exportacao.",
    stack: ["React", "Vite", "Recharts"],
    url: "#",
  },
  {
    title: "Auditor de prontidao iOS",
    year: "2023",
    description:
      "CLI com agentes de IA que revisam metadados e assets de um app antes da submissao a App Store.",
    stack: ["Node", "TypeScript", "LLM"],
    url: "#",
  },
];

export const skills = [
  { group: "Mobile", items: ["React Native", "Expo", "Swift (basico)"] },
  { group: "Web", items: ["React", "TypeScript", "Vite", "Tailwind"] },
  { group: "Back-end", items: ["Node.js", "REST", "PostgreSQL"] },
  { group: "Ferramentas", items: ["Git", "CI/CD", "Figma"] },
];

export type Job = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export const experience: Job[] = [
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
    summary:
      "Fundamentos de web, algoritmos e os primeiros apps publicados.",
  },
];

export const about =
  "Comecei mexendo em HTML e CSS por curiosidade e nao parei mais. Hoje foco em mobile, mas gosto do processo inteiro: design que respeita o usuario, codigo legivel e entregas que chegam ao fim. Fora do editor, geralmente estou testando alguma ferramenta nova ou lendo sobre produto.";

export const nav = [
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contato", label: "Contato" },
];
