import React, { FormEvent, HTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';
import { Checkbox } from '../Checkbox';
import Icon from '../Icons';

export interface IControl {
  control: 'checkbox' | 'checkmark' | 'none';
}

export interface IListItem extends Omit<HTMLAttributes<HTMLLIElement>, 'onSelect'> {
  id: string;
  content: React.ReactNode;
  name?: string;
  value?: string;
  isChecked?: boolean;
  className?: string;
}

export interface IListItemExtra extends IListItem {
  onSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
}

export interface IList extends Omit<HTMLAttributes<HTMLUListElement>, 'width'> {
  variant: 'thick' | 'thin';
  width?: 'small' | 'medium' | 'large' | 'full';
  items: ReadonlyArray<IListItem>;
  onItemSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
}

const ListItem: React.FC<IListItemExtra & IControl> = (props) => {
  const { id, name, content, control, isChecked, onSelect, className, ...rest } = props;
  const handleSelect = useCallback((evt: React.MouseEvent | FormEvent) => onSelect?.(id, evt), [id, onSelect]);

  return (
    <li {...rest} className={classNames(className, 'hover:bg-default-extra-light')}>
      {control === 'checkbox' && (
        <Checkbox className='px-4 py-2.5' name={name ?? id} onChange={handleSelect} isChecked={isChecked}>
          {content}
        </Checkbox>
      )}
      {control === 'checkmark' && (
        <span className='flex justify-between px-4 py-2.5 cursor-pointer' onClick={handleSelect}>
          {content}
          {isChecked && <Icon icon='check' />}
        </span>
      )}
      {control === 'none' && <span className='block px-4 py-2.5'>{content}</span>}
    </li>
  );
};

const List: React.FC<IList & IControl> = (props) => {
  const { width, variant, control, className, items, onItemSelect, ...rest } = props;
  const handleSelect = useCallback(
    (itemId: string, event: any) => {
      console.log('handleSelect', itemId, event);
      onItemSelect?.(itemId, event);
    },
    [onItemSelect]
  );
  return (
    <ul
      {...rest}
      className={classNames(className, {
        ['w-48']: width === 'small',
        ['w-64']: width === 'medium',
        ['w-96']: width === 'large',
      })}
    >
      {items?.map((item) => {
        return <ListItem key={item.id} control={control} onSelect={handleSelect} {...item} />;
      })}
    </ul>
  );
};

List.defaultProps = {
  width: 'medium',
  control: 'checkbox',
  items: [
    {
      content: 'item1',
      id: 'item1',
      isChecked: true,
    },
    {
      content: 'item2',
      id: 'item2',
    },
    {
      content: 'item3',
      id: 'item3',
    },
    {
      content: 'item4',
      id: 'item4',
    },
  ],
};

export default List;
