/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'shady-dark-blue-1': '#1B1F3A',
        'shady-dark-blue-2': '#24294d',
        'muted-purple-1': '#53354A',
        'muted-shady-red-0': '#de6159',
        'muted-shady-red-1': '#A64942',
        'muted-shady-red-2': '#75312f',
        'muted-shady-red-3': '#3f1a19',
        'vibrant-orange-1': '#FF7844',
        'bright-color-1': '#e2e8f0',
        'bright-color-2': '#F7FAFE',
      },
      screens: {
        xxs: '450px',
        xs: '516px',
      },
    },
  },
  plugins: [],
};
