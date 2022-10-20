import classNames from 'classnames';
import React, { useState } from 'react';
import { InputWithToggle } from '../InputWithToggle';

interface ICheckRadioGroupProps {
  size?: 'default' | 'large';
  name: string;
  items?: {
    heading?: React.ReactNode;
    label?: React.ReactNode;
    hint?: string;
    value: string;
    disabled?: boolean;
    error?: string;
  }[];
  horizontalPosition?: 'left' | 'right';
  verticalPosition?: 'top' | 'middle';
  selected?: string;
  value?: string;
  className?: string;
}

export const RadioGroup: React.FC<ICheckRadioGroupProps> = ({
  size = 'default',
  name,
  items,
  selected,
  horizontalPosition = 'left',
  verticalPosition = 'top',
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState(selected);
  const onChange = (e: React.BaseSyntheticEvent) => {
    setSelectedValue(e.target.value);
  };

  return (
    <fieldset onChange={onChange}>
      {items?.map(({ heading, label, hint, error, value, disabled }) => (
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
          heading={heading}
          label={label}
          hint={hint}
          horizontalPosition={horizontalPosition}
          verticalPosition={verticalPosition}
          className={classNames('py-2', className)}
        />
      ))}
    </fieldset>
  );
};

RadioGroup.defaultProps = {
  size: 'default',
  value: 'fieldName',
};
