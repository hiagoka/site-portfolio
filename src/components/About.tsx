import { skills } from "../data/portfolio";
import { useLang } from "../hooks/useLang";
import { Leader } from "./Leader";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();

  return (
    <Section id="sobre" index={2} title={t.nav.sobre}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-5 font-serif text-xl leading-[1.5]">
          <p>{t.about}</p>
          <p className="text-muted">{t.aboutLine}</p>
        </div>

        <div className="border-t border-line pt-4">
          {skills.map((items, i) => (
            <Leader key={i} k={t.skillGroups[i]}>
              {items.join(", ")}
            </Leader>
          ))}
        </div>
      </div>
    </Section>
  );
}
