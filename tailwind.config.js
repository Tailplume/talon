/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu"],
      },
      colors: {
        "dark-purple": "#0E092F",
        "mid-purple": "#272150",
        "light-purple": "#3F376D",
        "muted-green": "#155638",
      },
    },
  },
  plugins: [],
};
