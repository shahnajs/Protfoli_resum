/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#d9e2f5',
          200: '#b3c5eb',
          300: '#8ca8e0',
          400: '#667bd6',
          500: '#4f5fcc',
          600: '#3f4bb3',
          700: '#333d92',
          800: '#2a3377',
          900: '#1a2b45',
        },
        accent: {
          50: '#eafcfa',
          100: '#d0f7f1',
          200: '#a6efe4',
          300: '#7de7d7',
          400: '#4ecdc4',
          500: '#34b3aa',
          600: '#268f8a',
          700: '#237270',
          800: '#205b5a',
          900: '#1c4a4a',
        },
        coral: {
          50: '#fff0f0',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa8a8',
          400: '#ff8585',
          500: '#ff6b6b',
          600: '#e93d3d',
          700: '#c42b2b',
          800: '#a12727',
          900: '#862626',
        },
      },
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};