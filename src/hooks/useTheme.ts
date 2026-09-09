import { useState } from "react";

type Theme = "light" | "dark";

function current(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

/** Tema com persistencia. O tema inicial ja e aplicado por um script inline no index.html. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(current);

  const apply = (next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* modo privado / storage bloqueado */
    }
  };

  const setTheme = (next: Theme) => {
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    if (
      doc.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      doc.startViewTransition(() => apply(next));
    } else {
      apply(next);
    }
  };

  return {
    theme,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
