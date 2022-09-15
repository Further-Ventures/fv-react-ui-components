import React, { useState, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import useClickOutside from '../../hooks/useClickOutside';

import Input, { IInput } from '../Input';
import Elevation from '../Elevation';
import Button from '../Button';
import Icon from '../Icons';

import './index.scss';

const TEST_ID = '@fv/dropdown';

export interface IDropdown extends Omit<IInput, 'mask' | 'type' | 'sideContent'> {
  isOpen?: boolean;
  closeOnBlur?: boolean;
  closeOnClickOutside?: boolean;
  inputClassName?: 'string';
  onToggle?: (isOpen: boolean) => void;
  onClickOutside?: React.MouseEventHandler<HTMLButtonElement>;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const DropDown: React.FC<IDropdown> = (props) => {
  const {
    isOpen,
    name,
    children,
    className,
    disabled,
    onToggle,
    onFocus,
    onBlur,
    onIconClick,
    onClickOutside,
    inputClassName,
    closeOnBlur,
    closeOnClickOutside,
    ...rest
  } = props;

  const controlled = useMemo(() => isOpen !== undefined && isOpen !== null, [isOpen]);
  const [isOpenInternal, setOpenInternal] = useState(false);

  const toggleOpenInternal = (isOpen: boolean) => {
    setOpenInternal(isOpen);
    onToggle && onToggle(isOpen);
  };

  const handleClickOutside = (evt: any) => {
    onClickOutside && onClickOutside(evt);
    if (controlled || !closeOnClickOutside) {
      return;
    }
    toggleOpenInternal(false);
  };
  const dropdownRef = useClickOutside<HTMLDivElement>(handleClickOutside);

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (dropdownRef.current?.contains(evt.relatedTarget)) {
      return;
    }

    onBlur && onBlur(evt);
    if (controlled && !closeOnBlur) {
      return;
    }
    toggleOpenInternal(false);
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(evt);
    if (controlled) {
      return;
    }
    toggleOpenInternal(true);
  };

  const handleIconClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onIconClick && onIconClick(evt);
    if (controlled) {
      return;
    }
    toggleOpenInternal(!isOpenInternal);
  };

  const isDropdownOpen = !disabled && (controlled ? isOpen : isOpenInternal);

  return (
    <div ref={dropdownRef} className={classNames(className, 'mercuryDropdown relative inline-block')} onBlurCapture={handleBlur}>
      <Input
        {...rest}
        disabled={disabled}
        name={name}
        className={inputClassName}
        onFocus={handleFocus}
        sideContent={
          <Button
            disabled={disabled}
            data-testid={`${TEST_ID}-${name}--toggle`}
            variant='transparent'
            color='grey'
            size='small'
            onClick={handleIconClick}
            contentLeft={
              <Icon className={classNames('transition-transform duration-250 ease-in', { 'rotate-180': isDropdownOpen })} icon='expand_more' />
            }
          />
        }
      />
      <CSSTransition in={isDropdownOpen} classNames='mercuryDropdownContent' timeout={250} mountOnEnter unmountOnExit>
        <Elevation
          data-testid={`${TEST_ID}-${name}--content`}
          variation='extraHeavy'
          className={classNames('absolute top-16 z-50 bg-background rounded-lg block min-w-full')}
        >
          {children}
        </Elevation>
      </CSSTransition>
    </div>
  );
};

DropDown.defaultProps = {
  closeOnBlur: true,
  closeOnClickOutside: true,
};

export default React.memo(DropDown);
