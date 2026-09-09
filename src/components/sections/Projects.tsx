import { useState } from "react";
import { Leader, Section } from "@/components/ui";
import { projects } from "@/data/site";
import { useLang } from "@/hooks/useLang";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="projetos" note={t.ui.records(projects.length)}>
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <li key={i} className="border-b border-line">
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
                    {t.projects[i].title}
                  </h3>
                  <span
                    aria-hidden
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted opacity-0 transition group-hover:opacity-100"
                  >
                    {t.ui.open} &rarr;
                  </span>
                </div>
                <p className="mt-3 max-w-md text-muted">
                  {t.projects[i].description}
                </p>
              </div>

              <div className="self-center border-t border-line pt-3 md:border-t-0 md:pt-0">
                <Leader k={t.ui.year}>{p.year}</Leader>
                <Leader k={t.ui.stack}>{p.stack.join(", ")}</Leader>
                <Leader k={t.ui.media}>
                  {p.video
                    ? t.ui.mediaVideo
                    : p.image
                      ? t.ui.mediaPhoto
                      : t.ui.mediaNone}
                </Leader>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal index={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
