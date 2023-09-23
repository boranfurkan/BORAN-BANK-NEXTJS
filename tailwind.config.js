/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f28c28',
        secondary: '#aa6a2b',
        tertiary: '#492e13',
      },
      maxWidth: {
        'max-content': 'max-content',
      },
      backgroundImage: {
        'pig-pattern': "url('/pattern.png')"}
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}