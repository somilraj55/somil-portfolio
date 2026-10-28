/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#09090b',
        panel: '#111114',
        line: '#27272a',
        lime: '#c6f277',
      },
      boxShadow: {
        glow: '0 0 80px rgba(198, 242, 119, 0.08)',
      },
    },
  },
  plugins: [],
}