import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { TColors } from '../Icons';

type TTextVariation =
  | 'h1-bold-desktop'
  | 'h1-bold'
  | 'h1-medium'
  | 'h1-regular'
  | 'h2-bold-desktop'
  | 'h2-bold'
  | 'h2-medium'
  | 'h2-regular'
  | 'h3-bold-desktop'
  | 'h3-bold'
  | 'h3-medium'
  | 'h3-regular'
  | 'h4-bold-desktop'
  | 'h4-bold-slanted-desktop'
  | 'h4-bold'
  | 'h4-medium'
  | 'h4-regular'
  | 'h5-regular-desktop'
  | 'h5-thin-desktop'
  | 'h6-bold-desktop'
  | 'h6-medium-desktop'
  | 'h6-regular-desktop'
  | 'subline'
  | 'quote'
  | 'p1-bold'
  | 'p1-medium'
  | 'p1-regular'
  | 'p2-bold'
  | 'p2-medium'
  | 'p2-regular'
  | 'description-bold'
  | 'description-medium'
  | 'caption'
  | 'small'
  | 'button'
  | 'button-small'
  | 'button-large'
  | 'label'
  | 'label-bold'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div';

interface ITextProps {
  variation?: TTextVariation;
  size?: string;
  height?: string;
  weight?: 'extralight' | 'normal' | 'medium' | 'bold';
  color?: TColors | string;
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<ITextProps> = ({ variation = 'p1-regular', size, weight, color, height, className, children }) => {
  const tag = variation.split('-').shift() as string;
  const variationSecondArg = variation.split('-')[1];
  const Component = ['p1', 'p2', 'description', 'subline', 'p'].includes(tag)
    ? 'p'
    : tag === 'quote'
    ? 'q'
    : ['caption', 'button'].includes(tag)
    ? 'span'
    : (tag as any);

  const customStyle = () => {
    const customStyle = {} as CSSProperties;
    if (size) {
      customStyle.fontSize = size;
    }
    if (height) {
      customStyle.lineHeight = height;
    }
    if (color && (color.includes('rgb') || color.includes('#') || color.includes('hsl'))) {
      customStyle.color = color;
    }

    return customStyle;
  };

  return (
    <Component
      className={classNames(
        'p-0 mt-0 ml-0 mr-0 mb-2.5',
        {
          ['font-bold']: (variationSecondArg === 'bold' || variation === 'quote') && !weight,
          ['font-medium']: (variationSecondArg === 'medium' || ['subline', 'button-large', 'button', 'button-small'].includes(variation)) && !weight,
          [`font-extralight`]: variation === 'h5-thin-desktop' && !weight,
          [`font-mercury-alt text-7xl leading-snug uppercase mb-6`]: variation === 'h1-bold-desktop',
          [`text-4xl leading-tight`]: ['h1-bold', 'h1-medium', 'h1-regular'].includes(variation),
          [`font-mercury-alt text-6xl leading-snug uppercase mb-5`]: variation === 'h2-bold-desktop',
          [`text-xl leading-snug mb-5`]: ['h2-bold', 'h2-medium', 'h2-regular'].includes(variation),
          [`font-mercury-alt text-5xl leading-tight uppercase mb-3`]: variation === 'h3-bold-desktop',
          [`text-lg leading-tight mb-3`]: ['h3-bold', 'h3-medium', 'h3-regular'].includes(variation),
          [`text-3xl leading-tight mb-4`]: ['h4-bold-desktop', 'h4-bold-slanted-desktop'].includes(variation),
          [`italic`]: variation === 'h4-bold-slanted-desktop',
          [`text-base3 leading-tight mb-3`]: ['h4-bold', 'h4-medium', 'h4-regular'].includes(variation),
          [`text-3xl leading-normal mb-4`]: ['h5-regular-desktop', 'h5-thin-desktop'].includes(variation),
          [`text-xl leading-tight mb-3`]: ['h6-bold-desktop', 'h6-medium-desktop', 'h6-regular-desktop'].includes(variation),
          [`text-lg leading-normal mb-3`]: variation === 'subline',
          [`text-2xl italic`]: variation === 'quote',
          [`text-base2 leading-normal`]: ['p1-bold', 'p1-medium'].includes(variation),
          [`text-base2 font-regular leading-normal`]: variation === 'p1-regular',
          [`text-base leading-normal`]: ['p2-medium', 'button-large', 'p2-bold'].includes(variation),
          [`text-base font-regular leading-normal`]: variation === 'p2-regular',
          [`text-xs leading-normal`]: ['description-bold', 'description-medium', 'caption'].includes(variation),
          [`text-xxs leading-normal`]: ['small', 'button-small'].includes(variation),
          [`text-sm leading-normal`]: ['button'].includes(variation),
          [`text-sm leading-extra'}`]: variation === 'label',
          [`text-sm leading-extra-tight`]: variation === 'label-bold',
          [`font-${weight}`]: weight,
          [`text-${color}`]: color && !color.includes('rgb') && !color.includes('#') && !color.includes('hsl'),
        },
        className
      )}
      style={customStyle()}
    >
      {children}
    </Component>
  );
};
