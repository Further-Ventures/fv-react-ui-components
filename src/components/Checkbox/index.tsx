import React from 'react';
import { ICheckRadioProps, ICheckExtra, InputWithToggle, ISize, TCheckboxType } from '../InputWithToggle';

interface ICheckboxProps extends ICheckRadioProps {
  variation?: 'default' | 'circle';
  type?: TCheckboxType;
}

export const Checkbox: React.FC<ICheckboxProps & ISize & ICheckExtra> = ({
  variation = 'default',
  type = 'default',
  size = 'default',
  name,
  isChecked,
  isDefaultChecked,
  error = '',
  value,
  className,
  children,
  ...rest
}) => (
  <InputWithToggle
    variation={variation === 'default' ? 'checkbox' : 'checkboxCircle'}
    type={type}
    size={size}
    name={name}
    value={value}
    isChecked={isChecked}
    error={error}
    className={className}
    isDefaultChecked={isDefaultChecked}
    {...rest}
  >
    {children}
  </InputWithToggle>
);

Checkbox.defaultProps = {
  variation: 'default',
  type: 'default',
  size: 'default',
  disabled: false,
  error: '',
};
