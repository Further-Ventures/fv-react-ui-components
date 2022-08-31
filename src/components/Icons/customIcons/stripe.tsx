import React from 'react';

import { ICustomIconsProps } from '..';

const Stripe: React.FC<ICustomIconsProps> = ({ color, size = 24 }) => (
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
      d="M18.2681 8.14192L16.541 8.52349V7.08202L18.2681 6.70752V8.14192ZM21.8599 8.94038C21.1856 8.94038 20.7521 9.26542 20.5112 9.49153L20.4218 9.05344H18.908V17.2924L20.6282 16.9179L20.6351 14.9183C20.8828 15.102 21.2475 15.3634 21.853 15.3634C23.0847 15.3634 24.2063 14.3459 24.2063 12.106C24.1994 10.0568 23.0641 8.94038 21.8599 8.94038ZM21.447 13.8089C21.041 13.8089 20.8002 13.6605 20.6351 13.4768L20.6282 10.8553C20.8071 10.6504 21.0548 10.509 21.447 10.509C22.0732 10.509 22.5067 11.2298 22.5067 12.1554C22.5067 13.1023 22.0801 13.8089 21.447 13.8089ZM29.6286 12.1766C29.6286 10.3677 28.7753 8.94038 27.1446 8.94038C25.5069 8.94038 24.516 10.3677 24.516 12.1625C24.516 14.2894 25.6858 15.3634 27.3647 15.3634C28.1836 15.3634 28.8029 15.1726 29.2708 14.9041V13.4909C28.8029 13.7312 28.2661 13.8795 27.5849 13.8795C26.9175 13.8795 26.3257 13.6393 26.25 12.8055H29.6148C29.6148 12.7666 29.6173 12.6782 29.6201 12.5763L29.6201 12.5761C29.624 12.4377 29.6286 12.2743 29.6286 12.1766ZM26.2293 11.5054C26.2293 10.7069 26.7041 10.3748 27.1376 10.3748C27.5574 10.3748 28.0046 10.7069 28.0046 11.5054H26.2293ZM16.5409 9.06052H18.268V15.2433H16.5409V9.06052ZM14.58 9.06051L14.6901 9.5834C15.0961 8.82026 15.9011 8.97572 16.1213 9.06051V10.6857C15.908 10.608 15.2199 10.509 14.8139 11.0531V15.2433H13.0937V9.06051H14.58ZM11.2495 7.52717L9.57053 7.8946L9.56365 13.5545C9.56365 14.6003 10.3274 15.3705 11.3458 15.3705C11.9101 15.3705 12.3229 15.2645 12.55 15.1373V13.7029C12.3298 13.7947 11.2426 14.1198 11.2426 13.074V10.5656H12.55V9.0605H11.2426L11.2495 7.52717ZM7.18292 10.4737C6.81823 10.4737 6.59804 10.5797 6.59804 10.8553C6.59804 11.1562 6.97699 11.2885 7.44712 11.4527C8.21355 11.7204 9.22231 12.0728 9.22657 13.3779C9.22657 14.6427 8.24259 15.3705 6.81135 15.3705C6.21958 15.3705 5.57277 15.2504 4.93284 14.9677V13.286C5.51084 13.611 6.24023 13.8513 6.81135 13.8513C7.19668 13.8513 7.47192 13.7453 7.47192 13.4203C7.47192 13.087 7.06113 12.9346 6.56519 12.7507C5.80991 12.4706 4.85715 12.1173 4.85715 10.9401C4.85715 9.6894 5.78608 8.9404 7.18292 8.9404C7.75404 8.9404 8.31828 9.03225 8.88941 9.26543V10.926C8.36645 10.6362 7.70588 10.4737 7.18292 10.4737Z"
      fill={color ? color : '#6461FC'}
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

export default Stripe;
