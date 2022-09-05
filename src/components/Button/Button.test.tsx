import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { getClassList } from '../../utils/testUtils';
import Button from './index';

describe('Button component', () => {
  
  it('should render a primary contained button with the correct style (default)', () => {
    render(<Button label='Test button' />);

    const element = screen.queryByText('Test button');
    expect(screen.queryByText('Test button')).toBeInTheDocument();

    expect(getClassList(element)).toEqual(
      expect.arrayContaining([
        'bg-primary',
        'disabled:bg-default-extra-light',
        'hover:bg-primary-medium',
        'active:bg-primary-dark',
        'border-transparent',
        'text-primary-contrast-secondary',
      ])
    );
  });

  it('should render a primary outlined button with the correct style', () => {
    render(<Button label='Test button' variant='outlined' />);

    const element = screen.queryByText('Test button');
    expect(screen.queryByText('Test button')).toBeInTheDocument();

    expect(getClassList(element)).toEqual(
      expect.arrayContaining([
        'bg-transparent',
        'hover:bg-default-extra-light',
        'active:bg-primary-light',
        'border-primary',
        'hover:border-primary-dark',
        'text-primary',
        'hover:text-primary-dark',
      ])
    );
  });

  it('should render a error contained button with the correct style', () => {
    render(<Button label='Test button' color='error' />);

    const element = screen.queryByText('Test button');
    expect(screen.queryByText('Test button')).toBeInTheDocument();

    expect(getClassList(element)).toEqual(
      expect.arrayContaining([
        'bg-error',
        'disabled:bg-default-extra-light',
        'hover:bg-error-medium',
        'active:bg-error-dark',
        'border-transparent',
        'text-primary-contrast-secondary',
      ])
    );
  });

  it('should render a error outlined button with the correct style', () => {
    render(<Button label='Test button' color='error' variant='outlined' />);

    const element = screen.queryByText('Test button');
    expect(screen.queryByText('Test button')).toBeInTheDocument();

    expect(getClassList(element)).toEqual(
      expect.arrayContaining([
        'bg-transparent',
        'hover:bg-default-extra-light',
        'active:bg-error-light',
        'border-error',
        'hover:border-error-dark',
        'text-error',
        'hover:text-error-dark',
      ])
    );
  });

  it('should call the onclick callback when button is clicked', () => {
    const onClickSpy = jest.fn();

    render(<Button label='Test button' variant='outlined' onClick={onClickSpy} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should not call the onclick callback when disabled button is clicked', () => {
    const onClickSpy = jest.fn();

    render(<Button label='Test button' variant='outlined' onClick={onClickSpy} disabled />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickSpy).not.toHaveBeenCalled();
  });
})