/** @type {import('tailwindcss').Config} */



const TOPSTRIP_BLUE = "#1c4670"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '40%': '40%',
    },
    extend: {
      colors:{
        top_strip_blue: TOPSTRIP_BLUE,
      }
    },
  },
  plugins: [],
}