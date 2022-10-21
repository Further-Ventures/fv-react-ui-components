import React, { useId } from 'react';
import { InputWithToggle } from '../InputWithToggle';
import { IPressable } from '../Pressable';

export interface IToggle extends Omit<IPressable, 'label' | 'size' | 'children' | 'color'> {
  isActive: boolean;
  onToggle?: (e: React.BaseSyntheticEvent) => void;
  size?: 'default' | 'small';
  label?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Toggle: React.FC<IToggle> = ({ isActive, onToggle, size = 'default', label, className, disabled }) => {
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
        label={label}
        {...rest}
      />
    </>
  );
};

Toggle.defaultProps = {
  isActive: false,
  size: 'default',
};

export default Toggle;
