import React, { FormEvent, forwardRef, HTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';
import Icon, { TColors } from '../../Icons';
import { IControl, IVariant } from '..';
import Icons from '../../Icons';
import { ToggleIcon } from '../../InputWithToggle/toggleIcon';

export type TIcon = {
  name?: string;
  size?: number;
  color?: TColors;
  fill?: boolean;
} | null;

export interface IListItem extends Omit<HTMLAttributes<HTMLLIElement>, 'onSelect'> {
  id: string;
  content?: React.ReactNode;
  icon?: TIcon | null;
  name?: string;
  value?: string;
  isChecked?: boolean;
  iconLeft?: TIcon | null;
  label?: string;
  subtext?: string;
  iconRight?: TIcon | null;
  dividers?: 0 | 1 | 2;
  disabled?: boolean;
  className?: string;
}

export interface IListItemExtra extends IListItem {
  onSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
}

const ListItem = forwardRef<HTMLLIElement, IListItemExtra & IVariant & IControl>((props, ref) => {
  const {
    id,
    name,
    variant,
    content,
    icon = null,
    control = 'default',
    iconLeft = null,
    subtext = '',
    label = '',
    iconRight = null,
    dividers = 0,
    disabled = false,
    isChecked,
    onSelect,
    className,
    ...rest
  } = props;

  const handleSelect = useCallback(
    (evt: React.MouseEvent | FormEvent) => {
      if (disabled) {
        return null;
      }

      onSelect?.(id, evt);
    },
    [id, onSelect]
  );

  const hasIconLeft = !!iconLeft?.name;
  const hasIcon = !!icon?.name;
  const hasIconRight = !!((control === 'checkmark' && isChecked) || iconRight?.name);

  const listItemContent = (
    <span className='flex items-center flex-nowrap w-full text-left'>
      {control === 'checkbox' ? (
        <span
          className={classNames('flex items-center flex-1 pr-3 px-4 w-full', {
            ['py-3 text-base']: variant === 'thick',
            ['py-1.5 text-sm']: variant === 'thin',
          })}
        >
          <ToggleIcon variation='checkbox' size='default' checked={isChecked} disabled={disabled} className='mr-3' />
          <span className='flex-1 max-w-full truncate'>{content}</span>
        </span>
      ) : null}
      {control !== 'checkbox' ? (
        <>
          {hasIconLeft && !hasIcon ? (
            <Icons
              icon={iconLeft?.name}
              fill={iconLeft?.fill}
              size={iconLeft?.size || 20}
              color={disabled ? 'text-disabled' : iconLeft?.color || 'primary-contrast'}
              className={classNames('mx-4 self-start', {
                ['my-3.5']: variant === 'thick',
                ['my-2.5']: variant === 'thin',
              })}
            />
          ) : null}
          <span
            className={classNames('flex flex-1 max-w-full first:pl-4', {
              ['py-3']: (variant === 'thick' && !(label || subtext)) || (variant === 'thin' && (label || subtext)),
              ['pt-3.5 pb-[0.8125rem]']: variant === 'thick' && (label || subtext),
              ['pt-2.5 pb-[0.5625rem]']: variant === 'thin' && !(label || subtext),
              ['w-[calc(100%-3.25rem)]']: hasIconLeft || hasIconRight,
              ['w-[calc(100%-6.5rem)]']: hasIconLeft && hasIconRight,
              ['pr-4']: !hasIconRight,
              ['items-center justify-center']: hasIcon,
            })}
          >
            <span
              className={classNames({
                ['flex-1 max-w-full']: !hasIcon,
                ['pl-[2.25rem]']: control === 'listItems',
              })}
            >
              {label && !hasIcon ? <span className='block text-xs leading-normal pb-[0.3125rem] w-full truncate'>{label}</span> : null}
              <span
                className={classNames('block w-full truncate', {
                  ['text-base leading-normal']: variant === 'thick',
                  ['text-sm leading-[1.215]']: variant === 'thin',
                })}
              >
                {hasIcon ? (
                  <Icons
                    icon={icon?.name}
                    fill={icon?.fill}
                    size={icon?.size || 24}
                    color={disabled ? 'text-disabled' : icon?.color || 'primary-contrast'}
                  />
                ) : (
                  content
                )}
              </span>
              {subtext && !hasIcon ? (
                <span
                  className={classNames('block text-sm pt-2 leading-[1.215] w-full truncate', {
                    ['pt-1.5']: variant === 'thick',
                    ['pt-1']: variant === 'thin',
                    ['text-text-hint']: !disabled,
                  })}
                >
                  {subtext}
                </span>
              ) : null}
            </span>
          </span>
        </>
      ) : null}
      {iconRight?.name && !hasIcon ? (
        <Icons
          icon={iconRight?.name}
          fill={iconRight?.fill}
          size={iconRight?.size || 20}
          color={disabled ? 'text-disabled' : iconRight?.color || 'primary-contrast'}
          className='mx-4'
        />
      ) : null}
      {control === 'checkmark' && isChecked ? (
        <Icon icon='check' size={20} color={disabled ? 'text-disabled' : 'primary-contrast'} className='mx-4' />
      ) : null}
      {dividers ? <span className='absolute bottom-0 left-0 w-full h-[1px] bg-default-light' /> : null}
      {dividers === 2 ? <span className='absolute top-0 left-0 w-full h-[1px] bg-default-light' /> : null}
    </span>
  );

  return (
    <li
      {...rest}
      className={classNames(
        'relative items-center justify-start bg-background transition-all ease-out duration-300',
        {
          ['text-text-disabled']: disabled,
          ['hover:bg-default-extra-light active:bg-default-light']: !disabled,
        },
        className
      )}
      ref={ref}
    >
      <button onClick={handleSelect} className='w-full'>
        {listItemContent}
      </button>
    </li>
  );
});

ListItem.defaultProps = {
  control: 'default',
  iconLeft: null,
  label: '',
  subtext: '',
  icon: null,
  iconRight: null,
  dividers: 0,
  disabled: false,
};

ListItem.displayName = 'ListItem';

export default ListItem;
