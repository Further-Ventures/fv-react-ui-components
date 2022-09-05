import classNames from 'classnames';
import React from 'react';

import { ICustomIconsProps } from '..';

const Visa: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg
    className={classNames('aspect-paymentIcon')}
    height={size}
    viewBox="0 0 34 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {!color ? (
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
    ) : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7502 15.8582H8.6905L7.14594 9.79235C7.07263 9.51332 6.91697 9.26664 6.688 9.15038C6.11658 8.85821 5.4869 8.62568 4.79999 8.50841V8.27487H8.11807C8.57601 8.27487 8.91947 8.62568 8.97671 9.0331L9.77811 13.4086L11.8368 8.27487H13.8393L10.7502 15.8582ZM14.9842 15.8582H13.039L14.6408 8.27487H16.586L14.9842 15.8582ZM19.1027 10.3757C19.1599 9.96725 19.5034 9.73372 19.9041 9.73372C20.5338 9.67508 21.2197 9.79235 21.7921 10.0835L22.1356 8.45079C21.5631 8.21725 20.9335 8.09998 20.362 8.09998C18.474 8.09998 17.1002 9.15038 17.1002 10.6082C17.1002 11.7173 18.0733 12.2996 18.7602 12.6504C19.5034 13.0002 19.7896 13.2337 19.7324 13.5835C19.7324 14.1082 19.1599 14.3418 18.5885 14.3418C17.9016 14.3418 17.2147 14.1669 16.586 13.8747L16.2426 15.5084C16.9295 15.7996 17.6726 15.9169 18.3595 15.9169C20.4765 15.9745 21.7921 14.9251 21.7921 13.35C21.7921 11.3664 19.1027 11.2502 19.1027 10.3757ZM28.6 15.8582L27.0554 8.27487H25.3964C25.0529 8.27487 24.7095 8.50841 24.595 8.85821L21.7349 15.8582H23.7374L24.137 14.7502H26.5975L26.8265 15.8582H28.6ZM25.6826 10.3171L26.254 13.1751H24.6522L25.6826 10.3171Z"
      fill="#172B85"
      className={classNames({ ['fill-current']: color })}
    />
    <rect
      x="0.5"
      y="0.5"
      width="33"
      height="23"
      rx="3.5"
      stroke="#F2F4F7"
      className={classNames({ ['stroke-current']: color })}
    />
  </svg>
);

export default Visa;