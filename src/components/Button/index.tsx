import React from 'react';
import classNames from 'classnames';

export interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label?: string;
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'flat' | 'curved' | 'round';
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'error';
  disabled?: boolean;
  className?: string;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

const Button: React.FC<IButton> = (props) => {
  const {
    size = 'medium',
    shape = 'curved',
    variant = 'contained',
    color = 'primary',
    label,
    disabled,
    className,
    onClick,
    contentLeft,
    contentRight,
    ...rest
  } = props;

  const isIconOnly = Boolean(!label && (contentLeft || contentRight));
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      className={classNames(
        className,
        'font-mercury font-medium inline-flex items-center gap-2 border-1.5', //base
        'disabled:text-text-disabled disabled:border-default-extra-light disabled:pointer-events-none', //disabled
        'transition-colors duration-300 ease-out', //transition
        {
          //text size
          ['text-2xs']: size === 'mini',
          ['text-sm leading-extra-tight']: size === 'small',
          ['text-base']: size === 'medium' || size === 'large',
          //paddings with text
          ['py-0.5 px-1.5']: !isIconOnly && size === 'mini',
          ['py-1.5 px-3.5']: !isIconOnly && size === 'small',
          ['py-3.5 px-5.5']: !isIconOnly && size === 'medium',
          ['py-5.5 px-7.5']: !isIconOnly && size === 'large',
          //paddings with icons only
          ['p-0.5']: isIconOnly && size === 'mini',
          ['p-1.5']: isIconOnly && size === 'small',
          ['p-3.5']: isIconOnly && size === 'medium',
          ['p-5.5']: isIconOnly && size === 'large',
          //border radius
          ['rounded']: `${shape}-${size}` === 'curved-mini',
          ['rounded-md']: `${shape}-${size}` === 'curved-small',
          ['rounded-lg']: `${shape}-${size}` === 'curved-medium' || `${shape}-${size}` === 'curved-large',
          ['rounded-full']: `${shape}` === 'round',
          //color variants
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
      {contentLeft}
      {label}
      {contentRight}
    </button>
  );
};

export default Button;
