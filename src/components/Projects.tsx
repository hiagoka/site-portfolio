import { useState } from "react";
import { projects } from "../data/portfolio";
import { Leader } from "./Leader";
import { ProjectModal } from "./ProjectModal";
import { Section } from "./Section";

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section
      id="projetos"
      index={1}
      title="Projetos"
      note={`${projects.length} registros`}
    >
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <li key={p.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="spec-row group grid w-full gap-x-8 gap-y-4 px-2 py-8 text-left md:grid-cols-[1fr_18rem]"
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
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted opacity-0 transition group-hover:opacity-100"
                  >
                    abrir &rarr;
                  </span>
                </div>
                <p className="mt-3 max-w-md text-muted">{p.description}</p>
              </div>

              <div className="self-center border-t border-line pt-3 md:border-t-0 md:pt-0">
                <Leader k="Ano">{p.year}</Leader>
                <Leader k="Stack">{p.stack.join(", ")}</Leader>
                <Leader k="Midia">
                  {p.video ? "video" : p.image ? "foto" : "—"}
                </Leader>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal
        project={open === null ? null : projects[open]}
        index={open ?? 0}
        onClose={() => setOpen(null)}
      />
    </Section>
  );
}
