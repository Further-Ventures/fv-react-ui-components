import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultTheme } from './defaultTheme';
import './ThemeProvider.stories.css';
import { ThemeChooser } from '../../storybook/preview/ThemeChooser';
import pkg from './package.json';

export default {
  title: 'components/Theme',
  component: ThemeChooser,
  parameters: {
    pkg,
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`,
  },
} as ComponentMeta<typeof ThemeChooser>;

const Template: ComponentStory<typeof ThemeChooser> = (args) => {
  const { theme } = args;

  return (
    <ThemeChooser {...args}>
      <div style={{ fontFamily: theme.font }}>
        <h3 className='h3'>
          <span>fonts</span>
          <p className='p'>
            <span style={{ fontFamily: theme.font }}>{theme.font}</span>
          </p>
          <p className='p'>
            <span style={{ fontFamily: theme.altFont }}>{theme.altFont}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>background</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.background?.default}` }} />
            <span>default: {theme.background?.default}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>default</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.dark}` }} />
            <span>dark: {theme.default?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.main}` }} />
            <span>main: {theme.default?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.light}` }} />
            <span>light: {theme.default?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.extraLight}` }} />
            <span>extraLight: {theme.default?.extraLight}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>text</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.primary}` }} />
            <span>dark: {theme.text?.primary}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.secondary}` }} />
            <span>main: {theme.text?.secondary}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.disabled}` }} />
            <span>light: {theme.text?.disabled}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.hint}` }} />
            <span>extraLight: {theme.text?.hint}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>primary</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.main}` }} />
            <span>main: {theme.primary?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.light}` }} />
            <span>light: {theme.primary?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.dark}` }} />
            <span>dark: {theme.primary?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.contrast}` }} />
            <span>contrast: {theme.primary?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.contrastSecondary}` }} />
            <span>contrastSecondary: {theme.primary?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>error</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.main}` }} />
            <span>main: {theme.error?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.light}` }} />
            <span>light: {theme.error?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.dark}` }} />
            <span>dark: {theme.error?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.contrast}` }} />
            <span>contrast: {theme.error?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.contrastSecondary}` }} />
            <span>contrastSecondary: {theme.error?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>success</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.main}` }} />
            <span>main: {theme.success?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.light}` }} />
            <span>light: {theme.success?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.dark}` }} />
            <span>dark: {theme.success?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.contrast}` }} />
            <span>contrast: {theme.success?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.contrastSecondary}` }} />
            <span>contrastSecondary: {theme.success?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>warning</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.main}` }} />
            <span>main: {theme.warning?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.light}` }} />
            <span>light: {theme.warning?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.dark}` }} />
            <span>dark: {theme.warning?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.contrast}` }} />
            <span>contrast: {theme.warning?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.contrastSecondary}` }} />
            <span>contrastSecondary: {theme.warning?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>gradient</span>
          <p className='p'>
            <span
              className='span'
              style={{
                width: 150,
                background: `linear-gradient(${theme.gradient?.main?.degree}, ${theme.gradient?.main?.start} 0%, ${theme.gradient?.main?.end} 100%)`,
              }}
            />
            <span>
              main - start: {theme.gradient?.main?.start} / end: {theme.gradient?.main?.end} / degree: {theme.gradient?.main?.degree}
            </span>
          </p>
          <p className='p'>
            <span
              className='span'
              style={{
                width: 150,
                background: `linear-gradient(${theme.gradient?.light?.degree}, ${theme.gradient?.light?.start} 0%, ${theme.gradient?.light?.end} 100%)`,
              }}
            />
            <span>
              light - start: {theme.gradient?.light?.start} / end: {theme.gradient?.light?.end} / degree: {theme.gradient?.light?.degree}
            </span>
          </p>
          <p className='p'>
            <span
              className='span'
              style={{
                width: 150,
                background: `linear-gradient(${theme.gradient?.dark?.degree}, ${theme.gradient?.dark?.start} 0%, ${theme.gradient?.dark?.end} 100%)`,
              }}
            />
            <span>
              dark - start: {theme.gradient?.dark?.start} / end: {theme.gradient?.dark?.end} / degree: {theme.gradient?.dark?.degree}
            </span>
          </p>
        </h3>
      </div>
    </ThemeChooser>
  );
};

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: defaultTheme,
};

export const TailwindTemplate = () => {
  return (
    <div className='font-mercury'>
      <div>
        <h3 className='p-2 text-3xl'>Fonts</h3>
        <p className='p-2'>
          <span className='font-mercury'>PP Object Sans, sans-serif</span>
        </p>
        <p className='p-2'>
          <span className='font-mercury-alt'>PP Monument Extended, sans-serif</span>
        </p>
      </div>
      <h3 className='p-2 text-3xl'>Colors</h3>
      <h4 className='p-2 text-lg w-full'>Primary</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-primary bg-primary rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Main: <br />
            #2400ff
          </span>
        </div>
        <div className='shadow-lg border-primary-light bg-primary-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Light: <br />
            #d1d3fd
          </span>
        </div>
        <div className='shadow-lg border-primary-dark bg-primary-dark rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Dark: <br />
            #17019c
          </span>
        </div>
        <div className='shadow-lg border-primary-contrast bg-primary-contrast rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast: <br />
            #000000
          </span>
        </div>
        <div className='shadow-lg border-primary-contrast-secondary bg-primary-contrast-secondary rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast secondary: <br />
            #ffffff
          </span>
        </div>
      </div>

      <h4 className='p-2 text-lg w-full'>Error</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-error bg-error rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-error-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Main: <br />
            #cc2418
          </span>
        </div>

        <div className='shadow-lg border-error-light bg-error-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-error-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Light: <br />
            #fbdcda
          </span>
        </div>

        <div className='shadow-lg border-error-dark bg-error-dark rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-error-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Dark: <br />
            #b91d12
          </span>
        </div>

        <div className='shadow-lg border-error-contrast bg-error-contrast rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-error-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast: <br />
            #000000
          </span>
        </div>

        <div className='shadow-lg border-error-contrast-secondary bg-error-contrast-secondary rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-error-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast secondary: <br />
            #ffffff
          </span>
        </div>
      </div>

      <h4 className='p-2 text-lg w-full'>Warning</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-warning bg-warning rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-warning-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Main: <br />
            #fe9e34
          </span>
        </div>

        <div className='shadow-lg border-warning-light bg-warning-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-warning-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Light: <br />
            #ffddb3
          </span>
        </div>

        <div className='shadow-lg border-warning-dark bg-warning-dark rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-warning-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Dark: <br />
            #eb621c
          </span>
        </div>

        <div className='shadow-lg border-warning-contrast bg-warning-contrast rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-warning-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast: <br />
            #000000
          </span>
        </div>

        <div className='shadow-lg border-warning-contrast-secondary bg-warning-contrast-secondary rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-warning-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast secondary: <br />
            #ffffff
          </span>
        </div>
      </div>
      <h4 className='p-2 text-lg w-full'>Success</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-success bg-success rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-success-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Main: <br />
            #088940
          </span>
        </div>

        <div className='shadow-lg border-success-light bg-success-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-success-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Light: <br />
            #b3dfca
          </span>
        </div>

        <div className='shadow-lg border-success-dark bg-success-dark rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-success-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Dark: <br />
            #007133
          </span>
        </div>

        <div className='shadow-lg border-success-contrast bg-success-contrast rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-success-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast: <br />
            #000000
          </span>
        </div>

        <div className='shadow-lg border-success-contrast-secondary bg-success-contrast-secondary rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-success-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Contrast secondary: <br />
            #ffffff
          </span>
        </div>
      </div>

      <h4 className='p-2 text-lg w-full'>Default (Grey)</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-default bg-default rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-text'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Main: <br />
            #c7ccd3
          </span>
        </div>

        <div className='shadow-lg border-default-extra-light bg-default-extra-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-text'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Extra Light: <br />
            #e4e7ec
          </span>
        </div>

        <div className='shadow-lg border-default-light bg-default-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-text'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Light: <br />
            #eff1f3
          </span>
        </div>

        <div className='shadow-lg border-default-dark bg-default-dark rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Dark: <br />
            #667985
          </span>
        </div>
      </div>

      <h4 className='p-2 text-lg w-full'>Text</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-text bg-text rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Main: <br />
            #000000
          </span>
        </div>

        <div className='shadow-lg border-text-extra-light bg-text-extra-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Extra Light: <br />
            #344054
          </span>
        </div>

        <div className='shadow-lg border-text-light bg-text-light rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Light: <br />
            #d2d2d2
          </span>
        </div>

        <div className='shadow-lg border-text-dark bg-text-dark rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Dark: <br />
            #667085
          </span>
        </div>
      </div>

      <h4 className='p-2 text-lg w-full'>Other</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg border-background bg-background rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Background: <br />
            #000000
          </span>
        </div>

        <div className='shadow-lg border-cool-20 bg-cool-20 rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Cool 20: <br />
            #eef3f8
          </span>
        </div>

        <div className='shadow-lg border-cool-40 bg-cool-40 rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Cool 40: <br />
            #d1ddeb
          </span>
        </div>

        <div className='shadow-lg border-cool-60 bg-cool-60 rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Cool 60: <br />
            #9cb2c9
          </span>
        </div>

        <div className='shadow-lg border-cool-90 bg-cool-90 rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Cool 90: <br />
            #375267
          </span>
        </div>

        <div className='shadow-lg border-cool-100 bg-cool-100 rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Cool 100: <br />
            #14212e
          </span>
        </div>
      </div>
      <h4 className='p-2 text-lg w-full'>Gradients</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-lg bg-gradient-to-tr from-cool-90 to-cool-60 rounded-md p-1 w-60 h-40 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Background: <br />
            #000000
          </span>
        </div>
        <div
          className='shadow-lg border-background bg-background rounded-md p-1 w-60 h-40 pt-4 flex flex-col justify-end'
          style={{
            background: 'linear-gradient(45deg, #375267 0%, #9cb2c9 100%)',
          }}
        >
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Background: <br />
            #000000
          </span>
        </div>
        <div className='shadow-lg bg-gradient-to-tr from-cool-90 to-cool-60 rounded-md p-1 w-40 h-96 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast-secondary'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Background: <br />
            #000000
          </span>
        </div>
        <div
          className='shadow-lg border-background bg-background rounded-md p-1 w-40 h-96 pt-4 flex flex-col justify-end'
          style={{
            background: 'linear-gradient(45deg, #375267 0%, #9cb2c9 100%)',
          }}
        >
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Background: <br />
            #000000
          </span>
        </div>
      </div>
    </div>
  );
};
