import { createPersistedSetting, usePersistedSetting } from "@/lib/persistedSetting";

export const themeSetting = createPersistedSetting({
  attr: "data-theme",
  storageKey: "theme",
  values: ["light", "dark"] as const,
  fallback: "light",
});

/** Tema com persistencia. O valor inicial ja e aplicado por um script inline no index.html. */
export function useTheme() {
  const theme = usePersistedSetting(themeSetting);
  return { theme, toggle: themeSetting.cycle };
}
