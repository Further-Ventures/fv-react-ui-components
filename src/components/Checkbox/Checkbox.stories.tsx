import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import Button from '../Button';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['variation', 'className']),
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    console.log('----------------------------------------');
    console.log(' stories onSubmit:');
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    for (const pair of formData.entries()) {
      console.log('   ', pair[0] + ': ' + pair[1]);
    }
    console.log('----------------------------------------');
  };
  const onChange = (e: React.BaseSyntheticEvent) => {
    console.log('----------------------------------------');
    console.log(' stories onChange:');
    console.log('   ', e.target.name, ':', e.target.value);
    console.log('----------------------------------------');
  };

  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <Checkbox {...args}>Checkbox text</Checkbox>
      <br />
      <Button label='Submit' size='small' />
    </form>
  );
};

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  name: 'fieldName',
  value: 'fieldValue',
  isChecked: true,
};

const TemplateGroup: ComponentStory<typeof Checkbox> = (args) => {
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    console.log('----------------------------------------');
    console.log('stories onSubmit:');
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    for (const pair of formData.entries()) {
      console.log('   ', pair[0] + ': ' + pair[1]);
    }
    console.log('----------------------------------------');
  };
  const onChange = () => {
    console.log('----------------------------------------');
    console.log(' stories onChange:');
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    for (const pair of formData.entries()) {
      console.log('   ', pair[0] + ': ' + pair[1]);
    }
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
    name: 'check02',
    children: 'Checkbox text 01',
  },
  {
    name: 'check03',
    isChecked: true,
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
