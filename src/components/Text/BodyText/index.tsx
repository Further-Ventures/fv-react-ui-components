import React from 'react';
import useStyles from './styles';
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

export const BodyText: React.FC<IBodyTextProps> = (props) => {
  const {
    variation = 'paragraph',
    size = 'm',
    fontWeight = 400,
    className,
    children
  } = props;
  const classes = useStyles(props);
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
        classes.bodyText,
        classes[variation],
        classes[`w-${fontWeight}`],
        classes[`s-${size}`],
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
