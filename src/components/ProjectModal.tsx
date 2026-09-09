import { useEffect, useRef } from "react";
import type { Project } from "../data/portfolio";
import { Leader } from "./Leader";
import { ProjectMedia } from "./ProjectMedia";

type Props = {
  project: Project | null;
  index: number;
  onClose: () => void;
};

export function ProjectModal({ project, index, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const external = Boolean(project.url && project.url !== "#");
  const code = `PRJ-${String(index + 1).padStart(2, "0")}`;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — detalhe`}
        className="modal-panel relative w-full max-w-3xl border border-line bg-bg"
      >
        <span className="modal-crop modal-crop--tl" />
        <span className="modal-crop modal-crop--tr" />
        <span className="modal-crop modal-crop--bl" />
        <span className="modal-crop modal-crop--br" />

        <header className="flex items-baseline justify-between gap-4 border-b border-line px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] text-hot">{code}</span>
            <h3 className="font-serif text-2xl tracking-tight">{project.title}</h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition hover:text-hot"
          >
            fechar &times;
          </button>
        </header>

        <div className="space-y-6 p-6">
          <ProjectMedia project={project} />

          <div className="grid gap-8 md:grid-cols-[1fr_16rem]">
            <div>
              <p className="text-muted">{project.description}</p>
              {project.detail && (
                <p className="mt-4 leading-relaxed">{project.detail}</p>
              )}
            </div>
            <div className="border-t border-line pt-3 md:border-t-0 md:pt-0">
              <Leader k="Ano">{project.year}</Leader>
              <Leader k="Stack">{project.stack.join(", ")}</Leader>
              {external && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-block mt-4 !py-2 !text-[11px]"
                >
                  Ver projeto <span aria-hidden>&#8599;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
