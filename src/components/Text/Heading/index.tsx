import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import { useScreenSize } from '../../../hooks/useScreenSize';

interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subline';
  fontWeight?: 200 | 300 | 400 | 500 | 700;
  fontStyle?: null | 'italic';
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { tag = 'h1', fontWeight = 700, fontStyle = null, className, children } = props;
  const classes = useStyles(props);
  const { isMobile } = useScreenSize();
  const Component = tag === 'subline' ? 'p' : (tag as any);

  return (
    <Component
      className={classNames('mt-0 pt-0', {
          ['font-mercury-alt text-6xl leading-snug font-bold uppercase mb-6']: tag === 'h1'
        }
        // classes[tag], 
        // classes[`w-${fontWeight}`], 
        // !!fontStyle && classes[fontStyle], 
        // isMobile && classes['mobile'], 
        // className
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
