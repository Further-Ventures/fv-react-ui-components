import React, { useMemo, useState } from 'react';

interface BaseInput extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  name?: string;
  isDefaultChecked?: boolean;
  isChecked?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
}

const useCheck = <T extends BaseInput>(props: T) => {
  const { disabled, name = '', isDefaultChecked, isChecked, onChange, value, ...inputProps } = props;
  const controlled = useMemo(() => isChecked !== undefined && isChecked !== null, [isChecked]);

  const [internalValue, setInternalValue] = useState(controlled ? isChecked : isDefaultChecked);
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }

    if (!controlled) {
      setInternalValue(e.target.checked);
    }

    onChange?.(e);
  };

  return {
    name,
    value,
    disabled,
    inputProps: controlled
      ? {
          ...inputProps,
          onChange: onChangeWrapper,
          checked: isChecked,
        }
      : {
          ...inputProps,
          onChange: onChangeWrapper,
          defaultChecked: isDefaultChecked,
        },
    checked: controlled ? isChecked : internalValue,
  };
};

export default useCheck;
