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
      colors: {
        "gray-0": "#FFFFFF",
        "gray-1": "#F5F5F5",
        "gray-5": "#737373",
        "gray-10": "#171717",
        "blue-0": "#EFF6FF",
        "blue-1": "#DBEAFE",
      },
    },
  },
  plugins: [],
};
