/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{html,hubl,js,ts,jsx,tsx}",
    "../components/**/*.{js,ts,jsx,tsx}",
    "../components/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
