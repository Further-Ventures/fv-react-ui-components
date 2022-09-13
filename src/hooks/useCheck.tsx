import React, { useState } from 'react';
import { TVariation } from '../components/InputWithToggle';

interface BaseInput extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  name?: string;
  isChecked?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
}

const useCheck = <T extends BaseInput>(props: T, variation: TVariation) => {
  const isCheckbox = variation !== 'radio';
  const { disabled, name = '', isChecked = false, onChange, value, ...inputProps } = props;
  const [internalValue, setInternalValue] = useState(isChecked);
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }

    if (isCheckbox) {
      setInternalValue(e.target.checked);
    }

    onChange && onChange(e);
  };

  return {
    name,
    value,
    disabled,
    inputProps,
    checked: internalValue,
    onChange: onChangeWrapper,
  };
};

export default useCheck;
