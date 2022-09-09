import classNames from 'classnames';
import React from 'react';

import { ICustomIconsProps } from '..';

const Maestro: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg className={classNames('aspect-paymentIcon')} height={size} viewBox='0 0 34 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    {!color ? <rect x='0.5' y='0.5' width='33' height='23' rx='3.5' fill='white' /> : null}
    <path
      d='M19.2576 11.7058C19.2576 15.4092 16.2898 18.4115 12.6288 18.4115C8.96782 18.4115 6 15.4092 6 11.7058C6 8.00227 8.96782 5 12.6288 5C16.2898 5 19.2576 8.00227 19.2576 11.7058Z'
      fill='#ED0006'
    />
    <path
      d='M27.8571 11.7058C27.8571 15.4092 24.8893 18.4115 21.2283 18.4115C17.5673 18.4115 14.5995 15.4092 14.5995 11.7058C14.5995 8.00227 17.5673 5 21.2283 5C24.8893 5 27.8571 8.00227 27.8571 11.7058Z'
      fill='#0099DF'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.9286 6.60193C18.3539 7.83189 19.2576 9.66205 19.2576 11.7057C19.2576 13.7494 18.3539 15.5796 16.9286 16.8096C15.5033 15.5796 14.5996 13.7494 14.5996 11.7057C14.5996 9.66205 15.5033 7.83189 16.9286 6.60193Z'
      fill='#6C6BBD'
    />
    <rect x='0.5' y='0.5' width='33' height='23' rx='3.5' stroke='#F2F4F7' className={classNames({ ['stroke-current']: color })} />
  </svg>
);

export default Maestro;
