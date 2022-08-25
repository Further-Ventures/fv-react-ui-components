import { ITheme, ITypography } from './types';

export const defaultTheme: ITheme = {
  background: {
    default: '#FFF'
  },
  default: {
    dark: '#667985',
    main: '#C7CCD3',
    light: '#E4E7EC',
    extraLight: '#EFF1F3'
  },
  text: {
    primary: '#000',
    secondary: '#344054',
    disabled: '#D2D2D2',
    hint: '#667085'
  },
  primary: {
    main: '#2400FF',
    light: '#D1D3FD',
    dark: '#17019C',
    contrast: '#000'
  },
  error: {
    main: '#CC2418',
    light: '#FBDCDA',
    dark: '#B91D12',
    contrast: '#000'
  },
  success: {
    main: '#088940',
    light: '#B3DFCA',
    dark: '#007133',
    contrast: '#FFF'
  },
  warning: {
    main: '#FE9E34',
    light: '#FFDDB3',
    dark: '#EB621C',
    contrast: '#000'
  },
  font: 'PP Object Sans, sans-serif',
  altFont: 'PP Monument Extended, sans-serif',
  mobileView: 1023
};