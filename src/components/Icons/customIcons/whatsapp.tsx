import classNames from 'classnames';
import React from 'react';

import { ICustomIconsProps } from '..';

const WhatsApp: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg className={classNames('aspect-one')} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    {!color ? (
      <>
        <g clipPath='url(#clip0_272_839)'>
          <path
            d='M0 24L1.69536 17.8375C0.64972 16.0341 0.0995958 13.988 0.100267 11.892C0.102946 5.33474 5.46319 0 12.0501 0C15.2466 0.00155219 18.2467 1.23994 20.5032 3.48787C22.759 5.7358 24.0011 8.72369 24 11.9016C23.9971 18.4585 18.636 23.7941 12.0501 23.7941C12.0496 23.7941 12.0506 23.7941 12.0501 23.7941H12.045C10.0452 23.7933 8.0802 23.2939 6.33471 22.3463L0 24Z'
            fill='white'
          />
          <path
            d='M12.004 2C6.48789 2 2.00203 6.48398 2 11.9955C1.99918 13.8842 2.52777 15.7237 3.52873 17.3155L3.76669 17.6936L2.75621 21.3822L6.54107 20.3898L6.90654 20.6064C8.44155 21.5174 10.2015 21.9991 11.9963 22H12.0001C17.5119 22 21.9977 17.5155 22 12.0036C22.001 9.33256 20.9619 6.82084 19.0738 4.93148C17.1857 3.04211 14.6751 2.00113 12.004 2Z'
            fill='url(#paint0_linear_272_839)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.05096 6.51098C8.82965 6.02516 8.59684 6.01532 8.38659 6.00679C8.21441 5.99957 8.01745 6.00001 7.82071 6.00001C7.62374 6.00001 7.30395 6.07306 7.03351 6.36508C6.76285 6.6571 6 7.36298 6 8.79879C6 10.2346 7.05808 11.6219 7.20547 11.8168C7.35308 12.0114 9.24793 15.0519 12.2491 16.2215C14.743 17.1936 15.2505 17.0003 15.792 16.9517C16.3333 16.9031 17.5388 16.2458 17.7847 15.5644C18.0308 14.8831 18.0308 14.2992 17.9571 14.1772C17.8832 14.0554 17.6864 13.9825 17.391 13.8366C17.0958 13.6907 15.6442 12.9846 15.3735 12.8873C15.1029 12.7899 14.9061 12.7414 14.7092 13.0334C14.5124 13.3254 13.947 13.9825 13.7746 14.1772C13.6024 14.3721 13.4302 14.3964 13.1348 14.2505C12.8395 14.1041 11.8886 13.7964 10.7606 12.8022C9.88286 12.0287 9.29042 11.0735 9.11802 10.7815C8.94584 10.4894 9.09965 10.3315 9.24771 10.186C9.38027 10.0552 9.54293 9.84525 9.69077 9.67485C9.83794 9.50445 9.88729 9.38283 9.98555 9.18837C10.084 8.99347 10.0349 8.82307 9.96098 8.67717C9.88729 8.53127 9.31344 7.08802 9.05096 6.51098Z'
            fill='white'
          />
        </g>
        <defs>
          <linearGradient id='paint0_linear_272_839' x1={size / 2} y1={size / 8} x2={size / 2} y2={(7 * size) / 8} gradientUnits='userSpaceOnUse'>
            <stop stopColor='#57D163' />
            <stop offset='1' stopColor='#23B33A' />
          </linearGradient>
          <clipPath id='clip0_272_839'>
            <rect width={size} height={size} fill='white' />
          </clipPath>
        </defs>
      </>
    ) : (
      <>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.69536 17.8375L0 24L6.33471 22.3463C8.0802 23.2939 10.0452 23.7933 12.045 23.7941H12.0501C18.636 23.7941 23.9971 18.4585 24 11.9016C24.0011 8.72369 22.759 5.7358 20.5032 3.48787C18.2467 1.23994 15.2466 0.00155219 12.0501 0C5.46319 0 0.102946 5.33474 0.100267 11.892C0.0995958 13.988 0.64972 16.0341 1.69536 17.8375ZM2 11.9955C2.00203 6.48398 6.48789 2 12.004 2C14.6751 2.00113 17.1857 3.04211 19.0738 4.93148C20.9619 6.82084 22.001 9.33256 22 12.0036C21.9977 17.5155 17.5119 22 12.0001 22H11.9963C10.2015 21.9991 8.44155 21.5174 6.90654 20.6064L6.54107 20.3898L2.75621 21.3822L3.76669 17.6936L3.52873 17.3155C2.52777 15.7237 1.99918 13.8842 2 11.9955Z'
          fill='black'
          className={classNames({ ['fill-current']: color })}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.05096 6.51098C8.82965 6.02516 8.59684 6.01532 8.38659 6.00679C8.21441 5.99957 8.01745 6.00001 7.82071 6.00001C7.62374 6.00001 7.30395 6.07306 7.03351 6.36508C6.76285 6.6571 6 7.36298 6 8.79879C6 10.2346 7.05808 11.6219 7.20547 11.8168C7.35308 12.0114 9.24793 15.0519 12.2491 16.2215C14.743 17.1936 15.2505 17.0003 15.792 16.9517C16.3333 16.9031 17.5388 16.2458 17.7847 15.5644C18.0308 14.8831 18.0308 14.2992 17.9571 14.1772C17.8832 14.0554 17.6864 13.9825 17.391 13.8366C17.0958 13.6907 15.6442 12.9846 15.3735 12.8873C15.1029 12.7899 14.9061 12.7414 14.7092 13.0334C14.5124 13.3254 13.947 13.9825 13.7746 14.1772C13.6024 14.3721 13.4302 14.3964 13.1348 14.2505C12.8395 14.1041 11.8886 13.7964 10.7606 12.8022C9.88286 12.0287 9.29042 11.0735 9.11802 10.7815C8.94584 10.4894 9.09965 10.3315 9.24771 10.186C9.38027 10.0552 9.54293 9.84525 9.69077 9.67485C9.83794 9.50445 9.88729 9.38283 9.98555 9.18837C10.084 8.99347 10.0349 8.82307 9.96098 8.67717C9.88729 8.53127 9.31344 7.08802 9.05096 6.51098Z'
          fill='black'
          className={classNames({ ['fill-current']: color })}
        />
      </>
    )}
  </svg>
);

export default WhatsApp;
