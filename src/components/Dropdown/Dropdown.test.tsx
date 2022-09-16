import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Dropdown from './index';

describe('Dropdown component', () => {
  it('should render input, toggle icon and content if open', () => {
    const label = 'Test input';
    render(<Dropdown name='dropdownName' label={label} isOpen />);

    const inputElement = screen.getByTestId('@fv/input-dropdownName');
    const labelElement = screen.getByTestId('@fv/input-dropdownName--label');
    const toggleElement = screen.getByTestId('@fv/dropdown-dropdownName--toggle');
    const contentElement = screen.getByTestId('@fv/dropdown-dropdownName--content');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(toggleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('should not render content if isOpen is false (default)', () => {
    const label = 'Test input';
    const { queryByTestId } = render(<Dropdown name='dropdownName' label={label} />);

    expect(queryByTestId('@fv/dropdown-dropdownName--content')).not.toBeInTheDocument();
  });

  it('should not render content if isOpen is true and input is disabled', () => {
    const label = 'Test input';
    const { queryByTestId } = render(<Dropdown name='dropdownName' label={label} isOpen disabled />);

    expect(queryByTestId('@fv/dropdown-dropdownName--content')).not.toBeInTheDocument();
  });

  it('should show content after focus in uncontrolled mode', () => {
    const label = 'Test input';
    const { queryByTestId } = render(<Dropdown name='dropdownName' label={label} />);

    const inputElement = screen.getByTestId('@fv/input-dropdownName');

    expect(queryByTestId('@fv/dropdown-dropdownName--content')).not.toBeInTheDocument();

    fireEvent.focus(inputElement);

    expect(queryByTestId('@fv/dropdown-dropdownName--content')).toBeInTheDocument();
  });

  it('should call onFocus callback when input is focused', () => {
    const onFocusSpy = jest.fn();

    const label = 'Test input';
    render(<Dropdown name='dropdownName' label={label} onFocus={onFocusSpy} />);

    const inputElement = screen.getByTestId('@fv/input-dropdownName');
    fireEvent.focus(inputElement);

    expect(onFocusSpy).toHaveBeenCalled();
  });

  it('should call onBlur callback when input loses focus', () => {
    const onBlurSpy = jest.fn();

    const label = 'Test input';
    render(<Dropdown name='dropdownName' label={label} onBlur={onBlurSpy} />);

    const inputElement = screen.getByTestId('@fv/input-dropdownName');
    fireEvent.blur(inputElement);

    expect(onBlurSpy).toHaveBeenCalled();
  });

  it('should call not onBlur callback when focus is switched to element inside dropdown', () => {
    const onBlurSpy = jest.fn();

    const label = 'Test input';
    render(<Dropdown name='dropdownName' label={label} onBlur={onBlurSpy} />);

    const inputElement = screen.getByTestId('@fv/input-dropdownName');
    act(() => {
      inputElement.focus();
    });
    const toggleElement = screen.getByTestId('@fv/dropdown-dropdownName--toggle');
    toggleElement.focus();
    inputElement.blur();

    expect(onBlurSpy).not.toHaveBeenCalled();
  });

  it('should call onClickOutside callback when clicked outside of dropdown', () => {
    const onClickOutside = jest.fn();

    const label = 'Test input';
    render(<Dropdown name='dropdownName' label={label} onClickOutside={onClickOutside} />);

    fireEvent.click(document);

    expect(onClickOutside).toHaveBeenCalled();
  });
});
