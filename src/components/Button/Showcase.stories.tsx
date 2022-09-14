import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { IButton } from './index';
import Icon from '../Icons';
import pkg from './package.json';
import './stories.scss';

interface IButtonShowcase {
  sizes: ReadonlyArray<IButton['size']>;
  shapes: ReadonlyArray<IButton['shape']>;
  colors: ReadonlyArray<IButton['color']>;
  variants: ReadonlyArray<IButton['variant']>;
  icon: string;
  disabled: boolean;
}

const ButtonShowCase: React.FC<IButtonShowcase> = (props) => {
  const { sizes, shapes, colors, variants, disabled, icon } = props;
  const cols = variants.length + 1;
  return (
    <div
      className='showcaseButtons'
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(10rem ,max-content))`,
      }}
    >
      <div />
      {variants.map((variant) => (
        <div key={variant}>{variant}</div>
      ))}
      {shapes.map((shape) => {
        return sizes.map((size) => {
          const iconSizes = {
            mini: 12,
            'tag-large': 15,
            'tag-small': 13.33,
          };
          const iconSize = (size && iconSizes[size]) ?? 20;
          return colors.map((color) => {
            const key = [shape, size, color].join('-');
            const label = icon !== 'only' ? `${color}` : undefined;
            const contentLeft = (icon === 'left' || icon === 'both' || icon === 'only') && <Icon icon='check_circle' size={iconSize} />;
            const contentRight = (icon === 'right' || icon === 'both') && <Icon icon='check_circle' size={iconSize} />;

            return (
              <>
                <p className='rowLabel' key={`${key}-1`}>
                  {size} {shape} {color}:
                </p>
                {variants.map((variant) => (
                  <Button
                    key={`${key}-${variant}`}
                    label={label}
                    variant={variant}
                    size={size}
                    shape={shape}
                    color={color}
                    disabled={disabled}
                    contentLeft={contentLeft}
                    contentRight={contentRight}
                  />
                ))}
              </>
            );
          });
        });
      })}
    </div>
  );
};

const ShowcaseTemplate: ComponentStory<typeof ButtonShowCase> = (args) => <ButtonShowCase {...args} />;

export const Default = ShowcaseTemplate.bind({});

Default.args = {
  sizes: ['mini', 'small', 'medium', 'large'],
  shapes: ['curved', 'round', 'flat'],
  colors: ['primary', 'error', 'grey'],
  variants: ['contained', 'outlined', 'transparent'],
  icon: 'none',
  disabled: false,
};

export default {
  title: 'Components/Button/Showcase',
  component: ButtonShowCase,
  parameters: {
    pkg,
  },
  argTypes: {
    sizes: { control: 'check', options: ['mini', 'small', 'medium', 'large'] },
    shapes: { control: 'check', options: ['curved', 'round', 'flat'] },
    colors: { control: 'check', options: ['primary', 'error', 'grey'] },
    variants: { control: 'check', options: ['contained', 'outlined', 'transparent'] },
    icon: {
      options: ['none', 'left', 'right', 'both', 'only'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { control: 'boolean' },
    },
  },
} as ComponentMeta<typeof ButtonShowCase>;
