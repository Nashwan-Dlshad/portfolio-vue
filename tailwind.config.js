/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  //dark mode
  darkMode: "class", // or 'media' or 'class'
 
  theme: {
    extend: {
      colors: {
        gprimary:"#29b78d",
        bprimary:"#30aee0",
        dbg:"#191A19"
    },
    },
  },
  
  // dark theme

  plugins: [],
}

