/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-soft': 'hsl(240, 73%, 65%)',
        'blue-dark': 'hsl(238, 29%, 16%)',
        'violet-normal': 'hsl(273, 75%, 66%)',
        'red-soft': 'hsl(14, 88%, 65%)',
        'gray-dark': 'hsl(240, 6%, 50%)',
        'gray-light': 'hsl(240, 5%, 91%)',
        'gray-blue': 'hsl(240, 6%, 50%)',
      },
      fontFamily: {
        kumbhsans: ['Kumbh Sans', 'sans-serif'],
      },
      fontSize: {
        base: ['12px', '16px'],
      },
      backgroundImage: {
        'bg-mobile': "url('/src/assets/bg-pattern-mobile.svg')",
        'bg-desktop': "url('/src/assets/bg-pattern-desktop.svg')",
      },
    },
    screens: {
      mobile: '375px',
      desctop: '1440px',
    },
  },
  plugins: [],
};
