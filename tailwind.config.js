/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pBlue : "#161F30",
        pGray : '#97A6A0',
        pPurple: '#3F3D56'
      },
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"],
        julius: ["Julius Sans One", "sans-serif"],
        quicksand : ["Quicksand", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

