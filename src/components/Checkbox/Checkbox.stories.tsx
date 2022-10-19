import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useState } from 'react';
import Button from '../Button';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['isDefaultChecked', 'className']),
} as ComponentMeta<typeof Checkbox>;

const TemplateControlled: ComponentStory<typeof Checkbox> = (args) => {
  const [isSubscribing, setIsSubscribing] = useState(args.isChecked);

  return (
    <>
      <Checkbox {...args} isChecked={isSubscribing} onChange={() => setIsSubscribing(!isSubscribing)} />
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
  heading: 'Circle Check heading',
  label:
    'Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter',
  hint: 'Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter Subscribe to Newsletter',
  isChecked: true,
};

const TemplateUncontrolled: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.isDefaultChecked);
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    console.log('----------------------------------------');
    console.log('stories onSubmit:');
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    let size = 0;
    for (const pair of formData.entries()) {
      console.log('   ', pair[0]);
      size++;
    }

    setChecked(!!size);
    console.log('----------------------------------------');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Checkbox {...args} />
        <br />
        <Button label='Submit' size='small' />
      </form>
      <br />
      <span>
        <b>CHECKED:</b> {`${checked}`}
      </span>
    </>
  );
};

export const UncontrolledCheckboxInput = TemplateUncontrolled.bind({});
UncontrolledCheckboxInput.args = {
  name: 'checkbox01',
  label: 'Checkbox text',
  isDefaultChecked: true,
};

const TemplateMultiple: ComponentStory<any> = (args) => {
  const { items, ...rest } = args;
  const [termsAndConditions, setTermsAndConditions] = useState(items[0].isChecked || false);
  const [privacyPolicy, setPrivacyPolicy] = useState(items[1].isChecked || false);
  const [isSubscribed, setIsSubscribed] = useState(items[2].isChecked || false);

  return (
    <>
      <Checkbox {...items[0]} {...rest} isChecked={termsAndConditions} onChange={() => setTermsAndConditions(!termsAndConditions)} />
      <br />
      <Checkbox {...items[1]} {...rest} isChecked={privacyPolicy} onChange={() => setPrivacyPolicy(!privacyPolicy)} />
      <br />
      <Checkbox {...items[2]} {...rest} isChecked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)} />
      <br />
      <span>
        <b>SELECTED FIELDS:</b>
        {termsAndConditions && (
          <>
            <br />
            termsAndConditions
          </>
        )}
        {privacyPolicy && (
          <>
            <br />
            privacyPolicy
          </>
        )}
        {isSubscribed && (
          <>
            <br />
            isSubscribed
          </>
        )}
      </span>
    </>
  );
};

export const MultipleCheckboxes = TemplateMultiple.bind({});
MultipleCheckboxes.args = {
  items: [
    {
      name: 'termsAndConditions',
      hint: 'Here is a hint',
      label: (
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
      label: (
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
      error: 'there is an error here!',
      label: 'Do you want to subscribe ?',
    },
  ],
};

const TemplateUncontrolledMultiple: ComponentStory<any> = (args) => {
  const { items, ...rest } = args;
  const [checked, setChecked] = useState(args.items.filter((item) => item.isDefaultChecked).map((item) => item.name));
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    console.log('----------------------------------------');
    console.log('stories onSubmit:');

    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    const checkedFields = [] as string[];
    for (const pair of formData.entries()) {
      console.log('   ', pair[0]);
      checkedFields.push(pair[0]);
    }
    setChecked([...checkedFields]);

    console.log('----------------------------------------');
  };

  return (
    <form onSubmit={onSubmit}>
      {items.map((item) => {
        console.log(item);

        return (
          <span key={item.name}>
            <Checkbox key={item.name} {...item} {...rest} />
            <br />
          </span>
        );
      })}
      <br />
      <Button label='Submit' size='small' />
      <br />
      <br />
      <span>
        <b>SELECTED FIELDS:</b> {checked.join(', ')}
      </span>
    </form>
  );
};

export const UncontrolledMultipleCheckboxes = TemplateUncontrolledMultiple.bind({});
UncontrolledMultipleCheckboxes.args = {
  items: [
    {
      name: 'check01',
      label: 'Checkbox text 01',
      hint: 'Here is a hint',
    },
    {
      name: 'check02',
      isDefaultChecked: true,
      label: 'Checkbox text 02',
    },
    {
      name: 'check03',
      error: 'Here is an error',
      label: 'Checkbox text 03',
    },
    {
      name: 'check04',
      disabled: true,
      label: 'Checkbox text 04',
    },
  ],
};
