import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { getClassList } from 'utils/testUtils';
import Button from './index';

it('should render a primary contained button with the correct style (default)', () => {
  render(<Button label='Test button' />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();
  console.log('classes', getClassList(element));
  expect(getClassList(element)).toEqual(expect.arrayContaining(['bg-transparent', 'border-primary', 'text-primary']));
  expect(element?.classList.toString().split(' ')).not.toEqual(
    expect.arrayContaining(['bg-primary', 'border-transparent', 'text-primary-contrast-secondary'])
  );
});

it('should render a primary outlined button with the correct style', () => {
  render(<Button label='Test button' variant='outlined' />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();

  expect(element?.classList.toString().split(' ')).toEqual(expect.arrayContaining(['bg-transparent', 'border-primary', 'text-primary']));
  expect(element?.classList.toString().split(' ')).not.toEqual(
    expect.arrayContaining(['bg-primary', 'border-transparent', 'text-primary-contrast-secondary'])
  );
});

it('should render a error contained button with the correct style', () => {
  render(<Button label='Test button' variant='outlined' />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();

  expect(element?.classList.toString().split(' ')).toEqual(expect.arrayContaining(['bg-transparent', 'border-primary', 'text-primary']));
  expect(element?.classList.toString().split(' ')).not.toEqual(
    expect.arrayContaining(['bg-primary', 'border-transparent', 'text-primary-contrast-secondary'])
  );
});

it('should render a error outlined button with the correct style', () => {
  render(<Button label='Test button' variant='outlined' />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();

  expect(element?.classList.toString().split(' ')).toEqual(expect.arrayContaining(['bg-transparent', 'border-primary', 'text-primary']));
  expect(element?.classList.toString().split(' ')).not.toEqual(
    expect.arrayContaining(['bg-primary', 'border-transparent', 'text-primary-contrast-secondary'])
  );
});

it('should call the onclick callback when button is clicked', () => {
  const onClickSpy = jest.fn();

  render(<Button label='Test button' variant='outlined' onClick={onClickSpy} />);

  const element = screen.queryByText('Test button');
  expect(screen.queryByText('Test button')).toBeInTheDocument();

  expect(element?.classList.toString().split(' ')).toEqual(expect.arrayContaining(['bg-transparent', 'border-primary', 'text-primary']));
  expect(element?.classList.toString().split(' ')).not.toEqual(
    expect.arrayContaining(['bg-primary', 'border-transparent', 'text-primary-contrast-secondary'])
  );
});
