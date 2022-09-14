import React, { useState, useMemo } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import classNames from 'classnames';
import Input, { IInput } from '../Input';

import { Elevation } from '../Elevation';
import Button from '../Button';
import Icon from '../Icons';

export interface IDropdown extends Omit<IInput, 'mask' | 'type' | 'sideContent'> {
  isOpen?: boolean;
  closeOnBlur?: boolean;
  closeOnClickOutside?: boolean;
  inputClassName?: 'string';
  onClickOutside?: React.MouseEventHandler<HTMLButtonElement>;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const DropDown: React.FC<IDropdown> = (props) => {
  const { isOpen, children, className, onFocus, onBlur, onIconClick, onClickOutside, inputClassName, closeOnBlur, closeOnClickOutside, ...rest } =
    props;
  const controlled = useMemo(() => isOpen !== undefined && isOpen !== null, [isOpen]);

  const handleClickOutside = (evt: any) => {
    onClickOutside && onClickOutside(evt);
    if (controlled || !closeOnClickOutside) {
      return;
    }
    setOpenInternal(false);
  };

  const dropdownRef = useClickOutside<HTMLDivElement>(handleClickOutside);
  const [isOpenInternal, setOpenInternal] = useState(false);

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (dropdownRef.current?.contains(evt.relatedTarget)) {
      return;
    }

    onBlur && onBlur(evt);
    if (controlled && !closeOnBlur) {
      return;
    }
    setOpenInternal(false);
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(evt);
    if (controlled) {
      return;
    }
    setOpenInternal(true);
  };

  const handleIconClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onIconClick && onIconClick(evt);
    if (controlled) {
      return;
    }
    setOpenInternal(!isOpenInternal);
  };

  const isDropdownOpen = controlled ? isOpen : isOpenInternal;
  const icon = isDropdownOpen ? 'expand_less' : 'expand_more';
  console.log(rest);
  return (
    <div ref={dropdownRef} className={classNames(className, 'inline-block')} onBlurCapture={handleBlur}>
      <Input
        {...rest}
        className={inputClassName}
        onFocus={handleFocus}
        sideContent={<Button variant='transparent' color='grey' size='small' onClick={handleIconClick} contentLeft={<Icon icon={icon} />} />}
      />
      {isDropdownOpen && <Elevation className={classNames('absolute')}>{children}</Elevation>}
    </div>
  );
};

DropDown.defaultProps = {
  closeOnBlur: true,
  closeOnClickOutside: true,
};

export default React.memo(DropDown);
