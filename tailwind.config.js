/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '112': '28rem',
      },
      height: {
        '130': '32.5rem',
      },
      fontFamily: {
        sans: ["Noto Sans, Open Sans, sans-serif"],
      },
      colors: {
        primary: "#3C4043",
        selected: "#1D73E8",
        first: "#4598DF",
        second: "#C2CA51",
        tertiary: "#377745",
      }
    },
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1024px',
      xl: '1640px',
    },
  },
  plugins: [],
}