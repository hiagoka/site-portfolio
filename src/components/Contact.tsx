import { profile } from "../data/portfolio";
import { Leader } from "./Leader";
import { Section } from "./Section";

export function Contact() {
  return (
    <>
      <Section id="contato" index={4} title="Contato" note="fim da ficha">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <p className="font-serif text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.05]">
            Vamos construir <span className="italic">algo</span>
            <span className="text-hot">?</span>
          </p>

          <div className="border-t border-line pt-4">
            <Leader k="Email">
              <a href={`mailto:${profile.email}`} className="hover:text-hot">
                {profile.email}
              </a>
            </Leader>
            {profile.socials.map((s) => (
              <Leader key={s.label} k={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-hot"
                >
                  {s.url.replace(/^https?:\/\//, "")}
                </a>
              </Leader>
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
            voltar ao topo &uarr;
          </a>
        </div>
      </footer>
    </>
  );
}
