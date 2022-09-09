import { IInput } from './index';
import React from 'react';
import { applyDigitMask } from './utils';

export const useInput = (props: IInput) => {
  const { disabled, name = '', value = '', controlled, onChange, onBlur, mask, ...inputProps } = props;
  const initValue = value;
  const [internalValue, setInternalValue] = React.useState<string>(mask && initValue ? applyDigitMask(initValue, mask) : initValue);
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value: targetValue } = e.target;
    let nextValue = targetValue;

    setInternalValue((prevValue) => {
      if (inputProps.type === 'number') {
        // Fixes input[type=number] on Safari, where any symbol is allowed
        return targetValue.replace(/^\D/g, '');
      }
      if (mask) {
        nextValue = prevValue.length >= targetValue.length ? targetValue : applyDigitMask(targetValue, mask);
      }

      return nextValue;
    });

    onChange && onChange(e);
  };

  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    onBlur && onBlur(e);
  };

  return {
    name,
    disabled,
    inputProps,
    value: controlled ? value : internalValue,
    onChange: onChangeWrapper,
    onBlur: onBlurWrapper,
  };
};
