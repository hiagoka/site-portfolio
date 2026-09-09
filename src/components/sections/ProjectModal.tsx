import { useEffect, useRef } from "react";
import { CropMarks, Leader } from "@/components/ui";
import { projects } from "@/data/site";
import { useLang } from "@/hooks/useLang";
import { ProjectMedia } from "./ProjectMedia";

type Props = { index: number | null; onClose: () => void };

const code = (i: number) => `PRJ-${String(i + 1).padStart(2, "0")}`;

export function ProjectModal({ index, onClose }: Props) {
  const { t } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (index === null) return null;

  const project = projects[index];
  const text = t.projects[index];
  const external = Boolean(project.url && project.url !== "#");

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:items-center sm:p-8"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={text.title}
        className="modal-panel relative my-auto w-full max-w-3xl border border-line bg-bg"
      >
        <CropMarks />

        <header className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-baseline gap-2 sm:gap-3">
            <span className="font-mono text-[11px] text-hot">{code(index)}</span>
            <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
              {text.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.ui.close}
            className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-muted transition hover:text-hot"
          >
            {t.ui.close} &times;
          </button>
        </header>

        <div className="space-y-6 p-4 sm:p-6">
          <ProjectMedia
            video={project.video}
            image={project.image}
            title={text.title}
          />

          <div className="grid gap-8 md:grid-cols-[1fr_16rem]">
            <p className="text-muted">{text.description}</p>
            <div className="border-t border-line pt-3 md:border-t-0 md:pt-0">
              <Leader k={t.ui.year}>{project.year}</Leader>
              <Leader k={t.ui.stack}>{project.stack.join(", ")}</Leader>
              {external && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-block mt-4 !py-2 !text-[11px]"
                >
                  {t.ui.viewProject} <span aria-hidden>&#8599;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
