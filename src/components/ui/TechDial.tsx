import { techs } from "@/data/tech";
import { TechIcon } from "./TechIcon";

const N = techs.length;
const RADIUS = 34; // % do raio onde ficam os icones

// marcas da "face" do instrumento
const TICKS = Array.from({ length: 24 }, (_, i) => {
  const a = (i / 24) * Math.PI * 2;
  const major = i % 6 === 0;
  const inner = major ? 44 : 46.5;
  return {
    x1: 50 + 49 * Math.cos(a),
    y1: 50 + 49 * Math.sin(a),
    x2: 50 + inner * Math.cos(a),
    y2: 50 + inner * Math.sin(a),
    major,
  };
});

export function TechDial() {
  return (
    <div
      className="tech-dial group relative mx-auto aspect-square w-full max-w-[17rem]"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="absolute inset-[18%] rounded-full border border-line" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {TICKS.map((tk, i) => (
          <line
            key={i}
            x1={tk.x1}
            y1={tk.y1}
            x2={tk.x2}
            y2={tk.y2}
            stroke="var(--border)"
            strokeWidth={tk.major ? 0.8 : 0.4}
          />
        ))}
      </svg>

      {/* varredura tipo radar */}
      <div className="tech-dial__sweep absolute inset-0 rounded-full" />

      {/* anel de icones (gira; cada item contra-rotaciona para ficar na vertical) */}
      <div className="tech-dial__ring absolute inset-0">
        {techs.map(({ icon, label }, i) => {
          const a = (i / N) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${50 + RADIUS * Math.cos(a)}%`,
                top: `${50 + RADIUS * Math.sin(a)}%`,
              }}
            >
              <div className="tech-dial__item flex flex-col items-center gap-1">
                <TechIcon icon={icon} label={label} className="h-4 w-4 text-fg" />
                <span className="whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.15em] text-muted">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="h-1.5 w-1.5 rounded-full bg-hot" />
        <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.3em] text-muted">
          stack
        </span>
      </div>
    </div>
  );
}
