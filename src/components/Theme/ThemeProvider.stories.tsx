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
     component with ThemeProvider and pass the theme as a property.`
  },
} as ComponentMeta<typeof ThemeChooser>;

const Template: ComponentStory<typeof ThemeChooser> = (args) => {
  const { theme } = args;
  
  return (
    <ThemeChooser {...args}>
      <div style={{fontFamily: 'sans-serif'}}>
        <h3 className='h3'>
          <span>background</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.background?.default}` }}/>
            <span>default: {theme.background?.default}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>default</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.dark}` }}/>
            <span>dark: {theme.default?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.main}` }}/>
            <span>main: {theme.default?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.light}` }}/>
            <span>light: {theme.default?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.default?.extraLight}` }}/>
            <span>extraLight: {theme.default?.extraLight}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>text</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.primary}` }}/>
            <span>dark: {theme.text?.primary}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.secondary}` }}/>
            <span>main: {theme.text?.secondary}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.disabled}` }}/>
            <span>light: {theme.text?.disabled}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.text?.hint}` }}/>
            <span>extraLight: {theme.text?.hint}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>primary</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.main}` }}/>
            <span>main: {theme.primary?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.light}` }}/>
            <span>light: {theme.primary?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.dark}` }}/>
            <span>dark: {theme.primary?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.contrast}` }}/>
            <span>contrast: {theme.primary?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.primary?.contrastSecondary}` }}/>
            <span>contrastSecondary: {theme.primary?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>error</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.main}` }}/>
            <span>main: {theme.error?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.light}` }}/>
            <span>light: {theme.error?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.dark}` }}/>
            <span>dark: {theme.error?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.contrast}` }}/>
            <span>contrast: {theme.error?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.error?.contrastSecondary}` }}/>
            <span>contrastSecondary: {theme.error?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>success</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.main}` }}/>
            <span>main: {theme.success?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.light}` }}/>
            <span>light: {theme.success?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.dark}` }}/>
            <span>dark: {theme.success?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.contrast}` }}/>
            <span>contrast: {theme.success?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.success?.contrastSecondary}` }}/>
            <span>contrastSecondary: {theme.success?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>warning</span>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.main}` }}/>
            <span>main: {theme.warning?.main}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.light}` }}/>
            <span>light: {theme.warning?.light}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.dark}` }}/>
            <span>dark: {theme.warning?.dark}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.contrast}` }}/>
            <span>contrast: {theme.warning?.contrast}</span>
          </p>
          <p className='p'>
            <span className='span' style={{ backgroundColor: `${theme.warning?.contrastSecondary}` }}/>
            <span>contrastSecondary: {theme.warning?.contrastSecondary}</span>
          </p>
        </h3>
        <h3 className='h3'>
          <span>gradient</span>
          <p className='p'>
            <span className='span' style={{ width: 150, background: `linear-gradient(${theme.gradient?.main?.degree}, ${theme.gradient?.main?.start} 0%, ${theme.gradient?.main?.end} 100%)` }}/>
            <span>main - start: {theme.gradient?.main?.start} / end: {theme.gradient?.main?.end} / degree: {theme.gradient?.main?.degree}</span>
          </p>
          <p className='p'>
          <span className='span' style={{ width: 150, background: `linear-gradient(${theme.gradient?.light?.degree}, ${theme.gradient?.light?.start} 0%, ${theme.gradient?.light?.end} 100%)` }}/>
          <span>light - start: {theme.gradient?.light?.start} / end: {theme.gradient?.light?.end} / degree: {theme.gradient?.light?.degree}</span>
          </p>
          <p className='p'>
          <span className='span' style={{ width: 150, background: `linear-gradient(${theme.gradient?.dark?.degree}, ${theme.gradient?.dark?.start} 0%, ${theme.gradient?.dark?.end} 100%)` }}/>
          <span>dark - start: {theme.gradient?.dark?.start} / end: {theme.gradient?.dark?.end} / degree: {theme.gradient?.dark?.degree}</span>
          </p>
        </h3>
      </div>
    </ThemeChooser>
  )
};

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: defaultTheme
};
