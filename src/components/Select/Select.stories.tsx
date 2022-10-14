import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['name', 'selectType']),
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select key='0001' {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'defaultField',
  label: 'Select Option',
  selectedType: 'default',
  variant: 'default',
  width: 'medium',
  items: [
    {
      id: 'item1',
      content: 'Item 1',
    },
    {
      id: 'item2',
      content: 'Item 2',
    },
    {
      id: 'item3',
      content: 'Item 3',
    },
    {
      id: 'item4',
      content: 'Item 4',
    },
    {
      id: 'item5',
      content: 'Item 5',
    },
  ],
};

export const SelectWithTag = Template.bind({});
SelectWithTag.args = {
  name: 'withTagField',
  label: 'Select Option',
  selectedType: 'tag',
  variant: 'default',
  width: 'medium',
  items: [
    {
      id: 'item1',
      content: 'Item 1',
    },
    {
      id: 'item2',
      content: 'Item 2',
    },
    {
      id: 'item3',
      content: 'Item 3',
    },
    {
      id: 'item4',
      content: 'Item 4',
    },
    {
      id: 'item5',
      content: 'Item 5',
    },
  ],
};

export const SelectWithIcons = Template.bind({});
SelectWithIcons.args = {
  name: 'defaultField',
  label: 'Select Option',
  selectedType: 'default',
  variant: 'default',
  width: 'medium',
  items: [
    {
      id: 'item1',
      icon: {
        name: 'person',
      },
    },
    {
      id: 'item2',
      icon: {
        name: 'menu',
      },
    },
    {
      id: 'item3',
      icon: {
        name: 'settings',
      },
    },
  ],
};
