export type DiscountProduct = {
  imagePath: string;
  href: string;
  title: string;
};

export type DiscountData = {
  title: string;
  description: string;
  discount: string;
  iconPath: string;
  products: DiscountProduct[];
};

export const DISCOUNT_DATA: DiscountData = {
  title: 'اولین‌های در ایران‌زمین',
  description: 'تخفیف ویژه برای شما',
  discount: 'تا 20 درصد تخفیف',
  iconPath: 'https://files.wtrue.ir/images/products/865785_57031_AMGPlus.jpg',

  products: [
    {
      imagePath: 'https://files.wtrue.ir/images/products/21261_76582_AMGPlus.jpg',
      href: '/product/mechanical-lock-pride',
      title: 'قفل مکانیکی درب پراید',
    },
    {
      imagePath: 'https://files.wtrue.ir/images/products/610476_51377_AMGPlus.jpg',
      href: '/product/pride-side-mirror',
      title: 'آینه بغل کامل پراید',
    },
    {
      imagePath: 'https://files.wtrue.ir/images/products/206946_26135_AMGPlus.jpg',
      href: '/product/peugeot-headlight',
      title: 'چراغ جلو پژو ۴۰۵',
    },
    {
      imagePath: 'https://files.wtrue.ir/images/products/610476_51377_AMGPlus.jpg',
      href: '/product/samand-tail-light',
      title: 'چراغ عقب سمند',
    },
    {
      imagePath: 'https://files.wtrue.ir/images/products/206946_26135_AMGPlus.jpg',
      href: '/product/tiba-bumper',
      title: 'سپر جلو تیبا',
    },{
      imagePath: 'https://files.wtrue.ir/images/products/206946_26135_AMGPlus.jpg',
      href: '/product/tiba-bumper',
      title: 'بالابر شیشه جلو تیبا',
    },
  ],
};