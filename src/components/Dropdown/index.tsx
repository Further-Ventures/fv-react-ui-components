import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import Input, { IInput } from '../Input';

import { Elevation } from '../Elevation';
import Button from '../Button';
import Icon from '../Icons';

export interface IDropdown extends Omit<IInput, 'mask' | 'type' | 'sideContent'> {
  isOpen?: boolean;
  inputClassName?: 'string';
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PasswordInput: React.FC<IDropdown> = (props) => {
  const { isOpen, children, className, onFocus, onBlur, onIconClick, inputClassName, ...rest } = props;
  const controlled = useMemo(() => isOpen !== undefined && isOpen !== null, [isOpen]);

  const [isOpenInternal, setOpenInternal] = useState(false);

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(evt);
    !controlled && setOpenInternal(!isOpenInternal);
  };
  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(evt);
    !controlled && setOpenInternal(!isOpenInternal);
  };
  const handleIconClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onIconClick && onIconClick(evt);
    !controlled && setOpenInternal(!isOpenInternal);
  };

  const isDropdownOpen = controlled ? isOpen : isOpenInternal;
  const icon = isDropdownOpen ? 'expand_more' : 'expand_less';
  return (
    <div className={classNames(className, 'inline-block')}>
      <Input
        {...rest}
        className={inputClassName}
        onFocus={handleFocus}
        onBlur={handleBlur}
        sideContent={<Button variant='transparent' color='grey' size='small' onClick={handleIconClick} contentLeft={<Icon icon={icon} />} />}
      />
      {isDropdownOpen && <Elevation className={classNames('absolute')}>{children}</Elevation>}
    </div>
  );
};

PasswordInput.defaultProps = {
  width: 'medium',
};

export default PasswordInput;
