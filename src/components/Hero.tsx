import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { useClock } from "../hooks/useClock";

const rise = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const time = useClock();

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-6 pb-16 pt-20"
    >
      <motion.div
        {...rise}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted"
      >
        <span className="text-accent">&#47;&#47;</span>
        {profile.role}
      </motion.div>

      <motion.h1
        {...rise}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-6 text-[clamp(2.8rem,10vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
      >
        {profile.name}
        <span className="text-accent">.</span>
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
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
      >
        <a
          href="#contato"
          className="btn-line inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em]"
        >
          Entrar em contato
          <span aria-hidden>&rarr;</span>
        </a>

        <span className="font-mono text-xs text-muted">
          {profile.location} &middot; {time} local
          {profile.available && (
            <>
              {" "}
              &middot;{" "}
              <span className="text-accent">disponivel</span>
            </>
          )}
        </span>
      </motion.div>
    </section>
  );
}
