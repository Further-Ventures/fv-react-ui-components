import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import { Checkbox } from '../../../components/Checkbox';
import { userEvent, within } from '@storybook/testing-library';
import { Loader } from '../../../components/Loader';
import '../styles.scss';

export default {
  title: 'Examples/Sign In',
};

const Template: ComponentStory<any> = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const reset = () => {
    setError('');
    setEmail('');
    setPassword('');
    setLoading(false);
  };
  const emailValid = email === 'some@example.com';

  return (
    <div style={{ position: 'relative', width: '16rem' }}>
      <Input
        controlled
        label='Email'
        name='email'
        error={error}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <PasswordInput
        controlled
        label='Password'
        name='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div style={{ marginBottom: '1.25rem' }}>
        <Checkbox name='checkbox' label='Remember me' />
      </div>
      <Button
        label='Sign In'
        name='submit'
        onClick={() => {
          setError(emailValid ? '' : 'Email is not valid');
          emailValid && setLoading(true);
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

export const SignIn = Template.bind({});
SignIn.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const loop = async () => {
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-email'), 'some@example', { delay: 50 });
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-password'), 'QWErty123', { delay: 50 });
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/input-password-password-button'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/input-password-password-button'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/InputWithToggle-input'));
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/pressable-submit'));
    await sleep(1000);
    await userEvent.type(canvas.getByTestId('@fv/input-email'), '.com', { delay: 50 });
    await sleep(1000);
    await userEvent.click(canvas.getByTestId('@fv/pressable-submit'));
    await sleep(2000);
    await userEvent.click(canvas.getByTestId('overlay'));
    await loop();
  };
  await loop();
};
