import React from 'react';
import classNames from 'classnames';

interface IHintMessage extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  size?: 'default' | 'large';
  className?: string;
  disabled?: boolean;
  marginHorizontal?: string;
}

const HintMessage = (props: IHintMessage) => {
  const { text, className, disabled, size = 'default', marginHorizontal = 'ml-3', ...rest } = props;

  return (
    <div
      {...rest}
      className={classNames(
        'text-sm leading-none mt-2',
        {
          'text-text-hint': !disabled,
          'text-text-disabled': disabled,
          ['leading-extra-tight']: size === 'default',
          ['text-base leading-normal']: size === 'large',
          [`${marginHorizontal}`]: !!marginHorizontal,
        },
        className
      )}
    >
      {text}
    </div>
  );
};

export default HintMessage;
