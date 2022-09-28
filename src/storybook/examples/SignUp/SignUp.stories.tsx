import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import { userEvent, within } from '@storybook/testing-library';
import { Loader } from '../../../components/Loader';
import '../styles.scss';

export default {
  title: 'Examples/Sign Up',
};

const Template: ComponentStory<any> = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  const reset = () => {
    setError('');
    setEmail('');
    setPassword('');
    setPassword2('');
    setLoading(false);
  };
  const emailsMatch = password === password2;

  return (
    <div style={{ position: 'relative', width: '16rem' }}>
      <Input
        label='Email'
        name='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <PasswordInput
        label='Password'
        name='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        hint='Include at least 8 characters, upper and lower case and number'
      />
      <PasswordInput
        label='Password'
        name='password2'
        value={password2}
        onChange={(e) => {
          setPassword2(e.target.value);
        }}
        hint={error ? '' : 'Repeat your password'}
        error={error}
      />
      <Button
        label='Sign Up'
        name='submit'
        onClick={() => {
          setError(emailsMatch ? '' : 'Passwords do not match');
          emailsMatch && setLoading(true);
        }}
      />
      {loading && (
        <div
          className='example-overlay'
          data-testid='overlay'
          onClick={() => {
            reset();
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SignUp = Template.bind({});
SignUp.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const loop = async () => {
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-email'), 'some@example.com', { delay: 50 });
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-password'), 'QWErty1234', { delay: 50 });
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-password2'), 'QWErty123', { delay: 50 });
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/pressable-submit'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/input-password-password-button'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/input-password-password2-button'));
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-password2'), '4', { delay: 50 });
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/input-password-password-button'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/input-password-password2-button'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/pressable-submit'));
    await sleep(2000);
    await userEvent.click(canvas.getByTestId('overlay'));
    await loop();
  };
  await loop();
};
