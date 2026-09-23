import { Leader, Section, TechDial } from "@/components/ui";
import { skills } from "@/data/site";
import { useLang } from "@/hooks/useLang";

export function About() {
  const { t } = useLang();

  return (
    <Section id="sobre">
      <div className="grid gap-12 md:grid-cols-[1fr_17rem] md:items-center md:gap-16">
        <div>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>{t.about}</p>
            <p className="text-muted">{t.aboutLine}</p>
          </div>

          <div className="mt-8 border-t border-line pt-4">
            {skills.map((items, i) => (
              <Leader key={i} k={t.skillGroups[i]}>
                {items.join(", ")}
              </Leader>
            ))}
          </div>
        </div>

        <TechDial />
      </div>
    </Section>
  );
}
