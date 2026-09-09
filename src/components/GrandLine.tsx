import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { islands, type Island } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`dificuldade ${n} de 5`} className="tracking-widest text-gold">
      {"★".repeat(n)}
      <span className="text-ink/25">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export function GrandLine() {
  const [selected, setSelected] = useState<Island | null>(null);

  return (
    <section id="grand-line" className="parchment px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="O Diario de Viagem" title="Grand Line" />
        <p className="mx-auto mb-10 max-w-xl text-center font-body text-ink/75">
          Cada ilha e um projeto que ja visitei. Toque em uma para abrir o Log da Ilha.
        </p>

        <div className="relative">
          {/* Rota */}
          <div className="pointer-events-none absolute left-0 right-0 top-[86px] hidden h-1 bg-[repeating-linear-gradient(90deg,#241c12_0_10px,transparent_10px_20px)] opacity-40 sm:block" />

          <ul className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:gap-8">
            {islands.map((island, i) => (
              <li key={island.name} className="min-w-[260px] max-w-[260px] snap-center sm:min-w-[300px] sm:max-w-[300px]">
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelected(island)}
                  className="group w-full text-left"
                >
                  <div className="relative mx-auto mb-3 h-24 w-24">
                    <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow">
                      <circle cx="50" cy="50" r="30" fill="#8f2d2d" />
                      <path d="M50 12c14 8 24 22 24 40 0 20-24 36-24 36S26 72 26 52c0-18 10-32 24-40Z" fill="#1d5266" />
                      <circle cx="50" cy="46" r="10" fill="#e6c65c" />
                    </svg>
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-parchment-100 font-heading text-xs text-ink">
                      {i + 1}
                    </span>
                  </div>

                  <div className="ink-border bg-parchment-100/70 p-4 transition group-hover:-translate-y-1 group-hover:bg-parchment-100">
                    <p className="font-heading text-[10px] uppercase tracking-[0.25em] text-seal">
                      {island.arc}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-ink">{island.name}</h3>
                    <p className="mt-2 line-clamp-3 font-body text-sm text-ink/75">
                      {island.summary}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <Stars n={island.danger} />
                      <span className="font-heading uppercase tracking-widest text-ink/50 group-hover:text-seal">
                        abrir log &rarr;
                      </span>
                    </div>
                  </div>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ocean-900/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Log da ilha ${selected.name}`}
          >
            <motion.div
              className="parchment torn w-full max-w-lg p-7 shadow-poster"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="ink-border p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-seal">
                      {selected.arc} · Log da Ilha
                    </p>
                    <h3 className="font-display text-3xl text-ink">{selected.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Fechar"
                    className="font-display text-2xl leading-none text-ink/60 hover:text-seal"
                  >
                    &times;
                  </button>
                </div>

                <div className="gold-rule my-3" />

                <p className="font-body text-ink/85">{selected.log}</p>

                <p className="mt-4 font-heading text-[10px] uppercase tracking-[0.3em] text-seal">
                  Tesouros usados
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-ink/40 bg-parchment-300/50 px-2 py-0.5 font-heading text-[11px] uppercase tracking-wider text-ink/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {selected.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {selected.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-ink bg-seal px-4 py-1.5 font-heading text-xs uppercase tracking-widest text-parchment-100 transition hover:bg-ink"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
