import { Section } from "@/components/ui";
import { useLang } from "@/hooks/useLang";

export function Experience() {
  const { t } = useLang();

  return (
    <Section id="experiencia">
      <ul className="border-t border-line">
        {t.experience.map((job) => (
          <li
            key={job.period + job.company}
            className="spec-row grid gap-x-8 gap-y-2 border-b border-line px-2 py-8 md:grid-cols-[12rem_1fr]"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-hot">
              {job.period}
            </span>
            <div>
              <h3 className="font-serif text-xl tracking-tight">
                {job.role}
                <span className="text-muted"> &mdash; {job.company}</span>
              </h3>
              <p className="mt-1 max-w-md text-muted">{job.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
