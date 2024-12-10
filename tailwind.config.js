/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'flamingo': {
        100: '#FFF8FB',
        200: '#FEDDEA',
        300: '#FF0054',
        400: '#e30e54',
      },
      'midnight': {
        300: '#900461',
        400: '#26165d',
      },
      'grey': {
        50: '#FFFFFF', /** white */
        200: '#D1CFD8', /** light grey */
        300: '#6E6E6E', /** dark grey */
        400: '#222222', /** black */
      }
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

