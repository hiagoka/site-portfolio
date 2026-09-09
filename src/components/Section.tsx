import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-10 flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="text-accent">{String(index).padStart(2, "0")}</span>
            <span className="text-fg">{title}</span>
            <span className="h-px flex-1 translate-y-[-3px] bg-line" />
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
