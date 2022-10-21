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
  argTypes: buildExcludeArgTypes(['isDefaultChecked', 'isChecked', 'name', 'value', 'className']),
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  console.log(args);
  const [checkedValue, setCheckedValue] = useState(args.isChecked);

  return (
    <>
      <Radio {...args} isChecked={checkedValue} onChange={() => setCheckedValue(!checkedValue)} />
      <br />
      <span>
        <b>CHECKED:</b> {`${checkedValue}`}
      </span>
    </>
  );
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  name: 'fieldName01',
  value: 'fieldValue01',
  heading: 'This is the heading',
  label:
    'Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 ',
  hint: 'Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 Radio Text 01 ',
};

const TemplateUncontrolled: ComponentStory<typeof Radio> = (args) => {
  return (
    <>
      <Radio {...args} isDefaultChecked={args.isDefaultChecked} />
    </>
  );
};

export const UncontrolledRadioInput = TemplateUncontrolled.bind({});
UncontrolledRadioInput.args = {
  name: 'fieldName02',
  value: 'fieldValue02',
  label: 'Radio Text 02',
};
