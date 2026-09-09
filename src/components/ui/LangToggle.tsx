import { useLang } from "@/hooks/useLang";
import { IconButton } from "./IconButton";

export function LangToggle() {
  const { lang, t, toggle } = useLang();

  return (
    <IconButton
      onClick={toggle}
      aria-label={t.ui.langSwitch}
      className="font-mono text-[11px] uppercase tracking-[0.1em]"
    >
      {lang}
    </IconButton>
  );
}
