import type { SimpleIcon } from "simple-icons";

type Props = { icon: SimpleIcon; label: string; className?: string };

/** Logo monocromatico de uma tecnologia (usa currentColor). */
export function TechIcon({ icon, label, className = "h-3.5 w-3.5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      className={`fill-current ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
