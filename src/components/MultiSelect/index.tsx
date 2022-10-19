import classNames from 'classnames';
import React, { useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import ErrorMessage from '../ErrorMessage';
import HintMessage from '../HintMessage';
import Icons from '../Icons';
import List from '../List';
import Tag from '../Tag';

type TItems = {
  id: string;
  content: string;
  isChecked?: boolean;
};
export interface ISelect {
  name: string;
  label: string;
  type: 'default' | 'checkbox';
  selectedType: 'default' | 'tag';
  variant?: 'default' | 'large';
  width?: 'small' | 'medium' | 'large' | 'full';
  hint?: string;
  error?: string;
  disabled?: boolean;
  items: ReadonlyArray<TItems>;
}

const MultiSelect: React.FC<ISelect> = (props) => {
  const { name, label, variant = 'default', type = 'default', selectedType = 'default', width = 'medium', error, disabled, hint, items } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const getItem = (itemId: string) => items?.find((item) => item.id === itemId);
  const removeItem = (itemId: string) => {
    setSelected(selected.filter((id) => id != itemId).sort());
  };
  const handleRemove = (itemId: string) => {
    if (selected.includes(itemId)) {
      removeItem(itemId);
    }
  };
  const handleSelect = (itemId: string) => {
    if (selected.includes(itemId)) {
      removeItem(itemId);
    } else {
      setSelected([...selected, itemId].sort());
    }
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
        ['w-48']: width === 'small',
        ['w-64']: width === 'medium',
        ['w-96']: width === 'large',
        ['w-full']: width === 'full',
      })}
      ref={selectRef}
    >
      <span
        className={classNames(
          'flex items-center h-14 w-full border rounded cursor-pointer hover:bg-background-secondary transition-all ease-out duration-300',
          {
            ['border-default hover:border-primary-contrast']: !isOpen && !error && !disabled,
            ['border-primary']: isOpen,
            ['border-error']: error,
            ['border-default-light']: disabled,
          }
        )}
        onClick={toggleOpen}
      >
        <span className={classNames('flex flex-1 pl-3 text-left flex-col justify-center max-w-[calc(100%-2.25rem)]')}>
          <span
            className={classNames('leading-normal', {
              ['text-xs text-text-hint']: !!selected?.length,
              ['text-base']: selectedType === 'default' || (!selected?.length && !disabled),
              ['text-text-disabled']: disabled,
            })}
          >
            {label}
          </span>
          {selected?.length ? (
            <span
              className={classNames('w-full truncate', {
                ['pt-0.5']: selectedType !== 'tag',
              })}
            >
              {selected.map((item, index) => {
                const itemFull = getItem(item);

                return selectedType === 'tag' ? (
                  <Tag
                    key={itemFull?.id}
                    size='small'
                    contentRight={<Icons icon='cancel' size={13.33} />}
                    label={itemFull?.content}
                    className='mr-1'
                    disabled={disabled}
                    onClick={() => {
                      handleRemove(item);
                    }}
                  />
                ) : (
                  `${index !== 0 ? ', ' : ''}${itemFull?.content}`
                );
              })}
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
          control={type === 'checkbox' ? 'checkbox' : 'checkmark'}
          variant={variant === 'default' ? 'thin' : 'thick'}
          items={items.map((item) => ({ ...item, isChecked: selected.includes(item.id) }))}
          width='full'
          onItemSelect={handleSelect}
        />
      </div>
      <input name={name} type='hidden' value={selected.join(', ') || ''} />
      {hint && <HintMessage text={hint} />}
      {error && <ErrorMessage text={error} />}
    </div>
  );
};

MultiSelect.defaultProps = {
  variant: 'default',
  width: 'medium',
  type: 'default',
  selectedType: 'default',
  hint: '',
  error: '',
  disabled: false,
};

export default MultiSelect;
