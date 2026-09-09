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

function Ornament({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 70 20"
      width="64"
      height="18"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      className="shrink-0"
    >
      <path
        d="M1 10h9c0-5 4-8 9-8s8 4 6 8c-1.5 3-6 3-6-1"
        fill="none"
        stroke="#34240f"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M19 10c4 0 6 3 11 3s7-3 11-3 6 3 11 3c4 0 6-2 7-5"
        fill="none"
        stroke="#34240f"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="69" cy="8" r="1.8" fill="#34240f" />
    </svg>
  );
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
      {/* filtros de tinta gasta / borda irregular */}
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <filter id="grunge">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2.9" result="disp" />
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed="12" result="speck" />
          <feColorMatrix
            in="speck"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.18 1.1"
            result="mask"
          />
          <feComposite in="disp" in2="mask" operator="in" />
        </filter>
        <filter id="warp">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="9" result="w" />
          <feDisplacementMap in="SourceGraphic" in2="w" scale="3" />
        </filter>
      </svg>

      <div ref={ref} className="w-full max-w-[380px]">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 55, damping: 13 }}
          className="wanted-paper torn animate-sway px-4 pb-4 pt-3 shadow-poster"
        >
          {/* WANTED — ocupa a largura toda */}
          <svg
            viewBox="0 0 320 66"
            className="-mx-1 block w-[calc(100%+8px)]"
            style={{ filter: "url(#grunge)" }}
            role="img"
            aria-label="WANTED"
          >
            <text
              x="160"
              y="52"
              textAnchor="middle"
              textLength="316"
              lengthAdjust="spacingAndGlyphs"
              className="wanted-title-svg"
            >
              WANTED
            </text>
          </svg>

          {/* Retrato */}
          <div
            className="relative mx-auto mt-1 aspect-[7/6] w-full border-[3px] border-[#34240f] bg-[#f7f1e2]"
            style={{ filter: "url(#warp)" }}
          >
            {pirate.photo ? (
              <img
                src={pirate.photo}
                alt={pirate.name}
                className="h-full w-full object-cover object-top sepia-[0.28] contrast-[1.05]"
              />
            ) : (
              <svg viewBox="0 0 200 172" className="h-full w-full">
                <rect width="200" height="172" fill="#f7f1e2" />
                <circle cx="100" cy="72" r="33" fill="#5b4a33" />
                <path d="M52 172c0-31 22-52 48-52s48 21 48 52Z" fill="#5b4a33" />
                <path
                  d="M65 62c5-21 30-33 35-33s30 12 35 33c-10-8-22-12-35-12s-25 4-35 12Z"
                  fill="#7c2b2b"
                />
              </svg>
            )}
          </div>

          {/* DEAD OR ALIVE */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <Ornament />
            <span className="marine-word text-[1.05rem] tracking-[0.16em] text-[#34240f] sm:text-[1.15rem]">
              DEAD OR ALIVE
            </span>
            <Ornament flip />
          </div>

          {/* Nome */}
          <h1 className="mt-2 text-center font-heading text-[1.85rem] font-black leading-none tracking-wide text-[#241a0d] sm:text-[2.05rem]">
            {pirate.name.toUpperCase()}
          </h1>
          <p className="mt-1 text-center font-body text-[0.82rem] italic text-[#3a2a18]/80">
            &ldquo;{pirate.epithet}&rdquo; &middot; {pirate.role}
          </p>

          <div className="mx-auto my-2.5 h-px w-2/3 bg-[#3a2a18]/45" />

          {/* Recompensa */}
          <p className="text-center font-heading text-[1.5rem] font-black tracking-wide text-[#241a0d] sm:text-[1.65rem]">
            <span className="relative top-[-2px] mr-1 text-lg">&#3647;</span>
            {bounty.toLocaleString("pt-BR")}
            <span className="ml-1.5 align-[3px] text-[0.6rem] font-bold tracking-[0.2em] text-[#3a2a18]/60">
              BERRIES
            </span>
          </p>

          {/* Rodape */}
          <div className="mt-3 flex items-end justify-between gap-2">
            <div className="flex items-end gap-1.5">
              <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" className="shrink-0">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#34240f" strokeWidth="1.5" />
                <path
                  d="M4 19c3.5 0 5.5-3.4 6.5-5.8 1 2.4 2.3 3.8 5.5 3.8s4.5-1.4 5.5-3.8c1 2.4 3 5.8 6.5 5.8"
                  fill="none"
                  stroke="#34240f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="max-w-[155px] font-heading text-[6px] uppercase leading-[1.4] tracking-[0.06em] text-[#3a2a18]/70">
                Este cartaz e ficcao. Qualquer semelhanca com um dev real, disponivel
                para contratacao imediata, nao e mera coincidencia.
              </p>
            </div>
            <span className="marine-word text-[1.35rem] leading-none text-[#241a0d] sm:text-[1.5rem]">
              MARINE
            </span>
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
