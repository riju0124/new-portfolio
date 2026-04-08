/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d1412",
        secondary: "#b9b2a6",
        tertiary: "#17201d",
        "black-100": "#111917",
        "black-200": "#0b100f",
        "white-100": "#f8f5ef",
      },
      boxShadow: {
        card: "0 30px 100px -24px rgba(0, 0, 0, 0.55)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
