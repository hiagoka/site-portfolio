// Dados neutros de idioma. Os textos ficam em content.ts (casam por indice).
import foto from "@/assets/hiago.webp";

export const profile = {
  name: "Hiago Kalil",
  available: true,
  photo: foto,
  email: "hiagokalil@hotmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/hiagoka" },
    { label: "LinkedIn", url: "https://linkedin.com/in/hiagoka" },
    { label: "Instagram", url: "https://instagram.com/hiagokalil" },
    { label: "WhatsApp", url: "https://wa.me/5583988811896" },
  ],
};

export type Project = {
  year: string;
  stack: string[];
  // Link do repositorio no GitHub. Deixe "#" enquanto o repo nao for publico
  // (o botao "Ver no GitHub" so aparece quando ha um link real).
  url?: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    stack: ["React Native", "TypeScript", "Firebase"],
    url: "#",
  },
  {
    year: "2025",
    stack: ["React Native", "Node.js", "OpenAI"],
    url: "https://github.com/hiagoka/ai-chat-mobile",
  },
  {
    year: "2026",
    stack: ["Swift"],
    url: "https://github.com/hiagoka/health-app-pulso",
  },
  {
    year: "2026",
    stack: ["Node.js", "TypeScript"],
    url: "https://github.com/hiagoka/auditor-app-readiness",
  },
];

// So os itens; o nome do grupo vem de content.ts (skillGroups), por indice.
export const skills: string[][] = [
  ["React Native", "Swift", "SwiftUI"],
  ["React", "Next.js", "TypeScript", "JavaScript"],
  ["Node.js", "Firebase"],
  ["Git"],
];

// So a ordem/quantidade; periodo, cargo, empresa e resumo vem de content.ts.

export const nav = [
  { id: "projetos" },
  { id: "sobre" },
  { id: "experiencia" },
  { id: "contato" },
];
