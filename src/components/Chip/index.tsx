import React from 'react';
import Pressable, { IPressable } from '../Pressable';

export interface IChip extends Omit<IPressable, 'size' | 'color' | 'shape'> {
  size: 'small' | 'large';
}

const Chip: React.FC<IChip> = (props) => {
  const { size, ...rest } = props;
  return <Pressable {...rest} shape='round' color='default' size={`tag-${size}`} />;
};

Chip.defaultProps = {
  size: 'large',
  variant: 'outlined',
};

export default Chip;
