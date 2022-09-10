import React from 'react';
import classNames from 'classnames';

interface IHeadingProps {
  variation?: 'h1' | 'h1-secondary' | 'h1-tertiary' | 
  'h2' | 'h2-secondary' | 'h2-tertiary' | 
  'h3' | 'h3-secondary' | 'h3-tertiary' | 
  'h4' | 'h4-secondary' | 'h4-tertiary' | 
  'h5' | 'h5-secondary' | 'h5-tertiary' | 
  'h6' | 'h6-secondary' | 'h6-tertiary';
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<IHeadingProps> = ({ 
  variation = 'h1',
  className, 
  children
}) => {
  const Component = variation.includes('-') ? variation.split('-').shift() : variation as any;

  return (
    <Component
      className={classNames(
        'mt-0 pt-0',
        {
          ['h1-primary']: variation === 'h1',
          ['h1-secondary']: variation === 'h1-secondary',
          ['h1-tertiary']: variation === 'h1-tertiary',
          ['h2-primary']: variation === 'h2',
          ['h2-secondary']: variation === 'h2-secondary',
          ['h2-tertiary']: variation === 'h2-tertiary',
          ['h3-primary']: variation === 'h3',
          ['h3-secondary']: variation === 'h3-secondary',
          ['h3-tertiary']: variation === 'h3-tertiary',
          ['h4-primary']: variation === 'h4',
          ['h4-secondary']: variation === 'h4-secondary',
          ['h4-tertiary']: variation === 'h4-tertiary',
          ['h5-primary']: variation === 'h5',
          ['h5-secondary']: variation === 'h5-secondary',
          ['h5-tertiary']: variation === 'h5-tertiary',
          ['h6-primary']: variation === 'h6',
          ['h6-secondary']: variation === 'h6-secondary',
          ['h6-tertiary']: variation === 'h6-tertiary',
          // ['text-4xl leading-tight mb-5 lg:font-mercury-alt lg:text-7xl lg:leading-snug lg:uppercase lg:mb-6']: tag === 'h1',
          // ['text-xl leading-normal mb-5 lg:font-mercury-alt lg:text-6xl lg:leading-snug lg:uppercase']: tag === 'h2',
          // ['text-lg leading-normal mb-3 lg:font-mercury-alt lg:text-5xl lg:leading-tight lg:uppercase']: tag === 'h3',
          // ['text-lg leading-normal mb-3 lg:text-3xl lg:leading-tight lg:mb-4']: tag === 'h4',
          // ['text-lg leading-normal mb-3 lg:text-3xl lg:leading-normal lg:font-normal lg:mb-4']: tag === 'h5',
          // ['font-bold']: ['h1', 'h2', 'h3', 'h4'].includes(tag) && [700, 300, 200].includes(fontWeight),
          // ['font-medium lg:font-bold']: ['h1', 'h2', 'h3', 'h4'].includes(tag) && fontWeight === 500,
          // ['font-normal lg:font-bold']: ['h1', 'h2', 'h3', 'h4'].includes(tag) && fontWeight === 400,
          // ['lg:italic']: tag === 'h4' && fontStyle === 'italic',
          // ['font-bold lg:font-normal']: tag === 'h5' && [700, 300].includes(fontWeight),
          // ['font-medium lg:font-normal']: tag === 'h5' && fontWeight === 500,
          // ['font-normal']: tag === 'h5' && fontWeight === 400,
          // ['font-bold lg:font-extralight']: tag === 'h5' && fontWeight === 200,
          // ['text-lg leading-normal font-bold mb-3 lg:text-xl lg:leading-normal lg:mb-4']: tag === 'h6' && [700, 300, 200].includes(fontWeight),
          // ['text-lg leading-normal font-medium mb-3 lg:text-xl lg:leading-normal lg:mb-4']: tag === 'h6' && fontWeight === 500,
          // ['text-lg leading-normal font-normal mb-3 lg:text-xl lg:leading-normal lg:mb-4']: tag === 'h6' && fontWeight === 400,
          // ['text-lg leading-normal font-medium mb-3']: tag === 'subline',
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
  fontStyle: null,
};
