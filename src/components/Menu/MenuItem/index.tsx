import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ListItem, { IListItem } from '../../List/ListItem';

type IListItemLink = {
  href?: string;
};
interface IListSubItem {
  items?: ReadonlyArray<IListItem & IListItemLink>;
}

interface IMenuItem {
  item?: Readonly<IListItem & IListSubItem & IListItemLink>;
  variant?: 'thin' | 'thick';
  control?: 'default' | 'checkbox' | 'checkmark';
  onSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
  isMobile?: boolean;
  visible: boolean;
  width?: 'small' | 'medium' | 'large';
}

const MenuItem: React.FC<IMenuItem> = (props) => {
  const { item, variant = 'thick', control = 'default', onSelect, isMobile, width, visible } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState('right');
  const hasSubMenu = !!item?.items?.length;
  const listItemRef = useRef(null);

  useEffect(() => {
    if (visible) {
      const listItem = listItemRef?.current as HTMLElement | null;
      const mainItemPosition = listItem?.getBoundingClientRect();

      setMenuPosition(mainItemPosition!.left + 2 * mainItemPosition!.width > window.innerWidth ? 'left' : 'right');
    }
  }, [listItemRef, visible]);

  const onItemSelect = (itemId: string, event: any, hasSubMenu: boolean) => {
    if (hasSubMenu) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
      onSelect?.(itemId, event);
    }
  };

  console.log('item', item?.content, item?.isChecked);
  if (item?.items) {
    item?.items.forEach((item) => {
      console.log('subitem', item.content, item.isChecked);
    });
  }

  return (
    <div className='relative group'>
      <ListItem
        variant={variant}
        {...item}
        content={item?.content}
        id={item?.id as string}
        onSelect={(e) => onItemSelect(item?.id as string, e, hasSubMenu)}
        iconRight={
          hasSubMenu
            ? {
                name: isMobile ? (isOpen ? 'arrow_drop_up' : 'arrow_drop_down') : 'arrow_right',
                color: 'text-hint',
              }
            : null
        }
        control={hasSubMenu ? 'default' : control}
        to={item?.href}
        ref={listItemRef}
        className={classNames({
          ['bg-background-secondary']: isMobile && isOpen,
        })}
      />
      {hasSubMenu ? (
        <ul
          className={classNames('py-2 z-50 bg-white', {
            ['absolute top-0 rounded-lg shadow-light']: !isMobile,
            ['group-hover:block']: !item?.disabled,
            ['left-full']: !isMobile && menuPosition === 'right',
            ['right-full']: !isMobile && menuPosition === 'left',
            ['hidden']: (!isOpen && isMobile) || !isMobile,
            ['block bg-background-secondary']: isOpen && isMobile,
            ['w-[8.5rem]']: width === 'small',
            ['w-[12.5rem]']: width === 'medium',
            ['w-[21.4375rem]']: width === 'large',
          })}
        >
          {item?.items?.map((subitem) => {
            return (
              <ListItem
                variant={variant}
                key={subitem.id}
                {...subitem}
                onSelect={(e) => onItemSelect(subitem.id, e, false)}
                control={control}
                to={subitem.href}
                className={classNames({
                  ['bg-background-secondary']: isMobile,
                })}
              />
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

MenuItem.defaultProps = {
  variant: 'thick',
  control: 'default',
  isMobile: false,
};

export default MenuItem;
