import classNames from 'classnames';
import React, { HTMLAttributes, useCallback } from 'react';
import ListItem, { IListItem } from './ListItem';

export interface IControl {
  control?: 'checkbox' | 'checkmark' | 'text' | 'listItems';
}
export interface IVariant {
  variant: 'thick' | 'thin';
}

export interface IList extends Omit<HTMLAttributes<HTMLUListElement>, 'width'> {
  width?: 'small' | 'medium' | 'large' | 'full';
  items: ReadonlyArray<IListItem>;
  onItemSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
  dividers?: 0 | 1 | 2;
}

const List: React.FC<IList & IVariant & IControl> = (props) => {
  const { width, variant = 'thick', control = 'text', className, items, dividers = 0, onItemSelect, ...rest } = props;
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
        return <ListItem key={item.id} variant={variant} control={control} dividers={dividers} onSelect={handleSelect} {...item} />;
      })}
    </ul>
  );
};

List.defaultProps = {
  width: 'medium',
  control: 'text',
  variant: 'thick',
  dividers: 0,
};

export default List;
