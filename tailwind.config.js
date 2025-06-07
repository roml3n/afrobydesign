/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supply: ["var(--font-supply)"],
        "pp-neue": ["var(--font-pp-neue-montreal)"],
      },
      colors: {
        "gray-0": "#FFFFFF",
        "gray-1": "#F5F5F5",
        "gray-5": "#737373",
        "gray-10": "#171717",
        "blue-main": "#1F35F9",
        "blue-hover": "#1125D6",
        "blue-5": "#ECEEFF",
        "blue-10": "#6776FF",
      },
    },
  },
  plugins: [],
};
