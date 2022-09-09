import React from 'react';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import { defaultTheme } from '../../../../components/Theme';
import Button from '../../../../components/Button';

const FormInitialValues = () => {
  return (
    <Form
      initialValues={{
        email: 'somemail@mail.com',
      }}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Form with initial values</h2>
      <Input label={'Email'} name='email' placeholder='some@mail.com' />
      <h1> </h1>
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button label='Submit' type='submit' />
        <Button label='Reset' type='reset' variant='outlined' />
      </div>
    </Form>
  );
};

export default FormInitialValues;

export const FormInitialValuesCode = `
<Form
  initialValues={{
    email: 'somemail@mail.com',
  }}
>
  <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Form with initial values</h2>
  <Input label={'Email'} name="email" placeholder="some@mail.com"/>
  <h1> </h1>
  <h1> </h1>
  <div style={{ display: 'flex', gap: 20 }}>
    <Button label="Submit" type="submit"/>
    <Button label="Reset" type="reset" variant="outlined"/>
  </div>
</Form>
`;
