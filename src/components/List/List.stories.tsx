import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List, { IList } from './index';
import Icon from '../Icons';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import './stories.scss';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['items', 'onSelect']),
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  const { control, ...rest } = args;
  return (
    <div className='flex justify-around'>
      <List control='checkbox' {...rest} />
      <List control='checkmark' {...rest} />
      <List control='none' {...rest} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Contained',
  variant: 'contained',
  size: 'large',
  color: 'primary',
  icon: 'none',
};
