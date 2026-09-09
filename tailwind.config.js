/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          900: "#0b232f",
          800: "#0e2a38",
          700: "#14384a",
          600: "#1d5266",
          500: "#2b7085",
        },
        parchment: {
          100: "#f7ecd6",
          200: "#f2e2c4",
          300: "#e8d4ad",
          400: "#d9bd8a",
          500: "#c6a469",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e6c65c",
          dark: "#9c7b14",
        },
        seal: "#8f2d2d",
        ink: "#241c12",
      },
      fontFamily: {
        display: ['"Pirata One"', "cursive"],
        heading: ['"Cinzel"', "serif"],
        body: ['"EB Garamond"', "Georgia", "serif"],
      },
      boxShadow: {
        poster: "0 10px 30px -8px rgba(0,0,0,0.55), inset 0 0 60px rgba(90,60,20,0.25)",
      },
      keyframes: {
        sway: {
          "0%,100%": { transform: "rotate(-1.2deg)" },
          "50%": { transform: "rotate(1.2deg)" },
        },
        "compass-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
