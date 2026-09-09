import {
  siReact,
  siTypescript,
  siJavascript,
  siSwift,
  siGit,
  siFirebase,
  siNodedotjs,
  type SimpleIcon,
} from "simple-icons";

// { icone, rotulo } — o rotulo permite "React Native" reaproveitando o icone do React.
const TECHS: { icon: SimpleIcon; label: string }[] = [
  { icon: siReact, label: "React" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siFirebase, label: "Firebase" },
  { icon: siReact, label: "React Native" },
  { icon: siSwift, label: "Swift" },
  { icon: siGit, label: "Git" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={hidden || undefined}
    >
      {TECHS.map(({ icon, label }) => (
        <span key={label} className="flex items-center gap-2 text-muted">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-current"
            role="img"
            aria-label={label}
          >
            <path d={icon.path} />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-b border-line py-2.5">
      <div
        className="marquee ticker-mask"
        role="marquee"
        aria-label="Tecnologias"
      >
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
