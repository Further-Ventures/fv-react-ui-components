import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../Icons';
import Button from '../Button';
import Input, { IInput } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

import './stories.scss';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['value', 'name', 'controlled', 'onChange', 'onBlur', 'contentClassName', 'hintClassName', 'errorClassName', 'sideContent', 'inputClassName', 'mask']),
    buttonText: {
      control: 'text'
    }
  },
} as ComponentMeta<typeof Input>;

interface IStoryArgs extends IInput {buttonText?: string}

const Template: ComponentStory<typeof Input> = (args) => {
  const { buttonText, sideContent: inputSideContent, ...rest } = args as IStoryArgs;
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => setInputValue(e.target.value);
  const sideContent = buttonText && ((hasError: boolean, disabled: boolean) => <Button label={buttonText} color={hasError ? 'error' : 'primary'} size='mini' disabled={disabled} onClick={() => alert('Button Click!')} variant='outlined'/>)
 
  return (
    <>
      <h4 className='mb-2'>{`State: ${inputValue}`}</h4>
      <Input {...rest} value={inputValue} onChange={handleInputChange} sideContent={inputSideContent ?? sideContent}/>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
};

export const WithButton = Template.bind({});

WithButton.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
  buttonText: 'Button CTA'
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  label: 'Input default',
  placeholder: 'olivia@example.com',
  sideContent: <Icon icon='info' size={20} />
};


export const Showcase = () => {
  return (
    <div className='showcaseInput'>
      <Input label='Label' placeholder='with placeholder' />
      <Input label='Some very long label asdasd a as dasd as dasd a as s sa a' />
      <Input placeholder='No label' />
      <Input label='test button' sideContent={ <Button label="Button CTA" size='mini' onClick={() => alert('Button Click!')} variant='outlined'/>} />
      <Input label='test error' error='Test Error message' sideContent={ <Button color='error' label="Button CTA" size='mini' onClick={() => alert('Button Click!')} variant='outlined'/>} />
      <Input label='test error' error='Test Error message' hint='Test Hint' />
      <Input
        label='test error'
        error='Test Error message'
        hint='Test Hint'
        sideContent={ <Button color='error' label="Button CTA" size='mini' onClick={() => alert('Button Click!')} variant='outlined'/>}
      />
      <Input label='With hint' hint='Test Hint' />

      <Input label='Disabled' placeholder='with placeholder' disabled />
      <Input
        label='Disabled'
        placeholder='with placeholder'
        error='Test Error message'
        hint='Test Hint'
        disabled
        sideContent={
          <>
            <Icon icon='info' size={20} />
            <Button disabled label="Button CTA" size='mini' onClick={() => alert('Button Click!')} variant='outlined' />
          </>
        }
      />
    </div>
  );
};