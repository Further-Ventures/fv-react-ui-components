import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Elevation } from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Elevation',
  component: Elevation,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = (args) => {
  return (
    <Elevation {...args} className='w-40 h-40 m-10 flex items-center justify-center rounded-md'>
      some text
    </Elevation>
  );
};

export const ElevationView = Template.bind({});
ElevationView.args = {
  variation: 'extraLight',
};
