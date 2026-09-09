import { useEffect, useState } from "react";

const fmt = () =>
  new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

/** Relogio local HH:MM:SS — isolado para so ele re-renderizar por segundo. */
export function Clock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState(fmt);

  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} aria-label="Hora local">
      {time}
    </span>
  );
}
