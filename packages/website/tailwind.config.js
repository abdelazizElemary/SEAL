/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gradient: {
          start: '#0316E1',
          end: '#9314F5',
        },
      },
    },
  },
  plugins: [],
}
