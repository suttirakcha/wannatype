/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "7xl": "80px"
      },
      colors: {
        maingray: "#303030"
      }
    },
  },
  plugins: [],
}

