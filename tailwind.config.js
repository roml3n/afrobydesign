/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#FAFAFA",
          1: "#F2F2F2",
          5: "#797979",
          10: "#222222",
        },
      },
    },
  },
  plugins: [],
};
