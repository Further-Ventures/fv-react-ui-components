import React from 'react';
import Pressable from '../Pressable';

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

const Button: React.FC<IButton> = (props) => <Pressable {...props}/>;

export default Button;
