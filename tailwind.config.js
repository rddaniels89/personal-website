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
        // ==========================================
        // STANDARDIZED SEMANTIC COLOR SYSTEM
        // ==========================================
        
        // Primary Brand Colors
        primary: {
          50: '#EBF4FF',
          100: '#DBEAFE', 
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',  // Main brand blue
          600: '#2563EB',  // Darker brand blue
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        
        // Secondary/Accent Colors
        accent: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',  // Hot pink accent
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
          950: '#500724',
        },
        
        // Cyan/Electric Blue for highlights
        highlight: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',  // Main cyan
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          950: '#083344',
        },
        
        // Semantic UI Colors
        success: {
          50: '#F0FDF4',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        
        // Background & Surface Colors
        surface: {
          // Light theme surfaces
          light: {
            primary: '#FFFFFF',
            secondary: '#FAFAFA',
            tertiary: '#F5F5F5',
            elevated: '#FFFFFF',
          },
          // Dark theme surfaces  
          dark: {
            primary: '#0D0D0D',
            secondary: '#1A1A1A',
            tertiary: '#262626',
            elevated: '#1F1F1F',
          }
        },
        
        // Text Colors
        text: {
          // Light theme text
          light: {
            primary: '#1F2937',
            secondary: '#374151',
            tertiary: '#6B7280',
            inverse: '#FFFFFF',
          },
          // Dark theme text
          dark: {
            primary: '#F9FAFB',
            secondary: '#E5E7EB',
            tertiary: '#9CA3AF',
            inverse: '#1F2937',
          }
        },
        
        // Border Colors
        border: {
          light: {
            primary: '#E5E7EB',
            secondary: '#D1D5DB',
            accent: 'rgba(59, 130, 246, 0.2)',
          },
          dark: {
            primary: '#374151',
            secondary: '#4B5563',
            accent: 'rgba(0, 245, 255, 0.3)',
          }
        },
        
        // ==========================================
        // LEGACY COLORS (for backward compatibility)
        // ==========================================
        
        // Dystopian Theme Colors (mapped to new blue-violet cyberpunk system)
        'neon-cyan': '#3d43b4',     // primary in dystopian (Deep Blue-Violet)
        'neon-blue': '#8386f5',     // accent in dystopian (Light Periwinkle)
        'neon-pink': '#1afe49',     // highlight in dystopian (Neon Green) - renamed but kept for compatibility
        'neon-purple': '#8386f5',   // Light Periwinkle
        'electric-pink': '#1afe49', // highlight in dystopian (Neon Green)
        'cyber-black': '#041348',   // surface.dark.primary (Midnight Blue)
        'cyber-gray': '#083e12',    // surface.dark.secondary (Forest Green)
        'high-contrast': '#F8FAFC', // text.dark.primary
        'muted': '#9CA3AF',         // text.dark.tertiary
        
        // Modern Theme Colors (mapped to light grey system)
        'light-grey': '#F5F5F5',        // background
        'pure-white': '#FFFFFF',        // cards/surfaces
        'very-light-grey': '#EEEEEE',   // light sections
        'pure-black': '#000000',        // primary black
        'dark-grey': '#333333',         // secondary grey
        'medium-grey': '#666666',       // muted text
        'light-border': '#E0E0E0',      // borders
        'modern-primary': '#000000',    // primary (pure-black)
        'modern-accent': '#666666',     // accent (medium-grey)
        'modern-background': '#F5F5F5', // main background (light-grey)
        'modern-black': '#FFFFFF',      // surface (pure-white)
        'modern-gray': '#FFFFFF',       // surface (pure-white) - for backward compatibility
        'modern-text': '#000000',       // main text color
      },
      fontFamily: {
        'body': ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['var(--font-space-grotesk)', 'Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Legacy font families for backwards compatibility
        'cyber': ['Space Grotesk', 'monospace', 'sans-serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.625' }],
        'xl': ['1.25rem', { lineHeight: '1.625' }],
        '2xl': ['1.5rem', { lineHeight: '1.375' }],
        '3xl': ['1.875rem', { lineHeight: '1.375' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
        '6xl': ['3.75rem', { lineHeight: '1.25' }],
        '7xl': ['4.5rem', { lineHeight: '1.25' }],
        '8xl': ['6rem', { lineHeight: '1.25' }],
        '9xl': ['8rem', { lineHeight: '1.25' }],
      },
      letterSpacing: {
        'tighter': '-0.035em',
        'tight': '-0.025em',
        'normal': '-0.011em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
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