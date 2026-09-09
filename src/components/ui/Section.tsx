import type { ReactNode } from "react";
import { nav } from "@/data/site";
import { useLang } from "@/hooks/useLang";

type Props = { id: string; note?: string; children: ReactNode };

/** Casca de uma secao: numero + titulo (do idioma) + nota, no estilo prancheta. */
export function Section({ id, note, children }: Props) {
  const { t } = useLang();
  const num = String(nav.findIndex((n) => n.id === id) + 1).padStart(2, "0");

  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-14 sm:py-24">
        <header className="mb-9 flex flex-wrap items-baseline gap-x-4 gap-y-1 sm:mb-12">
          <span className="box-num text-xs">{num}</span>
          <h2 className="font-serif text-[1.7rem] tracking-tight sm:text-4xl">
            {t.nav[id]}
          </h2>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {note ?? `sec.${num} / rev.01`}
          </span>
        </header>
        {children}
      </div>
    </section>
  );
}
