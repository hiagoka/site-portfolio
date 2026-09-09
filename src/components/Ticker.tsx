import { profile } from "../data/portfolio";

export function Ticker() {
  const bits = [
    profile.available ? "DISPONIVEL PARA PROJETOS" : "AGENDA FECHADA",
    `BASE ${profile.location.toUpperCase()}`,
    profile.role.toUpperCase(),
    "ATUALIZADO 2026",
  ];
  const line = bits.join("   /   ") + "   /   ";

  return (
    <div className="overflow-hidden border-b border-line py-2">
      <div className="marquee font-mono text-[10px] tracking-[0.2em] text-muted">
        <span>{line.repeat(4)}</span>
        <span aria-hidden>{line.repeat(4)}</span>
      </div>
    </div>
  );
}
