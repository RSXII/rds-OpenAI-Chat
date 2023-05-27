/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.scss"],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        100: '#8a1212',
        200: '#9a3428',
        300: '#aa4e40',
        400: '#b96758',
        500: '#c78072',
        600: '#d4998c'
      },
      dark: {
        100: '#121212',
        200: '#282828',
        300: '#3f3f3f',
        400: '#575757',
        500: '#717171',
        600: '#8b8b8b'
      },
      mixed: {
        100: '#1f1512',
        200: '#342a28',
        300: '#4a413f',
        400: '#625957',
        500: '#7a7271',
        600: '#938d8b'
      },
      white: '#ffffff',
      black: '#000000'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
