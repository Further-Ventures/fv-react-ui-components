import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import Icons from '../Icons';
import List from '../List';
import Pressable, { IPressable } from '../Pressable';
import Tag from '../Tag';

type TItems = {
  id: string;
  content: string;
  isChecked?: boolean;
};
export interface ISelect {
  name: string;
  label: string;
  type: 'default' | 'defaultChip' | 'multiple' | 'multipleCheckbox';
  variant?: 'default' | 'large';
  width?: 'small' | 'medium' | 'large' | 'full';
  error?: string;
  items: ReadonlyArray<TItems>;
}

const Select: React.FC<ISelect> = (props) => {
  const { name, label, variant = 'default', type = 'default', width = 'medium', error, items } = props;
  const singleOption = ['default', 'defaultChip'].includes(type);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selected, setSelected ] = useState([]);
  const getItem = useCallback((itemId: string) => items?.find(item => item.id === itemId), [items]);
  const handleSelect = (itemId: string, e: React.BaseSyntheticEvent) => {
    if (singleOption) {
      setSelected([itemId]);
      setIsOpen(false);
    } else {
      if (selected.includes(itemId)) {
        setSelected(selected.filter((id) => id != itemId));
      } else {
        setSelected([...selected, itemId]);
      }
    }
  };
  const handleOpen = (e: React.BaseSyntheticEvent) => {
    setIsOpen(!isOpen);
    console.log(e);
  };

  return <div className={classNames({
    ['w-48']: width === 'small',
    ['w-64']: width === 'medium',
    ['w-96']: width === 'large',
    ['w-full']: width === 'full',
  })}>
    <button className={classNames('flex items-center h-14 w-full border rounded hover:bg-background-secondary transition-all ease-out duration-300', {
      ['border-default hover:border-primary-contrast']: !isOpen && !error,
      ['border-primary']: isOpen,
      ['border-error']: error
    })} onClick={handleOpen}>
      <span className={classNames('flex justify-center flex-1 pl-3 text-left', {
        ['flex-col']: type !== 'default'
      })}>
        <span className={classNames('leading-normal', {
          ['text-xs']: type !== 'default' && !!selected?.length,
          ['text-base']: type === 'default' || !selected?.length
        })}>
          {
            type === 'default' && selected[0] ? 
            getItem(selected[0])?.content 
            : 
            label
          }
        </span>
        {
          type !== 'default' && selected?.length ? 
          <span className="">
            {
              selected.map(item => <Tag 
                  size="small" 
                  iconRight={<Icons icon="cancel" size={13.33} />} 
                  label={getItem(item)?.content}
                  className="mr-1"
                />
              )
            }
          </span>
          : null
        }
      </span>
      <Icons icon={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} color="text-hint" className="mr-3" />
    </button>
    <div className={classNames('shadow-extraHeavy rounded-lg overflow-hidden pb-2', {
        ['hidden']: !isOpen,
      })}>
      <List
        control={type === 'multipleCheckbox' ? 'checkbox' : type === 'multiple' ? 'checkmark' : 'text'}
        variant={variant === 'default' ? 'thin' : 'thick'}
        items={items.map((item) => ({ ...item, isChecked: selected.includes(item.id) }))}
        width="full"
        onItemSelect={handleSelect}
      />
    </div>
    <input name={name} type="hidden" value={singleOption? selected[0] : selected.join(', ')} />
  </div>;
};

Select.defaultProps = {
  variant: 'default',
  width: 'medium',
  type: 'default'
};

export default Select;
