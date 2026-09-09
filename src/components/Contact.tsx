import { profile } from "../data/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <>
      <Section id="contato" index={4} title="Contato">
        <div className="max-w-2xl">
          <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Vamos construir algo?
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-6 inline-flex items-center gap-2 text-lg"
          >
            <span className="border-b border-fg/30 pb-1 transition group-hover:border-accent">
              {profile.email}
            </span>
            <span aria-hidden className="text-accent transition group-hover:translate-x-1">
              &rarr;
            </span>
          </a>

          <div className="mt-8 flex gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-8 font-mono text-[11px] text-muted">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="transition hover:text-fg">
            Voltar ao topo &uarr;
          </a>
        </div>
      </footer>
    </>
  );
}
