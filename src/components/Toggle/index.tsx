import React from 'react';
import Pressable, { IPressable } from '../Pressable';

export interface IToggle extends Omit<IPressable, 'size' | 'color'> {
  isActive?: boolean,
  toggle?: Function
}

const Toggle: React.FC<IToggle> = ({ isActive, toggle }) => {
  return (
    <div>

    </div>
  );
};

Toggle.defaultProps = {
  
};

export default Toggle;
