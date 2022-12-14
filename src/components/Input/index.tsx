import React, { useLayoutEffect, useRef, useState, useId } from 'react';
import classNames from 'classnames';
import useInput from '../../hooks/useInput';
import HintMessage from '../HintMessage';
import ErrorMessage from '../ErrorMessage';

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
  mask?: string;
  width?: 'small' | 'medium' | 'large' | 'full';
  sideContent?: React.ReactNode | ((hasError: boolean, disabled?: boolean) => React.ReactNode);
  controlled?: boolean;
}

const getPropertyValue = (ref: React.RefObject<HTMLElement>, value: string) =>
  ref.current && parseFloat(window.getComputedStyle(ref.current).getPropertyValue(value));

const TEST_ID = '@fv/input';

export const Input: React.FC<IInput> = (props) => {
  const {
    type,
    sideContent,
    inputClassName,
    label,
    className,
    hint,
    hintClassName,
    error,
    errorClassName,
    placeholder,
    onClick,
    width,
    mask,
    ...rest
  } = props;

  const { name, value, disabled, inputProps, onChange, onBlur } = useInput<IInput>(rest, mask);
  const inputId = useId();
  const sideContentRef = useRef<HTMLDivElement>(null);
  const [rightPad, setRightPad] = useState(0);

  const hasError = Boolean(error);
  const hasValue = Boolean(value);
  const hasLabel = Boolean(label);

  const hasContent = Boolean(sideContent);
  const overridePadding = Boolean(hasContent && sideContentRef.current);

  const isPassword = type === 'password';

  useLayoutEffect(() => {
    if (!hasContent) {
      return;
    }

    const contentWidth = getPropertyValue(sideContentRef, 'width') ?? 0;
    const contentRight = getPropertyValue(sideContentRef, 'right') ?? 0;

    const newPadRight = contentWidth + 2 * contentRight;

    if (isNaN(newPadRight)) {
      return;
    }

    if (newPadRight !== rightPad) {
      setRightPad(newPadRight);
    }
  }, [sideContent]);

  return (
    <div
      className={classNames(className, 'mb-5', {
        ['w-48']: width === 'small',
        ['w-64']: width === 'medium',
        ['w-96']: width === 'large',
      })}
    >
      <div className={classNames('relative overflow-hidden', { ['text-text-disabled']: disabled })}>
        <input
          name={name}
          data-testid={`${TEST_ID}-${name}`}
          id={`input--${inputId}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          style={overridePadding ? { paddingRight: rightPad } : {}}
          className={classNames(
            inputClassName,
            'mercuryInput peer border-1.5 rounded h-14',
            'transition-colors duration-300 ease-out w-full',
            'placeholder:text-text-disabled placeholder:text-base placeholder:tracking-normal placeholder:font-normal placeholder:font-mercury',
            'placeholder:invisible placeholder:opacity-0 placeholder:translate-y-full placeholder:transition placeholder:duration-250 ease-out focus:placeholder:visible focus:placeholder:opacity-100',
            {
              ['disabled:border-default-light disabled:bg-background select-none']: disabled,
              ['border-default hover:border-text-primary hover:bg-default-extra-light focus:border-primary']: !hasError,
              ['border-error hover:bg-default-extra-light']: hasError,
              ['px-3 pb-1.5 pt-6.5']: hasLabel,
              ['focus:placeholder:translate-y-0']: hasLabel && !isPassword,
              ["text-[1.5rem] tracking-wide leading-none font-extrabold font-['Verdana'] focus:placeholder:-translate-y-1"]: isPassword,
              ['px-3 py-1.5']: !hasLabel,
            }
          )}
          {...inputProps}
        />
        {hasLabel && (
          <label
            data-testid={`${TEST_ID}-${name}--label`}
            htmlFor={`input--${inputId}`}
            className={classNames(
              'text-base leading-none absolute left-3 top-1/2 -translate-y-1/2 transition ease-out duration-250 text-text-primary pointer-events-none w-[calc(100%-1.5rem)] truncate', //base
              'peer-disabled:text-text-disabled peer-disabled:select-none]', //input disabled
              'peer-focus:-translate-y-5.5 peer-focus:scale-75 peer-focus:-translate-x-[12.5%] peer-focus:text-text-hint', //input focus
              { ['-translate-y-5.5 scale-75 -translate-x-[12.5%] text-text-hint']: hasValue },
              { ['w-[calc(100%-4.75rem)] ']: hasContent }
            )}
          >
            {label}
          </label>
        )}
        {hasContent && (
          <div ref={sideContentRef} className={classNames('flex gap-2 items-center absolute right-3 top-1/2 -translate-y-1/2')}>
            {typeof sideContent === 'function' ? sideContent(hasError, disabled) : sideContent}
          </div>
        )}
      </div>
      {hint && <HintMessage text={hint} className={hintClassName} size='large' />}
      {error && <ErrorMessage text={error} className={errorClassName} size='large' />}
    </div>
  );
};

Input.defaultProps = {
  width: 'medium',
};

export default Input;
