import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './index';
import getClassList from '../../utils/testUtils';

it('should render checkbox', () => {
  const label = 'Checkbox 01';
  render(<Checkbox name='check01' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('rounded');
});

it('should render large checkbox', () => {
  const label = 'Checkbox 01';
  render(<Checkbox name='check01' size='large' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-5');
  expect(iconClassName).toContain('rounded');
});

it('should render circle checkbox', () => {
  const label = 'Checkbox 02';
  render(<Checkbox name='check02' variation='circle' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render large circle checkbox', () => {
  const label = 'Checkbox 02';
  render(<Checkbox name='check02' variation='circle' size='large' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-5');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render checkbox with error', () => {
  const label = 'Checkbox 03';
  render(<Checkbox name='check03' error='error' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('border-error');
  expect(iconClassName).toContain('rounded');
});
