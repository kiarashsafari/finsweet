/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"media",
  theme: {
    extend: {
      colors: {
        yellow: "#FCD980",
        "dark-blue": "#282938",
        "tint-blue": "#1C1E53",
        "royal-blue": "#2405F2",
        "grey": "#F4F6FC",
        accent: "#EEF4FA",
      },
    },
  },
  plugins: [require("daisyui")],
};
