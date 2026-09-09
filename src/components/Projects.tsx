import { projects } from "../data/portfolio";
import { Leader } from "./Leader";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projetos" index={1} title="Projetos" note={`${projects.length} registros`}>
      <ul className="border-t border-line">
        {projects.map((p, i) => {
          const external = Boolean(p.url && p.url !== "#");
          return (
            <li key={p.title} className="border-b border-line">
              <a
                href={p.url ?? "#"}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="spec-row group grid gap-x-8 gap-y-4 px-2 py-8 md:grid-cols-[1fr_18rem]"
              >
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-hot">
                      PRJ-{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl leading-tight tracking-tight transition group-hover:italic sm:text-[1.7rem]">
                      {p.title}
                    </h3>
                    <span
                      aria-hidden
                      className="text-hot opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      &#8599;
                    </span>
                  </div>
                  <p className="mt-3 max-w-md text-muted">{p.description}</p>
                </div>

                <div className="self-center border-t border-line pt-3 md:border-t-0 md:pt-0">
                  <Leader k="Ano">{p.year}</Leader>
                  <Leader k="Stack">{p.stack.join(", ")}</Leader>
                  <Leader k="Ref">{external ? "externo" : "privado"}</Leader>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
