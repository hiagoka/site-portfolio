import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { pirate } from "../data/portfolio";

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [target, run]);
  return value;
}

export function WantedPoster() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const bounty = useCountUp(pirate.bounty, inView);

  return (
    <section
      id="cartaz"
      className="ocean-bg flex min-h-screen items-center justify-center px-4 py-20"
    >
      <div ref={ref} className="w-full max-w-md">
        <motion.article
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={inView ? { opacity: 1, y: 0, rotate: -1.2 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="parchment torn animate-sway p-6 shadow-poster sm:p-8"
        >
          <div className="ink-border p-4 sm:p-5">
            <h1 className="text-center font-display text-5xl leading-none tracking-wider text-ink sm:text-6xl">
              WANTED
            </h1>
            <p className="mt-1 text-center font-heading text-xs uppercase tracking-[0.35em] text-seal">
              Dead or Alive · Full-time
            </p>

            {/* Retrato */}
            <div className="mx-auto mt-5 aspect-[4/5] w-full overflow-hidden border-2 border-ink/70 bg-parchment-300">
              {pirate.photo ? (
                <img
                  src={pirate.photo}
                  alt={pirate.name}
                  className="h-full w-full object-cover sepia-[0.35] contrast-[1.05]"
                />
              ) : (
                <svg viewBox="0 0 200 250" className="h-full w-full">
                  <rect width="200" height="250" fill="#e8d4ad" />
                  <circle cx="100" cy="95" r="46" fill="#241c12" opacity="0.85" />
                  <path
                    d="M28 250c0-52 33-88 72-88s72 36 72 88Z"
                    fill="#241c12"
                    opacity="0.85"
                  />
                  <path
                    d="M50 78c8-30 40-46 50-46s42 16 50 46c-14-10-33-16-50-16s-36 6-50 16Z"
                    fill="#8f2d2d"
                  />
                </svg>
              )}
            </div>

            <h2 className="mt-5 text-center font-display text-3xl tracking-wide text-ink sm:text-4xl">
              {pirate.name}
            </h2>
            <p className="text-center font-heading text-sm uppercase tracking-[0.2em] text-seal">
              &ldquo;{pirate.epithet}&rdquo;
            </p>
            <p className="mt-1 text-center font-body text-base text-ink/80">
              {pirate.role}
            </p>

            <div className="gold-rule my-4" />

            <div className="text-center">
              <span className="font-heading text-[10px] uppercase tracking-[0.35em] text-ink/60">
                Recompensa
              </span>
              <div className="font-display text-3xl text-seal sm:text-4xl">
                <span className="align-top text-xl">&#3647;</span>
                {bounty.toLocaleString("pt-BR")}
                <span className="ml-1 align-top text-lg">Berries</span>
              </div>
              <p className="mt-1 font-heading text-[10px] uppercase tracking-[0.3em] text-ink/45">
                anos-luz de codigo acumulados
              </p>
            </div>

            <p className="mt-4 text-center font-body text-sm italic text-ink/75">
              {pirate.tagline}
            </p>

            <div className="mt-4 flex items-center justify-between font-heading text-[10px] uppercase tracking-widest text-ink/55">
              <span>Marine HQ</span>
              <span>{pirate.location}</span>
            </div>
          </div>
        </motion.article>

        <motion.a
          href="#grand-line"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mx-auto mt-8 flex w-max items-center gap-2 font-heading text-xs uppercase tracking-[0.3em] text-parchment-200 hover:text-gold-light"
        >
          Zarpar para a Grand Line
          <span className="inline-block animate-bounce">&#8595;</span>
        </motion.a>
      </div>
    </section>
  );
}
