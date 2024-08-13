/** @type {import('tailwindcss').Config} */
// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'], // Add your chosen font here
      },
    },
  },
  plugins: [],
}