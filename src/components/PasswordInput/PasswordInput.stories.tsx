import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PasswordInput, { IPasswordInput } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

import './stories.scss';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes([
      'value',
      'name',
      'controlled',
      'onChange',
      'onBlur',
      'contentClassName',
      'hintClassName',
      'errorClassName',
      'sideContent',
      'inputClassName',
      'mask',
    ]),
    buttonText: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof PasswordInput>;

interface IStoryArgs extends IPasswordInput {
  buttonText?: string;
}

const Template: ComponentStory<typeof PasswordInput> = (args) => {
  const { buttonText, sideContent: inputSideContent, ...rest } = args as IStoryArgs;
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <h4 className='mb-2'>{`State: ${inputValue}`}</h4>
      <PasswordInput {...rest} value={inputValue} onChange={handleInputChange} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
};
