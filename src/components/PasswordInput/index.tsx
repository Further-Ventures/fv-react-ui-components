import React, { useState, useCallback } from 'react';
// import classNames from 'classnames';

import Button from '../Button';
import Icon from '../Icons';
import Input, { IInput } from '../Input';

export interface IPasswordInput extends Omit<IInput, 'mask' | 'type' | 'sideContent'> {}

export const PasswordInput: React.FC<IPasswordInput> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { disabled, ...rest } = props;
  const toggleInputType = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword, setShowPassword]);

  const inputType = showPassword ? 'text' : 'password';
  const icon = showPassword ? 'visibility' : 'visibility_off';
  return (
    <Input
      {...rest}
      disabled={disabled}
      type={inputType}
      sideContent={
        <Button variant='transparent' disabled={disabled} color='grey' size='small' onClick={toggleInputType} contentLeft={<Icon icon={icon} />} />
      }
    />
  );
};

PasswordInput.defaultProps = {
  width: 'medium',
};

export default PasswordInput;
