import React, { ReactNode } from 'react';
import useStyles from './styles';
import classNames from 'classnames';

interface TypographyProps {
  tag?: string,
  fontFamily?: string,
  fontSize?: number | string,
  lineHeight?: number | string,
  fontStyle?: string,
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  fontVariant?: 'normal' | 'small-caps',
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none',
  marginTop?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginBottom?: string | number,
  className?: {},
  children?: React.ReactNode,
}

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    tag,
    fontFamily,
    fontSize,
    lineHeight,
    fontStyle,
    fontWeight,
    fontVariant,
    textTransform,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles(props);

  const Component = tag as any;
  
  return (
    <Component
      className={classNames(classes.typography, className)}
      style={{
        fontFamily,
        fontSize,
        lineHeight,
        fontStyle,
        fontWeight,
        fontVariant,
        textTransform,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Typography;
export { Heading } from './Heading';

Typography.defaultProps = {
  tag: 'p',
  fontFamily: 'sans-serif',
  fontSize: 16,
  lineHeight: 1.1,
  fontStyle: 'normal',
  fontWeight: 400,
  fontVariant: 'normal',
  textTransform: 'none',
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 10
}
