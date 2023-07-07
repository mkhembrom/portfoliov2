/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      boxShadow: {
        'boxshadow': '5px 5px 0px rgb(255,0,99)',
        'boxhovershadow': '0px 0px 0px rgb(255,0,99)',
      }
    },
  },
  plugins: [],
}