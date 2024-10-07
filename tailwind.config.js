/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        '9/16': '56.25%' // 16:9 aspect ratio
      }
    },
  },
  plugins: [],
}


