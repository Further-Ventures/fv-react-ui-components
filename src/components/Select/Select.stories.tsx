import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select, { ISelect } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes([])
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Select {...args} />
  );
};

export const Default = Template.bind({});

Default.args = {
  name: 'aField',
  label: 'Select option',
  items: [
    {
      id: 'item1',
      content: 'option 1',
    },
    {
      id: 'item2',
      content: 'option 2',
    },
    {
      id: 'item3',
      content: 'option 3',
    },
    {
      id: 'item4',
      content: 'option 4',
    },
    {
      id: 'item5',
      content: 'option 5',
    }
  ]
};
