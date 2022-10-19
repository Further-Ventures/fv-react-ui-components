import classNames from 'classnames';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { IListItem } from '../List/ListItem';
import MenuItem from './MenuItem';

type IListItemLink = {
  href?: string;
};
interface IListSubItem {
  items?: ReadonlyArray<IListItem & IListItemLink>;
}
interface IMenu {
  width?: 'small' | 'medium' | 'large' | 'full';
  variant?: 'thin' | 'thick';
  control?: 'default' | 'checkbox' | 'checkmark';
  onVisibleChange?: (visible: boolean) => void;
  onSelect?: (item: string, evt: React.BaseSyntheticEvent) => void;
  isMobile?: boolean;
  className?: string;
  items: ReadonlyArray<IListItem & IListSubItem & IListItemLink>;
  children: React.ReactNode;
  ref: RefObject<HTMLElement>;
  menuPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const DEFAULT_MENU_POSITION = 'top-left';
const DEFAULT_MIN_HEIGHT = 200;

const Menu: React.FC<IMenu> = (props) => {
  const { width, variant = 'thick', control = 'default', menuPosition, onVisibleChange, onSelect, isMobile, className, items, children } = props;
  const hasSubMenus = !!items.find((item) => item?.items);
  const [visible, setVisible] = useState(false);
  const [calculatedMenuPosition, setCalculatedMenuPosition] = useState(DEFAULT_MENU_POSITION);
  const [maxHeight, setMaxHeight] = useState(`${DEFAULT_MIN_HEIGHT}px`);

  const triggerRef = useRef(null);

  /**
   * When menu is open and you click outside,
   * the menu should close
   */
  const handleClickOutside = () => {
    setVisible(false);
  };
  const menuWrapperRef = useClickOutside<HTMLDivElement>(handleClickOutside);

  /**
   * if the menuPosition prop is not set,
   * then the menu will position automatically depeding on the space available on the screen
   */
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menuPosition) {
      const trigger = triggerRef?.current as HTMLElement | null;
      const triggerPosition = trigger?.getBoundingClientRect();

      setCalculatedMenuPosition(
        `${triggerPosition!.top + triggerPosition!.height / 2 < window.innerHeight / 2 ? 'bottom' : 'top'}-${
          triggerPosition!.left + triggerPosition!.width / 2 < window.innerWidth / 2 ? 'left' : 'right'
        }`
      );
    } else {
      setCalculatedMenuPosition(menuPosition);
    }
  }, [triggerRef, menuPosition]);

  /**
   * if the menu would go out of screen,
   * then the menu's max height will be auto-adjusted to be contained in the screen
   *
   * NOTE!
   * 1. There is a min height set (DEFAULT_MIN_HEIGHT)
   * 2. if the menu is cascading menu (at least an item has sub-items),
   *    this auto-height will not apply for the desktop resolution because adding vertical scroll
   *    will prevent the submenu to be shown on the right or left when hovering on the parent item
   */
  const handleMenuHeight = () => {
    if ((!isMobile && !hasSubMenus) || isMobile) {
      if (visible) {
        const menu = menuRef?.current as HTMLElement | null;
        const menuDimensions = menu?.getBoundingClientRect();
        const calculatedMaxHeight = calculatedMenuPosition.includes('bottom')
          ? window.innerHeight - menuDimensions!.top - 10
          : menuDimensions!.bottom - 10;

        setMaxHeight(`${Math.max(calculatedMaxHeight, 200)}px`);
      }
    } else {
      setMaxHeight('none');
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleMenuHeight);

    return () => {
      window.removeEventListener('resize', handleMenuHeight);
    };
  }, [visible]);
  useEffect(() => {
    handleMenuHeight();
  }, [visible, calculatedMenuPosition]);

  const onMenuToggle = () => {
    setVisible(!visible);
    onVisibleChange?.(!visible);
  };
  const onItemSelect = (itemId: string, event: any) => {
    if (control === 'default' && visible) {
      onMenuToggle();
    }
    onSelect?.(itemId, event);
  };

  return (
    <div
      className={classNames(
        'relative inline-block',
        {
          ['w-full']: width === 'full',
        },
        className
      )}
      ref={menuWrapperRef}
    >
      <button onClick={onMenuToggle} ref={triggerRef}>
        {children}
      </button>
      <ul
        className={classNames('absolute bg-white rounded-lg py-2 shadow-light z-40', {
          ['top-[calc(100%+0.125rem)] left-0']: calculatedMenuPosition === 'bottom-left',
          ['top-[calc(100%+0.125rem)] right-0']: calculatedMenuPosition === 'bottom-right',
          ['bottom-[calc(100%+0.125rem)] left-0']: calculatedMenuPosition === 'top-left',
          ['bottom-[calc(100%+0.125rem)] right-0']: calculatedMenuPosition === 'top-right',
          ['w-[8.5rem]']: width === 'small',
          ['w-[12.5rem]']: width === 'medium',
          ['w-[21.4375rem]']: width === 'large',
          ['w-full']: width === 'full',
          ['hidden']: !visible,
          ['overflow-y-auto']: (!isMobile && !hasSubMenus) || isMobile,
        })}
        style={{
          maxHeight: maxHeight,
        }}
        ref={menuRef}
      >
        {items?.length &&
          items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onSelect={onItemSelect}
              variant={variant}
              control={control}
              isMobile={isMobile}
              width={width}
              visible={visible}
            />
          ))}
      </ul>
    </div>
  );
};

Menu.defaultProps = {
  width: 'medium',
  variant: 'thick',
  control: 'default',
};

export default Menu;
