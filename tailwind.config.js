/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#006442', // Old Mutual green
        'brand-dark-green': '#004225', // darker variant for hover
        'brand-light-green': '#00A550', // lighter green accent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
