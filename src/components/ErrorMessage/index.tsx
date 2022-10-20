import React from 'react';
import classNames from 'classnames';
import Icon from '../Icons';
interface IErrorMessage {
  text: string;
  size?: 'default' | 'large';
  className?: string;
  disabled?: boolean;
  marginHorizontal?: string;
}

const ErrorMessage = (props: IErrorMessage) => {
  const { text, disabled, className, size = 'default', marginHorizontal = 'ml-3', ...rest } = props;

  return (
    <div
      {...rest}
      className={classNames(
        'flex items-center gap-1 mt-2',
        {
          'text-error': !disabled,
          'text-text-disabled': disabled,
          ['text-xxs leading-normal']: size === 'default',
          ['text-sm leading-extra-tight']: size === 'large',
          [`${marginHorizontal}`]: !!marginHorizontal,
        },
        className
      )}
    >
      <Icon icon='info' fill size={size === 'default' ? 10 : 14} />
      {text}
    </div>
  );
};

export default ErrorMessage;
