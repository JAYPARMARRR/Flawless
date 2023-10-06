/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-lg": "url('/src/assets/Home_main_Img.jpg')",
      },
      colors: {
        midPink: "rgb(251, 75, 122)",
        darkPink: "rgb(250, 45, 100)",
        lightGray: "rgb(30, 30, 36)",
      },
      
    },
  },
  plugins: [],
};
