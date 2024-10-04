/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "#ededed", //gray
        midground: "#433D8B", // purple
        accent: "#17153B",
        "midground-2": "#665fb0",
      },
      fontFamily: {
        play: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
