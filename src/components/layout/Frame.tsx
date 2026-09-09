import { useEffect } from "react";
import { CropMarks } from "@/components/ui";
import { useLang } from "@/hooks/useLang";

/** Mantem --sp (0-100%) com o progresso do scroll. */
function useScrollProgressVar() {
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      document.documentElement.style.setProperty("--sp", `${pct}%`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
}

/** Moldura fixa com marcas de corte, marcas de meio e barra de progresso. */
export function Frame() {
  useScrollProgressVar();
  const { t } = useLang();

  return (
    <div className="frame" aria-hidden>
      <span className="frame-progress" />
      <CropMarks lg />
      <span className="frame-tick frame-tick--t" />
      <span className="frame-tick frame-tick--b" />
      <span className="frame-tick frame-tick--l" />
      <span className="frame-tick frame-tick--r" />
      <span className="frame-label frame-label--l">HK &mdash; Portfolio &rsquo;26</span>
      <span className="frame-label frame-label--r">
        {t.location} &mdash; {"-23.55, -46.63"}
      </span>
    </div>
  );
}
