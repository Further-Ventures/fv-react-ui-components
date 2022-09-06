import React from 'react';
import classNames from 'classnames';
import '../Pressable';

export interface IPressable extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label?: string;
  size?: 'mini' | 'small' | 'medium' | 'large' | 'tag-large' | 'tag-small';
  shape?: 'flat' | 'curved' | 'round';
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'error' | 'default';
  disabled?: boolean;
  className?: string;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

const Button: React.FC<IPressable> = (props) => {
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
        'font-mercury inline-flex items-center gap-2', //base
        'disabled:pointer-events-none', //disabled
        'transition-colors duration-300 ease-out', //transition
        {
          //border radius
          ['rounded']: ['curved-mini', 'curved-tag-large', 'curved-tag-small'].includes(`${shape}-${size}`),
          ['rounded-md']: `${shape}-${size}` === 'curved-small',
          ['rounded-lg']: ['curved-medium', 'curved-large',].includes(`${shape}-${size}`),
          ['rounded-full']: `${shape}` === 'round',

          //border-width
          ['font-medium border-1.5 disabled:text-text-disabled disabled:border-default-extra-light']: ['mini','small','medium','large'].includes(size),
          ['font-normal border disabled:text-default disabled:bg-default-light ']: ['tag-large','tag-small'].includes(size),
 
          //text size
          ['text-2xs']: size === 'mini' || size === 'tag-small',
          ['text-sm leading-extra-tight']: size === 'small' || size === 'tag-large',
          ['text-base']: size === 'medium' || size === 'large',
          ['text-xs leading-none']: size === 'tag-small',

          //paddings with text
          ['py-1.525 px-3.525']: !isIconOnly && size === 'tag-large',
          ['py-0.775 px-2.125']: !isIconOnly && size === 'tag-small',

          ['py-0.5 px-1.5']: !isIconOnly && size === 'mini',
          ['py-1.5 px-3.5']: !isIconOnly && size === 'small',
          ['py-3.5 px-5.5']: !isIconOnly && size === 'medium',
          ['py-5.5 px-7.5']: !isIconOnly && size === 'large',
          //paddings with icons only
          ['p-0.5']: isIconOnly && size === 'mini',
          ['p-1.5']: isIconOnly && size === 'small',
          ['p-3.5']: isIconOnly && size === 'medium',
          ['p-5.5']: isIconOnly && size === 'large',
          //color variants

          //primary
          ['bg-primary disabled:bg-default-extra-light focus:bg-primary-medium focus:border-primary-medium hover:bg-primary-medium active:bg-primary-dark border-transparent text-primary-contrast-secondary']:
            `${color}-${variant}` === 'primary-contained',
          ['bg-transparent hover:bg-default-extra-light active:bg-primary-light border-primary hover:border-primary-dark text-primary hover:text-primary-dark']:
            `${color}-${variant}` === 'primary-outlined',
          //outlined
          ['bg-error disabled:bg-default-extra-light hover:bg-error-medium active:bg-error-dark border-transparent text-primary-contrast-secondary']:
            `${color}-${variant}` === 'error-contained',
          ['bg-transparent hover:bg-default-extra-light active:bg-error-light border-error hover:border-error-dark text-error hover:text-error-dark']:
              `${color}-${variant}` === 'error-outlined',
          //default
          ['bg-default-extra-light border-default-extra-light text-default-dark hover:bg-default-light focus:bg-default-light active:bg-default']:
          `${color}-${variant}` === 'default-contained',
          ['bg-transparent border-default-dark text-default-dark hover:bg-default-light focus:bg-default-light active:bg-default']:
          `${color}-${variant}` === 'default-outlined',
          
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
