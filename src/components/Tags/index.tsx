import React from 'react';
import Pressable, { IPressable } from '../Pressable';

export interface ITag extends Omit<IPressable, 'size' | 'color' | 'shape'> {
  size: 'small' | 'large';
}

const Tag: React.FC<ITag> = (props) => {
  const { size, ...rest } = props;
  return <Pressable {...rest} shape='round' color='default' size={`tag-${size}`} />;
};

Tag.defaultProps = {
  size: 'large',
  variant: 'outlined',
};

export default Tag;
