/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans, Open Sans, sans-serif"],
      },
      colors: {
        primary: "#3C4043",
        selected: "#1D73E8"
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