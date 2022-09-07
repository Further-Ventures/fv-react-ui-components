import React from 'react';
import classNames from 'classnames';
import Icons from '../Icons';

interface ITextLinkProps {
  variation?: 'large' | 'default' | 'description' | 'caption'
  icon?: 'default' | 'left' | 'right';
  to?: string;
  disabled?: boolean,
  children: React.ReactNode;
  className?: string;
}

export const TextLink: React.FC<ITextLinkProps> = ({
  variation = 'default',
  icon = 'default',
  to='',
  disabled=false,
  className,
  children
}) => {
  const textLinkContent = <>
    {
      icon === 'left' ?
        <Icons icon="west" color="inherit" className="mr-1" />
        : null
    }
    <span className={classNames(
      'relative font-mercury after:absolute after:w-full after:h-px after:left-0 after:bg-transparent after:group-hover:bg-primary after:transition after:ease-out after:duration-300',
      {
        ['after:bottom-px']: ['description', 'caption'].includes(variation),
        ['after:bottom-1']: ['large', 'default'].includes(variation)
      }
    )}>{children}</span>
    {
      icon === 'right' ? 
        <Icons icon="east" color="inherit" className="ml-1" />
        : null
    }
  </>;
  const classes = classNames(
    'flex items-center leading-normal text-primary no-underline group group-hover:no-underline', {
      ['text-base2']: variation === 'large',
      ['text-base']: variation === 'default',
      ['font-medium']: variation === 'description',
      ['text-xs']: ['description', 'caption'].includes(variation),
      ['pointer-events-none text-default']: disabled
    }, className
  );

  if (disabled) return <span
    className={classes}
  >
    {textLinkContent}
  </span>;

  return <a 
    href={to}
    className={classes}
  >
    {textLinkContent}
  </a>
};

TextLink.defaultProps = {
  variation: 'default',
  icon: 'default'
};