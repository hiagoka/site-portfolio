import { useMemo } from "react";
import { Clock, LangToggle, ThemeToggle } from "@/components/ui";
import { nav, profile } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLang } from "@/hooks/useLang";

type NavProps = { active: string; mobile?: boolean };

function NavLinks({ active, mobile = false }: NavProps) {
  const { t } = useLang();
  return (
    <>
      {nav.map((n, i) => {
        const on = active === n.id;
        const num = String(i + 1).padStart(2, "0");
        return mobile ? (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={`flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
              on ? "text-fg" : "text-muted"
            }`}
          >
            <span aria-hidden className={`h-1 w-1 ${on ? "bg-hot" : "bg-line"}`} />
            {t.nav[n.id]}
            <span className="sr-only">{num}</span>
          </a>
        ) : (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={`font-mono text-[11px] uppercase tracking-[0.14em] transition ${
              on ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            <span className={on ? "text-hot" : ""}>[{num}]</span> {t.nav[n.id]}
          </a>
        );
      })}
    </>
  );
}

export function Header() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-fg">
          {profile.name.toLowerCase().replace(/\s+/g, "-")}
          <span className="cursor">_</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks active={active} />
        </nav>

        <div className="flex items-center gap-2">
          <Clock className="hidden font-mono text-[11px] tabular-nums text-muted lg:block" />
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>

      <nav className="no-scrollbar flex items-center justify-between gap-3 overflow-x-auto border-t border-line px-4 py-2 md:hidden">
        <NavLinks active={active} mobile />
      </nav>
    </header>
  );
}
