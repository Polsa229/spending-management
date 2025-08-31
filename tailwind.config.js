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
        primary: {
          DEFAULT: "#7C5CFC",
          100: "#E7DEFE",
          200: "#CEBEFE",
          300: "#B49DFE",
          400: "#9F84FD",
          500: "#7C5CFC",
          600: "#5E43D8",
          700: "#432EB5",
          800: "#2D1D92",
          900: "#1D1178"
        },
        secondary: {
          DEFAULT: "#1A202C",
          10: "#F3F5F7",
          100: "#E0E9F4",
          200: "#C3D4E9",
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
          600: "#131825",
          700: "#0D121F",
          800: "#080C19",
          900: "#040815"
        },
        dark: "#0B0121",
        light: "#ECECEC",
        lightOverlay: '#e8e8e9',
      },
    },
    plugins: [],
  }
}