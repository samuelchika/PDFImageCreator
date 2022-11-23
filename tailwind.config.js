/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alumni': ['"Alumni Sans Inline One", cursive', 'sans-serif'],
        'mavin' : ['"Maven Pro"', 'sans-serif'],
        'nunito': ['"Nunito Sans"', 'sans-serif']

      },
    },
  },
  plugins: [],
}
