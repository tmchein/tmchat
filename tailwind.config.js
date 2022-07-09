/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueberry-300": "#6441A5",
        "blueberry-500": "#523587",
        "space-gray-300": "#e0e0e0",
      },
    },
  },
  plugins: [],
};
