import { profile } from "../data/portfolio";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section
      id="top"
      className="mx-auto grid min-h-[82vh] max-w-content items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr]"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          Ficha tecnica &mdash; 01
        </p>

        <h1 className="mt-4 font-serif text-[clamp(3rem,10vw,6.5rem)] font-normal leading-[0.9] tracking-[-0.01em]">
          {first}
          <br />
          <span className="italic">{rest.join(" ")}</span>
          <span className="text-hot">.</span>
        </h1>

        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="text-fg">{profile.role}</span>
          <span className="text-line">/</span>
          <span>{profile.location}</span>
          <span className="text-line">/</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="led" />
            {profile.available ? "Disponivel" : "Ocupado"}
          </span>
        </p>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
          {profile.intro}
        </p>

        <a href="#contato" className="btn-block mt-9">
          Entrar em contato <span aria-hidden>&rarr;</span>
        </a>
      </div>

      <figure className="mx-auto w-full max-w-[20rem] md:mx-0 md:ml-auto">
        <div className="relative aspect-[4/5] border border-line bg-bg-subtle">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover grayscale contrast-[1.05]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              [ retrato ]
            </div>
          )}
        </div>
        <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>Fig. 01</span>
          <span>{profile.name}</span>
        </figcaption>
      </figure>
    </section>
  );
}
