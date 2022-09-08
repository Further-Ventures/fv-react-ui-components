import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useRef } from 'react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    pkg
  },
  argTypes: buildExcludeArgTypes(['variation', 'className'])
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const ref = useRef(null);

  return <Checkbox {...args}>
      Checkbox text
    </Checkbox>;
};

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  fieldName: 'check01'
}