import React, { forwardRef } from 'react';
import Pressable, { IPressable } from '../Pressable';

export interface IButton extends Omit<IPressable, 'size' | 'color'> {
  size?: 'mini' | 'small' | 'medium' | 'large';
  color?: 'primary' | 'error' | 'grey';
}

const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => <Pressable ref={ref} {...props} />);
Button.displayName = 'Button';
export default Button;
