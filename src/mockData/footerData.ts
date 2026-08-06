import type { IconType } from 'react-icons';
import { CiUmbrella } from "react-icons/ci";
import { LuFlaskConical } from 'react-icons/lu';
import { PiUmbrella } from 'react-icons/pi';
import { CiDeliveryTruck } from "react-icons/ci";
import { PiMoneyWavyLight } from "react-icons/pi";

export type StoreFeature = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

export const STORE_FEATURES: StoreFeature[] = [
  {
    id: 1,
    title: 'ارسال رایگان کالا',
    description: 'برای سفارش‌های منتخب',
    icon: CiDeliveryTruck,
  },
  
  {
    id: 2,
    title: 'بازگشت وجه پرداختی',
    description: 'برای اولین سفارش',
    icon: PiMoneyWavyLight,
  },
  {
    id: 3,
    title: 'خرید مطمئن',
    description: 'عدم ذخیره اطلاعات',
    icon: CiUmbrella,
  },
  {
    id: 4,
    title: 'تضمین کیفیت',
    description: 'ضمانت برگشت کالا',
    icon: LuFlaskConical,
  },
];

export const FOOTER_LINK_GROUPS = [
  {
    id: 'categories',
    title: 'دسته‌بندی‌ها',
    links: [
      { label: 'سبد خرید', href: '/products?category=bumper' },
      { label: 'پروفایل', href: '/products?category=profile' },
    ],
  },
  {
    id: 'user-menu',
    title: 'منوی کاربردی',
    links: [
      { label: 'لیست محصولات', href: '/products' },
      { label: 'آینه', href: '/products?category=mirror' },
    ],
  },
  {
    id: 'quick-access',
    title: 'سایر لینک‌ها',
    links: [
      { label: 'نوارجات', href: '/products/door-seal' },
      { label: 'لوازم جانبی', href: '/products?category=accessory' },
    ],
  },
];
