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
    <div className="absolute" style={{ width: "37%", height: "37%", ...style }}>
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

  // três ponteiros girando em ritmos diferentes, como os do Novo Mundo
  const r1 = useTransform(p, [0, 1], [-35, 305]);
  const r2 = useTransform(p, [0, 1], [140, -170]);
  const r3 = useTransform(p, [0, 1], [15, 255]);

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

      {/* Log Pose */}
      <div className="relative animate-sway" style={{ width: 118, height: 118 }}>
        {/* anel dourado — atrás */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "-13px -24px -13px 8px",
            border: "9px solid",
            borderColor: "#eec659 #cf9f2a #a87f1c #e6bf4c",
            transform: "rotate(-18deg)",
            boxShadow: "0 3px 5px rgba(0,0,0,0.35)",
          }}
        />

        {/* esfera de osso/marfim */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 24%, #ece0c4 0%, #d3ba90 44%, #b0956a 72%, #876b46 100%)",
            boxShadow:
              "inset 0 -11px 20px rgba(70,50,25,0.5), inset 0 9px 16px rgba(255,245,220,0.45), 0 12px 24px rgba(0,0,0,0.45)",
          }}
        />

        {/* base */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: -7,
            width: 26,
            height: 13,
            background: "linear-gradient(#b89a6f, #866b48)",
            borderRadius: 3,
            boxShadow: "0 2px 3px rgba(0,0,0,0.35)",
          }}
        />

        {/* anel dourado — frente (só o arco direito passa sobre a esfera) */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "-13px -24px -13px 8px",
            border: "9px solid #eec659",
            transform: "rotate(-18deg)",
            clipPath: "inset(0 0 0 58%)",
          }}
        />

        {/* três cúpulas */}
        <Dome style={{ left: "31.5%", top: "10%" }} rotate={r1} />
        <Dome style={{ left: "13%", top: "45%" }} rotate={r2} />
        <Dome style={{ left: "50%", top: "45%" }} rotate={r3} />
      </div>
    </nav>
  );
}
