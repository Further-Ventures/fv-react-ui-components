import React, { useState } from 'react';
import classNames from 'classnames';
import Icons from '../Icons';

export type TCheckboxType = 'default' | 'intermediate';
export interface ICheckRadioProps {
  size?: 'default' | 'large';
  fieldName: string;
  isSelected?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  errorMessage?: string;
  className?: string;
}
interface IInputWithToggleProps extends ICheckRadioProps {
  variation?: 'checkbox' | 'radio' | 'checkboxCircle';
  type?: TCheckboxType;
}

export const InputWithToggle: React.FC<IInputWithToggleProps> = ({
  variation = 'checkbox',
  type = 'default',
  size = 'default',
  fieldName,
  isSelected = false,
  disabled = false,
  errorMessage = '',
  className,
  children
}) => {
  const [ selected, setSelected ] = useState(isSelected);
  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    !disabled && setSelected(!selected)
  };

  return <div>
    <label htmlFor={fieldName} className={classNames('group flex items-center cursor-pointer ease-out transition-colors duration-300', {
      ['text-default-light']: disabled,
      ['text-error']: errorMessage,
      className
    })}>
      <span className={classNames('flex justify-center items-center rounded border mr-2 ease-out transition-all duration-300', {
        ['rounded']: variation === 'checkbox',
        ['rounded-2xl']: variation !== 'checkbox',
        ['w-4 h-4']: size === 'default',
        ['w-5 h-5']: size === 'large',
        ['border-default group-hover:bg-primary-light group-hover:border-primary-dark']: !selected && !disabled && !errorMessage,
        ['border-primary bg-primary group-hover:bg-primary-dark group-hover:border-primary-dark']: selected && !disabled && !errorMessage,
        ['border-default-light bg-background-secondary group-hover:border-default-light group-hover:bg-background-secondary']: disabled,
        ['border-error']: errorMessage,
        ['border-error group-hover:bg-error-light group-hover:border-error']: !selected && !disabled && errorMessage,
        ['border-error bg-error group-hover:bg-error group-hover:border-error']: selected && !disabled && errorMessage,
      })}>
        {
          (variation === 'checkbox' && type === 'default' || variation === 'checkboxCircle') && selected ?
            <Icons icon="check" className="" size={size === 'large' ? 15 : 10} color={disabled ? 'default-light' : 'primary-contrast-secondary'} />
            : null
        }
        {
          variation === 'checkbox' && type === 'intermediate' && selected ?
            <Icons icon="remove" className="" size={size === 'large' ? 15 : 10} color={disabled ? 'default-light' : 'primary-contrast-secondary'} />
            : null
        }
        {
          variation === 'radio' && selected ?
            <span className={classNames('rounded', {
              ['bg-primary-contrast-secondary']: !disabled,
              ['bg-default-light']: disabled,
              ['w-1.5 h-1.5']: size === 'default',
              ['w-2 h-2']: size === 'large'
            })} />
            : null
        }
      </span>
      <span>{children}</span>
    </label>
    <input name={fieldName} id={fieldName} defaultChecked={selected} onChange={handleSelected} disabled={disabled} type={variation === 'radio' ? 'radio' : 'checkbox'} className="hidden" />
  </div>
};

InputWithToggle.defaultProps = {
  variation: 'checkbox',
  type: 'default',
  size: 'default',
  isSelected: false,
  disabled: false,
  errorMessage: ''
};
