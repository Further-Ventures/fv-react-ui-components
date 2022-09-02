import React from 'react';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import * as yup from 'yup';
import { defaultTheme } from '../../../../components/Theme';
import Button from '../../../../components/Button';

const FormValidation = () => {
  return (
    <Form
      validationSchema={yup.object({
        email: yup.string().email().required()
      })}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>
        Form with validation
      </h2>
      <Input label={'Email'} name="email" placeholder="some@mail.com" />
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button label="Submit" type="submit" />
        <Button label="Reset" type="reset" variant="outlined" />
      </div>
    </Form>
  );
};

export default FormValidation;

export const FormValidationCode = `
<Form
  validationSchema={yup.object({
    email: yup.string().email().required(),
  })}
>
  <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Form with validation</h2>
  <Input label={'Email'} name="email" placeholder="some@mail.com"/>
  <h1> </h1>
  <div style={{ display: 'flex', gap: 20 }}>
    <Button label="Submit" type="submit"/>
    <Button label="Reset" type="reset" variant="outlined"/>
  </div>
</Form>
`;
