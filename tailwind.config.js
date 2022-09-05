/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1f2021",
      secondary: "#cccdcf",
      thertiary: "#181a1c",
      grey: "#33d450",
      button: "#2278FD",
      white: "#fafafa",
      dark: "#050505",
      blue: "#3662E3",
      delete: "#bd1a25"
    }
  },
  plugins: [],
};
