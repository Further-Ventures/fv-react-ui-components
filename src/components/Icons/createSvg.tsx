import React from 'react';
import { SocialAndPaymentIcons, tColors } from '.';
import * as CustomIcons from './customIcons';

interface ICreateSvgProps {
  icon?: SocialAndPaymentIcons;
  size?: number;
  color?: tColors;
}
export const CreateSvg: React.FC<ICreateSvgProps> = ({ icon = 'Facebook', size = 24, color = '' }) =>
  React.createElement(CustomIcons[icon], { size, color });
