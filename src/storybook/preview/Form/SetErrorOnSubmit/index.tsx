import React from 'react';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import { defaultTheme } from '../../../../components/Theme';
import Button from '../../../../components/Button';

const FormSetErrorOnSubmit = () => {
  return (
    <Form
      onSubmit={(formData: any, { setErrors }) => {
        setErrors({ email: 'This email is already taken' });
      }}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Set error from formActions</h2>
      <Input label={'Email'} name="email" placeholder="some@mail.com"/>
      <h1> </h1>
      <Button label="Submit" type="submit"/>
    </Form>
  )
};


export default FormSetErrorOnSubmit;

export const FormSetErrorOnSubmitCode = `
<Form
  onSubmit={(formData: any, { setErrors }) => {
    setErrors({ email: 'This email is already taken' });
  }}
>
  <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Set error from formActions</h2>
  <Input label={'Email'} name="email" placeholder="some@mail.com"/>
  <h1> </h1>
  <Button label="Submit" type="submit"/>
</Form>
`
