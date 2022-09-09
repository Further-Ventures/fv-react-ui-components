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
}

const ButtonShowCase: React.FC<IButtonShowcase> = (props) => {
  const { sizes, shapes, colors } = props;
  return (
    <div className='showcaseButtons'>
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
            return (
              <>
                <p className='rowLabel' key={`${key}-1`}>
                  {size} {shape} {color}:
                </p>
                <Button key={`${key}-2`} label={`${color}`} size={size} shape={shape} color={color} />
                <Button
                  key={`${key}-3`}
                  label={`${color}`}
                  size={size}
                  shape={shape}
                  contentLeft={<Icon icon='check_circle' size={iconSize} />}
                  color={color}
                />
                <Button
                  key={`${key}-4`}
                  label={`${color}`}
                  size={size}
                  shape={shape}
                  contentRight={<Icon icon='check_circle' size={iconSize} />}
                  color={color}
                />
                <Button key={`${key}-5`} size={size} shape={shape} contentLeft={<Icon icon='check_circle' size={iconSize} />} color={color} />
                <Button key={`${key}-6`} label='Outlined' variant='outlined' size={size} shape={shape} color={color} />
                <Button key={`${key}-7`} label='Disabled' disabled size={size} shape={shape} color={color} />
                <Button
                  key={`${key}-8`}
                  label='Disabled'
                  size={size}
                  shape={shape}
                  disabled
                  contentRight={<Icon icon='check_circle' size={iconSize} />}
                  color={color}
                />
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
  colors: ['primary', 'error'],
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
    colors: { control: 'check', options: ['primary', 'error'] },
  },
} as ComponentMeta<typeof ButtonShowCase>;
