/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      themeYellow: "#F0880E",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
