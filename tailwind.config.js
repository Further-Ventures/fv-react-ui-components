/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--mercury-primary-color-light)',
          DEFAULT: 'var(--mercury-primary-color)',
          dark: 'var(--mercury-primary-color-dark)',
          contrast: 'var(--mercury-primary-color-contrast)',
        },
      },
    },
  },
  plugins: [],
};
