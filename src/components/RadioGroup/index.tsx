import React, { useState } from 'react';
import { InputWithToggle } from '../InputWithToggle';

interface ICheckRadioGroupProps {
  size?: 'default' | 'large';
  name: string;
  items?: {
    children: React.ReactNode;
    value: string;
    disabled?: boolean;
    error?: string;
  }[];
  selected?: string;
  value?: string;
  className?: string;
}

export const RadioGroup: React.FC<ICheckRadioGroupProps> = ({ size = 'default', name, items, selected, className }) => {
  const [selectedValue, setSelectedValue] = useState(selected);
  const onChange = (e: React.BaseSyntheticEvent) => {
    setSelectedValue(e.target.value);
  };

  return (
    <fieldset onChange={onChange}>
      {items?.map(({ children, value, disabled, error }) => (
        <InputWithToggle
          key={value}
          variation='radio'
          type='default'
          size={size}
          name={name}
          isChecked={selectedValue === value}
          disabled={disabled}
          value={value}
          error={error}
          className={className}
        >
          {children}
        </InputWithToggle>
      ))}
    </fieldset>
  );
};

RadioGroup.defaultProps = {
  size: 'default',
  value: 'fieldName',
};
