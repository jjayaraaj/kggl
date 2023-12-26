/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#E6F4EA", // Much lighter green
          100: "#CDE7D8", // Lighter green
          200: "#A3D2B5", // Light green
          300: "#70B48D", // Medium light green
          400: "#2D7E57", // Your base green
          500: "#276B4A", // Slightly darker green
          600: "#20573C", // Dark green
          700: "#1A442F", // Darker green
          800: "#133221", // Even darker green
          900: "#0C2114", // Very dark green
        },

        yellow: {
          light: "#FCD900",
          regular: "#FFC947",
          dark: "#FFC300",
        },
        red: {
          regular: "#FF1818",
        },
        gray: {
          light: "#EFEFEF",
          regular: "#ECECEC",
        },
      },
    },
  },
  plugins: [],
};
