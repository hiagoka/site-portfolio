import {
  siReact,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siExpo,
  siVite,
  siTailwindcss,
  siPostgresql,
  siSocketdotio,
  siFigma,
  siGit,
  siSwift,
  type SimpleIcon,
} from "simple-icons";

const TECHS: SimpleIcon[] = [
  siReact,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siExpo,
  siVite,
  siTailwindcss,
  siPostgresql,
  siSocketdotio,
  siFigma,
  siGit,
  siSwift,
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={hidden || undefined}
    >
      {TECHS.map((t) => (
        <span key={t.slug} className="flex items-center gap-2 text-muted">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-current"
            role="img"
            aria-label={t.title}
          >
            <path d={t.path} />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
            {t.title}
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
