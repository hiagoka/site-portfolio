import { useLang } from "../hooks/useLang";

export function LangToggle() {
  const { lang, t, toggle } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.ui.langSwitch}
      className="grid h-9 min-w-[3.25rem] place-items-center border border-line font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition hover:border-accent hover:text-accent"
    >
      <span>
        <span className={lang === "en" ? "text-fg" : ""}>EN</span>
        <span className="mx-1 text-line">/</span>
        <span className={lang === "pt" ? "text-fg" : ""}>PT</span>
      </span>
    </button>
  );
}
