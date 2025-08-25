/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(87, 76, 145)',
          dark: 'rgb(132, 117, 249)',
        },
        background: {
          light: 'rgb(224, 222, 226)',
          dark: 'rgb(14, 14, 14)',
        },
        text: {
          light: 'rgb(65, 62, 62)',
          dark: 'rgb(255, 255, 255)',
        },
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 
