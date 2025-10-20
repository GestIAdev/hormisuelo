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
        'hormi-black': '#1A1A1A',
        'hormi-yellow': '#FFD700',
        'hormi-white': '#F5F5F5',
        'hormi-gray': '#4B5563',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        breathe: 'breathe 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}