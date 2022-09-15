import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useState } from 'react';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [checkedValue, setCheckedValue] = useState(false);

  return (
    <>
      <Radio {...args} isChecked={checkedValue} onChange={() => setCheckedValue(!checkedValue)}>
        Radio text 01
      </Radio>
      <br />
      <span>
        <b>CHECKED:</b> {`${checkedValue}`}
      </span>
    </>
  );
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  name: 'fieldName',
  value: 'fieldValue',
};
