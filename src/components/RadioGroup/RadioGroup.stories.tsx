import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import Button from '../Button';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof RadioGroup>;

const TemplateGroup: ComponentStory<typeof RadioGroup> = (args) => {
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
      <RadioGroup {...args} />
      <br />
      <Button label='Submit' size='small' />
    </form>
  );
};

export const RadioGroups = TemplateGroup.bind({});
RadioGroups.args = {
  name: 'fieldName-RadioGroup',
  selected: 'value-2',
  items: [
    {
      value: 'value-1',
      children: 'RadioGroup text 01',
    },
    {
      value: 'value-2',
      children: 'RadioGroup text 02',
    },
    {
      value: 'value-3',
      children: 'RadioGroup text 03',
      error: "Hey! Here's an error!",
    },
    {
      value: 'value-4',
      children: 'RadioGroup text 04',
      disabled: true,
    },
  ],
};
