/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./Components/*{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      fontFamily:{
        Signature: ["Zeyada", "cursive"],
        scratch: [ "Protest Revolution", "sans-serif"],
        Common: ['Protest Riot', "sans-serif"]
      }
    },
  },
  plugins: [],
}

