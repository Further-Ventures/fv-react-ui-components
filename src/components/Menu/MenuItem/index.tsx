import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ListItem, { IListItem } from '../../List/ListItem';

interface IListSubItem {
  items?: ReadonlyArray<IListItem>;
}
interface IMenuItem {
  item?: Readonly<IListItem & IListSubItem>;
  variant?: 'thin' | 'thick';
  control?: 'default' | 'checkbox' | 'checkmark';
  onSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
  isMobile?: boolean;
  visible: boolean;
  width?: 'small' | 'medium' | 'large' | 'full';
}

const DEFAULT_SUBMENU_POSITION = 'right';

const MenuItem: React.FC<IMenuItem> = (props) => {
  const { item, variant = 'thick', control = 'default', onSelect, isMobile, width, visible } = props;
  const hasSubMenu = !!item?.items?.length;
  const [isOpen, setIsOpen] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState(DEFAULT_SUBMENU_POSITION);

  /**
   * The submenu will position itself on the left or right
   * depending on the space available on the screen
   */
  const listItemRef = useRef(null);
  useEffect(() => {
    if (visible) {
      const listItem = listItemRef?.current as HTMLElement | null;
      const mainItemPosition = listItem?.getBoundingClientRect();

      setSubmenuPosition(
        `${mainItemPosition!.top > window.innerHeight / 2 ? 'bottom' : 'top'}-${
          mainItemPosition!.left + 2 * mainItemPosition!.width > window.innerWidth ? 'left' : 'right'
        }`
      );
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
        ref={listItemRef}
        className={classNames({
          ['bg-background-secondary']: isMobile && isOpen,
        })}
      />
      {hasSubMenu ? (
        <ul
          className={classNames('py-2 z-50 bg-white', {
            ['absolute rounded-lg shadow-light']: !isMobile,
            ['group-hover:block']: !item?.disabled && !isMobile,
            ['top-0 left-full']: !isMobile && submenuPosition === 'top-right',
            ['top-0 right-full']: !isMobile && submenuPosition === 'top-left',
            ['bottom-0 left-full']: !isMobile && submenuPosition === 'bottom-right',
            ['bottom-0 right-full']: !isMobile && submenuPosition === 'bottom-left',
            ['hidden']: (!isOpen && isMobile) || !isMobile,
            ['block bg-background-secondary']: isOpen && isMobile,
            ['w-[8.5rem]']: width === 'small',
            ['w-[12.5rem]']: width === 'medium',
            ['w-[21.4375rem]']: width === 'large',
            ['w-full']: width === 'full',
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
