import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodyText } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../../storybook/utils';

export default {
  title: 'Components/BodyText',
  component: BodyText,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof BodyText>;

const Template: ComponentStory<typeof BodyText> = (args) => {
  return (
    <>
      <BodyText {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BodyText>
    </>
  );
};

export const Text = Template.bind({});
Text.args = {
  variation: 'paragraph',
};
