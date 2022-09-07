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
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'className']), 
    icon: {
      options: ['none', 'left', 'right', 'both', 'only'],
      control: { type: 'radio' },
    }
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
    <div className='storyWrapper'>
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
  icon: 'none'
};
