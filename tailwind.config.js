/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          50: "#5463FF",
          100: "#185ADB",
          200: "#035397",
          300: "#001E6C",
          400: "#0A1931"
        },
        "yellow": {
          light: "#FCD900",
          regular: "#FFC947",
          dark: "#FFC300"
        },
        red: {
          regular: "#FF1818"
        },
        gray: {
          light: "#EFEFEF",
          regular: "#ECECEC",

        }
      }
    },
  },
  plugins: [],
}