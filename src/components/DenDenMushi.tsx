import { useState } from "react";
import { motion } from "framer-motion";
import { denDenMushi, pirate } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function DenDenMushi() {
  const [sent, setSent] = useState(false);

  return (
    <section id="den-den-mushi" className="parchment px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionTitle kicker="Puru puru puru" title="Den Den Mushi" />
        <p className="mx-auto mb-10 max-w-lg text-center font-body text-ink/75">
          {denDenMushi.message}
        </p>

        <div className="mx-auto mb-10 flex flex-wrap justify-center gap-3">
          {denDenMushi.channels.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="ink-border bg-parchment-100/70 px-4 py-2 font-heading text-xs uppercase tracking-widest text-ink transition hover:-translate-y-0.5 hover:bg-parchment-100"
            >
              {c.label} · <span className="normal-case tracking-normal">{c.value}</span>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = encodeURIComponent(String(data.get("message") ?? ""));
            const subject = encodeURIComponent(`Recado de ${data.get("name") ?? "alguem"}`);
            window.location.href = `mailto:${denDenMushi.channels[0].value}?subject=${subject}&body=${body}`;
            setSent(true);
          }}
          className="ink-border space-y-4 bg-parchment-100/60 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-seal">
                Nome
              </span>
              <input
                name="name"
                required
                className="mt-1 w-full border-2 border-ink/50 bg-parchment-100 px-3 py-2 font-body text-ink outline-none focus:border-seal"
              />
            </label>
            <label className="block">
              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-seal">
                Ilha de origem (email)
              </span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full border-2 border-ink/50 bg-parchment-100 px-3 py-2 font-body text-ink outline-none focus:border-seal"
              />
            </label>
          </div>
          <label className="block">
            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-seal">
              Mensagem
            </span>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full resize-none border-2 border-ink/50 bg-parchment-100 px-3 py-2 font-body text-ink outline-none focus:border-seal"
            />
          </label>
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full border-2 border-ink bg-seal py-3 font-heading text-sm uppercase tracking-[0.3em] text-parchment-100 transition hover:bg-ink"
          >
            {sent ? "Recado enviado ao correio" : "Enviar pelo Den Den Mushi"}
          </motion.button>
        </form>

        <p className="mt-10 text-center font-heading text-[10px] uppercase tracking-[0.3em] text-ink/45">
          {pirate.name} · {new Date().getFullYear()} · rumo ao One Piece
        </p>
      </div>
    </section>
  );
}
