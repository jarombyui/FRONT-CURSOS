/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',    // Deep blue
        secondary: '#3B82F6',  // Bright blue
        accent: '#60A5FA',     // Light blue
        background: '#FFFFFF', // White
        text: '#1F2937',      // Dark gray for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 