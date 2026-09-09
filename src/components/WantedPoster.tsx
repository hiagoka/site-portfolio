import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { pirate } from "../data/portfolio";
import posterTemplate from "../assets/wanted-poster.png";

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

// Serifa "de maquina de escrever" para casar com o pôster impresso
const posterSerif = '"Times New Roman", Times, Georgia, serif';

export function WantedPoster() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const bounty = useCountUp(pirate.bounty, inView);

  return (
    <section
      id="cartaz"
      className="ocean-bg flex min-h-screen items-center justify-center px-4 py-20"
    >
      <div ref={ref} className="w-full max-w-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 55, damping: 13 }}
          className="animate-sway"
          style={{ filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.55))" }}
        >
          <div className="relative w-full" style={{ aspectRatio: "507 / 751" }}>
            {/* Pôster oficial (template em branco) */}
            <img
              src={posterTemplate}
              alt="Cartaz de procurado"
              className="absolute inset-0 h-full w-full select-none"
              draggable={false}
            />

            {/* Foto dentro da moldura branca */}
            <div
              className="absolute overflow-hidden"
              style={{ left: "9%", right: "8.3%", top: "22.4%", bottom: "37.7%" }}
            >
              {pirate.photo ? (
                <img
                  src={pirate.photo}
                  alt={pirate.name}
                  className="h-full w-full object-cover object-top sepia-[0.25] contrast-[1.05]"
                  draggable={false}
                />
              ) : (
                <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
                  <rect width="200" height="150" fill="#ffffff" />
                  <circle cx="100" cy="58" r="40" fill="#5b4a33" />
                  <path d="M40 150c0-33 27-58 60-58s60 25 60 58Z" fill="#5b4a33" />
                  <path
                    d="M56 46c6-25 37-40 44-40s38 15 44 40c-12-9-27-14-44-14s-32 5-44 14Z"
                    fill="#7c2b2b"
                  />
                </svg>
              )}
            </div>

            {/* Nome */}
            <div
              className="absolute left-0 right-0 text-center"
              style={{ top: "73.5%" }}
            >
              <span
                style={{ fontFamily: posterSerif, fontWeight: 700 }}
                className="text-[clamp(1.15rem,5.8vw,1.65rem)] uppercase tracking-[0.03em] text-[#33230f]"
              >
                {pirate.name}
              </span>
            </div>

            {/* Recompensa */}
            <div
              className="absolute left-0 right-0 text-center"
              style={{ top: "80%" }}
            >
              <span
                style={{ fontFamily: posterSerif, fontWeight: 700 }}
                className="text-[clamp(0.95rem,4.6vw,1.28rem)] tracking-[0.01em] text-[#3a2a18]"
              >
                <span className="mr-1">&#3647;</span>
                {bounty.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>
        </motion.div>

        <p className="mt-5 text-center font-body text-sm italic text-parchment-200/85">
          &ldquo;{pirate.epithet}&rdquo; &middot; {pirate.role}
        </p>

        <motion.a
          href="#grand-line"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mx-auto mt-6 flex w-max items-center gap-2 font-heading text-xs uppercase tracking-[0.3em] text-parchment-200 hover:text-gold-light"
        >
          Zarpar para a Grand Line
          <span className="inline-block animate-bounce">&#8595;</span>
        </motion.a>
      </div>
    </section>
  );
}
