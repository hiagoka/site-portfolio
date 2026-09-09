// Estado global simples, persistido em <html data-*> + localStorage,
// com crossfade (View Transitions) na troca. Base do tema e do idioma.

type Options<T extends string> = {
  attr: string; // ex.: "data-theme"
  storageKey: string; // ex.: "theme"
  values: readonly T[];
  fallback: T;
  onApply?: (value: T) => void; // efeito extra (ex.: setar <html lang>)
};

export function createPersistedSetting<T extends string>(opts: Options<T>) {
  const { attr, storageKey, values, fallback, onApply } = opts;

  const read = (): T => {
    if (typeof document === "undefined") return fallback;
    const v = document.documentElement.getAttribute(attr) as T | null;
    return v && values.includes(v) ? v : fallback;
  };

  let value: T = read();
  const listeners = new Set<() => void>();

  const apply = (next: T) => {
    value = next;
    document.documentElement.setAttribute(attr, next);
    onApply?.(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      /* storage indisponivel (modo privado etc.) */
    }
    listeners.forEach((fn) => fn());
  };

  const set = (next: T) => {
    if (next === value) return;
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduced) {
      doc.startViewTransition(() => apply(next));
    } else {
      apply(next);
    }
  };

  return {
    subscribe(cb: () => void) {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getSnapshot: () => value,
    getServerSnapshot: () => fallback,
    set,
    cycle: () => set(values[(values.indexOf(value) + 1) % values.length]),
  };
}
