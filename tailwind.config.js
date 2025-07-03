/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'filmzi-bg': '#000000',
        'filmzi-text': '#FFFFFF',
        'filmzi-accent': '#FF0000',
        'filmzi-hover': '#ff4d4d',
      }
    },
  },
  plugins: [],
}
