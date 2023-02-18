/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        spacing: {
          'neg7rem': '-7rem',
          'neg11rem': '-11rem',
          'neg32rem': '-32rem'
        },
        fontFamily: {
          sans: ['VT323', ...defaultTheme.fontFamily.sans]
        },
        colors: {
          'black': '#000000',
          'red': '#ff0000',
          'green': '#00ff00',
          'yellow': '#ffff00',
          'blue': '#0000ff',
          'magenta': '#ff00ff',
          'cyan': '#00ffff',
          'white': '#ffffff',
        },
    }
  },
  plugins: [],
}
