import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

import './stories.scss';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['value', 'name', 'controlled', 'onChange', 'onBlur', 'contentClassName', 'hintClassName', 'errorClassName', 'sideContent', 'inputClassName']),
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => setInputValue(e.target.value);
  return (
    <>
      <h4 className='mb-2'>{`State: ${inputValue}`}</h4>
      <TextArea {...args} value={inputValue} onChange={handleInputChange} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'TextArea default',
  placeholder: 'olivia@example.com',
  size: 'medium'
};


export const Showcase = () => {
  return (
    <div className='showcaseTextArea'>
      <TextArea label='Label' placeholder='with placeholder' />
      <TextArea label='Label' placeholder='error state' error="Some error" />
      <TextArea label='Label' placeholder='with hint' hint="Some hint text"/>
      <TextArea label='Label' placeholder='with hint and error' error="Some error" hint="Some hint text"/>
      <TextArea label='Label' placeholder='with maxLength' maxLength={120}/>
      <TextArea label='Label' placeholder='with maxLength' maxLength={120} error="Some error" hint="Some hint text" />
      <TextArea label='Label' placeholder='with placeholder' disabled />
      <TextArea label='Label' placeholder='with placeholder' disabled maxLength={120} error="Some error" hint="Some hint text" />
    </div>
  ); 
};