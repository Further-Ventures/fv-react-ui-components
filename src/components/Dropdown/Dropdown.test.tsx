import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from './index';

describe('Password Input component', () => {
  it('should be rendered with label, icon and password type', () => {
    const label = 'Test input';
    render(<PasswordInput name='passwordInput' label={label} />);
    const inputElement = screen.getByTestId('input--passwordInput');
    const labelElement = screen.getByTestId('input-label--passwordInput');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.getAttribute('type')).toEqual('password');
    expect(labelElement).toBeInTheDocument();
    expect(screen.queryByText('visibility_off')).toBeInTheDocument();
  });

  it('should should switch password visibility when icon is clicked', () => {
    const label = 'Test input';
    render(<PasswordInput name='passwordInput' label={label} />);
    const inputElement = screen.getByTestId('input--passwordInput');
    const labelElement = screen.getByTestId('input-label--passwordInput');
    const iconElement = screen.queryByText('visibility_off');

    iconElement && fireEvent.click(iconElement);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.getAttribute('type')).toEqual('text');
    expect(labelElement).toBeInTheDocument();
    expect(screen.queryByText('visibility')).toBeInTheDocument();
  });
});
