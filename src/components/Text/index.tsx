import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

interface TextProps {
  tag?: string,
  className?: string,
  children?: React.ReactNode,
}

const Text: React.FC<TextProps> = (props) => {
  const {
    tag,
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles(props);

  const Component = tag as any;
  
  return (
    <Component
      className={classNames(classes.typography, className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Text;

Text.defaultProps = {
  tag: 'p'
}