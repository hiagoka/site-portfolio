import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const rise = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[82vh] max-w-content flex-col justify-center px-6 pb-16 pt-16"
    >
      <motion.p
        {...rise}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
      >
        {profile.role}
      </motion.p>

      <motion.h1
        {...rise}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-5 text-5xl font-semibold leading-[1.03] tracking-tight sm:text-7xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        {...rise}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm"
      >
        <a href="#contato" className="group inline-flex items-center gap-2 text-fg">
          <span className="border-b border-fg/30 pb-0.5 transition group-hover:border-accent">
            Entrar em contato
          </span>
          <span aria-hidden className="text-accent transition group-hover:translate-x-1">
            &rarr;
          </span>
        </a>

        {profile.available && (
          <span className="inline-flex items-center gap-2 text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponivel para projetos
          </span>
        )}
      </motion.div>
    </section>
  );
}
