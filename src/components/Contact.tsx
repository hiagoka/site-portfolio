import { profile } from "../data/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <>
      <Section id="contato" index={4} title="Contato">
        <div className="max-w-2xl">
          <p className="text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Vamos construir algo
            <span className="text-accent">?</span>
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="btn-line mt-8 inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em]"
          >
            {profile.email}
            <span aria-hidden>&rarr;</span>
          </a>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 transition hover:text-fg"
              >
                <span className="text-accent">&rarr;</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-8 font-mono text-[11px] text-muted">
          <span>
            {profile.name} &mdash; {new Date().getFullYear()}
          </span>
          <a href="#top" className="transition hover:text-accent">
            topo &uarr;
          </a>
        </div>
      </footer>
    </>
  );
}
