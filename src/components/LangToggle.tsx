import { useLang } from "../hooks/useLang";

export function LangToggle() {
  const { lang, t, toggle } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.ui.langSwitch}
      className="grid h-9 w-9 place-items-center border border-line font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition hover:border-accent hover:text-accent"
    >
      {lang}
    </button>
  );
}
