import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { TextLink } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    pkg
  },
  argTypes: buildExcludeArgTypes(['className'])
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
  return (
    <>
      <BrowserRouter>
        <TextLink {...args}>
          Text Link
        </TextLink>
      </BrowserRouter>
    </>
  );
};

export const Text = Template.bind({});
Text.args = {
  to: 'https://google.com'
};
