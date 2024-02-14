/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./Components/*{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
  }, darkMode: "class",
  plugins: [nextui()]
}

