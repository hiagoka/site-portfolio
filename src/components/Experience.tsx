import { experience } from "../data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experiencia" index={3} title="Experiencia">
      <ul>
        {experience.map((job) => (
          <li
            key={job.period + job.company}
            className="row-hover grid gap-2 border-b border-line py-7 first:border-t sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <span className="font-mono text-[11px] uppercase tracking-wide text-accent sm:pt-1.5">
              {job.period}
            </span>
            <div>
              <h3 className="text-lg font-medium tracking-tight">
                {job.role}
                <span className="text-muted"> — {job.company}</span>
              </h3>
              <p className="mt-1 max-w-lg text-muted">{job.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
