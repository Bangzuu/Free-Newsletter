/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 32px rgba(255, 42, 184, 0.32)",
        glass: "0 30px 120px rgba(10, 2, 40, 0.45)",
      },
    },
  },
  plugins: [],
};
