/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        chackra: "'Chakra Petch', sans-serif"
      },
      backgroundImage: {
        'landscape': "url('/public/981236.png')"
      }
    }
  },
  plugins: [],
}
