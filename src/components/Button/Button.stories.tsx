import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { IButton } from './index';
import Icon from '../Icons';
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
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'className']), icon: {
      options: ['none', 'left', 'right', 'both', 'only'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

interface IStoryArgs extends IButton {icon?: string}

const Template: ComponentStory<typeof Button> = (args) => {
  const { icon, ...rest } = args as IStoryArgs;

  const iconSize = args.size === 'mini' ? 12 : 20;
  let componentArgs = rest;

  if(icon === 'left' || icon ==='both') {
    componentArgs = {
      ...componentArgs,
      contentLeft: <Icon icon='check_circle' size={iconSize} />
    }
  }
  if(icon === 'right' || icon ==='both') {
    componentArgs = {
      ...componentArgs,
      contentRight: <Icon icon='check_circle' size={iconSize} />
    }
  }
  if(icon === 'only') {
    componentArgs = {
      ...componentArgs,
      contentLeft: <Icon icon='check_circle' size={iconSize} />,
      label: undefined,
    }
  }

  return (
    <div className='story-wrapper'>
      <Button {...componentArgs} />
    </div>
  );
}

export const Default = Template.bind({});

Default.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'medium',
  shape: 'curved',
  color: 'primary',
};

export const Showcase = () => {
  const sizes: ReadonlyArray<IButton['size']> = ['mini', 'small', 'medium', 'large'];
  const shapes: ReadonlyArray<IButton['shape']> = ['curved', 'round', 'flat'];
  return (
    <div className='showcaseButtons'>
      {shapes.map((shape) => {
        return sizes.map((size) => {
          const iconSize = size === 'mini' ? 12 : 20;
          return (
            <>
              <p className='rowLabel'>
                {size} {shape}:
              </p>
              <Button label='Primary' size={size} shape={shape} />
              <Button label='Primary' size={size} shape={shape} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Button label='Primary' size={size} shape={shape} contentRight={<Icon icon='check_circle' size={iconSize} />} />
              <Button size={size} shape={shape} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Button label='Primary Outlined' variant='outlined' size={size} shape={shape} />
              <Button label='Error' color='error' size={size} shape={shape} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Button label='Error' color='error' size={size} shape={shape} />
              <Button label='Error Outlined' color='error' variant='outlined' size={size} shape={shape} />
              <p className='rowLabel'>
                {size} {shape} (disabled):
              </p>
              <Button label='Primary' disabled size={size} shape={shape} />
              <Button label='Primary' size={size} shape={shape} disabled contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Button label='Primary' size={size} shape={shape} disabled contentRight={<Icon icon='check_circle' size={iconSize} />} />
              <Button size={size} shape={shape} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Button label='Primary Outlined' variant='outlined' disabled size={size} shape={shape} />
              <Button label='Error' color='error' disabled size={size} shape={shape} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Button label='Error' color='error' size={size} shape={shape} />
              <Button label='Error Outlined' color='error' variant='outlined' disabled size={size} shape={shape} />
            </>
          );
        });
      })}
    </div>
  );
};
