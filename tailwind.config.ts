import type { Config } from "tailwindcss";
import { colorAliases, fonts, palette } from "./src/theme";

// cores: cada token vira uma classe que aponta pra variavel CSS (troca de tema em runtime)
const colors: Record<string, string> = {};
for (const key of Object.keys(palette.dark)) colors[key] = `var(--${key})`;
for (const [alias, target] of Object.entries(colorAliases)) {
  colors[alias] = `var(--${target})`;
}

const fontFamily: Record<string, string[]> = {};
for (const key of Object.keys(fonts)) fontFamily[key] = [`var(--font-${key})`];

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
      maxWidth: { content: "64rem" },
    },
  },
  plugins: [],
} satisfies Config;
