import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PasswordInput from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

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
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => {
  return <PasswordInput {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
};
