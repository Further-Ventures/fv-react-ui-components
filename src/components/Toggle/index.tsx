import classNames from 'classnames';
import React from 'react';
import { IPressable } from '../Pressable';

export interface IToggle extends Omit<IPressable, 'size' | 'color'> {
  isActive: boolean;
  onToggle?: (e: React.BaseSyntheticEvent) => void;
  size?: 'default' | 'small';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const TEST_ID = '@fv/Toggle';

const Toggle: React.FC<IToggle> = ({ isActive, onToggle, size = 'default', children, className, disabled }) => {
  const handleClick = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }

    onToggle?.(e);
  };

  return (
    <button
      data-testid={`${TEST_ID}-toggleButton`}
      onClick={handleClick}
      className={classNames('flex items-center group', {
        ['opacity-30 cursor-not-allowed']: disabled,
      })}
    >
      <span
        data-testid={`${TEST_ID}-toggleBackground`}
        className={classNames(
          'flex items-center overflow-hidden rounded-3xl ease-out transition-all duration-300',
          {
            ['w-11 h-6 p-0.5']: size === 'default',
            ['w-[1.8125rem] h-[1.0625rem] p-0.5']: size === 'small',
            ['bg-default-light group-hover:bg-default']: !isActive && !disabled,
            ['bg-primary group-hover:bg-primary-medium group-active:bg-primary-dark']: isActive && !disabled,
            ['bg-default']: disabled,
          },
          className
        )}
      >
        <span
          data-testid={`${TEST_ID}-toggleCircle`}
          className={classNames('relative rounded-full shadow-light ease-out transition-all duration-300', {
            ['w-5	h-5']: size === 'default',
            ['w-[0.8125rem] h-[0.8125rem]']: size === 'small',
            ['left-0']: !isActive,
            ['left-5']: isActive && size === 'default',
            ['left-3']: isActive && size === 'small',
            ['bg-default-extra-light']: disabled,
            ['bg-primary-contrast-secondary']: !disabled,
          })}
        ></span>
      </span>
      {children ? <span className='ml-2'>{children}</span> : null}
    </button>
  );
};

Toggle.defaultProps = {
  isActive: false,
  size: 'default',
};

export default Toggle;
