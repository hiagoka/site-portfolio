import { profile } from "../data/portfolio";
import { useClock } from "../hooks/useClock";
import { Leader } from "./Leader";

export function Hero() {
  const time = useClock();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section
      id="top"
      className="mx-auto grid min-h-[82vh] max-w-content items-center gap-12 px-6 py-16 md:grid-cols-[1.35fr_1fr]"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          Ficha tecnica &mdash; 01
        </p>

        <h1 className="mt-4 font-serif text-[clamp(3.2rem,11vw,7rem)] font-normal leading-[0.9] tracking-[-0.01em]">
          {first}
          <br />
          <span className="italic">{rest.join(" ")}</span>
          <span className="text-hot">.</span>
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
          {profile.intro}
        </p>

        <a href="#contato" className="btn-block mt-9">
          Entrar em contato <span aria-hidden>&rarr;</span>
        </a>
      </div>

      <div className="border-t border-line pt-4">
        <Leader k="Funcao">{profile.role}</Leader>
        <Leader k="Base">{profile.location}</Leader>
        <Leader k="Local time">{time}</Leader>
        <Leader k="Stack">React Native / TS</Leader>
        <div className="leader">
          <span className="leader__k">Status</span>
          <span className="leader__d" />
          <span className="leader__v inline-flex items-center gap-2">
            <span className="led" />
            {profile.available ? "DISPONIVEL" : "OCUPADO"}
          </span>
        </div>
      </div>
    </section>
  );
}
