// Fonte unica de cores e fontes do site.
// - tailwind.config.ts gera as classes (bg-bg, text-fg, font-mono...) a partir daqui
// - vite gera as variaveis CSS (:root / [data-theme="light"]) a partir daqui
// Trocou um valor aqui, muda no site inteiro.

export const fonts = {
  sans: '"Instrument Sans", system-ui, -apple-system, sans-serif',
  serif: '"Instrument Serif", Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
};

export const palette = {
  dark: {
    bg: "#0b0a09",
    "bg-subtle": "#141210",
    fg: "#e9e4d8",
    muted: "#817d72",
    border: "#2c2a25",
    hot: "#ff4326", // acento (vermelho)
    led: "#57d368", // status "disponivel"
  },
  light: {
    bg: "#ece7db",
    "bg-subtle": "#e1dbc9",
    fg: "#1a1712",
    muted: "#6a6458",
    border: "#cec6b1",
    hot: "#d1381d",
    led: "#2e9e3f",
  },
};

// aliases usados no codigo: border-line -> --border, text-accent -> --hot
export const colorAliases = {
  line: "border",
  accent: "hot",
} as const;
