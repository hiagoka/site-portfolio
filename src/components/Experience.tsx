import { experience } from "../data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experiencia" index={3} title="Experiencia">
      <ul className="space-y-10">
        {experience.map((job) => (
          <li
            key={job.period + job.company}
            className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-10"
          >
            <span className="font-mono text-[11px] text-muted sm:pt-1.5">
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
