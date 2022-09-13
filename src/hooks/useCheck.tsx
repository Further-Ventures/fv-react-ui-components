import React from 'react';
import { applyDigitMask } from './utils';

interface BaseInput extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  name?: string;
  isChecked?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
}

const useCheck = <T extends BaseInput>(props: T) => {
  const { disabled, name = '', isChecked = false, onChange, value, ...inputProps } = props;
  const controlled = Boolean(onChange);
  const initValue = isChecked;
  const [internalValue, setInternalValue] = React.useState<boolean>(initValue);
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }

    setInternalValue((prevValue) => {
      console.log('---------------');
      console.log('name', e.target.value, '; prevValue', prevValue, '; e.target.checked', e.target.checked, '; controlled', controlled);
      // debugger;
      return e.target.checked;
    });
    onChange && onChange(e);
  };

  console.log('------------------');
  console.log(
    'name',
    name,
    '; value',
    value,
    '; isChecked',
    isChecked,
    '; internalValue',
    internalValue,
    '; disabled',
    disabled,
    '; controlled',
    controlled
  );

  return {
    name,
    value,
    disabled,
    inputProps,
    checked: controlled ? isChecked : internalValue,
    onChange: onChangeWrapper,
  };
};

export default useCheck;
