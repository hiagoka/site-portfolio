import type { ReactNode } from "react";

export function Leader({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="leader">
      <span className="leader__k">{k}</span>
      <span className="leader__d" />
      <span className="leader__v">{children}</span>
    </div>
  );
}
