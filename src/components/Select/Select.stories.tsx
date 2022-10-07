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
    ...buildExcludeArgTypes(['name', 'type']),
  },
} as ComponentMeta<typeof Select>;

const TemplateSingle: ComponentStory<typeof Select> = (args) => <Select key='0001' {...args} />;

export const Single = TemplateSingle.bind({});

Single.args = {
  name: 'aField',
  label: 'Select Option',
  type: 'default',
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

const TemplateMultiple: ComponentStory<typeof Select> = (args) => <Select key='0001' {...args} />;

export const Multipe = TemplateMultiple.bind({});

Multipe.args = {
  name: 'aField',
  label: 'Select Option',
  type: 'multiple',
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

const TemplateMultipleCheckbox: ComponentStory<typeof Select> = (args) => <Select key='0001' {...args} />;

export const MultipeWithCheckbox = TemplateMultipleCheckbox.bind({});

MultipeWithCheckbox.args = {
  name: 'aField',
  label: 'Select Option',
  type: 'multipleCheckbox',
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
