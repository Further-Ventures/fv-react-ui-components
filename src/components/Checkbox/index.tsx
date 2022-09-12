import React from 'react';
import { ICheckRadioProps, InputWithToggle, TCheckboxType } from '../InputWithToggle';

interface ICheckboxProps extends ICheckRadioProps {
  variation?: 'default' | 'circle';
  type?: TCheckboxType;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  variation = 'default',
  type = 'default',
  size = 'default',
  fieldName,
  isSelected = false,
  disabled = false,
  errorMessage = '',
  className,
  children,
}) => (
  <InputWithToggle
    variation={variation === 'default' ? 'checkbox' : 'checkboxCircle'}
    type={type}
    size={size}
    fieldName={fieldName}
    isSelected={isSelected}
    disabled={disabled}
    errorMessage={errorMessage}
    className={className}
  >
    {children}
  </InputWithToggle>
);

Checkbox.defaultProps = {
  variation: 'default',
  type: 'default',
  size: 'default',
  isSelected: false,
  disabled: false,
  errorMessage: '',
};
