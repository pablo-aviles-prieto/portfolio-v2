/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'shady-dark-blue-1': '#1B1F3A',
        'muted-purple-1': '#53354A',
        'muted-shady-red-1': '#A64942',
        'vibrant-orange-1': '#FF7844',
      },
    },
  },
  plugins: [],
};
