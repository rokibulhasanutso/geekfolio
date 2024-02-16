/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // mode colors
        'mode-dark': '#1d1d1d',
        'mode-light': '#f1f3f5',
        'deep-dark': '#1a1a1a',
        'shadow-orange': '#f08f74'
      },
      backgroundImage: {
        // hero section background graph
        'graph-hero': 'url("./assets/images/illustration-graph-hero.png")'
      },
      backgroundSize: {
        '1/2': '50%',
      },
      listStyleImage: {
        checkmark: 'url("./assets/checkMark.svg")',
        downarrow: 'url("./assets/downArrow.svg")',
      },
      padding: {
        'section': '120px'
      }
    },
  },
  plugins: [],
}