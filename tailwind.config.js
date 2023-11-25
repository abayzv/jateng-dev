/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fff1fe',
          '100': '#ffe1fe',
          '200': '#ffc3fe',
          '300': '#ff94f9',
          '400': '#ff54f6',
          '500': '#ff16f4',
          '600': '#f500ff',
          '700': '#d100d9',
          '800': '#ad00b1',
          '900': '#800080',
          '950': '#620063',
        }
      }
    },
  },
  plugins: [],
}

