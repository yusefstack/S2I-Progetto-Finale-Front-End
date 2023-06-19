/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {spacing: {
      128: '56rem'
    },
    fontSize: {
      '10xl': '13rem',
    }
  },
  },
  plugins: [],
}