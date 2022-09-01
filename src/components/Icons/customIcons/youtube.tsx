import classNames from 'classnames';
import React from 'react';

import { ICustomIconsProps } from '..';

const YouTube: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {!color ? (
      <>
        <path
          d="M23.5221 6.18541C23.3864 5.67482 23.119 5.20883 22.7466 4.83407C22.3743 4.4593 21.91 4.18891 21.4003 4.04996C19.5239 3.54541 12.0239 3.54541 12.0239 3.54541C12.0239 3.54541 4.52393 3.54541 2.64756 4.04996C2.13786 4.18891 1.67358 4.4593 1.30121 4.83407C0.928842 5.20883 0.661431 5.67482 0.525744 6.18541C0.0239258 8.06996 0.0239258 12 0.0239258 12C0.0239258 12 0.0239258 15.93 0.525744 17.8145C0.661431 18.3251 0.928842 18.7911 1.30121 19.1658C1.67358 19.5406 2.13786 19.811 2.64756 19.95C4.52393 20.4545 12.0239 20.4545 12.0239 20.4545C12.0239 20.4545 19.5239 20.4545 21.4003 19.95C21.91 19.811 22.3743 19.5406 22.7466 19.1658C23.119 18.7911 23.3864 18.3251 23.5221 17.8145C24.0239 15.93 24.0239 12 24.0239 12C24.0239 12 24.0239 8.06996 23.5221 6.18541Z"
          fill="#FF0302"
        />
        <path
          d="M9.56934 15.5687V8.4314L15.8421 12L9.56934 15.5687Z"
          fill="#FEFEFE"
        />
      </>
    ) : (
      <path
        d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z"
        fill="black"
        className={classNames({ ['fill-current']: color })}
      />
    )}
  </svg>
);

export default YouTube;
