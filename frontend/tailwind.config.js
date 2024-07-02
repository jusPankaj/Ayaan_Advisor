/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins'],
        sansation: ['Sansation', 'sans-serif'],
      },
      backgroundImage: {
        'hero-section': "url('./images/hero_section.webp')",
        'hero_bg': "url('./images/hero_bg.png')",
        'exploreServices' :"url('./images/exploreServices.png')"
      },
      boxShadow: {
        'heavy': '0 10px 20px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

