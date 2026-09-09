import { useSyncExternalStore } from "react";
import { createPersistedSetting } from "@/lib/persistedSetting";

export const themeSetting = createPersistedSetting({
  attr: "data-theme",
  storageKey: "theme",
  values: ["light", "dark"] as const,
  fallback: "light",
});

/** Tema com persistencia. O valor inicial ja e aplicado por um script inline no index.html. */
export function useTheme() {
  const theme = useSyncExternalStore(
    themeSetting.subscribe,
    themeSetting.getSnapshot,
    themeSetting.getServerSnapshot
  );
  return { theme, toggle: themeSetting.cycle };
}
