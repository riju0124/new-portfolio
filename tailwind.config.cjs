/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#07111f",
        secondary: "#9eb2d1",
        tertiary: "#0f1d33",
        "black-100": "#0b1628",
        "black-200": "#07101e",
        "white-100": "#eef4ff",
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
