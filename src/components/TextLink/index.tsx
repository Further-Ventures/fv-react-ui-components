import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Icons from '../Icons';

interface ITextLinkProps {
  variation?: 'large' | 'default' | 'description' | 'caption'
  icon?: 'default' | 'left' | 'right';
  to?: string;
  disabled?: boolean,
  children: React.ReactNode;
  className?: string;
}

const typeOfUrl = (str: string) => {
  const pattern = new RegExp(
    '^(http:|https:|)//' // url starts with http://, https:// or //
  );
  const actionPattern = new RegExp('^(?:mailto|tel|sms|callto|mms|skype)\\b');

  return pattern.test(str) ? 'external' : actionPattern.test(str) ? 'action' : 'internal';
};

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

  return <>
    {
      disabled ? 
        <span
          className={classes}
        >
          {textLinkContent}
        </span>
        :
        typeOfUrl(to) === 'internal' ?
          <Link
            to={to}
            className={classes}
          >
            {textLinkContent}
          </Link>
          :
          <a 
            href={to}
            className={classes}
          >
            {textLinkContent}
          </a>
    }
  </>
};

TextLink.defaultProps = {
  variation: 'default',
  icon: 'default'
};
