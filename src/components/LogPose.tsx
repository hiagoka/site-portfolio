import { useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { sections } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

/** Ponteiro bicolor (bordô / chumbo) como o do Log Pose do anime. */
function Needle({ rotate }: { rotate: MotionValue<number> }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className="absolute inset-0 h-full w-full"
      style={{ rotate }}
    >
      <polygon points="20,3.5 23.5,20 16.5,20" fill="#8f2d3e" />
      <polygon points="20,3.5 16.5,20 20,20" fill="#a83b4d" />
      <polygon points="20,36.5 23.5,20 16.5,20" fill="#4a4a4a" />
      <polygon points="20,36.5 16.5,20 20,20" fill="#5f5f5f" />
      <circle
        cx="20"
        cy="14.5"
        r="2.6"
        fill="#f3f1e6"
        stroke="#2f2f2f"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
}

/** Uma das três cúpulas de vidro verde-água. */
function Dome({
  style,
  rotate,
}: {
  style: React.CSSProperties;
  rotate: MotionValue<number>;
}) {
  return (
    <div className="absolute" style={{ width: "100%", height: "100%", ...style }}>
      <div
        className="relative h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 26%, #dcf4ec 0%, #a4dccd 40%, #5fae9c 76%, #3d8a77 100%)",
          boxShadow:
            "inset 0 3px 6px rgba(255,255,255,0.55), inset 0 -5px 9px rgba(0,55,45,0.4), 0 1px 3px rgba(0,0,0,0.35)",
          border: "1px solid rgba(45,95,85,0.55)",
        }}
      >
        <Needle rotate={rotate} />
        {/* reflexo de vidro */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            left: "16%",
            top: "10%",
            width: "44%",
            height: "34%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>
    </div>
  );
}

export function LogPose() {
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);

  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  // ponteiro único girando conforme o scroll
  const rot = useTransform(p, [0, 1], [-25, 335]);

  return (
    <nav
      aria-label="Navegação do diário"
      className="fixed right-1 top-1/2 z-50 flex origin-right -translate-y-1/2 scale-[0.62] items-center gap-3 sm:right-4 sm:scale-100"
    >
      {/* Rótulos das seções */}
      <ul className="hidden flex-col items-end gap-2 sm:flex">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-1.5"
                aria-current={on ? "true" : undefined}
              >
                <span
                  className={`whitespace-nowrap font-heading text-[10px] uppercase tracking-widest transition ${
                    on
                      ? "text-gold-light opacity-100"
                      : "text-parchment-200 opacity-0 group-hover:opacity-80"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block h-2 w-2 rounded-full border transition ${
                    on
                      ? "scale-125 border-gold bg-gold"
                      : "border-parchment-300/50 bg-transparent group-hover:bg-parchment-300/40"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Bússola */}
      <div className="relative animate-sway" style={{ width: 96, height: 96 }}>
        <Dome style={{ inset: 0 }} rotate={rot} />
      </div>
    </nav>
  );
}
