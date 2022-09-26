import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import Button from '../Button';

export default {
  title: 'Components/CheckboxUncontrolled',
  component: Checkbox,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['variation', 'isChecked', 'className']),
} as ComponentMeta<typeof Checkbox>;

const TemplateUncontrolled: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args}>Checkbox text</Checkbox>;
};

export const CheckboxInput = TemplateUncontrolled.bind({});
CheckboxInput.args = {
  name: 'checkbox01',
  isDefaultChecked: true,
};

const TemplateGroup: ComponentStory<typeof Checkbox> = (args) => {
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    console.log('----------------------------------------');
    console.log('stories onSubmit:');
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    for (const pair of formData.entries()) {
      console.log('   ', pair[0]);
    }
    console.log('----------------------------------------');
  };
  const onChange = (e: React.BaseSyntheticEvent) => {
    console.log('----------------------------------------');
    console.log(' stories onChange:');
    console.log('   ', e.target.name, ':', e.target.checked);
    console.log('----------------------------------------');
  };

  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <Checkbox {...args[0]}>{args[0].children}</Checkbox>
      <Checkbox {...args[1]}>{args[1].children}</Checkbox>
      <Checkbox {...args[2]}>{args[2].children}</Checkbox>
      <Checkbox {...args[3]}>{args[3].children}</Checkbox>
      <br />
      <Button label='Submit' size='small' />
    </form>
  );
};

export const CheckboxGroup = TemplateGroup.bind({});
CheckboxGroup.args = [
  {
    name: 'check01',
    children: 'Checkbox text 01',
  },
  {
    name: 'check02',
    isDefaultChecked: true,
    children: 'Checkbox text 02',
  },
  {
    name: 'check03',
    error: true,
    children: 'Checkbox text 03',
  },
  {
    name: 'check04',
    disabled: true,
    children: 'Checkbox text 04',
  },
];
