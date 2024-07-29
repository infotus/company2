/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          "0%": {
            transform: "translateY(0) rotate(0)",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(180deg)",
          }
        },
      },
      animation: {
        rotate: "rotate 1s forwards"
      }
    },
  },
  plugins: [],
}

