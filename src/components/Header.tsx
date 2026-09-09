import { useMemo } from "react";
import { nav, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg lg:pl-11">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-fg">
          {profile.name}
          <span className="text-accent">_</span>
        </a>

        <nav className="hidden items-center gap-7 sm:flex">
          {nav.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] transition ${
                active === n.id ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 ${
                  active === n.id ? "bg-accent" : "bg-line"
                }`}
              />
              {String(i + 1).padStart(2, "0")} {n.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
