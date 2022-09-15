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
  },
} as ComponentMeta<typeof Dropdown>;

interface IStoryArgs extends IDropdown {
  buttonText?: string;
  versions?: string[];
}

const Uncontrolled: ComponentStory<typeof Dropdown> = (args) => {
  const { buttonText, versions, onChange, ...rest } = args as IStoryArgs;

  return (
    <div>
      <Dropdown key='uncontrolled' label={'Dropdown uncontrolled'} {...rest}>
        <div className='grid grid-cols-2 gap-2 p-2'>
          <span className=' col-span-2'>List content (uncontrolled)</span>
          <Button label='Button1' size='small' />
          <Button label='Button2' size='small' />
          <Button label='Button3' size='small' />
          <Button label='Button4' size='small' />
          <Button label='Button5' size='small' />
          <Button label='Button6' size='small' />
        </div>
      </Dropdown>
    </div>
  );
};

export const Default = Uncontrolled.bind({});

Default.args = {
  placeholder: 'olivia@example.com',
};

const TemplateControlled: ComponentStory<typeof Dropdown> = (args) => {
  const { buttonText, versions, onChange, ...rest } = args as IStoryArgs;
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleIconClick = () => setIsOpen(!isOpen);
  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);
  const handleClickOutside = () => setIsOpen(false);

  return (
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
        <div className='grid grid-cols-2 gap-2 p-2'>
          <span className=' col-span-2'>List content (controlled)</span>
          <Button label='Button1' size='small' />
          <Button label='Button2' size='small' />
          <Button label='Button3' size='small' />
          <Button label='Button4' size='small' />
          <Button label='Button5' size='small' />
          <Button label='Button6' size='small' />
        </div>
      </Dropdown>
    </div>
  );
};

export const Controlled = TemplateControlled.bind({});

Controlled.args = {
  placeholder: 'olivia@example.com',
};
