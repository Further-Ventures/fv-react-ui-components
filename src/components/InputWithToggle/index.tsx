import React, { HTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import useCheck from '../../hooks/useCheck';
import { ToggleIcon } from './toggleIcon';

export type TCheckboxType = 'default' | 'intermediate';
export type TVariation = 'checkbox' | 'radio' | 'checkboxCircle' | 'toggle';
export interface ISize {
  size?: 'default' | 'large';
}
export interface ICheckExtra extends HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  value?: string;
}
export interface ICheckRadioProps {
  name: string;
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}
interface IInputWithToggleProps extends ICheckRadioProps {
  variation?: TVariation;
  type?: TCheckboxType;
}

const TEST_ID = '@fv/InputWithToggle';

export const InputWithToggle: React.FC<IInputWithToggleProps & ISize & ICheckExtra> = ({
  variation = 'checkbox',
  type = 'default',
  size = 'default',
  error = '',
  className,
  children,
  ...rest
}) => {
  const { name, checked, value, disabled, inputProps } = useCheck<IInputWithToggleProps>({ ...rest });
  const inputId = useId();

  return (
    <label
      data-testid={`${TEST_ID}-label`}
      htmlFor={`${name}-${inputId}`}
      className={classNames(className, 'w-full group flex items-center cursor-pointer ease-out transition-colors duration-300', {
        ['text-default-light']: disabled,
        ['text-error']: error,
      })}
    >
      <input
        data-testid={`${TEST_ID}-input`}
        name={name}
        className={'peer hidden'}
        id={`${name}-${inputId}`}
        disabled={disabled}
        type={variation === 'radio' ? 'radio' : 'checkbox'}
        value={value}
        {...inputProps}
      />
      <ToggleIcon variation={variation} type={type} size={size} error={error} checked={checked} disabled={disabled} />
      <span className='flex-1 max-w-full truncate'>{children}</span>
    </label>
  );
};

InputWithToggle.defaultProps = {
  variation: 'checkbox',
  type: 'default',
  size: 'default',
  disabled: false,
  error: '',
};
