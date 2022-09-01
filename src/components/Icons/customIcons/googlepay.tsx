import React from 'react';

import { ICustomIconsProps } from '..';

const GooglePay: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
  <svg
    width={Math.round(size * 1.4167)}
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
      d="M16.0578 15.528V12.5934H17.5725C18.1931 12.5934 18.717 12.3854 19.144 11.9752L19.2465 11.8712C20.0266 11.022 19.9754 9.69914 19.144 8.91349C18.7284 8.49755 18.1589 8.27226 17.5725 8.28381H15.1411V15.528H16.0578ZM16.0579 11.7037V9.17339H17.5956C17.9259 9.17339 18.2391 9.30048 18.4726 9.53156C18.9681 10.0168 18.9795 10.8256 18.5011 11.3282C18.2676 11.5766 17.9373 11.7152 17.5956 11.7037H16.0579ZM23.5228 10.9585C23.1299 10.5945 22.5947 10.4097 21.9171 10.4097C21.0459 10.4097 20.3911 10.7332 19.9583 11.3744L20.7669 11.8886C21.063 11.4495 21.4672 11.23 21.9797 11.23C22.3043 11.23 22.6174 11.3513 22.8623 11.5708C23.1014 11.7788 23.2381 12.0792 23.2381 12.3969V12.6107C22.8851 12.4142 22.4409 12.3103 21.8943 12.3103C21.2566 12.3103 20.7441 12.4605 20.3626 12.7666C19.9811 13.0728 19.7875 13.4772 19.7875 13.9913C19.7761 14.4593 19.9754 14.9041 20.3284 15.2045C20.6871 15.528 21.1427 15.6897 21.6779 15.6897C22.31 15.6897 22.811 15.4067 23.1925 14.8405H23.2324V15.528H24.1093V12.472C24.1093 11.8308 23.9157 11.3224 23.5228 10.9585ZM21.0346 14.6153C20.8467 14.4766 20.7328 14.2513 20.7328 14.0087C20.7328 13.7372 20.8581 13.5119 21.103 13.3328C21.3536 13.1537 21.6668 13.0613 22.037 13.0613C22.5495 13.0555 22.9482 13.171 23.2329 13.4021C23.2329 13.7949 23.0791 14.1358 22.7773 14.4246C22.5039 14.7019 22.1338 14.8579 21.7465 14.8579C21.4902 14.8637 21.2397 14.777 21.0346 14.6153ZM26.0795 17.7059L29.1429 10.5714H28.1464L26.7286 14.13H26.7115L25.2595 10.5714H24.2631L26.2731 15.2102L25.1342 17.7059H26.0795Z"
      fill={color ? color : '#3C4043'}
    />
    <path
      d="M12.8929 11.9579C12.8929 11.6748 12.8701 11.3917 12.8246 11.1144H8.95828V12.7146H11.1733C11.0822 13.2288 10.7861 13.6909 10.3533 13.9798V15.0196H11.6744C12.4488 14.2975 12.8929 13.2288 12.8929 11.9579Z"
      fill={color ? color : '#4285F4'}
    />
    <path
      d="M8.95848 16.0248C10.0631 16.0248 10.997 15.6551 11.6746 15.0196L10.3535 13.9798C9.98341 14.234 9.5108 14.3784 8.95848 14.3784C7.88799 14.3784 6.98263 13.6447 6.65807 12.6627H5.29718V13.7372C5.99186 15.1409 7.40969 16.0248 8.95848 16.0248Z"
      fill={color ? color : '#34A853'}
    />
    <path
      d="M6.65819 12.6627C6.48734 12.1486 6.48734 11.5882 6.65819 11.0683V9.99957H5.29709C4.7105 11.1723 4.7105 12.5587 5.29709 13.7314L6.65819 12.6627Z"
      fill={color ? color : '#FBBC04'}
    />
    <path
      d="M8.95848 9.35253C9.54497 9.34098 10.1087 9.56628 10.53 9.97643L11.703 8.7864C10.9571 8.08162 9.97772 7.69457 8.95848 7.70612C7.40969 7.70612 5.99186 8.59576 5.29718 9.99954L6.65807 11.074C6.98263 10.0862 7.88799 9.35253 8.95848 9.35253Z"
      fill={color ? color : '#EA4335'}
    />
    <rect
      x="0.5"
      y="0.5"
      width="33"
      height="23"
      rx="3.5"
      stroke={color ? color : '#F2F4F7'}
    />
  </svg>
);

export default GooglePay;