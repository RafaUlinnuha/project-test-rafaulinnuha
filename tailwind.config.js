/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        height: {
        '128': '32rem',
        '768': '48rem',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

