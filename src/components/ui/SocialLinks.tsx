import { siGithub, siInstagram, siWhatsapp, type SimpleIcon } from "simple-icons";
import { profile } from "@/data/site";
import { TechIcon } from "./TechIcon";

// LinkedIn saiu do simple-icons a pedido da propria LinkedIn; usamos uma
// marca "in" com o mesmo tratamento visual dos badges de letra (TS/JS)
// que ja aparecem no ticker de tecnologias.
const ICONS: Record<string, SimpleIcon | undefined> = {
  GitHub: siGithub,
  Instagram: siInstagram,
  WhatsApp: siWhatsapp,
};

/** Botoes quadrados que levam aos perfis (GitHub, LinkedIn, Instagram, WhatsApp). */
export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {profile.socials.map((s) => {
        const icon = ICONS[s.label];
        return (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className="grid h-11 w-11 place-items-center border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            {icon ? (
              <TechIcon icon={icon} label={s.label} className="h-[18px] w-[18px]" />
            ) : (
              <span className="font-mono text-xs font-semibold tracking-tight">
                in
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
