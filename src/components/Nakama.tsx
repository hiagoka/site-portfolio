import { motion } from "framer-motion";
import { crew } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Nakama() {
  return (
    <section id="nakama" className="parchment px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="A tripulacao" title="Nakama" />
        <p className="mx-auto mb-12 max-w-xl text-center font-body text-ink/75">
          Portos onde servi e o que ajudei a construir em cada um.
        </p>

        <ol className="relative border-l-2 border-dashed border-ink/40 pl-8">
          {crew.map((mate, i) => (
            <motion.li
              key={mate.place + mate.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="mb-10 last:mb-0"
            >
              <span className="absolute -left-[13px] mt-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink bg-seal text-parchment-100">
                <span className="text-[10px]">&#9875;</span>
              </span>
              <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-seal">
                {mate.period}
              </p>
              <h3 className="font-display text-2xl text-ink">{mate.role}</h3>
              <p className="font-heading text-sm uppercase tracking-widest text-ink/60">
                {mate.place}
              </p>
              <p className="mt-2 font-body text-ink/80">{mate.deeds}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
