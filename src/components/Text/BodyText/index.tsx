import React from 'react';
import classNames from 'classnames';

interface IBodyTextProps {
  variation?: 'quote'
  | 'paragraph'
  | 'description'
  | 'caption'
  | 'small'
  | 'button'
  | 'label';
  size?: 'l' | 'm' | 's';
  fontWeight?: 400 | 500 | 700;
  children: React.ReactNode;
  className?: string;
}

export const BodyText: React.FC<IBodyTextProps> = ({
  variation = 'paragraph',
  size = 'm',
  fontWeight = 400,
  className,
  children
}) => {
  const Component = ['paragraph', 'description'].includes(variation)
    ? 'p'
    : variation === 'quote'
      ? 'q'
      : ['caption', 'button'].includes(variation)
        ? 'span'
        : (variation as any);

  return (
    <Component
      className={classNames(
        'leading-normal p-0 mt-0 ml-0 mr-0 mb-2.5', {
          ['text-3base font-bold italic lg:text-2xl']: variation === 'quote',
          ['text-3base']: variation === 'paragraph' && size === 'l',
          ['text-2base']: variation === 'paragraph' && size !== 'l' || variation === 'button' && size === 'l',
          ['text-sm']: ['description', 'caption'].includes(variation),
          ['font-bold']: ['paragraph', 'description', 'label'].includes(variation) && fontWeight === 700,
          ['font-medium']: ['paragraph', 'description', 'button'].includes(variation) && fontWeight === 500 || variation === 'description' && ![700, 500].includes(fontWeight) || variation === 'button' && fontWeight !== 500,
          ['font-normal']: ['paragraph', 'caption', 'small'].includes(variation) && fontWeight === 400 || variation === 'label' && fontWeight !== 700 || ['caption', 'small'].includes(variation) && fontWeight !== 400,
          ['text-xs']: variation === 'small' || variation === 'button' && size === 's',
          ['text-base']: variation === 'button' && size === 'm' || variation === 'label',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};

BodyText.defaultProps = {
  variation: 'paragraph',
  size: 'm',
  fontWeight: 400
};
