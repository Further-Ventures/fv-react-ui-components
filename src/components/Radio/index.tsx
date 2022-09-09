import React from 'react';
import { ICheckRadioProps, InputWithToggle } from '../InputWithToggle';

export const Radio: React.FC<ICheckRadioProps> = ({
  size = 'default',
  fieldName,
  isSelected = false,
  disabled = false,
  errorMessage = '',
  className,
  children
}) => <InputWithToggle 
  variation="radio"
  type="default"
  size={size}
  fieldName={fieldName}
  isSelected={isSelected}
  disabled={disabled}
  errorMessage={errorMessage}
  className={className}
>
  {children}
</InputWithToggle>

Radio.defaultProps = {
  size: 'default',
  isSelected: false,
  disabled: false,
  errorMessage: ''
};
