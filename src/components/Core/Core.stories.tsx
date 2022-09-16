import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Core from './index';
import pkg from './package.json';

export default {
  title: 'components/Core',
  component: Core,
  parameters: {
    pkg,
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`,
  },
} as ComponentMeta<typeof Core>;

export const Theme = () => {
  return (
    <div className='font-mercury'>
      <div>
        <h3 className='p-2 text-4xl'>Fonts</h3>
        <p className='p-2'>
          <span className='font-mercury'>PP Object Sans, sans-serif</span>
        </p>
        <p className='p-2'>
          <span className='font-mercury-alt'>PP Monument Extended, sans-serif</span>
        </p>
      </div>
      <h3 className='p-2 text-4xl'>Colors</h3>
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
        <div className='shadow-lg border-background bg-background-secondary rounded-md border-4 w-60 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>
            Background Secondary: <br />
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
      <h4 className='p-2 text-lg w-full'>Elevation</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='shadow-extraLight bg-white rounded-md p-1 w-60 h-40 pt-4 flex flex-col justify-end'>
          <span className='p-8 text-center text-primary-contrast'>AAA</span>
          <span className='bg-white text-black w-full block rounded-md p-1'>Elevation Extra Light</span>
        </div>
      </div>
    </div>
  );
};
