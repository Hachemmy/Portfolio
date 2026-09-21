/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

  theme: {
    extend: {
      colors: {
        night: '#000000',
        panel: '#000000',
        card: '#0A0A0A',
        brand: '#aed0fc',
        react: '#61DAFB',
        lightblue: '#aed0fc',
        textPrimary: '#FFFFFF',
        textSecondary: 'rgba(255,255,255,0.7)',
      },
      boxShadow: {
        'halo': '0 0 80px rgba(174,208,252,0.25)',
      },
    },
  },

  plugins: [],
};