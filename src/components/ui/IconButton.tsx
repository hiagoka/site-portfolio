import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

/** Botao quadrado 36x36 com borda — base do toggle de tema e de idioma. */
export function IconButton({ children, className = "", ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={`grid h-9 w-9 place-items-center border border-line text-muted transition hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </button>
  );
}
