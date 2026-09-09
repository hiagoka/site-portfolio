import { useMemo } from "react";
import { nav, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-fg"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 sm:flex">
          {nav.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                active === n.id ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>{" "}
              {n.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
