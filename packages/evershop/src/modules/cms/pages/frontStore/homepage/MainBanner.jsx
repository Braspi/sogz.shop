import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  const text = _('Discount ${discount} For All Orders Over ${price}', {
    discount: '20%',
    price: '$2000'
  });
  return null;
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
