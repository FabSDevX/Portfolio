/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        'bg-dark-theme': '#070F2B',
        'primary-color': '#F97316'
      }
    },
  },
  plugins: [],
}

