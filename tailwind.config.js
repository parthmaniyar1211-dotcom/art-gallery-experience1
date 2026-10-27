/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F6F2EB',
          200: '#EFE8DC',
          300: '#E5DCCF',
          400: '#D5C7B3',
        },
        sand: {
          50: '#F8F6F2',
          100: '#EFEAE1',
          200: '#E2D9CB',
          300: '#D0C3AF',
          400: '#B6A68F',
          500: '#9C8C74',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E6E4E2',
          200: '#C8C4C0',
          400: '#8A837C',
          500: '#676159',
          600: '#4D4740',
          700: '#38332D',
          800: '#26221D',
          900: '#171411',
          950: '#0F0D0B',
        },
        terracotta: {
          50: '#FDF6F3',
          100: '#F9ECE5',
          200: '#F2D3C4',
          400: '#D97E63',
          500: '#B8583B',
          600: '#9F472C',
          700: '#7E3621',
        },
        olive: {
          50: '#F6F7F3',
          100: '#EDF0E6',
          200: '#D7DDC8',
          400: '#89956C',
          500: '#69774B',
          600: '#53603A',
          700: '#3F492C',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'art': '0 20px 40px -15px rgba(23, 20, 17, 0.12)',
        'art-hover': '0 25px 50px -12px rgba(23, 20, 17, 0.22)',
        'frame-light': 'inset 0 0 0 1px rgba(0,0,0,0.1), 0 15px 35px -5px rgba(0,0,0,0.2)',
        'frame-dark': 'inset 0 0 0 2px #171411, 0 20px 45px -5px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
