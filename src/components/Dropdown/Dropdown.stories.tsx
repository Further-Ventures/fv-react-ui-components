import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown, { IDropdown } from './index';
import Button from '../Button';
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
      'onClickOutside',
      'contentClassName',
      'hintClassName',
      'errorClassName',
      'sideContent',
      'inputClassName',
      'onIconClick',
    ]),
    buttonText: {
      control: 'text',
    },
    versions: { control: 'check', options: ['controlled', 'uncontrolled'] },
  },
} as ComponentMeta<typeof Dropdown>;

interface IStoryArgs extends IDropdown {
  buttonText?: string;
  versions?: string[];
}

const Template: ComponentStory<typeof Dropdown> = (args) => {
  console.log(args);
  const { buttonText, versions, onChange, ...rest } = args as IStoryArgs;
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleIconClick = () => setIsOpen(!isOpen);
  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);
  const handleClickOutside = () => setIsOpen(false);

  return (
    <>
      {versions && versions.includes('uncontrolled') && (
        <div>
          <Dropdown key='uncontrolled' label={'Dropdown uncontrolled'} {...rest}>
            List content (uncontrolled)
          </Dropdown>
        </div>
      )}
      {versions && versions.includes('controlled') && (
        <div>
          <h4 className='mb-2'>{`State: ${inputValue} isOpen ${isOpen}`}</h4>
          <Dropdown
            key='controlled'
            label={'Dropdown controlled'}
            {...rest}
            value={inputValue}
            isOpen={isOpen}
            onClickOutside={handleClickOutside}
            onIconClick={handleIconClick}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            List content (controlled)
            <Button label='Button1' />
            <Button label='Button2' />
            <Button label='Button3' />
            <Button label='Button4' />
            <Button label='Button5' />
          </Dropdown>
        </div>
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'olivia@example.com',
  versions: ['controlled'],
};
