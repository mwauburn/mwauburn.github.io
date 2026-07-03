/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B',
        surface: '#16161A',
        amber: {
          DEFAULT: '#E8B14A',
          hover: '#f1c25e'
        },
        textPrimary: '#F5F5F0',
        textSecondary: '#8A8A85',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
