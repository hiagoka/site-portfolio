import { projects } from "../data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projetos" index={1} title="Projetos">
      <ul>
        {projects.map((p, i) => {
          const external = Boolean(p.url && p.url !== "#");
          return (
            <li key={p.title} className="border-b border-line first:border-t">
              <a
                href={p.url ?? "#"}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="row-hover group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-7 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-8"
              >
                <span className="font-mono text-xs text-muted sm:pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="flex items-center gap-2 text-2xl font-medium tracking-tight transition group-hover:text-accent">
                    {p.title}
                    <span
                      aria-hidden
                      className="text-base text-accent opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      &#8599;
                    </span>
                  </h3>
                  <p className="mt-2 max-w-lg text-muted">{p.description}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-muted">
                    {p.stack.join("  /  ")}
                  </p>
                </div>

                <span className="col-start-2 font-mono text-xs text-muted sm:col-start-3 sm:pt-1.5 sm:text-right">
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
