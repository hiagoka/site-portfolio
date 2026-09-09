import type { ReactNode } from "react";

/** Linha "CHAVE ........ valor" (pontilhado) — motivo de layout da ficha. */
export function Leader({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="leader">
      <span className="leader__k">{k}</span>
      <span className="leader__d" />
      <span className="leader__v">{children}</span>
    </div>
  );
}
