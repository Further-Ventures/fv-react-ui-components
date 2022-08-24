import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import Typography from '../index';
import { defaultTypography } from '../../Theme/defaultTheme';

interface HeadingProps {
  variation?: 'h1' | 'h1-mobile' | 'h1-mobile-medium' | 'h1-mobile-regular' |
  'h2' | 'h2-mobile' | 'h2-mobile-medium' | 'h2-mobile-regular' | 
  'h3' | 'h3-mobile' | 'h3-mobile-medium' | 'h3-mobile-regular' | 
  'h4' | 'h4-slanted' | 'h4-mobile' | 'h4-mobile-medium' | 'h4-mobile-regular' | 
  'h5-regular' | 'h5-thin' | 
  'h6' | 'h6-medium' | 'h6-regular'
  children: React.ReactNode,
  className?: string
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const {
    variation = 'h1',
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles(props);

  const variationParameters = variation.includes('-') ? variation.split('-') : [variation];
  const fontVariation = variationParameters[0].includes('_') ? variationParameters[0].split('_') : [variationParameters[0]]; 
  const tag = fontVariation[0];
  const resolution = variationParameters[1] === 'mobile' ? variationParameters[1] : 'desktop';
  const fontIdentifier = fontVariation[1] || variationParameters[variationParameters[1] === 'mobile' ? 2 : 1] || 'bold';
  
  return (
    <Typography
      tag={tag}
      fontFamily={defaultTypography[tag][resolution][fontIdentifier].fontFamily}
      fontSize={defaultTypography[tag][resolution][fontIdentifier].fontSize}
      fontStyle={defaultTypography[tag][resolution][fontIdentifier].fontStyle}
      fontWeight={defaultTypography[tag][resolution][fontIdentifier].fontWeight}
      textTransform={defaultTypography[tag][resolution][fontIdentifier].textTransform}
      marginBottom={defaultTypography[tag][resolution][fontIdentifier].marginBottom}
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
