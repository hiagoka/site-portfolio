import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { sections } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

/**
 * Log Pose: bussola fixa que gira conforme o scroll e serve de navegacao.
 */
export function LogPose() {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const needleRotation = useTransform(progress, [0, 1], [0, 360]);
  const ringOffset = useTransform(progress, [0, 1], [289, 0]); // 2*pi*46 ~= 289

  return (
    <nav
      aria-label="Navegacao do diario"
      className="fixed right-3 top-1/2 z-50 -translate-y-1/2 sm:right-5"
    >
      <div className="flex flex-col items-center gap-3 rounded-full border-2 border-gold/60 bg-ocean-900/80 p-3 backdrop-blur">
        {/* Bussola */}
        <div className="relative h-14 w-14">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#14384a" strokeWidth="6" />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#c9a227"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="289"
              style={{ strokeDashoffset: ringOffset }}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ rotate: needleRotation }}
          >
            <div className="h-9 w-1 rounded-full bg-gradient-to-b from-seal via-seal to-parchment-100" />
          </motion.div>
        </div>

        {/* Pontos das secoes */}
        <ul className="flex flex-col items-center gap-2">
          {sections.map((s) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-2"
                  aria-current={on ? "true" : undefined}
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full border transition ${
                      on
                        ? "scale-125 border-gold bg-gold"
                        : "border-parchment-300/50 bg-transparent group-hover:bg-parchment-300/40"
                    }`}
                  />
                  <span
                    className={`whitespace-nowrap font-heading text-[10px] uppercase tracking-widest transition ${
                      on ? "text-gold-light opacity-100" : "text-parchment-200 opacity-0 group-hover:opacity-80"
                    }`}
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
