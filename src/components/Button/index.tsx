import React from 'react';
import Pressable, { IPressable } from '../Pressable';

export interface IButton extends Omit<IPressable, 'size' | 'color'> {
  size?: 'mini' | 'small' | 'medium' | 'large';
  color?: 'primary' | 'error';
}

const Button: React.FC<IButton> = (props) => <Pressable {...props} />;

export default Button;
