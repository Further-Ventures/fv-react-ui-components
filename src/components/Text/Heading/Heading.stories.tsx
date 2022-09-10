import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './index';
import pkg from './package.json';
// import { buildExcludeArgTypes } from '../../../storybook/utils';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    pkg,
  },
  // argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <>
      <Heading {...args}>Test Heading</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus, risus ac luctus tempus, lectus nunc tempor tortor, eget rhoncus nibh
        eros nec neque. Donec quis tristique turpis. Duis bibendum ante sed enim suscipit hendrerit. Pellentesque quis sagittis erat. Maecenas maximus
        aliquam mi vitae efficitur. Proin id lectus nulla. Pellentesque laoreet, ligula sed iaculis hendrerit, felis felis tempus urna, ut scelerisque
        justo lorem at lectus. Nam eu feugiat libero. Phasellus eget leo consequat augue cursus efficitur. Mauris at tempus odio. Curabitur tincidunt
        vitae leo in tincidunt. Etiam eget dui et ipsum tristique aliquam. Morbi ornare vitae quam varius faucibus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
    </>
  );
};

export const Head = Template.bind({});
Head.args = {
  variation: 'h1',
};
