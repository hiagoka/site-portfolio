import { TechIcon } from "@/components/ui";
import { techs } from "@/data/tech";
import { useLang } from "@/hooks/useLang";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={hidden || undefined}
    >
      {techs.map(({ icon, label }) => (
        <span key={label} className="flex items-center gap-2 text-muted">
          <TechIcon icon={icon} label={label} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

/** Faixa rolante com os logos das tecnologias. */
export function Ticker() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden border-b border-line py-2.5">
      <div className="marquee ticker-mask" role="marquee" aria-label={t.ui.techAria}>
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
