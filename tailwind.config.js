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
        night: '#030712',
        panel: '#111827',
        card: '#1E293B',
        brand: '#3B82F6',
        react: '#61DAFB',
        lightblue: '#60A5FA',
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
      },
    },
  },

  plugins: [],
};