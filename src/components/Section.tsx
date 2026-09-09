import type { ReactNode } from "react";

type Props = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: Props) {
  const num = String(index).padStart(2, "0");

  return (
    <section id={id} className="border-t border-line">
      <div className="relative mx-auto max-w-content px-6 py-16 sm:py-24">
        <span className="ghost-num">{num}</span>

        <div className="relative z-[1]">
          <h2 className="mb-10 flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.22em]">
            <span className="text-accent">{num}</span>
            <span className="text-fg">{title}</span>
            <span className="h-px flex-1 translate-y-[-3px] bg-line" />
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
