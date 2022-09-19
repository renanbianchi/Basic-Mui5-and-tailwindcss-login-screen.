/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'rafael-gradient': 'linear-gradient(117deg, rgba(10,223,233,1) 0%, rgba(235,1,172,1) 57%)',
      }
    }
  },
  plugins: []
}
