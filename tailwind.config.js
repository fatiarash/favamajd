/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#14435E",
        yellow: "#FBAC18",
        gray: "#B4B4B5",
      },
      fontSize: {
        xs: ["14px", "16px"],
        sm: ["15px", "18px"],
        base: ["16px", "19px"],
      },
    },
  },
  plugins: [],
};
