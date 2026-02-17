/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        retro: ['"VT323"', 'monospace'],
      },
      colors: {
        'retro-bg': '#1a1b26',
        'retro-green': '#41fa75',
        'retro-purple': '#bd93f9',
        'retro-pink': '#ff79c6',
        'retro-yellow': '#f1fa8c',
        'retro-cyan': '#8be9fd',
        'retro-comment': '#6272a4',
      },
      boxShadow: {
        pixel: '4px 4px 0px 0px rgba(0,0,0,0.5)',
        'pixel-hover': '2px 2px 0px 0px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};