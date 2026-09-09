import { motion } from "framer-motion";
import { ship } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function TheShip() {
  return (
    <section id="navio" className="ocean-bg px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle onDark kicker="Base de operacoes" title="O Navio" />

        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-xs"
          >
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <path d="M20 140h160l-20 34a20 20 0 0 1-17 10H57a20 20 0 0 1-17-10Z" fill="#5a3a14" />
              <path d="M100 24v112M60 60h80l-14 40H74Z" stroke="#e8d4ad" strokeWidth="4" fill="#f2e2c4" />
              <path d="M100 30c26 6 40 24 42 46-20-10-34-8-42-4Z" fill="#8f2d2d" />
              <circle cx="100" cy="20" r="6" fill="#c9a227" />
              <path d="M30 150c14 8 40 12 70 12s56-4 70-12" stroke="#1d5266" strokeWidth="4" fill="none" opacity="0.5" />
            </svg>
            <p className="mt-3 text-center font-display text-2xl text-gold-light">
              {ship.name}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-body text-lg leading-relaxed text-parchment-100/90">
              {ship.about}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {ship.values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-md border border-gold/30 bg-ocean-800/60 p-4"
                >
                  <h3 className="font-heading text-sm uppercase tracking-widest text-gold-light">
                    {v.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-parchment-200/80">{v.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
