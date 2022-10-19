import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MultiSelect from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['name', 'type', 'selectedType']),
  },
} as ComponentMeta<typeof MultiSelect>;

const TemplateMultiple: ComponentStory<typeof MultiSelect> = (args) => <MultiSelect key='0001' {...args} />;

export const Multipe = TemplateMultiple.bind({});
Multipe.args = {
  name: 'aField',
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

export const MultipeWithTags = TemplateMultiple.bind({});
MultipeWithTags.args = {
  name: 'aField',
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

export const MultipeWithCheckbox = TemplateMultiple.bind({});
MultipeWithCheckbox.args = {
  name: 'aField',
  label: 'Select Option',
  type: 'checkbox',
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

export const MultipeWithCheckboxAndTags = TemplateMultiple.bind({});
MultipeWithCheckboxAndTags.args = {
  name: 'aField',
  label: 'Select Option',
  type: 'checkbox',
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
