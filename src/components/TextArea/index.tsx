import React, { useRef, useLayoutEffect, useId } from 'react';
import classNames from 'classnames';
import useInput from '../../hooks/useInput';
import HintMessage from '../HintMessage';
import ErrorMessage from '../ErrorMessage';
import './index.scss';

export interface ITextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
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
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  width?: 'small' | 'medium' | 'large' | 'full';
  maxLength?: number;
  controlled?: boolean;
}

export const TextArea: React.FC<ITextArea> = (props) => {
  const { inputClassName, rows, label, className, hint, hintClassName, error, errorClassName, placeholder, onClick, width, maxLength, ...rest } =
    props;

  const { name, value, disabled, onChange, onBlur } = useInput<ITextArea>(rest);
  const textAreaId = useId();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const hasError = Boolean(error);
  const hasLabel = Boolean(label);
  const hasContent = Boolean(error || hint || maxLength);

  useLayoutEffect(() => {
    if (!textAreaRef.current?.scrollHeight) {
      return;
    }

    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current?.scrollHeight}px`;
  }, [value, width, hasLabel, rows]);

  return (
    <div
      className={classNames('inline-block', {
        ['w-48']: width === 'small',
        ['w-64']: width === 'medium',
        ['w-96']: width === 'large',
        ['w-full']: width === 'full',
      })}
    >
      <div className={classNames('relative')}>
        <textarea
          ref={textAreaRef}
          id={`textarea--${textAreaId}`}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          placeholder={placeholder}
          className={classNames(
            'mercuryTextArea peer resize-none overflow-hidden bg-transparent w-full border-1.5 rounded',
            'transition-colors duration-300 ease-out',
            'placeholder:text-text-disabled',
            {
              ['px-3 pb-2 pt-6.5']: hasLabel,
              ['px-3 py-2']: !hasLabel,
              ['border-default hover:border-text-primary focus:border-primary hover:bg-default-extra-light']: !hasError,
              ['border-error hover:bg-default-extra-light']: hasError,
              ['disabled:border-default-light disabled:bg-background select-none']: disabled,
            }
          )}
        />
        {hasLabel && (
          <label
            htmlFor={`textarea--${textAreaId}`}
            className={classNames(
              'font-normal left-0 right-0 px-3 pt-2 text-xs text-text-hint leading-none absolute pointer-events-none whitespace-nowrap truncate',
              'peer-disabled:text-text-disabled peer-disabled:select-none' //input disabled
            )}
          >
            {label}
          </label>
        )}
      </div>
      {hasContent && (
        <div className='flex justify-between pl-3'>
          <div>
            {hint && <HintMessage text={hint} className={hintClassName} disabled={disabled} size='large' />}
            {error && <ErrorMessage text={error} className={errorClassName} disabled={disabled} size='large' />}
          </div>
          {Boolean(maxLength) && <HintMessage text={`${value.length}/${maxLength}`} className={hintClassName} disabled={disabled} size='large' />}
        </div>
      )}
    </div>
  );
};

TextArea.defaultProps = {
  width: 'medium',
  rows: 5,
};

export default TextArea;
