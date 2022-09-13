import React from 'react';
import { ICheckRadioProps, ICheckExtra, InputWithToggle, ISize } from '../InputWithToggle';

export const Radio: React.FC<ICheckRadioProps & ISize & ICheckExtra> = ({
  size = 'default',
  name,
  value = 'fieldName',
  isChecked = false,
  disabled = false,
  error = '',
  className,
  children,
  ...rest
}) => (
  <InputWithToggle
    variation='radio'
    type='default'
    size={size}
    name={name}
    isChecked={isChecked}
    disabled={disabled}
    value={value}
    error={error}
    className={className}
    {...rest}
  >
    {children}
  </InputWithToggle>
);

Radio.defaultProps = {
  size: 'default',
  value: 'fieldName',
  isChecked: false,
  disabled: false,
  error: '',
};