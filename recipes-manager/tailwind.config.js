/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#f5f3f0',
          100: '#e4e0d4',
        },
        brown: {
          300: '#9e7a47',
          600: '#6b4f3a',
          800: '#3e2c1c',
        },
        rose: {
          300: '#f2c3c4', 
          400: '#e92d3d', 
        },
      },
      fontFamily: {
        sans: ['Playfair Display', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
