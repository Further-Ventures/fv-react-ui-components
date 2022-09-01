import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/ButtonTW',
  component: Button,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['iconLeft', 'iconRight', 'className']),
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
};
