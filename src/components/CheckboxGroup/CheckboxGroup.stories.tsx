import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxGroup } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useState } from 'react';
import Button from '../Button';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['variation', 'type', 'value', 'isDefaultChecked', 'setSelected', 'className']),
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [selected, setSelected] = useState<string[]>([]);
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    console.log('----------------------------------------');
    console.log('stories onSubmit:');
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    for (const pair of formData.entries()) {
      console.log('   ', pair[0]);
    }
    console.log('----------------------------------------');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <CheckboxGroup {...args} setSelected={setSelected} />
        <br />
        <Button label='Submit' size='small' />
      </form>
      <span className='block pt-6'>
        <b>SELECTED: </b> {selected.join(', ')}
      </span>
    </>
  );
};

export const CheckboxGroupComponent = Template.bind({});
CheckboxGroupComponent.args = {
  header: { name: 'headerField', label: 'header' },
  checkboxes: [
    { name: 'firstField', label: 'first child' },
    { name: 'secondField', label: 'second child' },
    { name: 'thirdField', label: 'third child' },
    { name: 'fourthField', label: 'fourth child' },
  ],
  variation: 'default',
  size: 'default',
  disabled: false,
};

export const CompleteCheckboxGroup = Template.bind({});
CompleteCheckboxGroup.args = {
  header: { name: 'headerField', heading: 'heading header', label: 'leabel header', hint: 'hint header', error: 'error header' },
  checkboxes: [
    { name: 'firstField', heading: 'heading first child', label: 'label first child', hint: 'hint first child', error: 'error first child' },
    { name: 'secondField', heading: 'heading second child', label: 'label second child', hint: 'hint second child', error: 'error second child' },
    { name: 'thirdField', heading: 'heading third child', label: 'label third child', hint: 'hint third child', error: 'error third child' },
    { name: 'fourthField', heading: 'heading fourth child', label: 'label fourth child', hint: 'hint fourth child', error: 'error fourth child' },
  ],
  variation: 'default',
  size: 'default',
  disabled: false,
};
