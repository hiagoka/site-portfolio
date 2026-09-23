import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siFirebase,
  siSwift,
  siGit,
  type SimpleIcon,
} from "simple-icons";

// Lista unica de tecnologias — usada no ticker e no mostrador circular.
// "React Native" reaproveita o icone do React (a simple-icons nao tem um proprio).
export const techs: { icon: SimpleIcon; label: string }[] = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siFirebase, label: "Firebase" },
  { icon: siReact, label: "React Native" },
  { icon: siSwift, label: "Swift" },
  { icon: siGit, label: "Git" },
];
