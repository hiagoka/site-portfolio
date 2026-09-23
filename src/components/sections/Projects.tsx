import { Leader, Section } from "@/components/ui";
import { projects } from "@/data/site";
import { useLang } from "@/hooks/useLang";

export function Projects() {
  const { t } = useLang();

  return (
    <Section id="projetos" note={t.ui.records(projects.length)}>
      <ul className="border-t border-line">
        {projects.map((p, i) => {
          const hasRepo = Boolean(p.url && p.url !== "#");
          return (
            <li key={i} className="spec-row group border-b border-line">
              <div className="grid gap-x-8 gap-y-4 px-2 py-8 md:grid-cols-[1fr_18rem]">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-hot">
                      PRJ-{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl leading-tight tracking-tight transition group-hover:italic sm:text-[1.7rem]">
                      {t.projects[i].title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-md text-muted">
                    {t.projects[i].description}
                  </p>

                  {hasRepo && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-block mt-5 !py-2 !text-[11px]"
                    >
                      {t.ui.viewRepo} <span aria-hidden>&#8599;</span>
                    </a>
                  )}
                </div>

                <div className="self-center border-t border-line pt-3 md:border-t-0 md:pt-0">
                  <Leader k={t.ui.year}>{p.year}</Leader>
                  <Leader k={t.ui.stack}>{p.stack.join(", ")}</Leader>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
