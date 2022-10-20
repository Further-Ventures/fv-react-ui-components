import React, { HTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import useCheck from '../../hooks/useCheck';
import { ToggleIcon } from './toggleIcon';
import HintMessage from '../HintMessage';
import ErrorMessage from '../ErrorMessage';

export type TCheckboxType = 'default' | 'intermediate';
export type TVariation = 'checkbox' | 'radio' | 'checkboxCircle' | 'toggle';
export interface ISize {
  size?: 'default' | 'large';
}
export interface ICheckExtra extends HTMLAttributes<HTMLInputElement> {
  value?: string;
}
export interface ICheckRadioProps {
  name?: string;
  heading?: React.ReactNode;
  label?: React.ReactNode;
  horizontalPosition?: 'left' | 'right';
  verticalPosition?: 'top' | 'middle';
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  disabled?: boolean;
  hint?: string;
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
  hint = '',
  error = '',
  heading,
  label,
  className,
  horizontalPosition = 'left',
  verticalPosition = 'top',
  ...rest
}) => {
  const { name, checked, value, disabled, inputProps } = useCheck<IInputWithToggleProps>({ ...rest, type });
  const inputId = useId();

  return (
    <span className={classNames('block', className)}>
      <label
        data-testid={`${TEST_ID}-label`}
        htmlFor={`${name}-${inputId}`}
        className={classNames('w-full group cursor-pointer ease-out transition-colors duration-300', {
          ['text-default-light']: disabled,
          ['text-error']: error,
        })}
      >
        {heading ? (
          <span
            className={classNames('flex flex-1 leading-normal mb-3 max-w-full', {
              ['text-xxs']: size === 'default',
              ['text-xs']: size === 'large',
            })}
          >
            {heading}
          </span>
        ) : null}
        <span
          className={classNames('flex', {
            ['items-center']: verticalPosition === 'middle',
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
            className={classNames({
              ['py-[0.21875rem]']: size === 'large',
              ['order-2']: horizontalPosition === 'right',
            })}
          >
            <ToggleIcon
              variation={variation}
              type={type}
              size={size}
              error={error}
              checked={checked}
              disabled={disabled}
              horizontalPosition={horizontalPosition}
            />
          </span>
          {label ? (
            <span
              className={classNames('flex-1 max-w-full', {
                ['text-sm leading-extra-tight']: size === 'default',
                ['text-base2 leading-normal']: size === 'large',
                ['order-1']: horizontalPosition === 'right',
              })}
            >
              {label}
            </span>
          ) : null}
        </span>
      </label>
      {hint && (
        <HintMessage
          text={hint}
          size={size}
          marginHorizontal={horizontalPosition === 'right' ? (size === 'default' ? 'mr-6' : 'mr-7') : size === 'default' ? 'ml-6' : 'ml-7'}
        />
      )}
      {error && (
        <ErrorMessage
          text={error}
          size={size}
          marginHorizontal={horizontalPosition === 'right' ? (size === 'default' ? 'mr-6' : 'mr-7') : size === 'default' ? 'ml-6' : 'ml-7'}
        />
      )}
    </span>
  );
};

InputWithToggle.defaultProps = {
  variation: 'checkbox',
  type: 'default',
  size: 'default',
  disabled: false,
  hint: '',
  error: '',
};
