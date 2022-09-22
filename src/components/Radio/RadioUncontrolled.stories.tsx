import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/RadioUncontrolled',
  component: Radio,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['isChecked', 'className']),
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <>
      <Radio {...args} isDefaultChecked={args.isDefaultChecked}>
        Radio text 01
      </Radio>
    </>
  );
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  name: 'fieldName',
  value: 'fieldValue',
};
