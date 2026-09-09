import { motion } from "framer-motion";
import { fruits } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const typeColor: Record<string, string> = {
  Paramecia: "#8f2d2d",
  Zoan: "#1d5266",
  Logia: "#9c7b14",
};

export function DevilFruits() {
  return (
    <section id="akuma-no-mi" className="ocean-bg px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle onDark kicker="Poderes a bordo" title="Akuma no Mi" />
        <p className="mx-auto mb-12 max-w-xl text-center font-body text-parchment-200/80">
          Cada fruta concede uma habilidade. O anel mostra o dominio atual.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fruits.map((fruit, i) => {
            const c = typeColor[fruit.type];
            const dash = 264; // 2*pi*42
            return (
              <motion.article
                key={fruit.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07 }}
                className="rounded-lg border border-gold/30 bg-ocean-800/70 p-5 text-center backdrop-blur transition hover:border-gold/70"
              >
                <div className="relative mx-auto h-28 w-28">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#0b232f" strokeWidth="8" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke={c}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={dash}
                      initial={{ strokeDashoffset: dash }}
                      whileInView={{ strokeDashoffset: dash - (dash * fruit.mastery) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 + i * 0.07 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* fruta estilizada */}
                    <svg viewBox="0 0 60 60" className="h-12 w-12">
                      <path
                        d="M30 12c9 0 17 8 17 20S38 54 30 54 13 44 13 32 21 12 30 12Z"
                        fill={c}
                      />
                      <path d="M30 12c-3-6-9-8-9-8s2 7 6 10Z" fill="#1d5266" />
                      <path
                        d="M22 24c4-3 12-3 16 0M22 32c4-3 12-3 16 0M22 40c4-3 12-3 16 0"
                        stroke="#0b232f"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>

                <p
                  className="mt-3 font-heading text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: c === "#9c7b14" ? "#e6c65c" : "#e8d4ad" }}
                >
                  {fruit.type} · {fruit.mastery}%
                </p>
                <h3 className="mt-1 font-display text-2xl text-parchment-100">{fruit.name}</h3>
                <p className="mt-2 font-body text-sm italic text-parchment-200/75">
                  &ldquo;{fruit.power}&rdquo;
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
