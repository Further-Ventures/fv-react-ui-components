import React, { useState } from 'react';
import classNames from 'classnames';
import Icons from '../Icons';

interface ICheckboxProps {
  variation?: 'default' | 'circle'
  type?: 'default' | 'intermediate';
  size?: 'default' | 'large';
  fieldName: string,
  isSelected?: boolean,
  disabled?: boolean,
  error?: boolean,
  children: React.ReactNode;
  className?: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  variation = 'default',
  type = 'default',
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
      <Icons 
        icon={variation === 'default' && type === 'intermediate' ? 'remove' : 'check'} 
        size={size === 'large' ? 15 : 10} 
        color={disabled ? 'default-light' : 'primary-contrast-secondary'}
      />
      : null
    }
  </>;

  return <div>
    <label htmlFor={fieldName} className={classNames('group flex items-center cursor-pointer', {
      ['text-default-light']: disabled,
      ['text-error']: error,
    }, className)}>
      <span className={classNames('flex justify-center items-center rounded border mr-2 ease-out transition-all duration-300', {
        ['rounded']: variation === 'default',
        ['rounded-2xl']: variation === 'circle',
        ['w-4 h-4']: size === 'default',
        ['w-5 h-5']: size === 'large',
        ['border-default group-hover:bg-primary-light group-hover:border-primary-dark']: !selected && !disabled && !error,
        ['border-primary bg-primary group-hover:bg-primary-dark group-hover:border-primary-dark']: selected && !disabled && !error,
        ['border-default-light bg-background-secondary group-hover:border-default-light group-hover:bg-background-secondary']: disabled,
        ['border-error']: error,
        ['border-error group-hover:bg-error-light group-hover:border-error']: !selected && !disabled && error,
        ['border-error bg-error group-hover:bg-error group-hover:border-error']: selected && !disabled && error,
      })}>
        {renderIcon}
      </span>
      <span>{children}</span>
    </label>
    <input name={fieldName} id={fieldName} defaultChecked={selected} onChange={handleSelected} disabled={disabled} type='checkbox' className="hidden" />
  </div>
};

Checkbox.defaultProps = {
  variation: 'default',
  type: 'default',
  size: 'default',
  isSelected: false,
  disabled: false,
  error: false
};
