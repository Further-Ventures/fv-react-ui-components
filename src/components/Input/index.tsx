import React from 'react';
import classNames from 'classnames';
import { useInput } from './hooks';
import Icon from '../Icons';
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  placeholder?: string;
  disabled?: boolean;
  hint?: string;
  hintClassName?: string;
  error?: string;
  errorClassName?: string;
  value?: string;
  name?: string;
  controlled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  mask?: string;

  width?: 'small' | 'medium' | 'large' | 'full';

  sideContent?: React.ReactNode;
}

export const Input: React.FC<IInput> = (props) => {
  const { sideContent, inputClassName, label, className, hint, hintClassName, error, errorClassName, placeholder, onClick, width, ...rest } =
    props;

  const { name, value, disabled, inputProps, onChange, onBlur } = useInput(rest);

  const hasError = Boolean(error);
  const hasValue = Boolean(value);
  const hasLabel = Boolean(label);

  const hasContent = Boolean(sideContent);

  return (
    <div className={classNames(className, 'mb-5', {
      ['w-48']: width === 'small',
      ['w-64']: width === 'medium',
      ['w-96']: width === 'large',
    })}>
      <div className={classNames('relative overflow-hidden', { ['text-text-disabled']: disabled })}>
        <input
          type='text'
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          className={classNames(inputClassName, 'peer border-1.5 rounded h-14', 'transition-colors duration-300 ease-out w-full', {
            ['disabled:border-default-light disabled:bg-background select-none']: disabled,
            ['border-default hover:border-text-primary hover:bg-default-extra-light focus:border-primary']: !hasError,
            ['border-error hover:bg-default-extra-light']: hasError,
            ['px-3 pb-1.5 pt-6.5']: hasLabel,
            ['placeholder:invisible placeholder:opacity-0 placeholder:translate-y-full placeholder:transition placeholder:duration-250 ease-out focus:placeholder:visible focus:placeholder:opacity-100 focus:placeholder:translate-y-0']:
              hasLabel,
            ['px-3 py-1.5']: !hasLabel,
          })}
          {...inputProps}
        />
        {hasLabel && (
          <label
            className={classNames(
              'text-base leading-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center transition ease-out duration-250 text-text-primary pointer-events-none whitespace-nowrap', //base
              'peer-disabled:text-text-disabled peer-disabled:select-none', //input disabled
              'peer-focus:-translate-y-5.5 peer-focus:scale-75 peer-focus:-translate-x-[12.5%] peer-focus:text-text-hint', //input focus
              { ['-translate-y-5.5 scale-75 -translate-x-[12.5%] text-text-hint']: hasValue }
            )}
          >
            {label}
          </label>
        )}
        {hasContent && (
          <div className={classNames('flex gap-2 items-center absolute right-3 top-1/2 -translate-y-1/2')}>
            {sideContent}
          </div>
        )}
      </div>
      {hint && (
        <div
          className={classNames(hintClassName, 'text-sm leading-none mt-2', {
            ['text-text-hint']: !disabled,
            ['text-text-disabled']: disabled,
          })}
        >
          {hint}
        </div>
      )}
      {hasError && (
        <div
          className={classNames(errorClassName, 'flex items-center gap-1 text-sm leading-none  mt-2', {
            ['text-error']: !disabled,
            ['text-text-disabled']: disabled,
          })}
        >
          <Icon icon='info' fill size={14} />
          {error}
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  width: 'medium',
};

export default Input;
