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
  const { icon, ...rest } = args as IStoryArgs;

  const iconSize = getIconSize(args.size);
  let componentArgs = rest;

  if (icon === 'left' || icon === 'both') {
    componentArgs = {
      ...componentArgs,
      contentLeft: <Icon icon='check_circle' size={iconSize} />,
    };
  }
  if (icon === 'right' || icon === 'both') {
    componentArgs = {
      ...componentArgs,
      contentRight: <Icon icon='check_circle' size={iconSize} />,
    };
  }

  return (
    <div className='storyWrapper'>
      <Chip {...componentArgs} />
    </div>
  );
};

export const ContainedSmallNoIcon = Template.bind({});
ContainedSmallNoIcon.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'small',
  color: 'primary',
  icon: 'none',
};

export const ContainedSmallIconLeft = Template.bind({});
ContainedSmallIconLeft.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'small',
  color: 'primary',
  icon: 'left',
};

export const ContainedSmallIconRight = Template.bind({});
ContainedSmallIconRight.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'small',
  color: 'primary',
  icon: 'right',
};

export const ContainedSmallIconsBothSides = Template.bind({});
ContainedSmallIconsBothSides.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'small',
  color: 'primary',
  icon: 'both',
};

export const ContainedLargeNoIcon = Template.bind({});
ContainedLargeNoIcon.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'large',
  color: 'primary',
  icon: 'none',
};

export const ContainedLargeIconLeft = Template.bind({});
ContainedLargeIconLeft.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'large',
  color: 'primary',
  icon: 'left',
};

export const ContainedLargeIconRight = Template.bind({});
ContainedLargeIconRight.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'large',
  color: 'primary',
  icon: 'right',
};

export const ContainedLargeIconsBothSides = Template.bind({});
ContainedLargeIconsBothSides.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'large',
  color: 'primary',
  icon: 'both',
};

export const OutlinedSmallNoIcon = Template.bind({});
OutlinedSmallNoIcon.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  icon: 'none',
};

export const OutlinedSmallIconLeft = Template.bind({});
OutlinedSmallIconLeft.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  icon: 'left',
};

export const OutlinedSmallIconRight = Template.bind({});
OutlinedSmallIconRight.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  icon: 'right',
};

export const OutlinedSmallIconsBothSides = Template.bind({});
OutlinedSmallIconsBothSides.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  icon: 'both',
};

export const OutlinedLargeNoIcon = Template.bind({});
OutlinedLargeNoIcon.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'large',
  color: 'primary',
  icon: 'none',
};

export const OutlinedLargeIconLeft = Template.bind({});
OutlinedLargeIconLeft.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'large',
  color: 'primary',
  icon: 'left',
};

export const OutlinedLargeIconRight = Template.bind({});
OutlinedLargeIconRight.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'large',
  color: 'primary',
  icon: 'right',
};

export const OutlinedLargeIconsBothSides = Template.bind({});

OutlinedLargeIconsBothSides.args = {
  label: 'Outlined',
  variant: 'outlined',
  size: 'large',
  color: 'primary',
  icon: 'both',
};

export const TransparentSmallNoIcon = Template.bind({});
TransparentSmallNoIcon.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'small',
  color: 'primary',
  icon: 'none',
};

export const TransparentSmallIconLeft = Template.bind({});
TransparentSmallIconLeft.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'small',
  color: 'primary',
  icon: 'left',
};

export const TransparentSmallIconRight = Template.bind({});
TransparentSmallIconRight.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'small',
  color: 'primary',
  icon: 'right',
};

export const TransparentSmallIconsBothSides = Template.bind({});
TransparentSmallIconsBothSides.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'small',
  color: 'primary',
  icon: 'both',
};

export const TransparentLargeNoIcon = Template.bind({});
TransparentLargeNoIcon.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'large',
  color: 'primary',
  icon: 'none',
};

export const TransparentLargeIconLeft = Template.bind({});
TransparentLargeIconLeft.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'large',
  color: 'primary',
  icon: 'left',
};

export const TransparentLargeIconRight = Template.bind({});
TransparentLargeIconRight.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'large',
  color: 'primary',
  icon: 'right',
};

export const TransparentLargeIconsBothSides = Template.bind({});
TransparentLargeIconsBothSides.args = {
  label: 'Transparent',
  variant: 'transparent',
  size: 'large',
  color: 'primary',
  icon: 'both',
};
