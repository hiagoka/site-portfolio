import { about, profile, skills } from "../data/portfolio";
import { Leader } from "./Leader";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre" index={2} title="Sobre">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-5 font-serif text-xl leading-[1.5]">
          <p>{about}</p>
          <p className="text-muted">
            Baseado em {profile.location}. Aberto a trabalho remoto.
          </p>
        </div>

        <div className="border-t border-line pt-4">
          {skills.map((g) => (
            <Leader key={g.group} k={g.group}>
              {g.items.join(", ")}
            </Leader>
          ))}
        </div>
      </div>
    </Section>
  );
}
