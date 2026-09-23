import { Fragment } from "react";
import { Section } from "@/components/ui";
import { profile } from "@/data/site";
import { useLang } from "@/hooks/useLang";

export function Contact() {
  const { t } = useLang();
  const [a, b, c] = t.contactLine;

  return (
    <>
      <Section id="contato" note={t.ui.endOfSheet}>
        <p className="font-serif text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.05]">
          {a} <span className="italic">{b}</span>
          <span className="text-hot">{c}</span>
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all font-mono text-2xl tracking-tight transition hover:text-hot sm:text-4xl"
        >
          {profile.email}
        </a>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {profile.socials.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <span aria-hidden>&middot;</span>}
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-hot"
              >
                {s.label}
              </a>
            </Fragment>
          ))}
        </div>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 pb-16 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>
            {profile.name} / {new Date().getFullYear()}
          </span>
          <a href="#top" className="hover:text-hot">
            {t.ui.backToTop} &uarr;
          </a>
        </div>
      </footer>
    </>
  );
}
