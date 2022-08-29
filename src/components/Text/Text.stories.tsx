import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Test Text</Text>;


export const FreeText = Template.bind({});