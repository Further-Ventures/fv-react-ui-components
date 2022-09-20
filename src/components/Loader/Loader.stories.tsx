import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['className']),
    progress: {
      control: { type: 'number', min: -1, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => {
  return <Loader {...args} />;
};

export const LoaderTemplate = Template.bind({});
LoaderTemplate.args = {
  variant: 'circle',
  flat: false,
  progress: null,
};
