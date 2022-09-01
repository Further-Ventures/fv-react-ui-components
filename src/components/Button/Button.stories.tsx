import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { IButton } from './index';
import Placeholder from '../../storybook/icons/placeholder';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import './stories.scss';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    pkg,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'radio' },
    },
    size: {
      options: ['mini', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['flat', 'round', 'circle'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    ...buildExcludeArgTypes(['iconLeft', 'iconRight', 'className']),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className='story-wrapper'>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'medium',
  shape: 'round',
  color: 'primary',
};

export const Showcase = () => {
  const sizes: ReadonlyArray<IButton['size']> = ['mini', 'small', 'medium', 'large'];
  const shapes: ReadonlyArray<IButton['shape']> = ['round', 'circle', 'flat'];
  return (
    <div className='showcase'>
      {shapes.map((shape) => {
        return sizes.map((size) => {
          return (
            <>
              <p className='rowLabel'>
                {size} {shape}:
              </p>
              <Button label='Primary' size={size} shape={shape} />
              <Button label='Primary' size={size} shape={shape} iconLeft={<Placeholder />} />
              <Button label='Primary Outlined' variant='outlined' size={size} shape={shape} />
              <Button label='Error' color='error' size={size} shape={shape} />
              <Button label='Error Outlined' color='error' variant='outlined' size={size} shape={shape} />
              <p className='rowLabel'>
                {size} {shape} (disabled):
              </p>
              <Button label='Primary' disabled size={size} shape={shape} />
              <Button label='Primary' size={size} shape={shape} disabled iconLeft={<Placeholder />} />
              <Button label='Primary Outlined' variant='outlined' disabled size={size} shape={shape} />
              <Button label='Error' color='error' disabled size={size} shape={shape} />
              <Button label='Error Outlined' color='error' variant='outlined' disabled size={size} shape={shape} />
            </>
          );
        });
      })}
    </div>
  );
};
