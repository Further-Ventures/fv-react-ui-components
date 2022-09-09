import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './index';

describe('TextArea component', () => {
  it('should be rendered with label', () => {
    const label = 'Test input';
    render(<TextArea label={label} />);
    expect(screen.queryByText(label)).toBeInTheDocument();
  });
  
  it('should display the placeholder', () => {
    render(<TextArea label='TextArea' placeholder='Placeholder' />);
    expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
  });
  
  it('should render the value', () => {
    const { getByRole } = render(<TextArea label='TextArea' value='Value' />);
    const input = getByRole('textbox') as HTMLTextAreaElement;
    expect(input.value).toBe('Value');
  });
  
  it('should handle onChange with value', () => {
    const { getByRole } = render(<TextArea label='TextArea' />);
    const input = getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'some value' } });
    expect(input.value).toBe('some value');
  });
  
  it('should not handle onChange when disabled', () => {
    const { getByRole } = render(<TextArea label='TextArea' disabled />);
    const input = getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'some value' } });
    expect(input.value).toBe('');
  });
  
  it('should display the error', () => {
    const errorMessage = 'Error message';
    render(<TextArea label='TextArea' error={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  });
  
  it('should display the hint', () => {
    const hintMessage = 'Hint message';
    render(<TextArea label='TextArea' hint={hintMessage} />);
    expect(screen.queryByText(hintMessage)).toBeInTheDocument();
  });
  
})