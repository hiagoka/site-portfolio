import { profile } from "../data/portfolio";

/** Trilho fixo na borda esquerda — assinatura visual, oculto no mobile. */
export function InstrumentRail() {
  return (
    <aside
      aria-hidden
      className="fixed left-0 top-0 z-30 hidden h-screen w-11 flex-col items-center justify-between border-r border-line py-6 lg:flex"
    >
      <span className="h-2 w-2 bg-accent" />

      <div className="vtext flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        <span className="text-fg">{profile.name}</span>
        <span className="h-10 w-px bg-line" />
        <span>Portfolio &rsquo;26</span>
      </div>

      <span className="font-mono text-[10px] tracking-widest text-muted">
        {profile.location.slice(0, 2).toUpperCase()}
      </span>
    </aside>
  );
}
