import { siGithub, siInstagram, siWhatsapp, type SimpleIcon } from "simple-icons";
import { Section, TechIcon } from "@/components/ui";
import { profile } from "@/data/site";
import { useLang } from "@/hooks/useLang";

// LinkedIn saiu do simple-icons a pedido da propria LinkedIn; usamos um
// badge de letra "in", no mesmo espirito dos badges TS/JS do ticker.
const ICONS: Record<string, SimpleIcon | undefined> = {
  GitHub: siGithub,
  Instagram: siInstagram,
  WhatsApp: siWhatsapp,
};

export function Contact() {
  const { t } = useLang();
  const [a, b, c] = t.contactLine;

  return (
    <>
      <Section id="contato" note={t.ui.endOfSheet}>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <p className="font-serif text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.05]">
            {a} <span className="italic">{b}</span>
            <span className="text-hot">{c}</span>
          </p>

          <div className="flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className="btn-block w-full">
              {profile.email} <span aria-hidden>&rarr;</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              {profile.socials.map((s) => {
                const icon = ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline w-full"
                  >
                    {s.label}
                    {icon ? (
                      <TechIcon icon={icon} label={s.label} className="h-4 w-4" />
                    ) : (
                      <span className="font-mono text-[13px] font-semibold">in</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
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
