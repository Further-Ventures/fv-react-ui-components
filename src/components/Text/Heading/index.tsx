import React from 'react';
import classNames from 'classnames';

interface IHeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subline';
  fontWeight?: 200 | 300 | 400 | 500 | 700;
  fontStyle?: null | 'italic';
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<IHeadingProps> = ({ tag = 'h1', fontWeight = 700, fontStyle = null, className, children }) => {
  const Component = tag === 'subline' ? 'p' : (tag as any);

  return (
    <Component
      className={classNames('mt-0 pt-0', {
        ['text-4xl leading-tight mb-5 lg:font-mercury-alt lg:text-7xl lg:leading-snug lg:uppercase lg:mb-6']: tag === 'h1',
        ['text-xl leading-normal mb-5 lg:font-mercury-alt lg:text-6xl lg:leading-snug lg:uppercase']: tag === 'h2',
        ['text-lg leading-normal mb-3 lg:font-mercury-alt lg:text-5xl lg:leading-tight lg:uppercase']: tag === 'h3',
        ['text-lg leading-normal mb-3 lg:text-3xl lg:leading-tight lg:mb-4']: tag === 'h4',
        ['text-lg leading-normal mb-3 lg:text-3xl lg:leading-normal lg:font-normal lg:mb-4']: tag === 'h5',
        ['font-bold']: ['h1', 'h2', 'h3', 'h4'].includes(tag) && [700, 300, 200].includes(fontWeight),
        ['font-medium lg:font-bold']: ['h1', 'h2', 'h3', 'h4'].includes(tag) && fontWeight === 500,
        ['font-normal lg:font-bold']: ['h1', 'h2', 'h3', 'h4'].includes(tag) && fontWeight === 400,
        ['lg:italic']: tag === 'h4' && fontStyle === 'italic',
        ['font-bold lg:font-normal']: tag === 'h5' && [700, 300].includes(fontWeight),
        ['font-medium lg:font-normal']: tag === 'h5' && fontWeight === 500,
        ['font-normal']: tag === 'h5' && fontWeight === 400,
        ['font-bold lg:font-extralight']: tag === 'h5' && fontWeight === 200,
        ['text-lg leading-normal font-bold mb-3 lg:text-xl lg:leading-normal lg:mb-4']: tag === 'h6' && [700, 300, 200].includes(fontWeight),
        ['text-lg leading-normal font-medium mb-3 lg:text-xl lg:leading-normal lg:mb-4']: tag === 'h6' && fontWeight === 500,
        ['text-lg leading-normal font-normal mb-3 lg:text-xl lg:leading-normal lg:mb-4']: tag === 'h6' && fontWeight === 400,
        ['text-lg leading-normal font-medium mb-3']: tag === 'subline'
      },
      className
      )}
    >
      {children}
    </Component>
  );
};

Heading.defaultProps = {
  tag: 'h1',
  fontWeight: 700,
  fontStyle: null
};
