import React from 'react';
import classNames from 'classnames';
import './style.scss';

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

  return <button className={'ButtonTW'}>{label}</button>;
};

export default Button;

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
};
