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
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'className', 'color']),
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

export const Default = Template.bind({});

Default.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'large',
  color: 'primary',
  icon: 'none',
};

export const Showcase = () => {
  const sizes: ReadonlyArray<IChip['size']> = ['large', 'small'];
  const variants: ReadonlyArray<IChip['variant']> = ['contained', 'outlined'];
  return (
    <div className='showcaseChips'>
      {sizes.map((size) => {
        const iconSize = getIconSize(size);
        return variants.map((variant) => {
          return (
            <>
              <p className='rowLabel'>
                {size} {variant}:
              </p>
              <Chip variant={variant} label={`${variant} `} size={size} />
              <Chip variant={variant} label={`${variant} `} size={size} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Chip variant={variant} label={`${variant} `} size={size} contentRight={<Icon icon='check_circle' size={iconSize} />} />
              <Chip variant={variant} label={`${variant} disabled`} disabled size={size} />
              <Chip
                variant={variant}
                label={`${variant} disabled`}
                size={size}
                disabled
                contentRight={<Icon icon='check_circle' size={iconSize} />}
              />
            </>
          );
        });
      })}
    </div>
  );
};
