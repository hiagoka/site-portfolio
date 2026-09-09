import { useMemo } from "react";
import { nav, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useClock } from "../hooks/useClock";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(ids);
  const time = useClock();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <a href="#top" className="font-mono text-sm tracking-tight text-fg">
          {profile.name.toLowerCase().replace(/\s+/g, "-")}
          <span className="cursor">_</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n, i) => {
            const on = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] transition ${
                  on ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span className={on ? "text-hot" : ""}>
                  [{String(i + 1).padStart(2, "0")}]
                </span>{" "}
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] text-muted sm:block">
            {time}
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
