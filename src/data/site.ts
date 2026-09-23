// Dados neutros de idioma. Os textos ficam em content.ts (casam por indice).
import foto from "../assets/hiago.png";

export const profile = {
  name: "Hiago Kalil",
  available: true,
  photo: foto,
  email: "hiagokalil@hotmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/hiagokalil" },
    { label: "LinkedIn", url: "https://linkedin.com/in/hiagokalil" },
  ],
};

export type Project = {
  year: string;
  stack: string[];
  url?: string;
  // Midia do card. Preencha um dos dois:
  //   video: link do YouTube / Loom / Vimeo, ou URL de um .mp4
  //   image: URL ou import de uma imagem
  video?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    year: "2024",
    stack: ["React Native", "TypeScript", "Firebase"],
    url: "#",
    video: "",
    image: "",
  },
  {
    year: "2024",
    stack: ["React Native", "Node.js", "Firebase"],
    url: "#",
    video: "",
    image: "",
  },
  {
    year: "2023",
    stack: ["React", "TypeScript"],
    url: "#",
    video: "",
    image: "",
  },
  {
    year: "2023",
    stack: ["Node.js", "TypeScript"],
    url: "#",
    video: "",
    image: "",
  },
];

// So os itens; o nome do grupo vem de content.ts (skillGroups), por indice.
export const skills: string[][] = [
  ["React Native", "Swift"],
  ["React", "TypeScript", "JavaScript"],
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
