import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useRef } from 'react';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    pkg
  },
  argTypes: buildExcludeArgTypes(['className'])
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const ref = useRef(null);

  return <Radio {...args}>
      Radio text 01
    </Radio>;
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  fieldName: 'check01'
}