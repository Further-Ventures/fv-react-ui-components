import React, { useState, useId } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return <Radio {...args}>Radio text 01</Radio>;
};

const TemplateGroup: ComponentStory<typeof Radio> = (args) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    console.log(document.getElementById(`${args[0].name}-${args[0].value}`).checked);
    console.log(document.getElementById(`${args[1].name}-${args[1].value}`).checked);
    console.log(document.getElementById(`${args[2].name}-${args[2].value}`).checked);
    console.log(document.getElementById(`${args[3].name}-${args[3].value}`).checked);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset id={args[0].name}>
          <Radio {...args[0]}>{args[0].children}</Radio>
          <Radio {...args[1]}>{args[1].children}</Radio>
          <Radio {...args[2]}>{args[2].children}</Radio>
          <Radio {...args[3]}>{args[3].children}</Radio>
        </fieldset>
        <input type='submit' value='submit' />
      </form>
      <form onSubmit={onSubmit}>
        <fieldset id={args[0].name}>
          <label htmlFor='testRadio1'>
            Test radio <input id={'testRadio1'} name='testRadio' type='radio' />
          </label>
          <label htmlFor='testRadio2'>
            Test radio <input id={'testRadio2'} name='testRadio' type='radio' />
          </label>
          <label htmlFor='testRadio3'>
            Test radio <input id={'testRadio3'} name='testRadio' type='radio' />
          </label>
          <label htmlFor='testRadio4'>
            Test radio <input id={'testRadio4'} name='testRadio' type='radio' />
          </label>
        </fieldset>
        <input type='submit' value='submit' />
      </form>
    </>
  );
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  name: 'radio01',
  value: 'radio01',
};

export const RadioGroup = TemplateGroup.bind({});
RadioGroup.args = [
  {
    name: 'radioGroup',
    value: 'value01',
    isChecked: true,
    children: 'Radio text 01',
  },
  {
    name: 'radioGroup',
    value: 'value02',
    isChecked: false,
    children: 'Radio text 02',
  },
  {
    name: 'radioGroup',
    value: 'value03',
    error: true,
    children: 'Radio text 03',
  },
  {
    name: 'radioGroup',
    value: 'value04',
    disabled: true,
    children: 'Radio text 04',
  },
];
