/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The deep "Void" background from the top of the design
        background: "#0a0a0a", 
        // The slightly lighter charcoal for sections like "Our Services"
        surface: "#141414",
        // The "Gold" accent used on buttons and "VIP" text
        primary: {
          DEFAULT: "#D4AF37", // Classic Gold
          hover: "#B5952F",   // Darker gold for hover states
          light: "#F3E5AB",   // Champagne (for subtle highlights)
        },
        // The "Cream" background used behind the Fleet cars
        cream: "#F5F0E1",
      },
      fontFamily: {
        // Serif font for "Limousine VIP Transfers" (looks like Playfair Display)
        serif: ["var(--font-playfair)", ...fontFamily.serif],
        // Sans font for body text (looks like DM Sans or Manrope)
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        // The subtle gradient behind the Hero Car
        'hero-gradient': "radial-gradient(circle at 50% 50%, #2a2a2a 0%, #0a0a0a 100%)",
      },
    },
  },
  plugins: [],
};


