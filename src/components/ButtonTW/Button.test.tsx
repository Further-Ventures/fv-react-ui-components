import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

it('should render a button', () => {
  render(<Button label='Test button' />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();
  expect(element?.tagName).toBe('BUTTON');
});

it('should render a button with outlined style', () => {
  render(<Button label='Test button' variant='outlined' />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();

  expect(element?.classList.toString().split(' ')).toEqual(expect.arrayContaining(['bg-transparent', 'border-primary', 'text-primary']));
  expect(element?.classList.toString().split(' ')).not.toEqual(
    expect.arrayContaining(['bg-primary', 'border-transparent', 'text-primary-contrast-secondary'])
  );
});
