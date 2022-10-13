import classNames from 'classnames';
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { IListItem } from '../List/ListItem';
import MenuItem from './MenuItem';

type IListItemLink = {
  href?: string;
};
interface IListSubItem {
  items?: ReadonlyArray<IListItem & IListItemLink>;
}
interface IMenu {
  width?: 'small' | 'medium' | 'large';
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

const Menu: React.FC<IMenu> = (props) => {
  const { width, variant = 'thick', control = 'default', menuPosition, onVisibleChange, onSelect, isMobile, className, items, children } = props;
  const hasSubMenus = !!items.find((item) => item?.items);
  const [visible, setVisible] = useState(false);
  const [calculatedMenuPosition, setCalculatedMenuPosition] = useState('top-left');
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState(200);

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

  const handleMenuHeight = useCallback(() => {
    if (visible) {
      const menu = menuRef?.current as HTMLElement | null;
      const menuDimensions = menu?.getBoundingClientRect();
      const calculatedMaxHeight = calculatedMenuPosition.includes('bottom')
        ? window.innerHeight - menuDimensions!.top - 10
        : menuDimensions!.bottom - 10;

      setMaxHeight(Math.max(calculatedMaxHeight, 200));
    }
  }, [visible, calculatedMenuPosition, setMaxHeight]);
  useEffect(() => {
    window.addEventListener('resize', handleMenuHeight);

    return () => {
      window.removeEventListener('resize', handleMenuHeight);
    };
  }, [visible]);
  useEffect(() => {
    handleMenuHeight();
  }, [visible, calculatedMenuPosition]);

  const onMenuToggle = useCallback(() => {
    setVisible(!visible);
    onVisibleChange?.(!visible);
  }, [visible, setVisible, onVisibleChange]);

  const onItemSelect = useCallback(
    (itemId: string, event: any) => {
      if (control === 'default' && visible) {
        onMenuToggle();
      }
      onSelect?.(itemId, event);
    },
    [onSelect, onMenuToggle]
  );

  return (
    <div className={classNames('relative inline-block', className)}>
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
          ['hidden']: !visible,
          ['overflow-y-auto']: (!isMobile && !hasSubMenus) || isMobile,
        })}
        style={{
          maxHeight: (!isMobile && !hasSubMenus) || isMobile ? `${maxHeight}px` : 'none',
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
