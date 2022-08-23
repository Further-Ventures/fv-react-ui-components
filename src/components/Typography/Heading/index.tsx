import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import Typography from '../index';
import { useTheme } from '../../Theme';

interface OnlyBold {
  variation?: 'h1' | 'h2' | 'h3',
  children: React.ReactNode,
  className?: string
}
interface AllButBook {
  variation?: 'h4' | 'h4-slanted' | 'h5-regular' | 'h5-thin' | 'h6' | 'h6-medium' | 'h6-regular',
  children: React.ReactNode,
  className?: string
}

export const Heading: React.FC<AllButBook | OnlyBold> = (props) => {
  const {
    variation = 'h1',
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles(props);

  const { theme } = useTheme();
  debugger;

  const tag = variation.includes('-') ? variation.split('-').shift() : variation;
  const fontFamily = ['h1', 'h2', 'h3'].includes(variation) ? theme.altFont : theme.font
  const fontSize = variation === 'h1' ? 68 : variation === 'h2' ? 60 : variation === 'h3' ? 54 : ['h4', 'h4-slanted', 'h5-regular', 'h5-thin'].includes(variation) ? 48 : ['h5-regular', 'h5-thin'].includes(variation) ? 42 : 32;
  const fontStyle = variation === 'h4-slanted' ? 'italic' : 'normal';
  const fontWeight = ['h1', 'h2', 'h3', 'h4', 'h4-slanted', 'h6'].includes(variation) ? 700 : ['h5-regular', 'h6-regular'].includes(variation) ? 400 : variation === 'h5-thin' ? 200 : 600;
  const textTransform = ['h1', 'h2'].includes(variation) ? 'uppercase' : 'none';
  const marginBottom = variation === 'h1' ? 24 : variation === 'h2' ? 20 : variation === 'h3' ? 18 : ['h4', 'h4-slanted', 'h5-regular', 'h5-thin'].includes(variation) ? 16 : 12;
  
  return (
    <Typography
      tag={tag}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      textTransform={textTransform}
      marginBottom={marginBottom}
      className={classNames(classes.heading, className)}
      {...rest}
    >
      {children}
    </Typography>
  );
}

Heading.defaultProps = {
  variation: 'h1'
}
