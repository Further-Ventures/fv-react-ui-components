import React from 'react';
import Pressable from '../Pressable';

export interface IChip extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label: string;
  size:  'small' | 'large';
  variant?: 'contained' | 'outlined';
  color?: 'default';
  disabled?: boolean;
  className?: string;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

const Chip: React.FC<IChip> = (props) => {
  const { size, ...rest } = props;
  return <Pressable {...rest} shape="round" color='default' size={`tag-${size}`} />
}

Chip.defaultProps = {
  size: 'large',
  variant: 'outlined',
  color: 'default'
}

export default Chip;
