import { ITheme } from './types';

export const defaultTheme: ITheme = {
  background: {
    default: '#FFFFFF'
  },
  default: {
    dark: '#667985',
    main: '#C7CCD3',
    light: '#E4E7EC',
    extraLight: '#EFF1F3'
  },
  text: {
    primary: '#000000',
    secondary: '#344054',
    disabled: '#D2D2D2',
    hint: '#667085'
  },
  primary: {
    main: '#2400FF',
    light: '#D1D3FD',
    dark: '#17019C',
    contrast: '#FFFFFF',
    contrastSecondary: '#000000'
  },
  error: {
    main: '#CC2418',
    light: '#FBDCDA',
    dark: '#B91D12',
    contrast: '#FFFFFF',
    contrastSecondary: '#000000'
  },
  success: {
    main: '#088940',
    light: '#B3DFCA',
    dark: '#007133',
    contrast: '#FFFFFF',
    contrastSecondary: '#000000'
  },
  warning: {
    main: '#FE9E34',
    light: '#FFDDB3',
    dark: '#EB621C',
    contrast: '#FFFFFF',
    contrastSecondary: '#000000'
  },
  gradient: {
    main: {
      start: '#375267',
      end: '#9CB2C9',
      degree: '45deg'
    },
    light: {
      start: '#D1DDEB',
      end: '#EEF3F8',
      degree: '45deg'
    },
    dark: {
      start: '#14212E',
      end: '#375267',
      degree: '45deg'
    }
  },
  font: 'PP Object Sans, sans-serif',
  altFont: 'PP Monument Extended, sans-serif',
  mobileView: 1023
};
