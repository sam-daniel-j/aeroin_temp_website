/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f1',
          200: '#b3c5e3',
          300: '#7e9bcd',
          400: '#4a6cb0',
          500: '#2e4f8f',
          600: '#1e3a6f',
          700: '#152a52',
          800: '#0e1d3d',
          900: '#0a142b',
          950: '#060d1c',
        },
        midnight: {
          900: '#050810',
          950: '#030509',
        },
        electric: {
          400: '#4d9fff',
          500: '#2d7fff',
          600: '#1660e6',
        },
        accent: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      backgroundImage: {
        'space-radial':
          'radial-gradient(ellipse at 70% 20%, rgba(45,127,255,0.18), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(139,92,246,0.14), transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
