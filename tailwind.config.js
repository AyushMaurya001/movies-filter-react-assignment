/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base1: "#000114",
        base2: "#00093D",
        base3: "#001366",
        base4: "#043FC9",
        base5: "#6196FF",
      }
    },
  },
  plugins: [],
}

