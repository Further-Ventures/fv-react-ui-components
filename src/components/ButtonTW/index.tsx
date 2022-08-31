import React from 'react';
import classNames from 'classnames';

export interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label: string;
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'flat' | 'round' | 'circle';
  variant?: 'contained' | 'outlined';
  color?: 'primary';
  disabled?: boolean;
  className?: string;
  iconLeft?: React.FC<{ className?: string }>;
  iconRight?: React.FC<{ className?: string }>;
}

const Button: React.FC<IButton> = (props) => {
  const {
    size = 'medium',
    shape = 'round',
    variant = 'contained',
    label,
    disabled,
    className,
    iconLeft: IconLeftComponent,
    iconRight: IconRightComponent,
    onClick,
    ...rest
  } = props;

  return (
    <button
      className={classNames('inline-flex items-center px-6 py-3 border-2 rounded-md hover:ring hover:ring-primary-light', {
        ['bg-primary border-transparent text-primary-contrast-secondary']: variant === 'contained',
        ['bg-transparent border-primary text-primary']: variant === 'outlined',
      })}
    >
      {label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
};
