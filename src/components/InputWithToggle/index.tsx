import React, { HTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import Icons from '../Icons';
import useCheck from '../../hooks/useCheck';

export type TCheckboxType = 'default' | 'intermediate';
export type TVariation = 'checkbox' | 'radio' | 'checkboxCircle';
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
    <div>
      <label
        htmlFor={`${name}-${inputId}`}
        className={classNames(className, 'group flex items-center cursor-pointer ease-out transition-colors duration-300', {
          ['text-default-light']: disabled,
          ['text-error']: error,
        })}
      >
        <input
          name={name}
          className={'peer'}
          id={`${name}-${inputId}`}
          disabled={disabled}
          type={variation === 'radio' ? 'radio' : 'checkbox'}
          value={value}
          {...inputProps}
        />
        <span
          className={classNames('flex justify-center items-center rounded border mr-2 ease-out transition-all duration-300', {
            ['rounded']: variation === 'checkbox',
            ['rounded-2xl']: variation !== 'checkbox',
            ['w-4 h-4']: size === 'default',
            ['w-5 h-5']: size === 'large',
            ['border-default group-hover:bg-primary-light group-hover:border-primary-dark']: !checked && !disabled && !error,
            ['border-primary bg-primary group-hover:bg-primary-dark group-hover:border-primary-dark']: checked && !disabled && !error,
            ['border-default-light bg-background-secondary group-hover:border-default-light group-hover:bg-background-secondary']: disabled,
            ['border-error']: error,
            ['border-error group-hover:bg-error-light group-hover:border-error']: !checked && !disabled && error,
            ['border-error bg-error group-hover:bg-error group-hover:border-error']: checked && !disabled && error,
          })}
        >
          {variation !== 'radio' && checked ? (
            <Icons
              icon={variation === 'checkbox' && type === 'intermediate' ? 'remove' : 'check'}
              size={size === 'large' ? 15 : 10}
              color={disabled ? 'default-light' : 'primary-contrast-secondary'}
            />
          ) : null}
          {variation === 'radio' && checked ? (
            <span
              className={classNames('rounded', {
                ['bg-primary-contrast-secondary']: !disabled,
                ['bg-default-light']: disabled,
                ['w-1.5 h-1.5']: size === 'default',
                ['w-2 h-2']: size === 'large',
              })}
            />
          ) : null}
        </span>
        <span>{children}</span>
      </label>
    </div>
  );
};

InputWithToggle.defaultProps = {
  variation: 'checkbox',
  type: 'default',
  size: 'default',
  disabled: false,
  error: '',
};
