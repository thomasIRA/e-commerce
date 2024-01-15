/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          200: '#c1e9ca',
          500: '#52A666'
        },
        comp: {
          200: '#f2d6ce',
          500: '#ff8673'
        },
        dark: '#190707',
      },
      fontSize: {
        xs: 'clamp(14px, 1.5vw, 18px)',
        text: 'clamp(16px, 1.75vw, 20px)',
        s: 'clamp(18px, 3vw, 24px)',
        m: 'clamp(24px, 3.75vw, 32px)',
        l: 'clamp(32px, 5vw, 48px)',
        xl: 'clamp(42px, 7vw, 60px)',
        huge: 'clamp(60px, 9.25vw, 96px)',
      }
    },
  },
  plugins: [],
}

