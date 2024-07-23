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
        red: {
          dark: '#8c192f',
          DEFAULT: '#a41c30',
        },
        blue: {
          light: '#302d6e',
          DEFAULT: '#0f0335',
        },
        black: {
          slate: '#242323',
          DEFAULT: '#000000',
        },
        accent: {
          purple: '#b693e1',
        },
        light: {
          cream: '#f8f4f4',          
          grey: '#e0dedf',
        },
      },
      margin: {
        '2.5': '0.625rem',
        '3.75': '0.9375rem',
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
      aspectRatio: {
        'card': '3 / 4',
      },
    },
  },
  plugins: [],
}

