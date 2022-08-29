import React from 'react';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

declare global {
  namespace DesignSystem {
    interface IProjectTheme {}
  }
}

export type ThemeType = ITheme & DesignSystem.IProjectTheme;
export type CustomTheme = RecursivePartial<ThemeType> & RecursivePartial<DesignSystem.IProjectTheme> & Record<string, any>;

export interface IThemeContext {
  theme: ThemeType;
  updateTheme: (updatedTheme: CustomTheme) => void;
}

export interface IThemeProvider {
  theme: CustomTheme;
  children: React.ReactNode,
}

export type createStylesOptions = {
  name?: string;
  index?: number;
}

interface IPalette {
  main: string,
  dark: string,
  light: string,
  contrast: string,
  contrastSecondary?: string
}

interface IDefaultPalette {
  main: string,
  dark: string,
  light: string,
  extraLight: string,
}
interface IGradient {
  start: string,
  end: string,
  degree: string
}
interface IGradientPalette {
  main?: IGradient,
  light?: IGradient,
  dark?: IGradient,
}

export interface ITheme {
  primary: IPalette,
  secondary?: IPalette,
  error: IPalette,
  success: IPalette,
  warning: IPalette,
  default: IDefaultPalette,
  background: {
    default: string,
  },
  text: {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  },
  gradient: IGradientPalette,
  font: string,
  altFont?: string,
  mobileView: number
}
