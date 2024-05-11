/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        first:"#d62a5e",
        second:"#252525",
        third:"#131313"
      }
    },
  },
  plugins: [require('daisyui'),],
}

