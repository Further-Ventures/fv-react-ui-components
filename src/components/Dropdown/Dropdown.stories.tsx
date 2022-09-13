import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown, { IDropdown } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

interface IStoryArgs extends IDropdown {
  buttonText?: string;
}

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const { buttonText, ...rest } = args as IStoryArgs;
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const handleIconClick = () => setIsOpen(!isOpen);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);
  return (
    <>
      <h4 className='mb-2'>{`State: ${inputValue} isOpen ${isOpen}`}</h4>
      <Dropdown label={'Dropdown uncontrolled'} {...rest}>
        List content (uncontrolled)
      </Dropdown>
      <Dropdown
        label={'Dropdown controlled'}
        {...rest}
        value={inputValue}
        isOpen={isOpen}
        onIconClick={handleIconClick}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        List content (controlled)
      </Dropdown>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'olivia@example.com',
};
