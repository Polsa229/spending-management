/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0121",
        secondary: "#4712a9",
        dark: "#0B0121",
        light: "#ECECEC",
        lightOverlay: '#e8e8e9',
      },
    },
    plugins: [],
  }
}