/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#006442',
        'brand-dark-green': '#004225',
        'brand-light-green': '#00A550',
        'insure-blue': '#07107a' // hero deep-blue accent (adjustable)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
