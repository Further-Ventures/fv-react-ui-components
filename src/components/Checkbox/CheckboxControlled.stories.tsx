import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useState } from 'react';

export default {
  title: 'Components/CheckboxControlled',
  component: Checkbox,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['variation', 'isDefaultChecked', 'className']),
} as ComponentMeta<typeof Checkbox>;

const TemplateControlled: ComponentStory<typeof Checkbox> = (args) => {
  const [isSubscribing, setIsSubscribing] = useState(args.isChecked);

  return (
    <>
      <Checkbox {...args} isChecked={isSubscribing} onChange={() => setIsSubscribing(!isSubscribing)}>
        Subscribe to Newsletter
      </Checkbox>
      <br />
      <span>
        <b>CHECKED:</b> {`${isSubscribing}`}
      </span>
    </>
  );
};

export const ControlledCheckboxInput = TemplateControlled.bind({});
ControlledCheckboxInput.args = {
  name: 'isSubscribed',
  isChecked: true,
};

const TemplateGroup: ComponentStory<typeof Checkbox> = (args) => {
  const [termsAndConditions, setTermsAndConditions] = useState(args[0].isChecked);
  const [privacyPolicy, setPrivacyPolicy] = useState(args[1].isChecked);
  const [isSubscribed, setIsSubscribed] = useState(args[2].isChecked);

  return (
    <>
      <Checkbox {...args[0]} isChecked={termsAndConditions} onChange={() => setTermsAndConditions(!termsAndConditions)}>
        {args[0].children}
      </Checkbox>
      <Checkbox {...args[1]} isChecked={privacyPolicy} onChange={() => setPrivacyPolicy(!privacyPolicy)}>
        {args[1].children}
      </Checkbox>
      <Checkbox {...args[2]} isChecked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)}>
        {args[2].children}
      </Checkbox>
    </>
  );
};

export const CheckboxGroup = TemplateGroup.bind({});
CheckboxGroup.args = [
  {
    name: 'termsAndConditions',
    children: (
      <>
        <span>Agree with our </span>
        <a style={{ color: '#2400FF' }} href='https://google.com/'>
          Terms and Conditions
        </a>
      </>
    ),
  },
  {
    name: 'privacyPolicy',
    isChecked: true,
    children: (
      <>
        <span>Agree with our </span>
        <a style={{ color: '#2400FF' }} href='https://google.com/'>
          Privacy Policy
        </a>
      </>
    ),
  },
  {
    name: 'subscribe',
    error: true,
    children: 'Do you want to subscribe ?',
  },
];
