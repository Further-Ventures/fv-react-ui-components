import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip, { IChip } from './index';
import Icon from '../Icons';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import './stories.scss';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'className', 'color', 'shape']),
    icon: {
      options: ['none', 'left', 'right', 'both'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Chip>;

interface IStoryArgs extends IChip {
  icon?: string;
  iconFill?: boolean;
}

const getIconSize = (size) => {
  const iconSizes = {
    mini: 12,
    large: 15,
    small: 13.33,
  };

  return (size && iconSizes[size]) ?? 20;
};

const Template: ComponentStory<typeof Chip> = (args) => {
  const { icon, iconFill = true, ...rest } = args as IStoryArgs;

  const iconSize = getIconSize(args.size);
  let componentArgs = rest;

  if (icon === 'left' || icon === 'both') {
    componentArgs = {
      ...componentArgs,
      contentLeft: <Icon icon='check' size={iconSize} fill={iconFill} />,
    };
  }
  if (icon === 'right' || icon === 'both') {
    componentArgs = {
      ...componentArgs,
      contentRight: <Icon icon='check' size={iconSize} fill={iconFill} />,
    };
  }

  return (
    <div className='storyWrapper'>
      <Chip {...componentArgs} />
    </div>
  );
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'small',
  color: 'primary',
  icon: 'none',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  icon: 'none',
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'small',
  color: 'primary',
  icon: 'none',
};
