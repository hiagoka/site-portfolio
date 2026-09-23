import { content, type Dict, type Lang } from "@/data/content";
import { createPersistedSetting, usePersistedSetting } from "@/lib/persistedSetting";

const langSetting = createPersistedSetting<Lang>({
  attr: "data-lang",
  storageKey: "lang",
  values: ["pt", "en"],
  fallback: "pt",
  onApply: (l) => {
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  },
});

/** Idioma atual + dicionario. Estado compartilhado entre todos os componentes. */
export function useLang(): { lang: Lang; t: Dict; toggle: () => void } {
  const lang = usePersistedSetting(langSetting);
  return { lang, t: content[lang], toggle: langSetting.cycle };
}
