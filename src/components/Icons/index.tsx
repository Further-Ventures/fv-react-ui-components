import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import { useTheme } from '../Theme';
import { CreateSvg } from './createSvg';

export interface ICustomIconsProps {
  color?: string;
  size?: number;
}
interface IIconsProps {
  icon?: string;
  size?: number;
  fill?: boolean;
  color?: string;
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

const Icons: React.FC<IIconsProps> = (props) => {
  const classes = useStyles(props);
  const { theme } = useTheme();
  const { icon = 'person', size = 24, fill = false, color = '' } = props;

  const isPaymentIcon = Object.prototype.hasOwnProperty.call(
    PAYMENT_ICONS,
    icon
  );
  const isSocialIcon = Object.prototype.hasOwnProperty.call(SOCIAL_ICONS, icon);
  const isDefaultIcon = !(isPaymentIcon || isSocialIcon);

  const iconWrapperStyle = {
    width: isPaymentIcon ? Math.round(size * 1.4167) : size,
    height: size
  };
  const customIconComponentName: SocialAndPaymentIcons = isSocialIcon
    ? (SOCIAL_ICONS[icon] as SocialAndPaymentIcons)
    : (PAYMENT_ICONS[icon] as SocialAndPaymentIcons);
  const iconStyle = isDefaultIcon
    ? { fontSize: size, color: color || theme.default.dark }
    : {};

  return (
    <span className={classes.iconWrapper} style={iconWrapperStyle}>
      <span
        className={classNames(classes.icon, fill && classes.fill)}
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
