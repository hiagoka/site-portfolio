import { projects } from "../data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projetos" index={1} title="Projetos">
      <ul className="border-y border-line">
        {projects.map((p) => {
          const external = Boolean(p.url && p.url !== "#");
          return (
            <li key={p.title} className="border-b border-line last:border-b-0">
              <a
                href={p.url ?? "#"}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group grid gap-2 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium tracking-tight transition group-hover:text-accent">
                      {p.title}
                    </h3>
                    <span
                      aria-hidden
                      className="text-muted opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      &#8599;
                    </span>
                  </div>
                  <p className="mt-2 max-w-lg text-muted">{p.description}</p>
                  <p className="mt-3 font-mono text-[11px] tracking-wide text-muted">
                    {p.stack.join("  ·  ")}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-muted sm:pt-1.5">
                  {p.year}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
