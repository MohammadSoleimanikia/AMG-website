import { NavBarItem } from '@/_types/_header';

export const PRODUCT_NAVBAR_MOCK: NavBarItem = {
  id: 1,
  faName: 'لیست محصولات',
  en_name: 'products',
  type: 'product',
  icon: '/icons/products.svg',
  path: '/products',
  groupName: 'دسته‌بندی محصولات',

  children: [
    {
      id: 101,
      faName: 'آینه',
      en_name: 'mirror',
      icon: '/icons/mirror.svg',
      path: '/products/mirror',
      groupName: 'انواع قطعات آینه خودرو',

      children: [
        {
          id: 10101,
          faName: 'آینه کامل',
          en_name: 'complete-mirror',
          icon: '/icons/complete-mirror.svg',
          path: '/products/mirror/complete-mirror',
          groupName: 'آینه کامل خودرو',

          children: [
            {
              id: 1010101,
              name: 'آینه کامل سمت چپ پراید',
              en_name: 'pride-complete-left-mirror',
              path: '/products/mirror/complete-mirror/pride-left',
            },
            {
              id: 1010102,
              name: 'آینه کامل سمت راست پراید',
              en_name: 'pride-complete-right-mirror',
              path: '/products/mirror/complete-mirror/pride-right',
            },
            {
              id: 1010103,
              name: 'آینه کامل سمت چپ پژو ۲۰۶',
              en_name: 'peugeot-206-complete-left-mirror',
              path: '/products/mirror/complete-mirror/peugeot-206-left',
            },
            {
              id: 1010104,
              name: 'آینه کامل سمت راست پژو ۲۰۶',
              en_name: 'peugeot-206-complete-right-mirror',
              path: '/products/mirror/complete-mirror/peugeot-206-right',
            },
          ],
        },
        {
          id: 10102,
          faName: 'فلاپی',
          en_name: 'mirror-flap',
          path: '/products/mirror/flap',
          groupName: 'فلاپی آینه',

          children: [
            {
              id: 1010201,
              name: 'فلاپی آینه سمت چپ پراید',
              en_name: 'pride-left-mirror-flap',
              path: '/products/mirror/flap/pride-left',
            },
            {
              id: 1010202,
              name: 'فلاپی آینه سمت راست پراید',
              en_name: 'pride-right-mirror-flap',
              path: '/products/mirror/flap/pride-right',
            },
          ],
        },
        {
          id: 10103,
          faName: 'شیشه',
          en_name: 'mirror-glass',
          icon: '/icons/mirror-glass.svg',
          path: '/products/mirror/glass',
          groupName: 'شیشه آینه خودرو',

          children: [
            {
              id: 1010301,
              name: 'شیشه آینه سمت چپ پراید',
              en_name: 'pride-left-mirror-glass',
              path: '/products/mirror/glass/pride-left',
            },
            {
              id: 1010302,
              name: 'شیشه آینه سمت راست پراید',
              en_name: 'pride-right-mirror-glass',
              path: '/products/mirror/glass/pride-right',
            },
            {
              id: 1010303,
              name: 'شیشه آینه سمت چپ تیبا',
              en_name: 'tiba-left-mirror-glass',
              path: '/products/mirror/glass/tiba-left',
            },
          ],
        },
        {
          id: 10104,
          faName: 'راهنما',
          en_name: 'mirror-indicator',
          icon: '/icons/mirror-indicator.svg',
          path: '/products/mirror/indicator',
          groupName: 'راهنمای آینه خودرو',

          children: [
            {
              id: 1010401,
              name: 'راهنمای آینه سمت چپ دنا',
              en_name: 'dena-left-mirror-indicator',
              path: '/products/mirror/indicator/dena-left',
            },
            {
              id: 1010402,
              name: 'راهنمای آینه سمت راست دنا',
              en_name: 'dena-right-mirror-indicator',
              path: '/products/mirror/indicator/dena-right',
            },
          ],
        },
        {
          id: 10105,
          faName: 'فریم',
          en_name: 'mirror-frame',
          path: '/products/mirror/frame',
          groupName: 'فریم آینه خودرو',

          children: [
            {
              id: 1010501,
              name: 'فریم آینه سمت چپ پراید',
              en_name: 'pride-left-mirror-frame',
              path: '/products/mirror/frame/pride-left',
            },
            {
              id: 1010502,
              name: 'فریم آینه سمت راست پراید',
              en_name: 'pride-right-mirror-frame',
              path: '/products/mirror/frame/pride-right',
            },
          ],
        },
        {
          id: 10106,
          faName: 'قاب',
          en_name: 'mirror-cover',
          path: '/products/mirror/cover',
          groupName: 'قاب آینه خودرو',

          children: [
            {
              id: 1010601,
              name: 'قاب آینه سمت چپ پراید',
              en_name: 'pride-left-mirror-cover',
              path: '/products/mirror/cover/pride-left',
            },
            {
              id: 1010602,
              name: 'قاب آینه سمت راست پراید',
              en_name: 'pride-right-mirror-cover',
              path: '/products/mirror/cover/pride-right',
            },
          ],
        },
        {
          id: 10107,
          faName: 'اسکلت آینه',
          en_name: 'mirror-skeleton',
          path: '/products/mirror/skeleton',
          groupName: 'اسکلت آینه خودرو',

          children: [
            {
              id: 1010701,
              name: 'اسکلت آینه سمت چپ پراید',
              en_name: 'pride-left-mirror-skeleton',
              path: '/products/mirror/skeleton/pride-left',
            },
            {
              id: 1010702,
              name: 'اسکلت آینه سمت راست پراید',
              en_name: 'pride-right-mirror-skeleton',
              path: '/products/mirror/skeleton/pride-right',
            },
          ],
        },
      ],
    },

    {
      id: 102,
      faName: 'لوازم جانبی',
      en_name: 'accessories',
      icon: '/icons/accessories.svg',
      path: '/products/accessories',
      groupName: 'لوازم جانبی خودرو',

      children: [
        {
          id: 10201,
          faName: 'کلید تنظیم آینه',
          en_name: 'mirror-control-switch',
          path: '/products/accessories/mirror-control-switch',

          children: [
            {
              id: 1020101,
              name: 'کلید تنظیم آینه پراید',
              en_name: 'pride-mirror-control-switch',
              path: '/products/accessories/mirror-control-switch/pride',
            },
            {
              id: 1020102,
              name: 'کلید تنظیم آینه پژو ۲۰۶',
              en_name: 'peugeot-206-mirror-control-switch',
              path: '/products/accessories/mirror-control-switch/peugeot-206',
            },
          ],
        },
        {
          id: 10202,
          faName: 'موتور آینه',
          en_name: 'mirror-motor',
          path: '/products/accessories/mirror-motor',

          children: [
            {
              id: 1020201,
              name: 'موتور آینه پراید',
              en_name: 'pride-mirror-motor',
              path: '/products/accessories/mirror-motor/pride',
            },
            {
              id: 1020202,
              name: 'موتور آینه پژو ۲۰۶',
              en_name: 'peugeot-206-mirror-motor',
              path: '/products/accessories/mirror-motor/peugeot-206',
            },
          ],
        },
      ],
    },

    {
      id: 103,
      faName: 'نورجات',
      en_name: 'lighting',
      icon: '/icons/lighting.svg',
      path: '/products/lighting',
      groupName: 'نورجات خودرو',

      children: [
        {
          id: 10301,
          faName: 'چراغ جلو',
          en_name: 'headlight',
          path: '/products/lighting/headlight',

          children: [
            {
              id: 1030101,
              name: 'چراغ جلو سمت چپ پراید',
              en_name: 'pride-left-headlight',
              path: '/products/lighting/headlight/pride-left',
            },
            {
              id: 1030102,
              name: 'چراغ جلو سمت راست پراید',
              en_name: 'pride-right-headlight',
              path: '/products/lighting/headlight/pride-right',
            },
          ],
        },
        {
          id: 10302,
          faName: 'چراغ عقب',
          en_name: 'tail-light',
          path: '/products/lighting/tail-light',

          children: [
            {
              id: 1030201,
              name: 'چراغ عقب سمت چپ پژو ۴۰۵',
              en_name: 'peugeot-405-left-tail-light',
              path: '/products/lighting/tail-light/peugeot-405-left',
            },
            {
              id: 1030202,
              name: 'چراغ عقب سمت راست پژو ۴۰۵',
              en_name: 'peugeot-405-right-tail-light',
              path: '/products/lighting/tail-light/peugeot-405-right',
            },
          ],
        },
      ],
    },

    {
      id: 104,
      faName: 'بالابر',
      en_name: 'window-lifter',
      icon: '/icons/window-lifter.svg',
      path: '/products/window-lifter',
      groupName: 'شیشه بالابر خودرو',

      children: [
        {
          id: 10401,
          faName: 'دستگاه شیشه بالابر',
          en_name: 'window-regulator',
          path: '/products/window-lifter/window-regulator',

          children: [
            {
              id: 1040101,
              name: 'شیشه بالابر جلو چپ پراید',
              en_name: 'pride-front-left-window-regulator',
              path: '/products/window-lifter/window-regulator/pride-front-left',
            },
            {
              id: 1040102,
              name: 'شیشه بالابر جلو راست پراید',
              en_name: 'pride-front-right-window-regulator',
              path: '/products/window-lifter/window-regulator/pride-front-right',
            },
          ],
        },
        {
          id: 10402,
          faName: 'موتور شیشه بالابر',
          en_name: 'window-lifter-motor',
          path: '/products/window-lifter/motor',

          children: [
            {
              id: 1040201,
              name: 'موتور شیشه بالابر پراید',
              en_name: 'pride-window-lifter-motor',
              path: '/products/window-lifter/motor/pride',
            },
          ],
        },
      ],
    },

    {
      id: 105,
      faName: 'شیشه آینه',
      en_name: 'mirror-glasses',
      icon: '/icons/mirror-glass.svg',
      path: '/products/mirror-glasses',
      groupName: 'شیشه‌های آینه',

      children: [
        {
          id: 10501,
          faName: 'شیشه آینه ساده',
          en_name: 'standard-mirror-glass',
          path: '/products/mirror-glasses/standard',

          children: [
            {
              id: 1050101,
              name: 'شیشه آینه ساده سمت چپ پراید',
              en_name: 'pride-standard-left-mirror-glass',
              path: '/products/mirror-glasses/standard/pride-left',
            },
            {
              id: 1050102,
              name: 'شیشه آینه ساده سمت راست پراید',
              en_name: 'pride-standard-right-mirror-glass',
              path: '/products/mirror-glasses/standard/pride-right',
            },
          ],
        },
        {
          id: 10502,
          faName: 'شیشه آینه گرمکن‌دار',
          en_name: 'heated-mirror-glass',
          path: '/products/mirror-glasses/heated',

          children: [
            {
              id: 1050201,
              name: 'شیشه آینه گرمکن‌دار سمت چپ دنا',
              en_name: 'dena-heated-left-mirror-glass',
              path: '/products/mirror-glasses/heated/dena-left',
            },
          ],
        },
      ],
    },

    {
      id: 106,
      faName: 'برندها',
      en_name: 'brands',
      icon: '/icons/brands.svg',
      path: '/brands',
      groupName: 'برندهای محصولات',

      children: [
        {
          id: 10601,
          faName: 'کروز',
          en_name: 'crouse',
          path: '/brands/crouse',
          children: [
            {
              id: 1060101,
              name: 'محصولات برند کروز',
              en_name: 'crouse-products',
              path: '/brands/crouse/products',
            },
          ],
        },
        {
          id: 10602,
          faName: 'عظام',
          en_name: 'ezam',
          path: '/brands/ezam',
          children: [
            {
              id: 1060201,
              name: 'محصولات برند عظام',
              en_name: 'ezam-products',
              path: '/brands/ezam/products',
            },
          ],
        },
      ],
    },
  ],
};
export const HOME_NAVBAR_MOCK: NavBarItem = {
  id: 2,
  faName: 'خانه',
  en_name: 'home',
  type: null,
  path: '/',
  children: [],
};
export const CAR_NAVBAR_MOCK: NavBarItem = {
  id: 3,
  faName: 'لیست خودروها',
  en_name: 'cars',
  type: 'car',
  path: '/cars',
  groupName: 'cars',
  children: [
    {
      id: 301,
      faName: 'ایران خودرو',
      en_name: 'iran-khodro',
      icon: '/images/icons/car.svg',
      path: '/cars/iran-khodro',
      groupName: 'car-manufacturers',
      children: [
        {
          id: 30101,
          faName: 'سمند',
          en_name: 'samand',
          icon: '/images/cars/samand.webp',
          path: '/cars/iran-khodro/samand',
          groupName: 'iran-khodro',
        },
        {
          id: 30102,
          faName: 'دنا',
          en_name: 'dena',
          icon: '/images/cars/dena.webp',
          path: '/cars/iran-khodro/dena',
          groupName: 'iran-khodro',
        },
        {
          id: 30103,
          faName: 'رانا',
          en_name: 'runna',
          icon: '/images/cars/runna.webp',
          path: '/cars/iran-khodro/runna',
          groupName: 'iran-khodro',
        },
        {
          id: 30104,
          faName: '۲۰۷',
          en_name: 'peugeot-207',
          icon: '/images/cars/peugeot-207.webp',
          path: '/cars/iran-khodro/peugeot-207',
          groupName: 'iran-khodro',
        },
        {
          id: 30105,
          faName: 'ال ۹۰',
          en_name: 'renault-l90',
          icon: '/images/cars/renault-l90.webp',
          path: '/cars/iran-khodro/renault-l90',
          groupName: 'iran-khodro',
        },
        {
          id: 30106,
          faName: '۲۰۶',
          en_name: 'peugeot-206',
          icon: '/images/cars/peugeot-206.webp',
          path: '/cars/iran-khodro/peugeot-206',
          groupName: 'iran-khodro',
        },
        {
          id: 30107,
          faName: 'تارا اتومات',
          en_name: 'tara-automatic',
          icon: '/images/cars/tara-automatic.webp',
          path: '/cars/iran-khodro/tara-automatic',
          groupName: 'iran-khodro',
        },
        {
          id: 30108,
          faName: 'پژو ۴۰۵',
          en_name: 'peugeot-405',
          icon: '/images/cars/peugeot-405.webp',
          path: '/cars/iran-khodro/peugeot-405',
          groupName: 'iran-khodro',
        },
        {
          id: 30109,
          faName: 'پارس',
          en_name: 'peugeot-pars',
          icon: '/images/cars/peugeot-pars.webp',
          path: '/cars/iran-khodro/peugeot-pars',
          groupName: 'iran-khodro',
        },
      ],
    },
    {
      id: 302,
      faName: 'سایپا',
      en_name: 'saipa',
      icon: '/images/icons/car.svg',
      path: '/cars/saipa',
      groupName: 'car-manufacturers',
      children: [],
    },
    {
      id: 303,
      faName: 'کرمان موتور',
      en_name: 'kerman-motor',
      icon: '/images/icons/car.svg',
      path: '/cars/kerman-motor',
      groupName: 'car-manufacturers',
      children: [],
    },
    {
      id: 304,
      faName: 'خودروهای ژاپنی و فرانسوی',
      en_name: 'japanese-and-french-cars',
      icon: '/images/icons/car.svg',
      path: '/cars/japanese-and-french',
      groupName: 'foreign-cars',
      children: [],
    },
    {
      id: 305,
      faName: 'خودروی چینی',
      en_name: 'chinese-cars',
      icon: '/images/icons/car.svg',
      path: '/cars/chinese',
      groupName: 'foreign-cars',
      children: [],
    },
  ],
};

export const ALL_NAVBAR_ITEMS: NavBarItem[] = [
  HOME_NAVBAR_MOCK,
  PRODUCT_NAVBAR_MOCK,
  CAR_NAVBAR_MOCK,
];
