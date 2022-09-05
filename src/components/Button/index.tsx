import React from 'react';
import classNames from 'classnames';
export interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label?: string;
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'flat' | 'round' | 'circle';
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'error';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = (props) => {
  const { size = 'medium', shape = 'round', variant = 'contained', color = 'primary', label, disabled, className, onClick, ...rest } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      className={classNames(
        className,
        'font-mercury font-medium inline-flex items-center border-1.5',
        'disabled:text-text-disabled disabled:border-default-extra-light disabled:pointer-events-none',
        'transition-colors duration-300 ease-out',
        {
          ['text-2xs px-1.5 py-0.5']: size === 'mini',
          ['text-sm leading-extra-tight px-3.5 py-1.5']: size === 'small',
          ['text-base px-5.5 py-3.5']: size === 'medium',
          ['text-base px-7.5 py-5.5']: size === 'large',
          ['rounded']: `${shape}-${size}` === 'round-mini',
          ['rounded-md']: `${shape}-${size}` === 'round-small',
          ['rounded-lg']: `${shape}-${size}` === 'round-medium' || `${shape}-${size}` === 'round-large',
          ['rounded-full']: `${shape}` === 'circle',
          ['bg-primary disabled:bg-default-extra-light focus:bg-primary-medium focus:border-primary-medium hover:bg-primary-medium active:bg-primary-dark border-transparent text-primary-contrast-secondary']:
            `${color}-${variant}` === 'primary-contained',
          ['bg-transparent hover:bg-default-extra-light active:bg-error-light border-error hover:border-error-dark text-error hover:text-error-dark']:
            `${color}-${variant}` === 'error-outlined',
          ['bg-transparent hover:bg-default-extra-light active:bg-primary-light border-primary hover:border-primary-dark text-primary hover:text-primary-dark']:
            `${color}-${variant}` === 'primary-outlined',
          ['bg-error disabled:bg-default-extra-light hover:bg-error-medium active:bg-error-dark border-transparent text-primary-contrast-secondary']:
            `${color}-${variant}` === 'error-contained',
        }
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
