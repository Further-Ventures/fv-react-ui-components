import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useState } from 'react';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['contentLeft', 'contentRight', 'variant', 'label', 'shape', 'className', 'color']),
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [isActive, setIsActive] = useState(Boolean(args.isActive));
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return <Toggle {...args} isActive={isActive} onToggle={handleToggle} />;
};

export const Default = Template.bind({});

Default.args = {
  isActive: false,
  size: 'default',
  children: 'Hey! Toggle me',
  disabled: false,
};
