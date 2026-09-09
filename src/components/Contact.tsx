import { profile } from "../data/portfolio";
import { useLang } from "../hooks/useLang";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();
  const [a, b, c] = t.contactLine;

  return (
    <>
      <Section
        id="contato"
        index={4}
        title={t.nav.contato}
        note={t.ui.endOfSheet}
      >
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <p className="font-serif text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.05]">
            {a} <span className="italic">{b}</span>
            <span className="text-hot">{c}</span>
          </p>

          <div className="border-t border-line pt-4">
            <div className="leader">
              <span className="leader__k">Email</span>
              <span className="leader__d" />
              <span className="leader__v">
                <a href={`mailto:${profile.email}`} className="hover:text-hot">
                  {profile.email}
                </a>
              </span>
            </div>
            {profile.socials.map((s) => (
              <div className="leader" key={s.label}>
                <span className="leader__k">{s.label}</span>
                <span className="leader__d" />
                <span className="leader__v">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-hot"
                  >
                    {s.url.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>

        <a href={`mailto:${profile.email}`} className="btn-block mt-10">
          {profile.email} <span aria-hidden>&rarr;</span>
        </a>
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
