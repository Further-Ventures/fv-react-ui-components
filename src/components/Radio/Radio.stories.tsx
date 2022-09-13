import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useState } from 'react';
import Button from '../Button';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [checkedValue, setCheckedValue] = useState(args.isChecked ? args.value : '');

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
    setCheckedValue(e.target.value);
  };
  console.log('checkedValue', checkedValue);
  console.log('args.value', args.value);
  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <Radio {...args} isChecked={checkedValue === args.value}>
        Radio text 01
      </Radio>
      <br />
      <Button label='Submit' size='small' />
    </form>
  );
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  name: 'fieldName',
  value: 'fieldValue',
};