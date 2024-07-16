/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        red: '#a41c30',
        blue: {
          dark: '#0f0335',
          light: '#302d6e',
        },
        black: {
          slate: '#242323',
          default: '#000000',
        },
        accent: {
          purple: '#d0baeb',
        },
        light: {
          cream: '#f8f4f4',          
          grey: '#e0dedf',
        },
      },
      margin: {
        '2.5': '0.625rem',
        '7.5': '1.875rem',
      },
      spacing: {
        '2.5': '0.625rem',
        '7.5': '1.875rem',
      },
      zIndex: {
        '0': '0',
        '1': '1',
        '5': '5',
      },
    },
  },
  plugins: [],
}

