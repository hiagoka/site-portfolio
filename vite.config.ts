import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { fonts, palette } from "./src/theme.ts";

/** Gera `virtual:theme.css` (:root / [data-theme="light"]) a partir de src/theme.ts. */
function themeCss(): Plugin {
  const id = "virtual:theme.css";
  const resolved = "\0" + id;
  const vars = (obj: Record<string, string>) =>
    Object.entries(obj)
      .map(([k, v]) => `--${k}:${v}`)
      .join(";");
  const fontVars = Object.entries(fonts)
    .map(([k, v]) => `--font-${k}:${v}`)
    .join(";");

  const css = [
    `:root{color-scheme:dark;${fontVars};${vars(palette.dark)}}`,
    `:root[data-theme="light"]{color-scheme:light;${vars(palette.light)}}`,
  ].join("\n");

  return {
    name: "theme-css",
    resolveId: (source) => (source === id ? resolved : null),
    load: (moduleId) => (moduleId === resolved ? css : null),
  };
}

export default defineConfig({
  plugins: [react(), themeCss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
