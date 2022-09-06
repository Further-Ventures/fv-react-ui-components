import React from 'react';
import Pressable from '../Pressable';

export interface ITag extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label: string;
  size:  'small' | 'large';
  variant?: 'contained' | 'outlined';
  color?: 'default';
  disabled?: boolean;
  className?: string;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

const Tag: React.FC<ITag> = (props) => {
  const { size, ...rest } = props;
  return <Pressable {...rest} shape="curved" color='default' size={`tag-${size}`} />
}

Tag.defaultProps = {
  size: 'large',
  variant: 'outlined',
  color: 'default'
}

export default Tag;
