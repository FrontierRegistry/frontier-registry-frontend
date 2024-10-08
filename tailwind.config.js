/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'], 
        emoji: ['emoji', 'sans-serif'], 
        inter: ['inter', 'sans-serif'], 
      },
      colors: {
        "custom-ttlclr":"#04121D",
        "back-blue":"#1867B6",
        "custom-blue":"#22AFF1"
      }, 
      screens: {
        "xxl":"1280px",
      }
    },
  },
  plugins: [],
})