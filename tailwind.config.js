/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'td-blue-dark': '#225B8E',
        'td-blue-mid': '#3699BA',
        'td-sky': '#45C5DE',
        'td-cyan': '#3BC2C7',
        'td-cyan-dark': '#2A898D',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}