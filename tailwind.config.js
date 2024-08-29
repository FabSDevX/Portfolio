/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        'bg-dark-theme': '#070F2B',
        'primary-color': '#F97316',
        'dark-text-paragraph-color': '#D1D5DB',
        'darkTheme-button-background': "#1F2937"
      }
    },
  },
  plugins: [],
}

