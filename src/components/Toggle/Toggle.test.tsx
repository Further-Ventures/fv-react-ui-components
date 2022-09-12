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
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'className', 'color']),
    icon: {
      options: ['none', 'left', 'right', 'both'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tag>;

interface IStoryArgs extends ITag {
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

const Template: ComponentStory<typeof Tag> = (args) => {
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
      <Tag {...componentArgs} />
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
  const sizes: ReadonlyArray<ITag['size']> = ['large', 'small'];
  const variants: ReadonlyArray<ITag['variant']> = ['contained', 'outlined'];
  return (
    <div className='showcaseTags'>
      {sizes.map((size) => {
        const iconSize = getIconSize(size);
        return variants.map((variant) => {
          return (
            <>
              <p className='rowLabel'>
                {size} {variant}:
              </p>
              <Tag variant={variant} label={`${variant} `} size={size} />
              <Tag variant={variant} label={`${variant} `} size={size} contentLeft={<Icon icon='check_circle' size={iconSize} />} />
              <Tag variant={variant} label={`${variant} `} size={size} contentRight={<Icon icon='check_circle' size={iconSize} />} />
              <Tag variant={variant} label={`${variant} disabled`} disabled size={size} />
              <Tag variant={variant} label={`${variant} disabled`} size={size} disabled contentRight={<Icon icon='check_circle' size={iconSize} />} />
            </>
          );
        });
      })}
    </div>
  );
};
