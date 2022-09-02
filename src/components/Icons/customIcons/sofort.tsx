import classNames from 'classnames';
import React from 'react';

import { ICustomIconsProps } from '..';

const Sofort: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg
    className={classNames('aspect-paymentIcon')}
    height={size}
    viewBox="0 0 34 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {!color ? (
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="#F884A1" />
    ) : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7841 9.43558L20.7239 4.6181C20.837 4.07764 20.526 3.53303 20.0051 3.37505C19.4235 3.22539 18.8379 3.57461 18.6885 4.16495L17.8369 7.16623L17.1656 4.21068C17.1131 3.93629 16.9516 3.69101 16.7214 3.53303C16.4912 3.37505 16.2045 3.32101 15.9339 3.37921C15.4008 3.49562 15.0535 4.13585 15.1868 4.71787L15.5828 8.06573C15.2387 7.71266 14.8369 7.6039 14.3712 7.88161L14.3107 7.92318C13.8863 8.22069 13.7999 8.82863 14.0726 9.38237C13.8469 9.39544 13.6262 9.49233 13.4585 9.66926L13.4181 9.71499C13.0263 10.1307 13.1031 10.8333 13.5917 11.3363L13.9887 11.7436C14.0333 13.6263 15.521 14.9449 17.2751 14.9449C17.2958 14.9449 17.3158 14.942 17.3348 14.9365C19.7108 14.912 20.755 13.4553 20.9339 11.2449C20.9904 10.5464 20.8652 10.0684 20.6027 9.7815C20.4574 9.62352 20.3039 9.54869 20.1868 9.53206L19.7841 9.43558ZM19.3588 9.33369L20.2958 4.52663C20.3604 4.21068 20.1787 3.89888 19.8879 3.80742C19.5487 3.72011 19.2014 3.93214 19.1085 4.28551L18.0221 8.11857C17.9898 8.23913 17.8687 8.30565 17.7515 8.27239C17.6586 8.24598 17.5987 8.16192 17.5941 8.06806L16.7376 4.30214C16.7052 4.14 16.6124 3.99865 16.4791 3.90719C16.3458 3.81573 16.1802 3.78663 16.0227 3.81989C15.74 3.88225 15.53 4.27304 15.6148 4.62225L15.6189 4.6472L16.1084 8.8012L16.4163 9.27424C16.5507 9.08209 16.7446 8.96236 16.9761 8.90846C17.17 8.86689 17.3679 8.87104 17.5577 8.9043C17.605 8.91126 17.641 8.92114 17.661 8.92661C17.6648 8.92767 17.6681 8.92857 17.6708 8.92925L19.3588 9.33369ZM16.2227 9.7847L15.7406 9.04409C15.7242 9.0262 15.7107 9.00552 15.7008 8.98283L15.4738 8.63408C15.1951 8.21419 14.9245 8.06869 14.6014 8.25992L14.557 8.29318C14.3066 8.47195 14.2743 8.896 14.5328 9.30341L15.4859 10.7626C15.6555 11.0204 15.9947 11.0869 16.2451 10.9123L16.2936 10.8832C16.3605 10.8381 16.416 10.7761 16.4558 10.7048C16.2164 10.4525 16.1572 10.1405 16.2227 9.7847ZM16.8967 10.5116C16.8717 10.4724 16.8345 10.4411 16.7887 10.4237C16.6066 10.2434 16.5994 10.0182 16.6853 9.7233C16.75 9.50712 16.8752 9.39487 17.073 9.34914C17.2023 9.32004 17.3436 9.32419 17.4809 9.34914C17.4964 9.35231 17.51 9.35488 17.5217 9.35708C17.5406 9.36063 17.5542 9.3632 17.5617 9.36577L20.106 9.97689L20.1545 9.99352C20.1948 10.0102 20.2393 10.0434 20.2837 10.0891C20.4533 10.2762 20.5502 10.6296 20.5018 11.2116C20.3362 13.2487 19.4154 14.5125 17.2265 14.4918C17.2142 14.4918 17.2022 14.4928 17.1905 14.4948C15.8638 14.4583 14.7416 13.5666 14.4809 12.2486L14.8073 12.5835C15.1991 12.9702 15.817 12.9619 16.1966 12.5628L16.241 12.517C16.5423 12.1934 16.594 11.7167 16.3982 11.3396C16.4271 11.3235 16.4555 11.3058 16.4834 11.2865L16.5319 11.2532C16.6416 11.1763 16.7338 11.0771 16.8046 10.9629C16.952 11.042 17.1293 11.1114 17.3396 11.17L17.9494 11.3156C17.4971 11.5775 17.2144 12.0639 17.1821 12.808C17.174 12.9328 17.2669 13.0367 17.3881 13.045C17.5092 13.0492 17.6102 12.9577 17.6183 12.833C17.6506 12.1595 17.905 11.7978 18.3129 11.6398C18.531 11.5567 18.7692 11.5401 18.9792 11.5608L19.0317 11.5692C19.3104 11.6232 19.3993 11.195 19.1206 11.1285L17.4446 10.7418C17.2027 10.6738 17.0239 10.5983 16.8967 10.5116ZM13.7735 9.98522C13.9411 9.80464 14.2141 9.78287 14.4108 9.92365L15.1224 11.0162C15.3176 11.3097 15.6337 11.4653 15.9532 11.4595C16.1275 11.6772 16.1182 11.9993 15.922 12.2052L15.8816 12.251C15.6716 12.4713 15.3283 12.4755 15.1143 12.2593L13.9027 11.0245C13.5675 10.6795 13.5231 10.2554 13.7331 10.0309L13.7735 9.98522ZM12.158 19.1646C12.158 19.8589 11.633 20.3328 10.9465 20.3328C10.4659 20.3328 10.054 20.1083 9.79953 19.7508L10.272 19.2644C10.4134 19.4515 10.6476 19.6552 10.9546 19.6552C11.2413 19.6552 11.4392 19.4806 11.4392 19.1979C11.4392 18.8985 11.2049 18.8237 10.8374 18.7156C10.163 18.5119 9.88838 18.1502 9.88838 17.6804C9.88838 17.0901 10.3245 16.5829 11.0111 16.5829C11.4432 16.5829 11.843 16.7908 12.0207 17.194L11.4513 17.564C11.3423 17.3811 11.1928 17.2605 10.9909 17.2605C10.7526 17.2605 10.6032 17.4268 10.6032 17.6389C10.6032 17.8925 10.8213 17.9714 11.1686 18.0754C11.7138 18.2417 12.158 18.5202 12.158 19.1646ZM12.4043 19.0066C12.4043 19.7342 12.9939 20.3328 13.7208 20.3328C14.4478 20.3328 15.0374 19.7342 15.0374 19.0066C15.0374 18.2791 14.4478 17.6804 13.7208 17.6804C12.9939 17.6804 12.4043 18.2791 12.4043 19.0066ZM13.7207 19.6676C14.072 19.6676 14.3507 19.3808 14.3507 19.0066C14.3507 18.6325 14.072 18.3456 13.7207 18.3456C13.3653 18.3456 13.0907 18.6325 13.0907 19.0066C13.0907 19.3849 13.3693 19.6676 13.7207 19.6676ZM16.7376 16.6286V17.2938C16.3539 17.2772 16.0753 17.4767 16.0753 17.9174V18.1876C16.2288 18.0213 16.4468 17.9382 16.7174 17.9382V18.6117C16.3378 18.62 16.0753 18.8694 16.0753 19.2187V20.2663H15.3887V17.8758C15.3887 17.2024 15.8007 16.6286 16.6366 16.6286H16.7376ZM18.2359 20.3328C17.509 20.3328 16.9194 19.7342 16.9194 19.0066C16.9194 18.2791 17.509 17.6804 18.2359 17.6804C18.9629 17.6804 19.5525 18.2791 19.5525 19.0066C19.5525 19.7342 18.9629 20.3328 18.2359 20.3328ZM18.8659 19.0066C18.8659 19.3808 18.5913 19.6676 18.2359 19.6676C17.8845 19.6676 17.6059 19.3849 17.6059 19.0066C17.6059 18.6325 17.8845 18.3456 18.2359 18.3456C18.5872 18.3456 18.8659 18.6325 18.8659 19.0066ZM20.5904 18.038V17.7511H19.924V20.2663H20.6106V19.1189C20.6106 18.7031 20.8488 18.4703 21.2608 18.4703V17.7137C20.9498 17.7012 20.7277 17.8093 20.5904 18.038ZM22.3432 18.3664V18.9817C22.3432 19.4224 22.6218 19.6178 23.0055 19.6053V20.2705H22.9045C22.0645 20.2705 21.6566 19.6968 21.6566 19.0233V16.9446H22.3432V17.3395C22.3432 17.6804 22.6137 17.9382 22.9853 17.9465V18.6158C22.7107 18.6158 22.4966 18.5327 22.3432 18.3664ZM23.8253 20.3079C24.0757 20.3079 24.2857 20.0959 24.2857 19.834C24.2857 19.5762 24.0797 19.36 23.8253 19.36C23.5709 19.36 23.3649 19.572 23.3649 19.834C23.3649 20.0959 23.5709 20.3079 23.8253 20.3079Z"
      fill="white"
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

export default Sofort;
