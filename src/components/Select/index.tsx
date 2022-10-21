import classNames from 'classnames';
import React, { useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import ErrorMessage from '../ErrorMessage';
import HintMessage from '../HintMessage';
import Icons from '../Icons';
import List from '../List';
import { IIcon } from '../List/ListItem';
import Tag from '../Tag';

type TItems = {
  id: string;
  content?: string;
  icon?: IIcon | null;
  isChecked?: boolean;
};
export interface ISelect {
  name: string;
  label: string;
  selectedType: 'default' | 'tag';
  variant?: 'default' | 'large';
  width?: 'small' | 'medium' | 'large' | 'full';
  hint?: string;
  error?: string;
  disabled?: boolean;
  items: ReadonlyArray<TItems>;
}

const Select: React.FC<ISelect> = (props) => {
  const { name, label, variant = 'default', selectedType = 'default', width = 'medium', error, disabled, hint, items } = props;
  const hasIcon = !!items.find((item) => item?.icon?.name);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<TItems | null>(null);
  const getItem = (itemId: string) => items?.find((item) => item.id === itemId) || null;
  const handleRemove = () => {
    setSelected(null);
  };
  const handleSelect = (itemId: string) => {
    console.log('item', getItem(itemId));
    setSelected(getItem(itemId));
    setIsOpen(false);
  };
  const toggleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const selectRef = useClickOutside<HTMLDivElement>(handleClickOutside);

  return (
    <div
      className={classNames('relative', {
        ['w-[5.8125rem]']: hasIcon,
        ['w-48']: width === 'small' && !hasIcon,
        ['w-64']: width === 'medium' && !hasIcon,
        ['w-96']: width === 'large' && !hasIcon,
        ['w-full']: width === 'full' && !hasIcon,
      })}
      ref={selectRef}
    >
      <span
        className={classNames(
          'flex items-center h-14 w-full border cursor-pointer hover:bg-background-secondary transition-all ease-out duration-300',
          {
            ['rounded-l rounded-r-none']: hasIcon,
            ['rounded']: !hasIcon,
            ['border-default hover:border-primary-contrast']: !isOpen && !error && !disabled,
            ['border-primary']: isOpen,
            ['border-error']: error,
            ['border-default-light']: disabled,
          }
        )}
        onClick={toggleOpen}
      >
        <span className={classNames('flex flex-1 pl-3 text-left flex-col justify-center max-w-[calc(100%-2.25rem)]')}>
          {selected && hasIcon ? null : (
            <span
              className={classNames('leading-normal max-w-full truncate', {
                ['text-xs']: !!selected,
                ['text-text-hint']: !!selected && !disabled,
                ['text-base']: selectedType === 'default' || (!selected && !disabled),
                ['text-text-disabled']: disabled,
              })}
            >
              {label}
            </span>
          )}
          {selected ? (
            <span
              className={classNames('w-full truncate', {
                ['pt-0.5']: selectedType !== 'tag' && !selected?.icon?.name,
                ['flex justify-center']: !!selected?.icon?.name,
              })}
            >
              {selected?.icon?.name ? (
                <Icons
                  icon={selected?.icon?.name}
                  fill={selected?.icon?.fill}
                  size={selected?.icon?.size || 24}
                  color={disabled ? 'text-disabled' : selected?.icon?.color || 'primary-contrast'}
                />
              ) : selectedType === 'tag' ? (
                <Tag
                  key={selected?.id}
                  size='small'
                  contentRight={<Icons icon='cancel' size={13.33} />}
                  label={selected?.content}
                  className='mr-1'
                  disabled={disabled}
                  onClick={() => {
                    handleRemove();
                  }}
                />
              ) : (
                selected?.content
              )}
            </span>
          ) : null}
        </span>
        <Icons icon={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} color={disabled ? 'text-disabled' : 'text-hint'} className='mr-3' />
      </span>
      <div
        className={classNames('absolute top-14 left-0 w-full z-50 shadow-extraHeavy rounded-lg overflow-hidden pb-2', {
          ['hidden']: !isOpen,
        })}
      >
        <List
          control='default'
          variant={variant === 'default' ? 'thin' : 'thick'}
          items={items.map((item) => ({ ...item, isChecked: selected?.id === item.id }))}
          width='full'
          onItemSelect={handleSelect}
        />
      </div>
      <input name={name} type='hidden' value={selected?.id} />
      {hint && <HintMessage text={hint} size='large' />}
      {error && <ErrorMessage text={error} size='large' />}
    </div>
  );
};

Select.defaultProps = {
  variant: 'default',
  width: 'medium',
  selectedType: 'default',
  hint: '',
  error: '',
  disabled: false,
};

export default Select;
