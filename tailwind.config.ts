import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdfff',
          300: '#8ecaff',
          400: '#59acff',
          500: '#3490ff',
          600: '#1f73f0',
          700: '#185cd1',
          800: '#1a4ca6',
          900: '#1c4283'
        },
        accent: {
          500: '#16a34a',
          600: '#15803d'
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(15, 23, 42, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
