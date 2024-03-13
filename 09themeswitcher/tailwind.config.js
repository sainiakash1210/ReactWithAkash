/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", //if we wnat change color in HTML then we add this dark mode property in config of tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}

