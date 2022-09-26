import React, { HTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import Icons from '../Icons';
import useCheck from '../../hooks/useCheck';

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
    <div>
      <label
        data-testid={`${TEST_ID}-label`}
        htmlFor={`${name}-${inputId}`}
        className={classNames(className, 'group flex items-center cursor-pointer ease-out transition-colors duration-300', {
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
        <span
          data-testid={`${TEST_ID}-toggleBackground`}
          className={classNames('flex items-center mr-2 ease-out transition-all duration-300', {
            ['justify-center rounded border']: variation !== 'toggle',
            ['overflow-hidden rounded-3xl']: variation === 'toggle',
            ['w-11 h-6 p-0.5']: size === 'large' && variation === 'toggle',
            ['w-[1.8125rem] h-[1.0625rem] p-0.5']: size === 'default' && variation === 'toggle',
            ['bg-default-light group-hover:bg-default']: !checked && !disabled && variation === 'toggle',
            ['bg-primary group-hover:bg-primary-medium group-active:bg-primary-dark']: checked && !disabled && variation === 'toggle',
            ['bg-default']: disabled && variation === 'toggle',
            ['rounded']: variation === 'checkbox',
            ['rounded-2xl']: variation !== 'checkbox',
            ['w-4 h-4']: size === 'default' && variation !== 'toggle',
            ['w-5 h-5']: size === 'large' && variation !== 'toggle',
            ['border-default group-hover:bg-primary-light group-hover:border-primary-dark']:
              !checked && !disabled && !error && variation !== 'toggle',
            ['border-primary bg-primary group-hover:bg-primary-dark group-hover:border-primary-dark']:
              checked && !disabled && !error && variation !== 'toggle',
            ['border-default-light bg-background-secondary group-hover:border-default-light group-hover:bg-background-secondary']:
              disabled && variation !== 'toggle',
            ['border-error']: error && variation !== 'toggle',
            ['border-error group-hover:bg-error-light group-hover:border-error']: !checked && !disabled && error && variation !== 'toggle',
            ['border-error bg-error group-hover:bg-error group-hover:border-error']: checked && !disabled && error && variation !== 'toggle',
          })}
        >
          {!['radio', 'toggle'].includes(variation) && checked ? (
            <Icons
              data-testid={`${TEST_ID}-checkboxIcon`}
              icon={variation === 'checkbox' && type === 'intermediate' ? 'remove' : 'check'}
              size={size === 'large' ? 15 : 10}
              color={disabled ? 'default-light' : 'primary-contrast-secondary'}
            />
          ) : null}
          {variation === 'radio' && checked ? (
            <span
              data-testid={`${TEST_ID}-radioIcon`}
              className={classNames('rounded', {
                ['bg-primary-contrast-secondary']: !disabled,
                ['bg-default-light']: disabled,
                ['w-1.5 h-1.5']: size === 'default',
                ['w-2 h-2']: size === 'large',
              })}
            />
          ) : null}
          {variation === 'toggle' ? (
            <span
              data-testid={`${TEST_ID}-toggleCircle`}
              className={classNames('relative rounded-full shadow-light ease-out transition-all duration-300', {
                ['w-5 h-5']: size === 'large',
                ['w-[0.8125rem] h-[0.8125rem]']: size === 'default',
                ['left-0']: !checked,
                ['left-5']: checked && size === 'large',
                ['left-3']: checked && size === 'default',
                ['bg-default-extra-light']: disabled,
                ['bg-primary-contrast-secondary']: !disabled,
              })}
            ></span>
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
