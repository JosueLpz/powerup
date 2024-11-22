/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#1F1F1F',
          header: '#2A2A80'
        },
        text: {
          primary: '#E6E6E6',
          secondary: '#A9A9A9'
        },
        accent: {
          primary: '#8A2BE2',
          hover: '#6A1D9A'
        }
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
};