import React from 'react';
import { ICheckRadioProps, ICheckExtra, InputWithToggle, ISize } from '../InputWithToggle';

export const Radio: React.FC<ICheckRadioProps & ISize & ICheckExtra> = ({
  size = 'default',
  name,
  value = 'fieldName',
  isDefaultChecked,
  disabled = false,
  error = '',
  className,
  heading,
  label,
  horizontalPosition = 'left',
  verticalPosition = 'top',
  ...rest
}) => (
  <InputWithToggle
    variation='radio'
    type='default'
    size={size}
    name={name}
    disabled={disabled}
    value={value}
    error={error}
    className={className}
    isDefaultChecked={isDefaultChecked}
    heading={heading}
    label={label}
    horizontalPosition={horizontalPosition}
    verticalPosition={verticalPosition}
    {...rest}
  />
);

Radio.defaultProps = {
  size: 'default',
  value: 'fieldName',
  disabled: false,
  error: '',
};
