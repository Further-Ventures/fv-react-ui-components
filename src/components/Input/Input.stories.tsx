import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

import './stories.scss';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['value', 'name', 'controlled', 'onChange', 'onBlur', 'contentClassName', 'hintClassName', 'errorClassName', 'buttonProps', 'inputIcon']),
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <h4 className='mb-2'>{`State: ${inputValue}`}</h4>
      <Input {...args} value={inputValue} onChange={handleInputChange} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
};

export const WithButton = Template.bind({});

WithButton.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
  buttonProps: { label: 'Test', onClick: () => alert('Button Click') }
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
  inputIcon: 'info'
};


export const Showcase = () => {
  return (
    <div className='showcase'>
      <Input label='Label' placeholder='with placeholder' />
      <Input label='Some very long label asdasd a as dasd as dasd a as s sa a' />
      <Input placeholder='No label' />
      <Input label='test button' buttonProps={{ label: 'Button CTA', onClick: () => alert('Button Click!') }} />
      <Input label='test error' error='Test Error message' buttonProps={{ label: 'Button CTA', onClick: () => alert('Button Click!') }} />
      <Input label='test error' error='Test Error message' hint='Test Hint' />
      <Input
        label='test error'
        error='Test Error message'
        hint='Test Hint'
        buttonProps={{ label: 'Button CTA', onClick: () => alert('Button Click!') }}
      />
      <Input label='With hint' hint='Test Hint' />

      <Input label='Disabled' placeholder='with placeholder' disabled />
      <Input
        label='Disabled'
        placeholder='with placeholder'
        error='Test Error message'
        hint='Test Hint'
        disabled
        inputIcon='info'
        buttonProps={{ label: 'Button CTA', onClick: () => alert('Button Click!') }}
      />
    </div>
  );
};