/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,css,scss}'],
  theme: {
    extend: {
      spacing: {
        5.5: '1.375rem',
        7.5: '1.875rem',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.9375rem'],
      },
      lineHeight: {
        'extra-tight': '1.2',
      },
      aspectRatio: {
        'one': '1/1',
        'paymentIcon': '17/12',
      },
      fontFamily: {
        mercury: ['"PP Object Sans", sans-serif'],
        'mercury-alt': ['"PP Monument Extended", sans-serif'],
        'mercury-icons': ['Material Symbols Rounded']
      },
      colors: {
        primary: {
          light: 'var(--mercury-primary-color-light)',
          DEFAULT: 'var(--mercury-primary-color)',
          medium: 'var(--mercury-primary-color-medium)',
          dark: 'var(--mercury-primary-color-dark)',
          contrast: 'var(--mercury-primary-color-contrast)',
          'contrast-secondary': 'var(--mercury-primary-color-contrast-secondary)',
        },
        error: {
          light: 'var(--mercury-error-color-light)',
          DEFAULT: 'var(--mercury-error-color)',
          medium: 'var(--mercury-error-color-medium)',
          dark: 'var(--mercury-error-color-dark)',
          contrast: 'var(--mercury-error-color-contrast)',
          'contrast-secondary': 'var(--mercury-error-color-contrast-secondary)',
        },
        warning: {
          light: 'var(--mercury-warning-color-light)',
          DEFAULT: 'var(--mercury-warning-color)',
          medium: 'var(--mercury-warning-color-medium)',
          dark: 'var(--mercury-warning-color-dark)',
          contrast: 'var(--mercury-warning-color-contrast)',
          'contrast-secondary': 'var(--mercury-warning-color-contrast-secondary)',
        },
        success: {
          light: 'var(--mercury-success-color-light)',
          DEFAULT: 'var(--mercury-success-color)',
          medium: 'var(--mercury-success-color-medium)',
          dark: 'var(--mercury-success-color-dark)',
          contrast: 'var(--mercury-success-color-contrast)',
          'contrast-secondary': 'var(--mercury-success-color-contrast-secondary)',
        },
        default: {
          'extra-light': 'var(--mercury-default-color-extra-light)',
          light: 'var(--mercury-default-color-light)',
          DEFAULT: 'var(--mercury-default-color)',
          dark: 'var(--mercury-default-color-dark)',
        },
        text: {
          primary: 'var(--mercury-text-color-primary)',
          secondary: 'var(--mercury-text-color-secondary)',
          disabled: 'var(--mercury-text-color-disabled)',
          hint: 'var(--mercury-text-color-hint)',
        },
        cool: {
          20: 'var(--mercury-cool-color-20)',
          40: 'var(--mercury-cool-color-40)',
          60: 'var(--mercury-cool-color-60)',
          90: 'var(--mercury-cool-color-90)',
          100: 'var(--mercury-cool-color-100)',
        },
        background: {
          DEFAULT: 'var(--mercury-background-color)',
        },
      },
    },
  },
  plugins: [],
};
