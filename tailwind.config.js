/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,css,scss}'],
  safelist: [
    { pattern: /text-(primary|error|warning|success|cool|default|text)/ },
    { pattern: /fill-(primary|error|warning|success|cool|default|text)/ },
    { pattern: /stroke-(primary|error|warning|success|cool|default|text)/ },
    { pattern: /shadow-(extraLight|light|medium|heavy|extraHeavy)/ },
  ],
  theme: {
    extend: {
      borderWidth: {
        1.5: '1.5px',
      },
      spacing: {
        0.775: '0.21875rem',
        1.525: '0.34375rem',
        2.125: '0.5625rem',
        3.525: '0.9375rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
      },
      fontFamily: {
        mercury: ['"PP Object Sans", sans-serif'],
        'mercury-alt': ['"PP Monument Extended", sans-serif'],
        'mercury-icons': ['Material Symbols Rounded'],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.9375rem'],
        xxs: '.625rem', // 10px
        base2: '1.125rem', // 18px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '2.625rem', // 42px
        '4xl': '3rem', // 48px
        '5xl': '3.375rem', // 54px
        '6xl': '3.75rem', // 60px
        '7xl': '4.25rem', // 68px
      },
      lineHeight: {
        none: 1,
        'extra-tight': '1.2',
        tight: 1.25,
        snug: 1.3,
        normal: 1.5,
      },
      aspectRatio: {
        one: '1/1',
        paymentIcon: '17/12',
      },
      transitionDuration: {
        250: '250ms',
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
      boxShadow: {
        extraLight: '0 1px 2px var(--mercury-shadow-color-dark), 0 1px 3px 1px var(--mercury-shadow-color-light)',
        light: '0 1px 2px var(--mercury-shadow-color-dark), 0 2px 6px 2px var(--mercury-shadow-color-light)',
        medium: '0 1px 3px var(--mercury-shadow-color-dark), 0 4px 8px 3px var(--mercury-shadow-color-light)',
        heavy: '0 2px 3px var(--mercury-shadow-color-dark), 0 6px 10px 4px var(--mercury-shadow-color-light)',
        extraHeavy: '0 4px 4px var(--mercury-shadow-color-dark), 0 8px 12px 6px var(--mercury-shadow-color-light)',
      },
    },
  },
  plugins: [],
};
