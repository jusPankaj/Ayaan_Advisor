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
        'exploreServices' :"url('./images/exploreServices.png')",
        'cta1':"url('./images/CTA1.jpeg')",
        'cta2':"url('./images/CTA2.jpeg')",
      },
      boxShadow: {
        'heavy': '0 10px 20px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

