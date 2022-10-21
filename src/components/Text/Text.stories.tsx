import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['className']),
    color: {
      control: { type: 'text' },
    },
    weight: {
      options: ['', 'thin', 'normal', 'medium', 'bold'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <Text {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </>
  );
};

export const TextComponent = Template.bind({});
TextComponent.args = {
  variation: 'h1-bold',
};
