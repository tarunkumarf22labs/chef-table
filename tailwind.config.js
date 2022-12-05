const { getRoles } = require("@testing-library/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chefsgray: "#f3f7f9",
      },
    },
  },
  plugins: [],
};
