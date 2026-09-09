import { about, profile, skills } from "../data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre" index={2} title="Sobre">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-fg/90">
          <p>{about}</p>
          <p className="text-muted">
            Baseado em {profile.location}. Aberto a trabalho remoto.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {g.group}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
