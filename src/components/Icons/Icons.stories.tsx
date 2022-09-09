import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icons from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => (
  <>
    <Icons {...args} />
    <p style={{ paddingTop: 25, marginTop: 0, marginBottom: 0 }}>
      The list of available icons is <a href='https://fonts.google.com/icons?icon.platform=web&icon.style=Rounded'>HERE</a>.
    </p>
    <h3 style={{ paddingTop: 25, marginTop: 0, marginBottom: 0 }}>Besides the above list we can also use custom icons</h3>
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '50%',
        }}
      >
        <p style={{ paddingTop: 5, marginBottom: 0 }}>
          <strong>Social Icons</strong>
        </p>
        <ul>
          <li>facebook</li>
          <li>twitter</li>
          <li>instagram</li>
          <li>linkedin</li>
          <li>google</li>
          <li>youtube</li>
          <li>whatsapp</li>
          <li>apple</li>
          <li>snapchat</li>
          <li>pinterest</li>
          <li>github</li>
          <li>tiktok</li>
          <li>telegram</li>
          <li>signal</li>
        </ul>
      </div>
      <div
        style={{
          width: '50%',
        }}
      >
        <p style={{ paddingTop: 5, marginBottom: 0 }}>
          <strong>Payment Icons</strong>
        </p>
        <ul>
          <li>visa</li>
          <li>amazon</li>
          <li>applepay</li>
          <li>googlepay</li>
          <li>shoppay</li>
          <li>klarna</li>
          <li>sofort</li>
          <li>mastercard</li>
          <li>maestro</li>
          <li>stripe</li>
          <li>paypal</li>
        </ul>
      </div>
    </div>
  </>
);

export const Icon = Template.bind({});
Icon.args = {
  icon: 'person',
  size: 96,
  color: '',
};
