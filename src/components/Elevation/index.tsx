import React from 'react';
import classNames from 'classnames';

interface IElevationProps {
  variation?: 'extraLight' | 'light' | 'medium' | 'heavy' | 'extraHeavy';
  children: React.ReactNode;
  className?: string;
}

export const Elevation: React.FC<IElevationProps> = ({ variation = 'medium', className, children }) => {
  return <div className={classNames(`shadow-${variation}`, className)}>{children}</div>;
};

Elevation.defaultProps = {
  variation: 'medium',
};
