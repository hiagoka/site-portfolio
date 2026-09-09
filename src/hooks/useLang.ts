import { useSyncExternalStore } from "react";
import { content, type Dict, type Lang } from "../data/content";

const KEY = "lang";

function read(): Lang {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-lang");
    if (attr === "pt" || attr === "en") return attr;
  }
  return "pt";
}

let currentLang: Lang = read();
const listeners = new Set<() => void>();

function apply(next: Lang) {
  currentLang = next;
  document.documentElement.setAttribute("data-lang", next);
  document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  try {
    localStorage.setItem(KEY, next);
  } catch {
    /* storage bloqueado */
  }
  listeners.forEach((fn) => fn());
}

function setLang(next: Lang) {
  if (next === currentLang) return;
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
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/** Idioma atual + dicionario. Estado compartilhado entre todos os componentes. */
export function useLang(): { lang: Lang; t: Dict; toggle: () => void } {
  const lang = useSyncExternalStore(
    subscribe,
    () => currentLang,
    () => "pt" as Lang
  );
  return {
    lang,
    t: content[lang],
    toggle: () => setLang(currentLang === "pt" ? "en" : "pt"),
  };
}
