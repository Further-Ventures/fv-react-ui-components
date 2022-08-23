import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}>Test Typography</Typography>;


export const FreeText = Template.bind({});