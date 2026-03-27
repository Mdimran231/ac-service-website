/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        card: '#1e293b',
        primary: '#38bdf8',
        accent: '#f43f5e',
      }
    },
  },
  plugins: [],
}