/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0038a7',
        'second-color': '#cf2e2e',
        'bg-color': '#0038a7',
      },
    },
    fontFamily: {
      'font-roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
