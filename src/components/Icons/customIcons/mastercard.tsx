import classNames from 'classnames';
import React from 'react';

import { ICustomIconsProps } from '..';

const Mastercard: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg className={classNames('aspect-paymentIcon')} height={size} viewBox='0 0 34 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    {!color ? <rect x='0.5' y='0.5' width='33' height='23' rx='3.5' fill='white' /> : null}
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.179 16.8295C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02972 9.03582 5.03003 12.7807 5.03003C14.459 5.03003 15.9949 5.63253 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5773 5.03003C25.3221 5.03003 28.358 8.02972 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z'
      fill='#ED0006'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.179 16.8295C18.6369 15.6006 19.5614 13.772 19.5614 11.73C19.5614 9.68807 18.6369 7.85947 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5772 5.03003C25.3221 5.03003 28.3579 8.02972 28.3579 11.73C28.3579 15.4303 25.3221 18.43 21.5772 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z'
      fill='#F9A000'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.179 16.8295C18.6369 15.6006 19.5614 13.772 19.5614 11.7301C19.5614 9.68811 18.6369 7.85952 17.179 6.63062C15.7211 7.85952 14.7966 9.68811 14.7966 11.7301C14.7966 13.772 15.7211 15.6006 17.179 16.8295Z'
      fill='#FF5E00'
    />
    <rect x='0.5' y='0.5' width='33' height='23' rx='3.5' stroke='#F2F4F7' className={classNames({ ['stroke-current']: color })} />
  </svg>
);

export default Mastercard;
