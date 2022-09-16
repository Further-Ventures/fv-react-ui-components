import React from 'react';
import classNames from 'classnames';

interface IElevationProps extends React.HTMLAttributes<HTMLDivElement> {
  variation?: 'extraLight' | 'light' | 'medium' | 'heavy' | 'extraHeavy';
}

export const Elevation: React.FC<IElevationProps> = (props) => {
  const { variation = 'medium', className, children, ...rest } = props;
  return (
    <div {...rest} className={classNames(`shadow-${variation}`, className)}>
      {children}
    </div>
  );
};

export default Elevation;
Elevation.defaultProps = {
  variation: 'medium',
};
