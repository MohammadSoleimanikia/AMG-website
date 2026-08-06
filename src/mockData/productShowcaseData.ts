export type ShowcaseProduct = {
  id: number;
  title: string;
  brand: string;
  price: string;
  imagePath: string;
  href: string;
};

export type ProductShowcaseData = {
  title: string;
  subtitle: string;
  description: string;
  products: ShowcaseProduct[];
};

export const PRODUCT_SHOWCASE_DATA: ProductShowcaseData = {
  title: 'انواع خودروهای لوکس و اقتصادی لوازم',
  subtitle: 'از برندهای معتبر جهانی',
  description:
    'تجربه رانندگی با بهترین برند های خودروسازی جهان از جمله بی ام و، مرسدس بنز ، آئودی ، تویوتا و هیوندای، خودروی ایده آل خود را با بهترین قیمت و شرایط ویژه تهیه کنید',
  products: [
    {
      id: 1,
      title: 'شیشه بالابر پراید جلو سمت چپ',
      brand: 'برند ابری',
      price: '2,650,000',
      imagePath: 'https://files.wtrue.ir/images/products/206946_26135_AMGPlus.jpg',
      href: '/product/pride-front-lift-glass',
    },
    {
      id: 2,
      title: 'شیشه بالابر جلو پراید سمت راست',
      brand: 'برند ابری',
      price: '2,650,000',
      imagePath: 'https://files.wtrue.ir/images/products/782426_83046_AMGPlus.jpg',
      href: '/product/Pride-lift-glass',
    },
    {
      id: 3,
      title: 'شیشه بالابر دستی عقب پراید چپ',
      brand: 'برند ابری',
      price: '858,000',
      imagePath: 'https://files.wtrue.ir/images/products/610476_51377_AMGPlus.jpg',
      href: '/product/Rear-manual-window-lifter,-Pride,-left',
    },
    {
      id: 4,
      title: 'شیشه بالابر دستی عقب پراید راست',
      brand: 'برند ابری',
      price: '858,000',
      imagePath: 'https://files.wtrue.ir/images/products/758720_24180_AMGPlus.jpg',
      href: '/product/rear-right-hand-window-lifter-pride',
    },
    {
      id: 5,
      title: 'شیشه بالابر جلو 405 سمت چپ',
      brand: 'برند ابری',
      price: '2,820,000',
      imagePath: 'https://files.wtrue.ir/images/products/21261_76582_AMGPlus.jpg',
      href: '/product/front-window-lifter-405-left-side',
    },
  ],
};
