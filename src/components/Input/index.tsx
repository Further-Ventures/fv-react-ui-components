import React, { useRef } from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import classNames from 'classnames';
import { useInput } from './hooks';
import Button, { IButton } from '../Button';
import Icon from '../Icons';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  color?: 'primary';
  hint?: string;
  errorMessage?: string;
  value?: string;
  name?: string;
  controlled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  prefix?: string;
  prefixClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  endAdornment?: React.ReactNode;
  mask?: string;
  fullWidth?: boolean;
}

export interface IInputTW extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  color?: 'primary';
  hint?: string;
  errorMessage?: string;
  value?: string;
  name?: string;
  controlled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  prefix?: string;
  prefixClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  endAdornment?: React.ReactNode;
  mask?: string;
  fullWidth?: boolean;

  width: 'small' | 'medium' | 'large' | 'full';
  buttonText?: string;
  onButtonClick?: (e: React.BaseSyntheticEvent) => void;
  buttonProps?: IButton;
}

export const InputTW: React.FC<IInputTW> = (props) => {
  const {
    label,
    className,
    hint,
    prefix,
    prefixClassName,
    errorClassName,
    hintClassName,
    endAdornment,
    placeholder,
    onClick,
    fullWidth,
    buttonText,
    onButtonClick,
    errorMessage,
    ...rest
  } = props;
  const { buttonProps } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const { name, value, disabled, inputProps, onChange, onBlur } = useInput(rest);
  return (
    <div className={classNames('relative mb-5 inline-block')}>
      <input
        ref={inputRef}
        type='text'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames('peer border rounded h-14', 'transition-colors duration-300 ease-out', {
          ['border-default hover:border-text-primary focus:ring-4 focus:ring-primary-light focus:border-primary']: !errorMessage,
          ['border-error focus:ring-4 focus:ring-error-light']: errorMessage,
          ['px-3 pb-1.5 pt-6.5']: label,
          ['placeholder:invisible placeholder:opacity-0 placeholder:transition-opacity duration-300 ease-out focus:placeholder:visible focus:placeholder:opacity-100 ']:
            label,
          ['px-3 py-1.5']: !label,
        })}
      />
      {label && (
        <label
          className={classNames(
            'text-base leading-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center transition-all ease-out text-text-primary pointer-events-none',
            'peer-focus:top-0 peer-focus:translate-y-1.5 peer-focus:scale-75 peer-focus:-translate-x-[12.5%] peer-focus:text-text-hint',
            { ['top-0 translate-y-1.5 scale-75 -translate-x-[12.5%] text-text-hint']: value }
          )}
        >
          {label}
        </label>
      )}
      {buttonProps && (
        <div className={classNames('absolute right-3 top-1/2 -translate-y-1/2')}>
          {<Button size='mini' variant='outlined' label='Button' {...buttonProps} />}
        </div>
      )}
      <div className={classNames('absolute')}>This is an error text</div>
    </div>
  );
};

const Input: React.FC<IInput> = (props) => {
  const classes = useStyles(props);
  const { label, className, hint, prefix, prefixClassName, errorClassName, hintClassName, endAdornment, placeholder, onClick, fullWidth, ...rest } =
    props;
  const { name, value, disabled, errorMessage, inputProps, onChange, onBlur } = useInput(rest);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={classNames(
        classes.root,
        {
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
    >
      <div
        onClick={onClick}
        className={classNames(classes.inputContainer, {
          [classes.disabled]: disabled,
          [classes.inputContainerError]: !!errorMessage,
          [classes.withLabel]: label,
        })}
      >
        <div className={classes.inputArea}>
          {label && (
            <div
              onClick={() => {
                inputRef.current?.focus();
              }}
              className={classNames(classes.label, { [classes.textDisabled]: disabled })}
            >
              {label}
            </div>
          )}
          {prefix && <div className={classNames(classes.prefix, prefixClassName)}>{prefix}</div>}
          <input
            {...inputProps}
            name={name}
            ref={inputRef}
            value={value}
            className={classNames(classes.input, {
              [classes.disabled]: disabled,
              [classes.textDisabled]: disabled,
            })}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        {endAdornment}
      </div>
      {errorMessage && <ErrorMessage text={errorMessage} className={classNames(classes.message, errorClassName)} />}
      {hint && <HintMessage text={hint} disabled={disabled} className={classNames(classes.message, hintClassName)} />}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
};

export default Input;
