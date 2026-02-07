/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Slate 900 (Dark Blue-ish Black)
        brand: '#2563eb',   // Blue 600 (Vibrant Blue)
        'brand-dark': '#1e40af', // Blue 800
        'brand-light': '#eff6ff', // Blue 50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
