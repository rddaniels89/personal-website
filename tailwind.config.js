/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dystopian Theme Colors
        'neon-pink': '#FF006E',
        'neon-blue': '#00F5FF',
        'neon-purple': '#9D00FF',
        'cyber-black': '#0D0D0D',
        'cyber-gray': '#1A1A1A',
        
        // Modern Theme Colors
        'modern-black': '#FAFAFA',  // Light cream background
        'modern-gray': '#F5F5F5',   // Slightly darker cream for contrast
        'modern-accent': '#2563EB',  // Refined blue accent
        'modern-text': '#1F2937',    // Dark gray text for contrast
      },
      fontFamily: {
        'cyber': ['BlenderPro', 'sans-serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'scanline': 'scanline 6s linear infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 