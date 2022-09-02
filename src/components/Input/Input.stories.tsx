import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputTW } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

import './stories.scss';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes([
    'name',
    'controlled',
    'onChange',
    'endAdornment',
    'onBlur',
    'prefixClassName',
    'contentClassName',
    'hintClassName',
    'errorClassName',
  ]),
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  label: 'Color primary',
  placeholder: 'olivia@example.com',
};

export const Showcase = () => {
  return (
    <div className='showcase'>
      <InputTW label='Label' placeholder='with placeholder' />
      <InputTW label='Some very long label' />
      <InputTW placeholder='No label' />
      <InputTW label='test button' buttonProps={{ onClick: () => alert('Button Click!') }} />
      <InputTW label='test error' errorMessage='Test Error' />
      <InputTW label='test hint' hint='Test Hint' />
    </div>
  );
};
// export const WithValue = Template.bind({});
// WithValue.args = {
//   label: 'With value',
//   placeholder: 'placeholder@example.com',
//   value: 'olivia@example.com',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: 'Disabled',
//   placeholder: 'olivia@example.com',
//   disabled: true,
// };

// export const Error = Template.bind({});
// Error.args = {
//   label: 'With error',
//   placeholder: 'olivia@example.com',
//   errorMessage: 'Error message',
// };

// export const Hint = Template.bind({});
// Hint.args = {
//   label: 'With hint',
//   placeholder: 'olivia@example.com',
//   hint: 'Hint message',
// };

// export const ReadOnly = Template.bind({});
// ReadOnly.args = {
//   label: 'Read only',
//   placeholder: 'olivia@example.com',
//   value: 'olivia@example.com',
//   readOnly: true,
// };

// export const NoLabel = Template.bind({});
// NoLabel.args = {
//   placeholder: 'olivia@example.com',
// };

// export const FullWidth = Template.bind({});
// FullWidth.args = {
//   label: 'Fits parent width',
//   placeholder: 'olivia@example.com',
//   fullWidth: true,
// };

// export const EndAdornment = Template.bind({});
// EndAdornment.args = {
//   label: 'End adornment',
//   placeholder: 'placeholder@example.com',
//   value: 'olivia@example.com',
//   endAdornment: (
//     <div
//       style={{
//         width: 32,
//         height: 32,
//         backgroundColor: '#D0D5DD',
//         borderRadius: 16,
//         lineHeight: '32px',
//         textAlign: 'center',
//         color: 'white',
//       }}
//     >
//       O
//     </div>
//   ),
// };

// export const Mask = Template.bind({});
// Mask.args = {
//   label: 'Digit mask',
//   mask: '+X (XXX) XX-XX-XXX',
//   placeholder: '+0 (000) 00-00-000',
// };

// export const Prefix = Template.bind({});
// Prefix.args = {
//   label: 'Prefix',
//   prefix: 'G-',
//   mask: 'XXX-XXX',
//   placeholder: 'XXX-XXX',
// };
