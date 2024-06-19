/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#4232c5'
      },
      backgroundImage: {
        'font-page': "url('/images/salud.jpg')"
      },
    },
  },
  plugins: [],
}

