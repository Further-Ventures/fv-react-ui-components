import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Radio } from './index';
import getClassList from '../../utils/testUtils';

it('should render radio button', () => {
  const label = 'Radio 01';
  render(<Radio name='fieldName-1' value='value-1' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render large radio button', () => {
  const label = 'Radio 02';
  render(<Radio name='fieldName-2' value='value-2' size='large' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-5');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render radio with error', () => {
  const label = 'Radio 03';
  render(<Radio name='fieldName-3' value='value-3' error='error' label={label} />);

  const element = screen.queryByText(label);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByTestId('@fv/ToggleIcon-toggleBackground'));

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('border-error');
  expect(iconClassName).toContain('rounded-2xl');
});
