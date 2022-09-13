import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['variation', 'className']),
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args}>Checkbox text</Checkbox>;
};
const TemplateGroup: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <>
      <Checkbox {...args[0]}>{args[0].children}</Checkbox>
      <Checkbox {...args[1]}>{args[1].children}</Checkbox>
      <Checkbox {...args[2]}>{args[2].children}</Checkbox>
      <Checkbox {...args[3]}>{args[3].children}</Checkbox>
    </>
  );
};

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  name: 'check01',
  isChecked: true,
};

export const CheckboxGroup = TemplateGroup.bind({});
CheckboxGroup.args = [
  {
    name: 'check02',
    isChecked: true,
    children: 'Checkbox text 01',
  },
  {
    name: 'check03',
    isChecked: false,
    children: 'Checkbox text 02',
  },
  {
    name: 'check04',
    error: true,
    children: 'Checkbox text 03',
  },
  {
    name: 'check05',
    disabled: true,
    children: 'Checkbox text 04',
  },
];
