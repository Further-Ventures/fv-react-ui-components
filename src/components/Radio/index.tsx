import React, { useState } from 'react';
import classNames from 'classnames';
import Icons from '../Icons';

interface IRadioProps {
  size?: 'default' | 'large';
  fieldName: string,
  isSelected?: boolean,
  disabled?: boolean,
  error?: boolean,
  children: React.ReactNode;
  className?: string;
}

export const Radio: React.FC<IRadioProps> = ({
  size = 'default',
  fieldName,
  isSelected = false,
  disabled = false,
  error = false,
  className,
  children
}) => {
  const [ selected, setSelected ] = useState(isSelected);
  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => !disabled && setSelected(!selected);

  const renderIcon = <>
    {
      selected ?
      <span className={classNames('rounded', {
        ['bg-primary-contrast-secondary']: !disabled,
        ['bg-default-light']: disabled,
        ['w-1.5 h-1.5']: size === 'default',
        ['w-2 h-2']: size === 'large'
      })} />
      : null
    }
  </>;

  return <div>
    <label htmlFor={fieldName} className={classNames('group flex items-center cursor-pointer', {
      ['text-default-light']: disabled,
      ['text-error']: error
    }, className)}>
      <span className={classNames('flex justify-center items-center rounded-2xl border mr-2 ease-out transition-all duration-300', {
        ['w-4 h-4']: size === 'default',
        ['w-5 h-5']: size === 'large',
        ['border-default group-hover:bg-primary-light group-hover:border-primary-dark']: !selected && !disabled && !error,
        ['border-primary bg-primary group-hover:bg-primary-dark group-hover:border-primary-dark']: selected && !disabled && !error,
        ['border-default-light bg-background-secondary group-hover:border-default-light group-hover:bg-background-secondary']: disabled,
        ['border-error']: error,
        ['group-hover:bg-error-light group-hover:border-error']: !selected && !disabled && error,
        ['bg-error group-hover:bg-error group-hover:border-error']: selected && !disabled && error,
      })}>
        {renderIcon}
      </span>
      <span>{children}</span>
    </label>
    <input name={fieldName} id={fieldName} defaultChecked={selected} onChange={handleSelected} disabled={disabled} type="radio" className="hidden" />
  </div>
};

Radio.defaultProps = {
  size: 'default',
  isSelected: false,
  disabled: false,
  error: false
};
