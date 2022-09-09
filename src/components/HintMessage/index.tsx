import React from 'react';
import classNames from 'classnames';

interface IHintMessage extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  disabled?: boolean;
}

const HintMessage = (props: IHintMessage) => {
  const { text, className, disabled, ...rest } = props;

  return (
    <div
      {...rest}
      className={classNames(className, 'text-sm leading-none mt-2', {
        'text-text-hint': !disabled,
        'text-text-disabled': disabled,
      })}
    >
      {text}
    </div>
  );
};

export default HintMessage;
