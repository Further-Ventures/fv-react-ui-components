import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag, { ITag } from './index';
import Icon from '../Icons';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import './stories.scss';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'className', 'shape', 'color', 'icon', 'variant']),
    icon: {
      options: ['none', 'left', 'right', 'both'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tag>;

interface IStoryArgs extends ITag {
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

const Template: ComponentStory<typeof Tag> = (args) => {
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
      <Tag {...componentArgs} />
    </div>
  );
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Contained',
  variant: 'contained',
  icon: 'none',
  size: 'small',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  icon: 'none',
  size: 'small',
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: 'Transparent',
  variant: 'transparent',
  icon: 'none',
  size: 'small',
};
