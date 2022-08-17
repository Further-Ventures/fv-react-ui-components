import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import { defaultTheme } from './defaultTheme';
import Input from '../Input';
import { ThemeChooser } from '../../storybook/preview/ThemeChooser';
import pkg from './package.json';

export default {
  title: 'components/Theme',
  component: ThemeChooser,
  parameters: {
    pkg,
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`
  },
} as ComponentMeta<typeof ThemeChooser>;

const Template: ComponentStory<typeof ThemeChooser> = (args) => (
  <ThemeChooser {...args}>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Button </h2>
    <Button variant="contained" label={'Contained primary'}/>
    <h1> </h1>
    <Button variant="contained" color="secondary" label={'Contained secondary'}/>
    <h1> </h1>
    <Button variant="outlined" label={'Outlined primary'}/>
    <h1> </h1>
    <Button variant="outlined" color="secondary" label={'Outlined secondary'}/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Input </h2>
    <Input label="Color primary" placeholder="some@mail.com"/>
    <h1> </h1>
    <Input label="Color secondary" placeholder="some@mail.com" color="secondary"/>
    <h1> </h1>
    <Input label="Disabled" placeholder="some@mail.com" disabled={true}/>
    <h1> </h1>
    <Input label="Error state" placeholder="some@mail.com" errorMessage="This is an error"/>
    <h1> </h1>
    <Input label="Hint" placeholder="some@mail.com" hint="This is a hint"/>
  </ThemeChooser>
);

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: defaultTheme
};
