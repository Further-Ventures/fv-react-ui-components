import React from 'react';
import classNames from 'classnames';
import { CreateSvg } from './createSvg';

export type tColors = '' | 'primary'
| 'primary-light'
| 'primary-medium'
| 'primary-dark'
| 'primary-contrast'
| 'primary-contrast-secondary'
| 'error'
| 'error-light'
| 'error-medium'
| 'error-dark'
| 'error-contrast'
| 'error-contrast-secondary'
| 'warning'
| 'warning-light'
| 'warning-medium'
| 'warning-dark'
| 'warning-contrast'
| 'warning-contrast-secondary'
| 'success'
| 'success-light'
| 'success-medium'
| 'success-dark'
| 'success-contrast'
| 'success-contrast-secondary'
| 'default'
| 'default-extra-light'
| 'default-light'
| 'default-dark'
| 'text-primary'
| 'text-secondary'
| 'text-disabled'
| 'text-hint'
| 'background'
| 'cool-20'
| 'cool-40'
| 'cool-60'
| 'cool-90'
| 'cool-100'

export interface ICustomIconsProps {
  color?: string;
  size?: number;
}
interface IIconsProps {
  icon?: string;
  size?: number;
  fill?: boolean;
  color?: tColors;
}

export type SocialAndPaymentIcons =
  | 'Apple'
  | 'Facebook'
  | 'GitHub'
  | 'Google'
  | 'Instagram'
  | 'LinkedIn'
  | 'Pinterest'
  | 'Signal'
  | 'Snapchat'
  | 'Telegram'
  | 'TikTok'
  | 'Twitter'
  | 'WhatsApp'
  | 'YouTube'
  | 'Amazon'
  | 'ApplePay'
  | 'GooglePay'
  | 'Klarna'
  | 'Maestro'
  | 'Mastercard'
  | 'PayPal'
  | 'ShopPay'
  | 'Sofort'
  | 'Stripe'
  | 'Visa';

const SOCIAL_ICONS: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  google: 'Google',
  youtube: 'YouTube',
  whatsapp: 'WhatsApp',
  apple: 'Apple',
  snapchat: 'Snapchat',
  pinterest: 'Pinterest',
  github: 'GitHub',
  tiktok: 'TikTok',
  telegram: 'Telegram',
  signal: 'Signal'
};

const PAYMENT_ICONS: Record<string, string> = {
  visa: 'Visa',
  amazon: 'Amazon',
  applepay: 'ApplePay',
  googlepay: 'GooglePay',
  shoppay: 'ShopPay',
  klarna: 'Klarna',
  sofort: 'Sofort',
  mastercard: 'Mastercard',
  maestro: 'Maestro',
  stripe: 'Stripe',
  paypal: 'PayPal'
};

const Icons: React.FC<IIconsProps> = ({ icon = 'person', size = 24, fill = false, color = '' }) => {
  const isPaymentIcon = Object.prototype.hasOwnProperty.call(
    PAYMENT_ICONS,
    icon
  );
  const isSocialIcon = Object.prototype.hasOwnProperty.call(SOCIAL_ICONS, icon);
  const isDefaultIcon = !(isPaymentIcon || isSocialIcon);

  const iconWrapperStyle = {
    height: size
  };
  const customIconComponentName: SocialAndPaymentIcons = isSocialIcon
    ? (SOCIAL_ICONS[icon] as SocialAndPaymentIcons)
    : (PAYMENT_ICONS[icon] as SocialAndPaymentIcons);
  const iconStyle = isDefaultIcon
    ? color ? { fontSize: size, color: color } 
      : { fontSize: size }
    : {};

  return (
    <span className={classNames('flex justify-center items-center', {
      ['aspect-paymentIcon']: isPaymentIcon,
      ['aspect-one']: !isPaymentIcon
    })} style={iconWrapperStyle}>
      <span
        className={classNames('font-mercury-icons', {
          ['icon']: !fill,
          ['filled']: fill,
          [`text-${color}`]: color,
          // [`fill-${color}`]: color,
          // [`stroke-${color}`]: color,
          ['text-text']: !color,
          ['aspect-paymentIcon']: isPaymentIcon,
          ['aspect-one']: !isPaymentIcon
        })}
        style={iconStyle}
      >
        {isDefaultIcon ? (
          icon
        ) : (
          <CreateSvg icon={customIconComponentName} size={size} color={color} />
        )}
      </span>
    </span>
  );
};

export default Icons;

Icons.defaultProps = {
  icon: 'person',
  size: 24,
  fill: false
};
