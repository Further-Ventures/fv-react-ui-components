import React, { forwardRef } from 'react';
import classNames from 'classnames';
import '../Pressable';

export interface IPressable extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label?: string;
  size?: 'mini' | 'small' | 'medium' | 'large' | 'tag-large' | 'tag-small';
  shape?: 'flat' | 'curved' | 'round';
  variant?: 'contained' | 'outlined' | 'transparent';
  color?: 'primary' | 'error' | 'default' | 'grey';
  disabled?: boolean;
  className?: string;
  name?: string;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

const TEST_ID = '@fv/pressable';

const Pressable = forwardRef<HTMLButtonElement, IPressable>((props, ref) => {
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
    name = '',
    ...rest
  } = props;

  const isIconOnly = Boolean(!label && (contentLeft || contentRight));
  const colorVariant = `${color}-${variant}`;
  return (
    <button
      data-testid={`${TEST_ID}-${name}`}
      name={name}
      ref={ref}
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
          ['rounded-lg']: ['curved-medium', 'curved-large'].includes(`${shape}-${size}`),
          ['rounded-full']: `${shape}` === 'round',

          //border-width & disabled color
          ['font-medium border-1.5 disabled:text-text-disabled']: ['mini', 'small', 'medium', 'large'].includes(size),
          ['font-normal border disabled:text-default']: ['tag-large', 'tag-small'].includes(size),
          ['disabled:border-default']: ['tag-large', 'tag-small'].includes(size) && variant === 'outlined',
          ['disabled:bg-default-light disabled:border-default-light']: ['tag-large', 'tag-small'].includes(size) && variant !== 'outlined',
          ['disabled:border-default-extra-light']: ['mini', 'small', 'medium', 'large'].includes(size) && variant !== 'transparent',
          ['disabled:border-transparent']: ['mini', 'small', 'medium', 'large'].includes(size) && variant === 'transparent',

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
            colorVariant === 'primary-contained',
          ['bg-transparent hover:bg-default-extra-light focus:bg-default-extra-light active:bg-primary-light border-primary hover:border-primary-dark text-primary hover:text-primary-dark']:
            colorVariant === 'primary-outlined',
          ['bg-transparent border-transparent hover:bg-default-extra-light focus:bg-default-extra-light hover:active:border-primary-extra-light active:border-primary-extra-light active:bg-primary-light text-primary hover:text-primary-dark']:
            colorVariant === 'primary-transparent',

          //error
          ['bg-error disabled:bg-default-extra-light focus:bg-error-medium hover:bg-error-medium active:bg-error-dark border-transparent text-primary-contrast-secondary']:
            colorVariant === 'error-contained',
          ['bg-transparent hover:bg-default-extra-light focus:bg-default-extra-light active:bg-error-light border-error hover:border-error-dark text-error hover:text-error-dark']:
            colorVariant === 'error-outlined',
          ['bg-transparent border-transparent hover:bg-default-extra-light focus:bg-default-extra-light active:bg-error-light hover:active:border-error-extra-light active:border-error-extra-light text-error hover:text-error-dark']:
            colorVariant === 'error-transparent',

          //default ||
          ['bg-default-extra-light border-default-extra-light text-default-dark hover:bg-default-light focus:bg-default-light active:bg-default']:
            colorVariant === 'default-contained' || colorVariant === 'grey-contained',
          ['bg-transparent border-default-dark text-default-dark hover:bg-default-light focus:bg-default-light active:bg-default']:
            colorVariant === 'default-outlined' || colorVariant === 'grey-outlined',
          ['bg-transparent border-transparent text-text-default hover:bg-default-extra-light focus:bg-default-extra-light active:bg-default']:
            colorVariant === 'default-transparent' || colorVariant === 'grey-transparent',
        }
      )}
      {...rest}
    >
      {contentLeft}
      {label}
      {contentRight}
    </button>
  );
});

Pressable.displayName = 'Pressable';
export default Pressable;
