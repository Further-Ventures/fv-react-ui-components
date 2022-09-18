import React, { useId } from 'react';
import { InputWithToggle } from '../InputWithToggle';
import { IPressable } from '../Pressable';

export interface IToggle extends Omit<IPressable, 'size' | 'color'> {
  isActive: boolean;
  onToggle?: (e: React.BaseSyntheticEvent) => void;
  size?: 'default' | 'small';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Toggle: React.FC<IToggle> = ({ isActive, onToggle, size = 'default', children, className, disabled }) => {
  const handleClick = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }

    onToggle?.(e);
  };

  const rest = {
    onChange: handleClick,
  };
  const inputId = useId();

  return (
    <>
      <InputWithToggle
        variation='toggle'
        type='default'
        name={`toggle-${inputId}`}
        size={size === 'default' ? 'large' : 'default'}
        isChecked={isActive}
        disabled={disabled}
        className={className}
        {...rest}
      >
        {children}
      </InputWithToggle>
    </>
  );
};

Toggle.defaultProps = {
  isActive: false,
  size: 'default',
};

export default Toggle;
