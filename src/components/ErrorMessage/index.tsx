import React from 'react';
import classNames from 'classnames';
import Icon from '../Icons'
interface IErrorMessage {
  text: string;
  disabled?: boolean,
  className?: string;
}

const ErrorMessage = (props: IErrorMessage) => {
  const { text, disabled, className, ...rest } = props;

  return <div
    {...rest}
    className={classNames(className, 'flex items-center gap-1 text-sm leading-none  mt-2', {
      'text-error': !disabled,
      'text-text-disabled': disabled,
    })}
  >
    <Icon icon='info' fill size={14} />
    {text}
  </div>;
};
export default ErrorMessage