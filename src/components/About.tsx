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
            <div key={g.group} className="border-t border-line pt-3">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {g.group}
              </h3>
              <ul className="mt-2 space-y-1 font-mono text-sm text-muted">
                {g.items.map((i) => (
                  <li key={i}>
                    <span className="mr-2 text-accent">&mdash;</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
