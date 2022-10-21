import React from 'react';
import classNames from 'classnames';
import Icons from '../Icons';
import { IIcon } from '../List/ListItem';

interface ITextLinkProps {
  variation?: 'large' | 'default' | 'description' | 'caption';
  to?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  iconLeft?: Omit<IIcon, 'color' | 'size'> | null;
  iconRight?: Omit<IIcon, 'color' | 'size'> | null;
}

export const TextLink: React.FC<ITextLinkProps> = ({
  variation = 'default',
  to = '',
  target = '_self',
  disabled = false,
  className,
  children,
  iconLeft,
  iconRight,
}) => {
  const textLinkContent = (
    <>
      {iconLeft ? (
        <Icons
          icon={iconLeft.name}
          fill={iconLeft.fill}
          size={['large', 'default'].includes(variation) ? 24 : 20}
          className='mr-2 group-visited:text-primary-dark'
        />
      ) : null}
      <span
        className={classNames(
          'relative font-mercury group-visited:text-primary-dark after:absolute after:w-full after:h-px after:left-0 after:bg-transparent after:group-hover:bg-primary after:group-visited:group-hover:bg-primary-dark after:transition after:ease-out after:duration-300',
          {
            ['after:bottom-px']: ['description', 'caption'].includes(variation),
            ['after:bottom-1']: ['large', 'default'].includes(variation),
          }
        )}
      >
        {children}
      </span>
      {iconRight ? (
        <Icons
          icon={iconRight.name}
          fill={iconRight.fill}
          size={['large', 'default'].includes(variation) ? 24 : 20}
          className='ml-2 group-visited:text-primary-dark'
        />
      ) : null}
    </>
  );
  const classes = classNames(
    'inline-flex items-center leading-normal text-primary no-underline group group-hover:no-underline group-visited:text-primary-dark',
    {
      ['text-base2']: variation === 'large',
      ['text-base']: variation === 'default',
      ['font-medium']: variation === 'description',
      ['text-xs']: ['description', 'caption'].includes(variation),
      ['pointer-events-none text-default']: disabled,
    },
    className
  );

  if (disabled) return <span className={classes}>{textLinkContent}</span>;

  return (
    <a href={to} target={target} className={classes}>
      {textLinkContent}
    </a>
  );
};

TextLink.defaultProps = {
  variation: 'default',
};
