/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusjakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      height: {
        'screen-minus-navbar': 'calc(100vh - 64px)',
      },
      colors: {
        primary: "#7C5CFC",
        primary100: "#E7DEFE",
        primary500: "#7C5CFC",
        secondary: "Secondary/500",
        secondary700: "#0D121F",
        secondary10: "#F3F5F7",
        secondary100: "#F3F5F7",
        secondary200: "#C3D4E9",
        secondary300: "#90A3BF",
        secondary400: "#596780",
        secondary500: "#1A202C",
        secondary900: "#040815",
        dark: "#0B0121",
        light: "#ECECEC",
        lightOverlay: '#e8e8e9',
      },
    },
    plugins: [],
  }
}