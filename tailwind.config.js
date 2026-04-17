/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0f1a",
        ink: "#111827",
        electric: "#7c3aed",
      },
      boxShadow: {
        glow: "0 0 35px rgba(124, 58, 237, 0.35)",
      },
    },
  },
  plugins: [],
};
